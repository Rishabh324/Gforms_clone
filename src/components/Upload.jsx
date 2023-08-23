import React from 'react'

const Upload = ({ title }) => {
    return (
        <div className='qcard mt-3 p-2'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            <div className='d-flex align-items-center pb-3'>
                <div className="avat-div mx-3 px-3" style={{border: "1px solid", borderRadius: "5px"}}>
                    <label htmlFor='file' id='avt-test' style={{color: "#1A7CEC", height:`40px`}} className="avatar-txt d-flex align-items-center "><i className="fa-solid fa-upload me-2"></i><p className='mt-3'>Add File</p></label>
                    <input type="file" id="file" multiple='single' name="file" accept="image/*" />
                </div>
            </div>
        </div>
    )
}

export default Upload