import React from 'react'
import Header from '../component/Header/Header.jsx'
import Footer from '../component/Footer/Footer.jsx'
import Routers  from '../routes/Routers.jsx';

function Layout() {
  return (
    <>
    <Header/>
    <main>
      <Routers/>
    </main>
    <Footer />
    </>
  )
}

export default Layout