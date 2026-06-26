// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer, Header } from "../component/block"

const ServiceLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

    </div>
  )
}

export default ServiceLayout