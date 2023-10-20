import { useState } from 'react';
import { Icon } from '@mui/material';
import Toggle from 'react-toggle';
import "react-toggle/style.css"
import { useStatistics, useTutorial } from '../hooks';

const Navbar = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { openTutorial } = useTutorial();
  const { openResults } = useStatistics();

  const switchTheme = () => {
    console.log('dark', isDarkMode);
    if(isDarkMode) {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }

  return (
    <div className='flex items-center dark:bg-[#DADCE008] bg-[#F3F3F3] dark:text-white justify-between w-full md:max-w-[530px] min-h-[50px] mx-auto mt-5 mb-5 rounded-[10px]'>
      <div className='w-[15%] ml-5'>
        <span className='font-bold text-3xl uppercase' onClick={() => openTutorial()}><Icon className='cursor-pointer text-[#818181] dark:text-white'>help</Icon></span>
      </div>
      <div className='w-[70%]'>
        <h1 className='text-center font-bold text-3xl uppercase'>Wordle</h1>
      </div>
      <div className='w-[15%] flex justify-around mr-5'>
        <span className='text-center font-bold text-3xl uppercase' onClick={openResults}><Icon className='cursor-pointer text-[#818181] dark:text-white'>analytics</Icon></span>
        <span className='text-center font-bold text-3xl uppercase ml-2'>
          <Toggle defaultChecked={true} icons={{checked: <Icon>light_mode</Icon>, unchecked: <Icon>dark_mode</Icon>}} onChange={switchTheme} />
        </span>
      </div>
    </div>
  )
}

export default Navbar;