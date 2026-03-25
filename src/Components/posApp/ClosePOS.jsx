import { ChevronDown, LogOut, Search } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClosePOS = () => {

    const navigate = useNavigate()

  return (
    <div className='flex items-center gap-6'>
                <div className='flex items-center w-full max-w-210 justify-between p-2 rounded-lg shadow-lg bg-white'>
                    <p></p>
                    <div className='flex gap-3 items-center'>
                        <div className='relative'>
                            <select className='w-65 appearance-none text-gray-500 border border-gray-400 rounded-lg py-2.5 px-2 outline-none'>
                                <option value="retail">Retail</option>
                                <option value="food-panda">Food Panda</option>
                                <option value="panda-go">Panda Go</option>
                            </select>
                            <ChevronDown  className='w-4 h-4 absolute text-gray-400 top-3 right-2'/>
                            <p className='absolute -top-1.5 text-gray-400 bg-white text-[10px] left-1.5 '>Order Type</p>
                        </div>
                        <div className='relative'>
                            <input className='w-75 py-2.5 px-2 border border-gray-400 rounded-lg outline-none ' type="text" placeholder='Find your Item' /> <Search className='absolute text-gray-400 w-4 h-4 top-3.5 right-3' />
                        </div>
                    </div>
                </div>
                <div className='w-110 flex items-center gap-20'>
                    <div className='flex font-medium items-center gap-2 '>
                        <p>POS: </p>
                        <div className='px-2 bg-white w-36 h-10 py-2 border border-black outline-none rounded-md' ></div>
                    </div>
                    <button onClick={()=>navigate('/workplace/lucrum-pos')} className='flex w-36 items-center px-2 py-2 border rounded-lg border-red-400 gap-2 bg-red-300'>
                        <LogOut className='w-5 h-5' />
                        Close POS
                    </button>
                </div>
            </div>
  )
}

export default ClosePOS