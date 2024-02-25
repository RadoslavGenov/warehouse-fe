import { Button, Space } from 'antd'
import { useState } from 'react'
import CreateProductModal from '../../modals/CreateProductModal/CreateProductModal'

const CreateProduct: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleToggle = (toggle: boolean) => {
    setOpen(toggle)
  }

  return (
    <Space direction="vertical">
      <Button onClick={() => handleToggle(true)}>Create Product</Button>
      <CreateProductModal open={open} onToggle={handleToggle} />
    </Space>
  )
}

export default CreateProduct
