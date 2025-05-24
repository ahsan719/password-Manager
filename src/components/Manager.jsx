import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSquarePlus, faCopy, faPencil , faTrash} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

function Manager() {
    

    const [passData, setpassData] = useState({})
    const [passArray, setpassArray] = useState([])
    const [isEye, setIsEye] = useState(true);
    const passref = useRef()

    

    useEffect(() => {
        let passwords = JSON.parse(localStorage.getItem("passwords"));
        if (passwords) {
            setpassArray(passwords)
        }

    }, [])



    const handleClick = () => {
        setIsEye(!isEye)
        if (passref.current.type === 'password') {
            passref.current.type = 'text';
        } else {
            passref.current.type = 'password';
        }
        
    }

    const addData = () => {
        if (passData.url && passData.username && passData.password) {

            const newpassArray = [...passArray, passData ]
            setpassArray(newpassArray)
            localStorage.setItem("passwords", JSON.stringify((newpassArray)))
            setpassData({ url: '', username: '', password: '' })
        }
    }
    const handleChange = (e) => {
        setpassData(prevpassData => ({ ...prevpassData, [e.target.name]: e.target.value }))
    }
     const deletePassword= (index)=>{
        let c= confirm("do you really want to delete password?")
        if(c){

            let updatedArray = passArray.filter((_ , i)=> i!=index) // can also use  
            setpassArray(updatedArray)
            localStorage.setItem("passwords", JSON.stringify(updatedArray))
        
        }
 }


    const edit = (index)=>{
         let updatedArray= passArray.filter((_, i)=> i===index) // returns only one element
         console.log(updatedArray)
         setpassData(updatedArray[0]) // to set form > considers as object
         let filteredArray =passArray.filter((_ , i)=> i!=index)
         setpassArray(filteredArray)
    }

    const copyPassword =(text) =>{
        navigator.clipboard.writeText(text)
        alert("text copied")
        toast('Text!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
       
    }

    return (
        <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition= "Bounce"
/>
{/* Same as */}
<ToastContainer />

            <div className="  mycontainer max-w-5xl ">

                <h1 className='text-4xl text-center font-bold'>
                    <span className="text-green-500">&lt;</span>
                    Pass
                    <span className="text-green-500">OP/&gt; </span>
                </h1>

                <p className='text-green-600 text-lg text-center p-2'>Your Own password Manager</p>

                <div className=" flex flex-col p-4 gap-4 items-center">
                    <input className="rounded-full border border-green-500 w-full p-4 py-1 " value={passData.url} type="text" name="url" placeholder='Enter Website URL' onChange={(e) => handleChange(e)} />
                    <div className="flex flex-col md:flex-row w-full  gap-4" >

                        <input className="rounded-full border border-green-500 w-full p-4 py-1 " value={passData.username} type="text" name="username" placeholder='Enter UserName' onChange={(e) => handleChange(e)} />
                        <div className="relative flex ">
                            <input className="rounded-full border border-green-500 w-full p-4 py-1 " value={passData.password} ref={passref} type="password" name="password" placeholder='Enter Password' onChange={(e) => handleChange(e)} />
                            <FontAwesomeIcon onClick={()=>handleClick()} className=' w-4 absolute top-2 right-3 cursor-pointer' icon={isEye ? faEye : faEyeSlash} />
                        </div>

                    </div>
                    <button onClick={() => addData()} className='bg-green-400 w-fit rounded-full px-4 py-2 hover:bg-green-300 mt-4 flex justify-center items-center gap-2'>
                        <FontAwesomeIcon className='text-xl' icon={faSquarePlus} /> Save </button>


                </div>
                <h2 className='text-xl text-center py-4 font-bold'>Your Passwords</h2>
                {passArray.length === 0 && <div>Add Passwords to show</div>}

                {passArray.length > 0 && <table className="table-auto w-full  rounded-lg overflow-hidden">
                    <thead className='bg-green-700 text-white '>
                        <tr>
                            <th className='py-1'>Website</th>
                            <th>UserName</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='bg-green-100'>
                        {passArray.map((item, index) => (

                            <tr key={index}>

                                <td className='text-center w-32 py-2'>{item.url}<FontAwesomeIcon onClick={() => copyPassword(item.url)} className='px-2 w-3 cursor-pointer' icon={faCopy} /></td>
                                <td className='text-center w-32'>{item.username}<FontAwesomeIcon onClick={() => copyPassword(item.username)} className='px-2 w-3 cursor-pointer' icon={faCopy} /></td>
                                <td className='text-center w-32'>{item.password}<FontAwesomeIcon onClick={() => copyPassword(item.password)} className='px-2 w-3 cursor-pointer' icon={faCopy} /></td>
                                <td className='text-center w-32'><FontAwesomeIcon  onClick={()=> edit(index)} className='px-1 w-3 cursor-pointer' icon={faPencil} /> <FontAwesomeIcon onClick={()=> deletePassword(index)}  className='px-1 w-3 cursor-pointer hover:text-red-500' icon={faTrash} /> </td>
      
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
