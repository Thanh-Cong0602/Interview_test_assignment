import { RECIPIENTS_DATA } from '@/data/recipients'
import { RecipientType } from '@/types/receipientType'
import Image from 'next/image'
import React from 'react'

interface RecipientsDropdownProps {
  setInfortRecipient: React.Dispatch<React.SetStateAction<RecipientType | undefined>>
  setOpenRecipient: React.Dispatch<React.SetStateAction<boolean>>
}
function RecipientsDropdown({
  setInfortRecipient,
  setOpenRecipient
}: Readonly<RecipientsDropdownProps>) {
  const handleInforRecipient = (recipient: RecipientType) => {
    setInfortRecipient(recipient)
    setOpenRecipient(false)
  }
  return (
    <div className='no-scrollbar max-h-[240px] w-[320px] overflow-auto rounded-[36px] border border-solid border-white-500 bg-white-100 px-3 py-4'>
      {RECIPIENTS_DATA.map((item, index: number) => (
        <div
          key={index}
          className='flex h-[52px] w-full gap-4 rounded-lg px-3 py-2 hover:bg-white-300'
          onClick={() => handleInforRecipient(item)}
        >
          <Image src={item.imageurl} alt={item.fullName} className=' h-8 w-8 rounded-full' />
          <div>
            <p className=' text-sm font-light leading-[18px] text-purple-400'>{item.fullName}</p>
            <p className='pt-1 text-xs font-light leading-[14px] text-gray-100'>{item.nickName}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecipientsDropdown
