import React, { useState } from 'react'

function Tablerow({ emp }) {

    const [input, setInput] = useState(false)

    const [name, setName] = useState(emp.firstname)
    const [lastName, setLastName] = useState(emp.lastname)
    const [doj, setDoj] = useState(emp.doj)

    return (
        <>
            {input ? <tr className='hover:bg-blue-600 duration-150 hover:text-white '>
                <td className='border-2 border-black p-3  '>{emp.id}</td>
                <td className='border-2 border-black p-3 text-black '><input className='p-3' value={name} onChange={(e) => setName(e.target.value)} /></td>
                <td className='border-2 border-black p-3 text-black'><input className='p-3' value={lastName} onChange={(e) => setLastName(e.target.value)} /></td>
                <td className='border-2 border-black p-3 text-black'><input className='p-3' value={doj} onChange={(e) => setDoj(e.target.value)} /></td>
                <td className='border-2 border-black p-3 text-black' onClick={() => setInput(!input)}>Done</td>
            </tr> :

                <tr className='hover:bg-blue-600 duration-150 hover:text-white '>
                    <td className='border-2 border-black p-3  '>{emp.id}</td>
                    <td className='border-2 border-black p-3  '>{name}</td>
                    <td className='border-2 border-black p-3 '>{lastName}</td>
                    <td className='border-2 border-black p-3 '>{doj}</td>
                    <td className='border-2 border-black p-3 ' onClick={() => setInput(!input)}>Edit</td>
                </tr>

            }

        </>
    )
}

export default Tablerow