import React from 'react'
import {ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"

function Notification() {
  return (
    <div>
        <ToastContainer position='absolute' style={{color: 'black'}} />
    </div>
  )
}

export default Notification