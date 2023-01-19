import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import SingleRoom from "../Pages/Room/SingleRoom"
import React from "react"
import LoadingAnimation from "../Components/Common/LoadingAnimation"
import PaymentInfo from "../Components/PaymentInfo/PaymentInfo"
import OrderRoom from "../Components/Dashboard/User/OrderRoom"
import PrivateRoute from "../Components/PrivateRouter/PrivateRoute"

const HomeLazyLoading = React.lazy(()=> import ("../Pages/Home"))
const RoomLazyLoading = React.lazy(()=> import ("../Pages/Room"))
const Dashboard = React.lazy(()=> import ("../Pages/Dashboard"))
const Signin = React.lazy(()=> import ("../Pages/Signin"))
const Signup = React.lazy(()=> import ("../Pages/Signup"))





 const Route = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <React.Suspense fallback={<LoadingAnimation/>}><HomeLazyLoading></HomeLazyLoading></React.Suspense> 
            },
            {
                path : "/room",
                element : <React.Suspense fallback={<LoadingAnimation/>}><RoomLazyLoading></RoomLazyLoading></React.Suspense> 
            },
            {
                path : "/room/:id",
                element : <React.Suspense fallback={<LoadingAnimation/>}><SingleRoom></SingleRoom></React.Suspense> 
            },
            {
                path : "/userDashboard/order/:id",
                element : <React.Suspense fallback={<LoadingAnimation/>}>
                    <PrivateRoute>
                    <OrderRoom></OrderRoom>
                    </PrivateRoute>
                    </React.Suspense> 
            },
            {
                path : "/dashboard",
                element :<React.Suspense fallback={<LoadingAnimation/>}>
                    <PrivateRoute>
                    <Dashboard></Dashboard>
                    </PrivateRoute>
                    </React.Suspense> 
            },
            {
                path : "/payment",
                element :<React.Suspense fallback={<LoadingAnimation/>}>
                    <PrivateRoute>
                    <PaymentInfo></PaymentInfo>
                    </PrivateRoute>
                    </React.Suspense> 
            },
            {
                path : "/signin",
                element : <React.Suspense fallback={<LoadingAnimation/>}><Signin></Signin></React.Suspense> 
            },
            {
                path : "/signup",
                element :<React.Suspense fallback={<LoadingAnimation/>}><Signup></Signup></React.Suspense> 
            },
            {
                path : "*",
                element : <React.Suspense fallback={<LoadingAnimation/>} > <HomeLazyLoading></HomeLazyLoading></React.Suspense> 
            }
        ]
    }
])

export default Route