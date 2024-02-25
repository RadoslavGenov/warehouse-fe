import Sider from 'antd/es/layout/Sider'
import styles from './Sidebar.module.css'
import { ShoppingOutlined, HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { createElement } from 'react'
import { SidebarProps } from './Sidebar.types'
import { Screen } from '../../constants'

const navItems = [
  {
    key: Screen.ProductPage,
    icon: createElement(HomeOutlined),
    label: 'Products'
  },
  {
    key: Screen.WarehousePage,
    icon: createElement(ShoppingOutlined),
    label: 'Warehouse'
  }
]

const Sidebar: React.FC<SidebarProps> = ({ onChangeMenu }) => {
  const handleSelectScreen = (e: any) => {
    onChangeMenu(e.key)
  }

  return (
    <Sider theme="light" className={styles.sidebar}>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={[Screen.ProductPage]}
        items={navItems}
        onClick={handleSelectScreen}
      />
    </Sider>
  )
}

export default Sidebar
