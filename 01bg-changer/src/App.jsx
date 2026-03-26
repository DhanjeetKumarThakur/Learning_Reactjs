import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black');

  return (
    <>
      <div className='mx-auto flex items-center max-w-sm' style={{backgroundColor: color}}>
        <div className='bg-red rounded-xl shadow-lg'>
          <h1 className='text-red-500 dark:text-red-400' onClick={()=> setColor('red')}>red</h1>
        </div>
      </div>
    </>
  )
}

export default App
