import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const RouteGuard = ({children}) => {

    const location = useLocation();
    const navigate = useNavigate();
    if(location?.state != null){
        return children
    }else{
        return <Navigate to='/' />
    }

  return (
    <div>RouteGuard</div>
  )
}

export default RouteGuard