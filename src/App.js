import './App.css';
import Socket from './components/Socket';
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const App = () => {
  const [name, setName] = useState('')
  const [registered, setRegistered] = useState(false)

  const register = e => {
    e.preventDefault()
    if(name !== '') {
      setRegistered(true)
    }
  }

  return (
    <div className='App'>
      <form onSubmit={register}>
        <label>Insert your name</label>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button>Ir al chat</button>
      </form>
    </div>
  )
}

export default App;