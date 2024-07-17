import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Manager() {

    const [passData, setpassData] = useState({})
    const [passArray, setpassArray] = useState([])
    const [isEye, setIsEye] = useState(true);
    const passref=useRef()

    useEffect(() => {
        let passwords = JSON.parse(localStorage.getItem("passwords"));
        if (passwords) {
            setpassArray(passwords)
        }

    }, [])



    const handleClick = () => {
        setIsEye(!isEye)
        passref.current.type = isEye? 'password' : 'text'
    }

    const addData = () => {
        if (passData.url && passData.username && passData.password){
            
           const newpassArray = [...passArray, passData]
            setpassArray(newpassArray)
            localStorage.setItem("passwords", JSON.stringify((newpassArray)))
            setpassData({url: '' , username : '', password: ''})
        }
    }
    const handleChange = (e) => {
        setpassData(prevpassData => ({ ...prevpassData, [e.target.name]: e.target.value }))
    }

    return (
        <>
            <div className="  mx-auto max-w-5xl mycontainer ">

                <h1 className='text-4xl text-center font-bold'>
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt; </span>
                </h1>

                <p className='text-green-600 text-lg text-center p-2'>Your Own password Manager</p>

                <div className=" flex flex-col p-4 gap-3 items-center">
                    <input className="rounded-full border border-green-500 w-full p-4 py-1 " value={passData.url} type="text" name="url" placeholder='Enter Website URL' onChange={(e) => handleChange(e)} />
                    <div className="flex w-full gap-7" >

                        <input className="rounded-full border border-green-500 w-full p-4 py-1 " value={passData.username}type="text" name="username" placeholder='Enter UserName' onChange={(e) => handleChange(e)} />
                        <div className="relative flex ">
                            <input className="rounded-full border border-green-500 w-full p-4 py-1 "value={passData.password} ref={passref} type="password" name="password" placeholder='Enter Password' onChange={(e) => handleChange(e)} />
                            <FontAwesomeIcon onClick={handleClick} className=' w-4 absolute top-2 right-3 cursor-pointer' icon={isEye ? faEye : faEyeSlash} />
                        </div>

                    </div>
                    <button onClick={() => addData()} className='bg-green-400  rounded-full px-4 py-2 w-fit hover:bg-green-300 mt-4 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon className='text-xl' icon={faSquarePlus} /> Add Password</button>


                </div>
                <h2 className='text-xl text-center py-4 font-bold'>Your Passwords</h2>
          {passArray.length === 0 && <div>Add Passwords to show</div> }
        
          {passArray.length >0 &&<table className="table-auto w-full rounded-lg overflow-hidden">
  <thead className='bg-green-700 text-white '>
    <tr>
      <th className='py-1'>Website</th>
      <th>UserName</th>
      <th>Password</th>
    </tr>
  </thead>
  <tbody className='bg-green-100'>
     {passArray.map((item , index)=>(

    <tr key={index}>
        
      <td className='text-center w-32 py-2'>{item.url}</td>
      <td className='text-center w-32'>{item.username}</td>
      <td className='text-center w-32'>{item.password}</td>
    </tr>

     ))}
   
  </tbody>
</table>
 }
            </div>





        </>
    )
}

export default Manager