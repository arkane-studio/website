import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React
        <span role="img" aria-label="heart">❤️</span>
        <span role="img" aria-label="fire">🔥</span>
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <button>
            <a href="https://docs.arkane.ch" target="_blank">
              View documentation
            </a>
          </button>
        </p>
      </div>
      <p className="read-the-docs">
        Work in progress. Read the docs for more information.
      </p>
    </>
  )
}

export default App
