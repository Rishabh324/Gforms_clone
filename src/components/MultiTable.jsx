import React, { useState } from 'react'

const MultiTable = ({ title, type }) => {
    return (
        <div className='qcard mt-3 p-2'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            <table className='text-center mx-3 mb-3' style={{ width: `90%` }}>
                <tr style={{ height: `40px` }}>
                    <td style={{ width: `25%` }}></td>
                    <td>Column 1</td>
                    <td>Column 2</td>
                    <td>Column 3</td>
                </tr>
                <tr style={{ height: `40px`, backgroundColor: "#F0EBF8" }}>
                    <td className='text-start p-3' style={{ width: `25%` }}>Row 1</td>
                    <td><input className='mt-0' type={type} value={`option 1`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 2`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 3`} style={{ width: "20px", height: "20px" }}></input></td>
                </tr>
                <tr style={{ height: `40px`, backgroundColor: "#F0EBF8" }}>
                    <td className='text-start p-3' style={{ width: `25%` }}>Row 2</td>
                    <td><input className='mt-0' type={type} value={`option 1`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 2`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 3`} style={{ width: "20px", height: "20px" }}></input></td>
                </tr>
                <tr style={{ height: `40px`, backgroundColor: "#F0EBF8" }}>
                    <td className='text-start p-3' style={{ width: `25%` }}>Row 3</td>
                    <td><input className='mt-0' type={type} value={`option 1`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 2`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type={type} value={`option 3`} style={{ width: "20px", height: "20px" }}></input></td>
                </tr>
            </table>
        </div>
    )
}

export default MultiTable