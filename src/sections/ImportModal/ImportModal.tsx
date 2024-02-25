import { InputNumber, Typography, Modal, Space, DatePicker } from 'antd'
import { useState } from 'react'
import { useRecordImportMutation } from '../../gql/graphql'
import { Button } from 'antd/es/radio'
import { ImportModalProps } from './ImportModal.types'
import { ApolloError } from '@apollo/client'
const { Text } = Typography

const ImportModal: React.FC<ImportModalProps> = ({ id, open, setOpen }) => {
  const [recordImport] = useRecordImportMutation()
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState(new Date())
  const [error, setError] = useState('')

  const handleRecord = () => {
    recordImport({
      variables: {
        id,
        amount,
        date
      },
      refetchQueries: ['history'],
      onError: (error: ApolloError) => {
        setError(error.message)
      }
    })
  }

  const handleSetAmount = (amount: number | null) => {
    if (!amount) return
    setAmount(amount)
  }

  const handleSetDate = (date: Date) => {
    setDate(date)
  }

  const handleClose = () => {
    setOpen(false)
    setError('')
  }

  return (
    <Modal
      open={open}
      title="Create Import"
      onCancel={handleClose}
      footer={[
        <div key="product">
          <Button key="submit" type="primary" onClick={handleRecord}>
            Create Import
          </Button>
        </div>
      ]}
    >
      <Space direction="vertical" align="center">
        <DatePicker onChange={handleSetDate} placeholder="Date" />
        <InputNumber
          onChange={handleSetAmount}
          placeholder="Amount"
          value={amount}
        />
        {error && <Text type="danger">{error}</Text>}
      </Space>
    </Modal>
  )
}

export default ImportModal
