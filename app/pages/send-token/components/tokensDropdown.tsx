import { TOKENS_DATA } from '@//data/tokens'
import { TokenType } from '@/types/tokenType'
import Image from 'next/image'
import React from 'react'

interface TokensDropdownProps {
  setInforToken: React.Dispatch<React.SetStateAction<TokenType | undefined>>
  setOpenToken: React.Dispatch<React.SetStateAction<boolean>>
}

function TokensDropdown({ setInforToken, setOpenToken }: Readonly<TokensDropdownProps>) {
  const handleInforToken = (recipient: TokenType) => {
    setInforToken(recipient)
    setOpenToken(false)
  }
  return (
    <div className='h-fit w-[216px] rounded-[36px] border border-solid border-white-500 bg-white-100 px-3 py-4'>
      {TOKENS_DATA.map((item, index: number) => (
        <div
          key={index}
          className='flex h-10 items-center gap-4 rounded-lg hover:bg-white-300'
          onClick={() => handleInforToken(item)}
        >
          <Image src={item.image} alt={item.name} className='h-6 w-6' />
          <p className='flex-1 text-sm font-light leading-[18px] text-purple-400'>{item.name}</p>
          <p className='text-sm font-light leading-[18px] text-gray-100'>{item.balance}</p>
        </div>
      ))}
    </div>
  )
}

export default TokensDropdown
