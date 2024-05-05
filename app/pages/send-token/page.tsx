'use client'
import { RECIPIENTS_DATA } from '@/data/recipients'
import { TOKENS_DATA } from '@/data/tokens'
import { RecipientType } from '@//types/receipientType'
import { TokenType } from '@/types/tokenType'
import { faCopy } from '@fortawesome/free-regular-svg-icons/faCopy'
import { faChevronDown, faClose } from '@fortawesome/free-solid-svg-icons'
import { faQrcode } from '@fortawesome/free-solid-svg-icons/faQrcode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import RecipientsDropdown from './components/recipients'
import TokensDropdown from './components/tokens'
import './style.css'

function SendToken() {
  const tokenRef = useRef<HTMLDivElement | null>(null)
  const recipientRef = useRef<HTMLDivElement | null>(null)
  const [openRecipient, setOpenRecipient] = useState<boolean>(false)
  const [openToken, setOpenToken] = useState<boolean>(false)
  const [infortRecipient, setInfortRecipient] = useState<RecipientType>()
  const [inforToken, setInforToken] = useState<TokenType>()

  const handleCloseDropdown = () => {
    if (openRecipient || openToken) {
      setOpenRecipient(false)
      setOpenToken(false)
    }
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleCloseDropdown()
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openRecipient, openToken])

  const handleOpenRecipient = () => {
    if (openToken) {
      setOpenToken(false)
    } else {
      setOpenRecipient(!openRecipient)
    }
  }

  const handleSendToken = () => {
    setInforToken(undefined)
    setInfortRecipient(undefined)
  }

  return (
    <div className='flex h-fit items-center justify-center sm:h-screen'>
      <div className='flex flex-col gap-6 rounded-[36px] bg-white-100 px-2 py-6 text-black sm:w-[780px] sm:px-6'>
        <div className='flex items-center justify-between'>
          <p className=' text-xl font-semibold leading-[22px] text-purple-400 '>Send to</p>
          <FontAwesomeIcon icon={faClose} className='h-6 w-6 cursor-pointer' />
        </div>
        <div
          className={`flex flex-col gap-8 sm:flex-row ${
            openRecipient || openToken ? 'cursor-default' : 'cursor-pointer'
          } `}
        >
          {/* Left Design */}
          <div className='flex w-full flex-col gap-6 sm:max-w-[380px]'>
            <div>
              <div className='flex items-end gap-2'>
                <div className='flex-1'>
                  <p className='text-xs font-light leading-[14px] text-gray-100'>To</p>
                  <div className='relative'>
                    <div
                      ref={recipientRef}
                      className={`mt-2 flex h-[52px] w-full items-center justify-between rounded-2xl bg-white-200 p-4 sm:w-[320px] ${
                        !openToken ? 'cursor-pointer' : 'cursor-default'
                      }`}
                      onClick={handleOpenRecipient}
                    >
                      <p className='text-sm font-light text-gray-100'>
                        {infortRecipient?.fullName ?? 'Paste, scan or select recipient'}
                      </p>
                      <FontAwesomeIcon icon={faChevronDown} className='h-6 w-6 text-purple-400' />
                    </div>
                    {openRecipient && (
                      <div className=' absolute z-20 mt-2'>
                        <RecipientsDropdown
                          setInfortRecipient={setInfortRecipient}
                          setOpenRecipient={setOpenRecipient}
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-white-200'>
                  <FontAwesomeIcon icon={faQrcode} className='h-6 w-6 text-purple-400' />
                </div>
              </div>
              <div className='pt-2'>
                <div className='ssm:flex-row flex flex-col gap-2'>
                  {RECIPIENTS_DATA.slice(0, 3).map((recipient, index: number) => (
                    <div
                      key={index}
                      className='flex h-8 w-fit items-center gap-2 rounded-[32px] bg-white-300 py-1 pl-1 pr-2'
                    >
                      <Image
                        src={recipient.imageurl}
                        alt={recipient.fullName}
                        className='h-6 w-6 rounded-full'
                      />
                      <p className='w-fit text-[10px] font-normal leading-3 text-purple-400'>
                        {recipient.fullName}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className='text-xs font-light leading-[14px] text-gray-100'>Token & Amount</p>
              <div className='my-2 flex items-center gap-2'>
                <div className='relative'>
                  <div
                    ref={tokenRef}
                    className='flex h-[52px] w-[142px] cursor-pointer items-center justify-center gap-4 rounded-2xl bg-purple-400 px-4 py-2'
                    onClick={() => setOpenToken(!openToken)}
                  >
                    <div className='flex w-[70px] items-center gap-2'>
                      <Image
                        src={inforToken?.image ?? TOKENS_DATA[0].image}
                        alt={`${inforToken?.name ?? TOKENS_DATA[0].name} Logo`}
                      />
                      <p className='text-[14px] font-semibold leading-4 text-white-100'>
                        {`${inforToken?.name ?? TOKENS_DATA[0].name}`}
                      </p>
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className='group-hover:text-black-900 h-6 w-6 text-white-100'
                    />
                  </div>
                  {openToken && (
                    <div className='absolute mt-2'>
                      <TokensDropdown setInforToken={setInforToken} setOpenToken={setOpenToken} />
                    </div>
                  )}
                </div>
                <div className='flex h-[52px] w-full items-center gap-4 rounded-2xl bg-white-200 p-4 text-gray-100'>
                  <p className=' flex-1 text-right text-sm font-light'>
                    {inforToken ? '5.0' : '0.0'}
                  </p>
                  <p className='text-[10px] font-normal leading-3'>
                    {inforToken ? '$10,000.0' : '$0.0'}
                  </p>
                </div>
              </div>
              <p className='text-right text-[10px] font-normal leading-3 text-gray-100'>
                Balance:{' '}
                <span className='font-semibold text-blue-200 '>
                  {`${inforToken?.balance ?? TOKENS_DATA[0].balance} ${
                    inforToken?.name ?? TOKENS_DATA[0].name
                  }`}
                </span>
              </p>
            </div>
            <div>
              <button
                disabled={!inforToken || !infortRecipient}
                className={`h-[52px] w-full rounded-[36px] text-lg font-medium leading-6 text-white-100 ${
                  inforToken && infortRecipient ? 'bg-purple-400' : 'bg-gray-100'
                }`}
                onClick={handleSendToken}
              >
                Send
              </button>
            </div>
          </div>
          {/* Right Design */}
          <div className='h-[314px] flex-1 rounded-[24px] border border-solid border-white-500 p-6'>
            <div className='flex flex-col gap-4'>
              <p className='text-base font-semibold leading-[18px] text-purple-400'>Summary</p>
              <div>
                <div className='flex justify-between text-sm font-light'>
                  <p className='text-gray-100'>From</p>
                  <p className='text-purple-400'>John Smith</p>
                </div>
                <p className='mt-2 h-[9px] text-right text-[10px] font-normal leading-3 text-gray-100'>
                  @john.smith1
                </p>
              </div>
              <div>
                <div className='flex justify-between text-sm font-light'>
                  <p className='text-gray-100'>To</p>
                  <p className='text-purple-400'>{infortRecipient?.fullName ?? '-'}</p>
                </div>
                <div className='flex items-center justify-end gap-2 pt-2 text-gray-100'>
                  <p className='text-right text-[10px] font-normal leading-3'>
                    {infortRecipient?.nickName ?? '@-'}
                  </p>
                  <FontAwesomeIcon
                    icon={faCopy}
                    className={`h-4 w-4 ${infortRecipient?.fullName ? 'text-purple-400' : ''}`}
                  />
                </div>
              </div>
              <div className='flex justify-between text-sm font-light'>
                <p className='text-gray-100'>Network Fee</p>
                <p className='text-purple-400'>{inforToken ? '$0.3' : '$0.0'}</p>
              </div>
              <div className='flex justify-between text-sm font-light'>
                <p className='text-gray-100'>Amount</p>
                <p className='text-purple-400'>
                  {inforToken ? '5.0' : '0.0'} {inforToken?.name ?? TOKENS_DATA[0].name}
                </p>
              </div>
              <div className=' border border-dashed border-white-500'></div>
              <div>
                <div className='flex justify-between'>
                  <p className='text-sm font-light text-gray-100'>Total</p>
                  <div className='flex items-center gap-2'>
                    <Image
                      src={inforToken?.image ?? TOKENS_DATA[0].image}
                      alt={(inforToken?.name ?? TOKENS_DATA[0].name) + ' Logo'}
                      className='h-4 w-4'
                    />

                    <p className='text-sm font-semibold leading-4 text-purple-400'>
                      {inforToken ? '5.0' : '0.0'}
                    </p>
                  </div>
                </div>
                <p className='pt-2 text-right text-[10px] font-normal leading-3 text-gray-100'>
                  {inforToken ? '$10,000.3 USD' : '$0.0 USD'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendToken
