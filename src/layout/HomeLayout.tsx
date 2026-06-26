// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../component/block"

const HomeLayout = () => {
  return (
    <div>
        <Header/>

        <Outlet/>

        {/* <Footer/> */}
    </div>
  )
}

export default HomeLayout