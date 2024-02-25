import { Screen } from '../../constants'

export type SidebarProps = Readonly<{
  onChangeMenu: (activeSreen: Screen) => void
}>
