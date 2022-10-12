import { useState } from 'react'
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className='flex justify-center items-center'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
        <a href="https://eslint.org/" target="_blank" rel="noreferrer">
          <img src="/eslint.svg" className="logo" alt="ESLint logo" />
        </a>
        <a href="https://sass-lang.com/documentation/" target="_blank" rel="noreferrer">
          <img src="/sass.svg" className="logo" alt="Sass logo" />
        </a>
      </div>
      <h1>Vite + React 18  + ESLint + Sass</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logos to learn more
      </p>
    </div>
  )
}

export default App
