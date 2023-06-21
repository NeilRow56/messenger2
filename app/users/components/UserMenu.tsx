'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { useCallback, useState } from 'react'
import MenuItem from './MenuItem'

const UserMenu = () => {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = useCallback(() => {
    setIsOpen(value => !value)
  }, [])

  return (
    <div className='relative'>
      <div className=' mx-autogap-3 flex flex-row items-center '>
        <div
          onClick={toggleOpen}
          className='
        flex
        cursor-pointer
        flex-row
        items-center 
        gap-3 
        rounded-full 
        border-[1px] 
        border-neutral-200 
        p-4 
        transition 
        hover:shadow-md 
        md:px-2 
        md:py-1
        '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>User</div>
        </div>
      </div>
      {isOpen && (
        <div
          className='
          fixed
          top-24
          overflow-hidden 
          rounded-xl 
          bg-white 
          text-sm 
          shadow-md 
          md:w-[200px]
        '
        >
          <div className='flex w-[500px] cursor-pointer flex-col'>
            <>
              <hr />

              <MenuItem label='Logout' onClick={() => signOut()} />
            </>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserMenu
