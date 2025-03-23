import React from 'react'
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import MyAccount from '../components/MyAccount';

const ManageAccountPage = () => {
  return (
      <div>
          <Navbar2 />
          <MyAccount/>
          <Footer/>
    </div>
  )
}

export default ManageAccountPage;