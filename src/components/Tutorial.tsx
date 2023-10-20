import SquareKey from './SquareKey';
import { useTutorial } from '../hooks';
import Modal from './Modal';

const Tutorial = () => {
  const { closeTutorial } = useTutorial();

  return (
    <Modal className={'m-[2%]'} >
      <div className='flex flex-col justify-start'>
        <h1 className='font-bold text-3xl mb-8'>Cómo jugar</h1>
        <p className='text-start mb-3'>Adivina la palabra oculta en cinco intentos.</p>
        <p className='text-start mb-3'>Cada intento debe ser una palabra válida de 5 letras.</p>
        <p className='text-start mb-3'>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>

        <p className='text-start font-bold'>Ejemplos</p>

        <div className='flex justify-evenly'>
          <SquareKey letter={{key: 'G', color: '#6AAA64'}} fixed />
          <SquareKey letter={{key: 'A', color: 'white'}} fixed />
          <SquareKey letter={{key: 'T', color: 'white'}} fixed />
          <SquareKey letter={{key: 'O', color: 'white'}} fixed />
          <SquareKey letter={{key: 'S', color: 'white'}} fixed />
        </div>

        <p className='text-start'>La letra <span className='font-bold'>G</span> está en la palabra y en la posición correcta.</p>

        <div className='flex justify-evenly'>
          <SquareKey letter={{key: 'V', color: 'white'}} fixed />
          <SquareKey letter={{key: 'O', color: 'white'}} fixed />
          <SquareKey letter={{key: 'C', color: '#CEB02C'}} fixed />
          <SquareKey letter={{key: 'A', color: 'white'}} fixed />
          <SquareKey letter={{key: 'L', color: 'white'}} fixed />
        </div>

        <p className='text-start'>La letra <span className='font-bold'>C</span> está en la palabra pero en la posición incorrecta.</p>

        <div className='flex justify-evenly'>
          <SquareKey letter={{key: 'C', color: 'white'}} fixed />
          <SquareKey letter={{key: 'A', color: 'white'}} fixed />
          <SquareKey letter={{key: 'N', color: 'white'}} fixed />
          <SquareKey letter={{key: 'T', color: 'white'}} fixed />
          <SquareKey letter={{key: 'O', color: '#939B9F'}} fixed />
        </div>

        <p className='text-start mb-6'>La letra <span className='font-bold'>O</span> no está en la palabra.</p>
        <p className='text-start mb-6'>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
        <p className='mb-6'>¡Una palabra nueva cada 5 minutos!</p>

        <button className='min-w-[200px] self-center bg-green-700 text-white font-bold p-2 rounded-md text-[18px]' onClick={() => closeTutorial()}>¡JUGAR!</button>
      </div>
    </Modal>
  )
}

export default Tutorial;