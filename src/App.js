import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Layouts/Footer'
import Navbar from './Layouts/Navbar'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import 'react-toastify/dist/ReactToastify.css';
import {   ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()


const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Navbar></Navbar>
    <Outlet />
    <Footer></Footer>
    
   <ToastContainer/>
    </QueryClientProvider>
    </>
  )
}

export default App