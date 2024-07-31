import React, { useState, useEffect } from 'react'
import Tablerow from '../components/Tablerow'
function Home() {

    const [data, setData] = useState([])

    useEffect(() => {
        const EmployeeData = [
            {
                id: 1,
                firstname: 'Sunny',
                lastname: 'Singh',
                doj: '18-07-2024'
            },
            {
                id: 2,
                firstname: 'Jai',
                lastname: 'Singh',
                doj: '18-07-2024'
            },
            {
                id: 3,
                firstname: 'Max',
                lastname: 'Payne',
                doj: '18-07-2024'
            }]
        setData(EmployeeData)
    }, [])

    return (
        <>
            <div className="w-9/12 mx-auto">
                <table className='table border-collapse border-2 border-current w-full mt-10'>
                    <thead className="bg-gray-600 border-black">
                        <tr className='text-white'>
                            <th className='border-2 border-black p-3'>S.No.</th>
                            <th className='border-2 border-black p-3'>First Name</th>
                            <th className='border-2 border-black p-3'>Last Name</th>
                            <th className='border-2 border-black p-3'>Date of Joining</th>
                            <th className='border-2 border-black p-3'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((itm, idx) => (<Tablerow emp={itm} key={idx} />))}
                    </tbody>
                    <tfoot>
                        <button onClick={() => setData(EmployeeData.push({
                            id: EmployeeData.length() + 1,
                            firstname: '',
                            lastname: '',
                            doj: Date()
                        }))}>Add Row</button>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Home