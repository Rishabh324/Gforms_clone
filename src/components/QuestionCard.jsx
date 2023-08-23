import React, { useState } from 'react'

const QuestionCard = ({ type, title }) => {
    const [ids, setIds] = useState([1, 2, 3]);

    return (
        <div className='qcard mt-3 p-2'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            {
                ids.map(item => {
                    return (
                        <div className='d-flex align-items-center pb-3' key={item} style={{height: "40px"}}>
                            <input className='ms-3 mt-0' type={type} value={`option ${item}`} style={{ width: "20px", height: "20px", color: "grey" }}></input>
                            <p className='mt-3 ms-3' style={{ fontSize: "0.9rem", fontWeight: "500" }}>Option {item}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QuestionCard