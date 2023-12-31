'use client'

import { FullMessageType } from '@/app/types'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import { format } from 'date-fns'
import Avatar from '@/app/components/Avatar'
import Image from 'next/image'

interface MessageBoxProps {
  data: FullMessageType
  isLast?: boolean
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const session = useSession()

  //compare email of current user with email of the sender of the message
  const isOwn = session.data?.user?.email === data?.sender?.email

  //Filtering through data.seen and remove email of the sender from the seen list as they created it. Them map over the users and produce a list of users that have seen the message
  const seenList = (data.seen || [])
    .filter(user => user.email !== data?.sender?.email)
    .map(user => user.name)
    .join(', ')

  //Create variables for conditional dynamic css classes
  const container = clsx('flex gap-3 p-4', isOwn && 'justify-end')
  const avatar = clsx(isOwn && 'order-2')
  const body = clsx('flex flex-col gap-2', isOwn && 'items-end')
  const message = clsx(
    'text-sm w-fit overflow-hidden',
    isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100',
    data.image ? 'rounded-md p-0' : 'rounded-full py-2 px-3'
  )

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className='flex items-center gap-1'>
          <div className='text-sm text-gray-500'>{data.sender.name}</div>
          <div className='text-xs text-gray-400'>
            {format(new Date(data.createdAt), 'p')}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt='Image'
              height='288'
              width='288'
              //onClick={() => setImageModalOpen(true)}
              src={data.image}
              className='
                translate 
                cursor-pointer 
                object-cover 
                transition 
                hover:scale-110
              '
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>

        {isLast && isOwn && seenList.length > 0 && (
          <div
            className='
            text-xs 
            font-light 
            text-gray-500
            '
          >
            {`Seen by ${seenList}`}
          </div>
        )}
      </div>
    </div>
  )
}

export default MessageBox
