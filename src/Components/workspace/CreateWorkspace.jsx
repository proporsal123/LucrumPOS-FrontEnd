import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Folder, XIcon } from 'lucide-react'

const CreateWorkspace = () => {

  const { showWorkspace, setShowWorkspace } = useContext(AppContext)

  return (
    <div className={`z-50 h-full w-full bg-[#00000090] absolute ${showWorkspace ? 'block' : 'hidden'}`}>
      <div className='bg-white rounded-xl max-w-160 mt-10 mx-auto'>
        <div className='border-b border-gray-200 px-5 flex items-center justify-between py-5'>
          <p className='text-lg font-medium'>New Workspace</p>
          <XIcon onClick={() => setShowWorkspace(false)} className='w-5 cursor-pointer h-5' />
        </div>        
        <div className='border-b text-gray-400 border-gray-200 px-5 py-5'>
          <div className='flex mb-3 items-center gap-6'>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="">Title</label>
              <input type="text" className='outline-gray-300 rounded-lg bg-gray-100 px-3 py-1'/>
            </div>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor="">Icon</label>
              <div className='relative'>
                <Folder className='w-5 top-1.5 left-2 h-5 absolute' />
                <input type="text" className='outline-gray-300 w-full placeholder-gray-400 rounded-lg bg-gray-100 px-9 py-1' placeholder='Choose an icon' />
              </div>
            </div>
          </div>
          <div>
            <div className='flex items-center gap-6'>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="">Parent</label>
                <select className='outline-gray-300 appearance-none rounded-lg bg-gray-100 px-2 py-1'>
                  <option value=""></option>
                </select>
              </div>
              <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="">Indicator color</label>
                <select className='outline-gray-300 appearance-none rounded-lg bg-gray-100 px-2 py-1'>
                  <option value=""></option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className='py-4 px-4 flex justify-end'>
          <button className='bg-black text-white py-1 px-3 rounded-md'>Create</button>
        </div>
      </div>
    </div>
  )
}

export default CreateWorkspace