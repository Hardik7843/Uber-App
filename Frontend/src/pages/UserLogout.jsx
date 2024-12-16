import React from 'react'
import {AXIOS} from '../lib/axios.js'
import { useNavigate } from 'react-router-dom'

export const UserLogout = () => {

    const token = localStorage.getItem('token')
    
    const navigate = useNavigate()

    AXIOS.get(`/users/logout`, {
        headers: {
            Authorization: `bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/login')
        }
    })

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout