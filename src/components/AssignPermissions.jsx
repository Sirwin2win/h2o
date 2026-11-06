import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchPermissions } from '../features/auth/authSlice'


export const AssignPermissions = () => {
    const {PermStatus,permissions} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    
      useEffect(()=>{
        if(PermStatus==='idle'){
          dispatch(fetchPermissions())
        }
      },[PermStatus, dispatch])
      if(PermStatus === "loading"){
        return <div>Loading...</div>
      }
      if(PermStatus === 'faile'){
        return <div>Error : {error}</div>
      }
      console.log(permissions)
    
  return (
    <div>
        <h5>Assign Permissions To Roles</h5>
    </div>
  )
}
