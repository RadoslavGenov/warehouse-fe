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
import { INITIAL_VALUES } from './CreateProduct.constants'
import styles from './CreateProduct.module.css'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { CreateProductInput, useCreateProductMutation } from '../../gql/graphql'
const { Text } = Typography

const CreateProduct: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<CreateProductInput>(INITIAL_VALUES)
  const [createProduct] = useCreateProductMutation()

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }

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
      refetchQueries: ['products']
    })
  }

  return (
    <div className={styles.container}>
      <div>
        <Button onClick={handleOpenModal}>Create Product</Button>
      </div>
      <Modal
        open={open}
        title="Create Product"
        onOk={handleCreate}
        onCancel={handleCancel}
        footer={[
          <div key="product" className={styles.footer}>
            <Button key="submit" type="primary" onClick={handleCreate}>
              Create Product
            </Button>
          </div>
        ]}
      >
        <Space className={styles.space} direction="vertical" align="center">
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
          <div className={styles.hazardous}>
            <Text>Hazardous</Text>
            <Checkbox onChange={handleChangeHazardous} />
          </div>
        </Space>
      </Modal>
    </div>
  )
}

export default CreateProduct
