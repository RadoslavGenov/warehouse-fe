import {
  Button,
  Typography,
  Checkbox,
  Input,
  InputNumber,
  Modal,
  Space
} from 'antd'
import { ChangeEvent, useState } from 'react'
import { INITIAL_VALUES } from './CreateProductModal.constants'
import styles from './CreateProductModal.module.css'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CreateProductInput, useCreateProductMutation } from '../../gql/graphql'
import { CreateProductModalProps } from './CreateProductModal.types'
import { ApolloError } from '@apollo/client'
const { Text } = Typography

const CreateProductModal: React.FC<CreateProductModalProps> = ({
  open,
  onToggle
}) => {
  const [values, setValues] = useState<CreateProductInput>(INITIAL_VALUES)
  const [error, setError] = useState('')
  const [createProduct] = useCreateProductMutation()

  const handleChangeValue =
    (value: string) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [value]: e.currentTarget.value })
    }

  const handleChangeHazardous = (e: CheckboxChangeEvent) => {
    setValues({ ...values, isHazardous: e.target.checked })
  }

  const handleChangeAmount = (value: number | null) => {
    if (!value) return

    setValues({ ...values, amount: value })
  }

  const handleCreate = () => {
    createProduct({
      variables: { product: values },
      refetchQueries: ['products'],
      onError: (error: ApolloError) => {
        setError(error.message)
      }
    })
  }

  return (
    <Modal
      open={open}
      title="Create Product"
      onOk={handleCreate}
      onCancel={() => onToggle(false)}
      footer={[
        <Space key="product" className={styles.center}>
          <Button key="submit" type="primary" onClick={handleCreate}>
            Create Product
          </Button>
        </Space>
      ]}
    >
      <Space direction="vertical" className={styles.center}>
        <Input
          onChange={handleChangeValue('name')}
          placeholder="Name"
          value={values['name']}
        />
        <Input
          onChange={handleChangeValue('description')}
          placeholder="Description"
          value={values['description']}
        />
        <InputNumber
          onChange={handleChangeAmount}
          placeholder="Amount"
          value={values['amount']}
        />
        {error && <Text type="danger">{error}</Text>}
        <Space>
          <Text>Hazardous</Text>
          <Checkbox onChange={handleChangeHazardous} />
        </Space>
      </Space>
    </Modal>
  )
}

export default CreateProductModal
