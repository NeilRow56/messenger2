'use client'

import { FullMessageType } from '@/app/types'

interface MessageBoxProps {
  data: FullMessageType
  isLast?: boolean
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  return <div>Message Box</div>
}

export default MessageBox