import { Space } from 'antd'
import CreateProduct from '../../sections/CreateProduct/CreateProduct'
import ProductList from '../../sections/ProductList/ProductList'

const ProductPage: React.FC = () => {
  return (
    <Space direction="vertical">
      <CreateProduct />
      <ProductList />
    </Space>
  )
}

export default ProductPage
