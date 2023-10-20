import { SquareKeyProps, Token } from "../interfaces";

const SquareKey = ({letter, filled = false, fixed = false}: SquareKeyProps) => {
  
  if(filled)
    return (<div className={`block w-[60px] h-[60px] border border-solid m-[4px] text-center dark:text-white leading-[60px] uppercase font-bold text-2xl filled`}>{letter as string}</div>)
  
  if(letter) {
    if(fixed)
      return (
        <div className={`block w-[60px] h-[60px] bg-[${(letter as Token).color}] border-[${(letter as Token).color}] border border-solid m-[4px] text-black text-center dark:text-white leading-[60px] uppercase font-bold text-2xl rounded-[5px]`}>{(letter as Token).key}</div>
      )

    return (
      <div className={`block w-[60px] h-[60px] bg-custom-${(letter as Token).color} border-custom-${(letter as Token).color} border border-solid m-[4px] text-center dark:text-white leading-[60px] uppercase font-bold text-2xl rounded-[5px] flip`}>{(letter as Token).key}</div>
    )
  }

  return(<div className='block w-[60px] h-[60px] bg-custom-empty border-custom-empty border border-solid m-[4px] text-center dark:text-white leading-[60px] uppercase font-bold text-2xl rounded-[5px]'></div>)
}

export default SquareKey;