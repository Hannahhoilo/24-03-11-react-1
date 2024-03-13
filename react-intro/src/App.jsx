import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayMessage from './DisplayMessage'
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import DisplayRandomNum from './DisplayRandomNum.jsx'
import Time from './Time.jsx'
import ProductList from './ProductList.jsx'


function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>  */}
      <Header/>
      <Content/>
      <Footer/>
      <DisplayRandomNum/>
      <Time/>
      <ProductList/>


    </>
  )
}


export default App
