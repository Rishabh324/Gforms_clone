import React from 'react'

const LinearScale = ({ title }) => {
    return (
        <div className='qcard mt-3 p-2 pb-4'>
            <p className='mb-0 p-3'>{title} <span style={{ color: "red" }}>*</span></p>
            <table className='text-center ms-3'>
                <tr style={{width: `60px`}}>
                    <td style={{width: `60px`}}></td>
                    <td style={{width: `60px`}}>1</td>
                    <td style={{width: `60px`}}>2</td>
                    <td style={{width: `60px`}}>3</td>
                    <td style={{width: `60px`}}>4</td>
                    <td style={{width: `60px`}}>5</td>
                    <td style={{width: `60px`}}></td>
                </tr>
                <tr>
                    <td>Worst</td>
                    <td><input className='mt-0' type="radio" value={`option 1`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type="radio" value={`option 2`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type="radio" value={`option 3`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type="radio" value={`option 4`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td><input className='mt-0' type="radio" value={`option 5`} style={{ width: "20px", height: "20px" }}></input></td>
                    <td>Best</td>
                </tr>
            </table>
        </div>
    )
}

export default LinearScale