import { useEffect } from 'react'
import { useProductsLazyQuery } from '../../gql/graphql'
import { Table } from 'antd'
import { COLUMNS } from './ProductList.constants'

const ProductList: React.FC = () => {
  const [getProducts, { data }] = useProductsLazyQuery()

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <Table columns={COLUMNS} dataSource={data?.products || []} rowKey="id" />
  )
}

export default ProductList
