import React from 'react'

const Footer = () => {
    return (
        <div className='footer mt-2' style={{ width: "57%" }}>
            <div className='submission'>
                <button type='submit' style={{ backgroundColor: "#673AB7", color: "white", borderRadius: "5px", height: `40px`, width: `80px`, border: "1px solid #673AB7" }}>Submit</button>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                    <div className="progress-bar bg-success" style={{ width: "100%", borderRadius: "20px" }}></div><p className='ms-2' style={{ width: "40%" }}><b>Page 1 of 1</b></p>
                </div>
                <button className='me-2' type='reset' style={{ backgroundColor: "#F0EBF8", color: "#673AB7", borderRadius: "5px", height: `40px`, width: `80px`, border: "0px solid" }}><b>Clear form</b></button>
            </div>
            <p className='mt-2' style={{fontSize: "0.8rem"}}>Never submit passwords through Google Forms.</p>
            <p className='text-center' style={{fontSize: "0.7rem"}}>This content is neither created nor endorsed by Google. Report Abuse - Terms of Service - Privacy Policy</p>
            <p className='text-center' style={{fontSize: "1.4rem"}}>Google Forms</p>
        </div>
    )
}

export default Footer