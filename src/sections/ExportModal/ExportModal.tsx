import { InputNumber, Typography, Modal, Space } from 'antd'
import { useState } from 'react'
import { useRecordExportMutation } from '../../gql/graphql'
import { Button } from 'antd/es/radio'
import { ApolloError } from '@apollo/client'
import { ExportModalProps } from './ExportModal.types'
const { Text } = Typography

const ExportModal: React.FC<ExportModalProps> = ({ id, open, setOpen }) => {
  const [recordExport] = useRecordExportMutation()
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState('')
  debugger
  const handleRecord = () => {
    recordExport({
      variables: {
        id,
        amount
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

  const handleClose = () => {
    setOpen(false)
    setError('')
  }

  return (
    <Modal
      open={open}
      title="Create Export"
      onCancel={handleClose}
      footer={[
        <div key="product">
          <Button key="submit" type="primary" onClick={handleRecord}>
            Create Export
          </Button>
        </div>
      ]}
    >
      <Space direction="vertical" align="center">
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

export default ExportModal
