import { useState } from 'react'

import Paginacion from './components/Paginacion.jsx'
import Productlist from './components/Productlist.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='App'>
    <h1 className='title'>FakeStore</h1>

    <Productlist/>

   </div>
  )
}

export default App