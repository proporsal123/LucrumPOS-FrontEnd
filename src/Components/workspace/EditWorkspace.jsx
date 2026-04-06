import { Edit, MenuIcon } from 'lucide-react'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const EditWorkspace = ({title}) => {

    const {showWorkspace, setShowWorkspace} = useContext(AppContext)

  return (
    <div className='px-10 flex items-center justify-between w-full mt-8'>
            <div className='flex gap-2 mb-3 items-center'>
                <MenuIcon className='w-5 h-5 cursor-pointer' />
                <p className='font-bold text-xl'> {title} </p>
            </div>
            <div className='text-sm flex items-center gap-2'>
                <button onClick={()=>setShowWorkspace(true)} className='bg-gray-100 hover:bg-gray-200 py-1 px-2 rounded-md cursor-pointer text-gray-500'>Create Workplace</button>
                <button className='flex bg-gray-100 py-1 px-2 rounded-md cursor-pointer hover:bg-gray-200 text-gray-500 items-center gap-2'>
                    <Edit className='w-5 h-5' /> Edit
                </button>
            </div>
        </div>
  )
}

export default EditWorkspace