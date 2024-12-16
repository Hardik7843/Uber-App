import { useNavigate } from 'react-router-dom'
import { AXIOS } from '../lib/axios.js'

export const CaptainLogout = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    AXIOS.get(`/captains/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/captain-login')
        }
    })

    return (
        <div>CaptainLogout</div>
    )
}

export default CaptainLogout