import { FC, useState } from 'react';
import { Icon } from '@mui/material';
import KeypadJSON from '../assets/Keypad.json';
import { ColoredKey, KeypadProps } from '../interfaces';

const Keypad: FC<KeypadProps> = ({ usedKeys, handleClickKeypad }) => {
  const [letters] = useState(KeypadJSON);

  if(!letters) return <></>;

  const onClickLetter = (letter: string) => handleClickKeypad(letter);

  return (
    <>
      <div className='keypad flex flex-wrap max-w-full md:max-w-[580px] m-[20px] mx-auto bg-[#DADCE04D] dark:bg-[#DADCE008] rounded-md py-4'>
        <div className='w-full flex ml-9'>
          {letters.slice(0,10).map((l) => {
              const color: string | undefined = usedKeys[l.key.toUpperCase() as keyof ColoredKey];
              return <div key={l.key} className={`key min-w-[25px] md:min-w-[40px] x: h-[50px] inline-block m-[5px] dark:hover:bg-[rgba(255,255,255,0.2)] dark:bg-[#565F7E] dark:text-white hover:bg-gray-300 font-medium text-center rounded-[6px] leading-[50px] cursor-pointer ${color} ${color? 'text-white' : ''}`} onClick={() => onClickLetter(l.key)}>{l.key}</div>
            })
          }
        </div>

        <div className='w-full flex ml-12'>
          {letters.slice(10,20).map((l) => {
              const color: string | undefined = usedKeys[l.key.toUpperCase() as keyof ColoredKey];
              return <div key={l.key} className={`key min-w-[25px] md:min-w-[40px] h-[50px] inline-block m-[5px] dark:hover:bg-[rgba(255,255,255,0.2)] dark:bg-[#565F7E] dark:text-white hover:bg-gray-300 font-medium text-center rounded-[6px] leading-[50px] cursor-pointer ${color} ${color? 'text-white' : ''}`} onClick={() => onClickLetter(l.key)}>{l.key}</div>
            })
          }
        </div>

        <div className='w-full flex ml-5'>
          {letters.slice(20).map((l) => {
              const color: string | undefined = usedKeys[l.key.toUpperCase() as keyof ColoredKey];

              if(l.special) {
                if(l.key === 'Backspace')
                  return <div key={l.key} className={`key md:min-w-[80px] h-[50px] flex m-[5px] dark:hover:bg-[rgba(255,255,255,0.2)] dark:bg-[#565F7E] dark:text-white hover:bg-gray-300 px-[15px] font-medium text-center rounded-[6px] leading-[50px] items-center justify-center cursor-pointer ${color} ${color? 'text-white' : ''}`} onClick={() => onClickLetter('Backspace')}><Icon>backspace</Icon></div>
                
                return <div key={l.key} className={`key md:min-w-[80px] h-[50px] inline-block m-[5px] dark:hover:bg-[rgba(255,255,255,0.2)] dark:bg-[#565F7E] dark:text-white hover:bg-gray-300 px-[15px] font-medium text-center rounded-[6px] leading-[50px] cursor-pointer ${color} ${color? 'text-white' : ''}`} onClick={() => onClickLetter(l.key)}>{l.key}</div>
              }

              return <div key={l.key} className={`key min-w-[25px] md:min-w-[40px] h-[50px] inline-block m-[5px] dark:hover:bg-[rgba(255,255,255,0.2)] dark:bg-[#565F7E] dark:text-white hover:bg-gray-300 font-medium text-center rounded-[6px] leading-[50px] cursor-pointer ${color} ${color? 'text-white' : ''}`} onClick={() => onClickLetter(l.key)}>{l.key}</div>
            })
          }
        </div>
        
      </div>
    </>
  )
}

export default Keypad;