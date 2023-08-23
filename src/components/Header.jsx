import React from 'react'

const Header = () => {
    return (
        <div className='header mt-3'>
            <p style={{ fontSize: "2.1rem" }} className='ms-3 mt-1'>Assignment Task</p>
            <hr />
            <div className='d-flex justify-content-between ms-3 me-4'>
                <p>sinharishabh402@gmail.com <a href='/'>Switch accounts</a></p>
                <i className="fa-solid fa-cloud"></i>
            </div>
            <p className='mx-3'>
                The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Your email address is not part of your response.
            </p>
            <hr />
            <p className='ms-3' style={{ color: "red" }}>* Indicates Required Question</p>
        </div>
    )
}

export default Header