import React, { createElement, useState } from 'react'
import ProductPage from './pages/ProductPage/ProductPage'
import MainLayout from './layouts/MainLayout'
import { Screen } from './constants'
import WarehousePage from './pages/WarehousePage/WarehousePage'

const pages = {
  [Screen.ProductPage]: createElement(ProductPage),
  [Screen.WarehousePage]: createElement(WarehousePage)
}

function App() {
  const [activeTab, setActiveTab] = useState(Screen.ProductPage)

  const handleChangeMenu = (activeScreen: Screen) => {
    setActiveTab(activeScreen)
  }

  return (
    <MainLayout onChangeMenu={handleChangeMenu}>{pages[activeTab]}</MainLayout>
  )
}

export default App
