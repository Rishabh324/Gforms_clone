import React from 'react'

const Dropdown = ({ title, }) => {
    return (
        <div className='qcard mt-3 p-2'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            <div className='d-flex align-items-center pb-3'>
                <select className='ms-3 mt-0 p-2' style={{ border: "1px solid #D3D3D3", height: `45px`, width: `25%`, borderRadius: "3px" }}>
                    <option>Choose</option>
                    <hr></hr>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
        </div>
    )
}

export default Dropdown