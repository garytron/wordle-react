import { FC } from 'react';
import { ModalProps } from '../interfaces';

const Modal: FC<ModalProps> = ({children, className}) => {
  return (
    <div className='modal fixed w-full h-screen top-0 left-0 bg-white bg-opacity-60 overflow-y-scroll'>
      <div className={`max-w-[520px] bg-white p-[40px] rounded-[10px] mx-auto shadow text-center border border-solid border-black ${className}`}>
        {children}
      </div>
    </div>
  )
}

export default Modal;