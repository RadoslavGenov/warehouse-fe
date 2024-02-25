import { useEffect, useState } from 'react'
import { useWarehousesLazyQuery } from '../../gql/graphql'
import { Button, Space, Table } from 'antd'
import ImportModal from '../ImportModal/ImportModal'
import ExportModal from '../ExportModal/ExportModal'
import { Typography } from 'antd'
import AddProductModal from '../AddProductModal/AddProductModal'

const { Text } = Typography

const WarehouseList: React.FC = () => {
  const [selected, setSelected] = useState('')
  const [productId, setProductId] = useState('')
  const [getWarehouses, { data }] = useWarehousesLazyQuery()
  const [openImportModal, setOpenImportModal] = useState(false)
  const [openExporttModal, setOpenExportModal] = useState(false)
  const [openAddProducttModal, setOpenAddProductModal] = useState(false)

  useEffect(() => {
    getWarehouses()
  }, [getWarehouses])

  const handleSelectWarehouse = (id: string) => {
    setSelected(id)
  }

  const handleSetProductId = (id: string) => {
    setProductId(id)
  }

  const handleOpenImportModal = (open: boolean) => {
    setOpenImportModal(open)
  }

  const handleOpenExportModal = (open: boolean) => {
    setOpenExportModal(open)
  }

  const handleOpenAddProductModal = (open: boolean) => {
    setOpenAddProductModal(open)
  }

  const handleAddProduct = () => {
    setOpenAddProductModal(true)
  }

  const selectedWarehouse = data?.warehouses.find(
    (warehouse) => warehouse.id === selected
  )

  const productColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Actions',
      dataIndex: 'id',
      key: 'id',
      render: (id: string) => {
        return (
          <Space>
            <Button
              onClick={() => {
                handleSetProductId(id)
                handleOpenImportModal(true)
              }}
            >
              Import
            </Button>
            <Button
              onClick={() => {
                handleSetProductId(id)
                handleOpenExportModal(true)
              }}
            >
              Export
            </Button>
          </Space>
        )
      }
    }
  ]

  return (
    <>
      <Space direction="vertical">
        <Space>
          {!selectedWarehouse?.id && (
            <Text>Please Select Warehouse to add products to </Text>
          )}
        </Space>

        <Space>
          <Text>Warehouses:</Text>
          {data?.warehouses.map((warehouse) => (
            <Space key={warehouse.id}>
              <Button
                type={
                  selectedWarehouse?.id === warehouse.id ? 'primary' : 'default'
                }
                onClick={() => handleSelectWarehouse(warehouse.id)}
              >
                {warehouse.id}
              </Button>
            </Space>
          ))}
        </Space>

        {selectedWarehouse?.id && (
          <h2>{`Warehouse ${selectedWarehouse.id} `}</h2>
        )}

        <Space>
          {selectedWarehouse?.id && (
            <Button onClick={handleAddProduct}>
              Add Products to Warehouse: {selectedWarehouse.id}
            </Button>
          )}
        </Space>

        {selectedWarehouse?.id && (
          <Text>
            {`Available space ${selectedWarehouse.remainingSpace} in warehouse: 
            ${selectedWarehouse.id}`}
          </Text>
        )}

        {selectedWarehouse?.id && (
          <Text>
            Total space {selectedWarehouse.size} in warehouse:{' '}
            {selectedWarehouse.id}
          </Text>
        )}

        {selectedWarehouse?.id && (
          <Text>{`Products in warehouse: ${selectedWarehouse.id}`}</Text>
        )}

        <Table
          dataSource={selectedWarehouse?.products || []}
          rowKey="id"
          columns={productColumns}
        />
      </Space>

      <ImportModal
        open={openImportModal}
        setOpen={handleOpenImportModal}
        id={productId}
      />

      <ExportModal
        open={openExporttModal}
        setOpen={handleOpenExportModal}
        id={productId}
      />

      <AddProductModal
        setOpen={handleOpenAddProductModal}
        warehouseId={selectedWarehouse?.id!}
        open={openAddProducttModal}
      />
    </>
  )
}

export default WarehouseList
