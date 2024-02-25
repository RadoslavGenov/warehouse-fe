import { Typography, Modal, Space, Table } from 'antd'
import { useAddProductMutation, useProductsQuery } from '../../gql/graphql'
import { Button } from 'antd/es/radio'
import { ApolloError } from '@apollo/client'
import { useState } from 'react'
import { AddProductModalProps } from './AddProductModal.types'

const { Text } = Typography

const AddProductModal: React.FC<AddProductModalProps> = ({
  warehouseId,
  open,
  setOpen
}) => {
  const { data } = useProductsQuery()
  const [error, setError] = useState('')
  const [addProduct] = useAddProductMutation()

  const handleAddProduct = (productId: string) => {
    addProduct({
      variables: { warehouseId, productId },
      refetchQueries: ['products', 'warehouses'],
      onError: (error: ApolloError) => {
        setError(error.message)
      }
    })
  }

  const handleClose = () => {
    setOpen(false)
    setError('')
  }

  const availableProducts = data?.products.filter(
    (product) => !product.warehouse
  )

  const COLUMNS = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Add Product',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => (
        <Button onClick={() => handleAddProduct(id)}>Add</Button>
      )
    }
  ]

  return (
    <Modal open={open} onCancel={handleClose} title="Unassigned Products">
      <Space direction="vertical" align="center">
        <Text>
          Unassigned Products which will be added to warehouse: {warehouseId}{' '}
        </Text>
        <Table
          columns={COLUMNS}
          dataSource={availableProducts || []}
          rowKey="id"
        />
        {error && <Text type="danger">{error}</Text>}
      </Space>
    </Modal>
  )
}

export default AddProductModal
