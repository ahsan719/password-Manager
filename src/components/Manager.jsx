import React, {useState , useRef}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSquarePlus } from '@fortawesome/free-solid-svg-icons';

function Manager() {
 
    const [passData, setpassData] = useState({})
    const [isEye, setIsEye] = useState(true);
    

  const handleClick = () => {
      setIsEye(!isEye)  
     }

    const addData =() => { 
        console.log(passData)
    }
    const handleChange= (e) => { 
        setpassData({...passData , [e.target.name]: e.target.value})
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
            <input  className="rounded-full border border-green-500 w-full p-4 py-1 " type="text"name="url" placeholder='Enter Website URL' onChange={(e)=> handleChange(e)} /> 
            <div className="flex w-full gap-7" >

            <input  className="rounded-full border border-green-500 w-full p-4 py-1 " type="text" name="username" placeholder='Enter UserName'onChange={(e)=> handleChange(e)} /> 
            <div className="relative flex ">
             <input  className="rounded-full border border-green-500 w-full p-4 py-1 " type="text" name="password" placeholder='Enter Password'onChange={(e)=> handleChange(e)}/> 
             <FontAwesomeIcon  onClick={handleClick} className=' w-4 absolute top-2 right-3 cursor-pointer' icon={isEye ?faEye :faEyeSlash} />
            </div>

            </div>
        <button onClick={()=> addData()} className='bg-green-500  rounded-full px-4 py-1 w-fit hover:bg-green-400 mt-4 flex justify-center items-center gap-2'> 
        <FontAwesomeIcon className='text-xl' icon={faSquarePlus} /> Add Password</button>
            
        </div>
        </div>
      
    
   
     
    </>
  )
}

export default Manager