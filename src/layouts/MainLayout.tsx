import { Layout } from 'antd'
import styles from './MainLayout.module.css'
import Sidebar from '../components/Sidebar/Sidebar'
import { Screen } from '../constants'
const { Content } = Layout

type MainLayoutProps = Readonly<{
  children?: React.ReactNode
  onChangeMenu: (activeSreen: Screen) => void
}>

const MainLayout: React.FC<MainLayoutProps> = ({ children, onChangeMenu }) => {
  return (
    <Layout hasSider className={styles.layout}>
      <Sidebar onChangeMenu={onChangeMenu} />
      <Content className={styles.content}>{children}</Content>
    </Layout>
  )
}

export default MainLayout
