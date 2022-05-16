import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetail = () => {
const [data,setData] = useState([])
 const params = useParams()
    useEffect( ()=> {
        axios.get(`http://localhost:8080/app/user/getUserDetail/${params.id}`)
        .then(res => setData(res.data) )
    })

  return (
    <>
    <p>{params}</p>
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.address}</h1>
    </>
  )
}

export default UserDetail