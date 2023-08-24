import React,{useCallback,useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
import meeting from '../../../assets/meeting.jpg'
const Session = () => {

   const [value,SetValue]=useState();
   const navigate=useNavigate();
   const handleJoinRoom=useCallback(()=>{
     navigate(`/room/${value}`); 
   },[navigate,value]);
  return (
   <div className="mt-20 flex flex-col items-center space-y-8 align-middle m-100 min-h-screen w-full bg-bgcolor2 flex flex-col items-center space-y-8">
    <div>
      <img src={meeting} alt="" />
    </div>
    <form className="w-1/2   py-8 align-middle border-8 ">
    <br />

    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <h1 className="text-2xl block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
          Session_Key : 
        </h1>
      </div>
      <div className="md:w-2/3">
        <input placeholder='Key is Your Username' onChange={(e)=> SetValue(e.target.value)} className="text-xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-2/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
      </div>
    </div>
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3"></div>
      <label className="md:w-2/3 block text-gray-500 font-bold">
        <input className="mr-2 leading-tight w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="checkbox"/>
        <span className="text-lg" require="true">
          Agree for take participate in meeting!
        </span>
      </label>
    </div>
    <div className="md:flex md:items-center">
      <div className="md:w-1/3"></div>
      <div className="md:w-2/3">
        <button onClick={handleJoinRoom} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
          Join Session
        </button>
      </div>
    </div>
  </form>
  </div>    
  )
}
{/* <input  value={value} onChange={(e)=> SetValue(e.target.value)} type="text" placeholder='User_Name' /> <br />
<br />
<button onClick={handleJoinRoom}> Join</button> */}

export default Session;