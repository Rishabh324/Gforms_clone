import React from 'react'

const TextCard = ({ type, title, placeholder, width }) => {
    return (
        <div className='qcard mt-3 p-2'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            <div className='d-flex align-items-center pb-3'>
                <input className='ms-3 mt-0' type={type} style={{ border: "0px solid", borderBottom: "1px solid grey", width: `${width}%` }} placeholder={placeholder}></input>
            </div>
        </div>
    )
}

export default TextCard