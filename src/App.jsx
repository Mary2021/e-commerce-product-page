import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/esm/Container'
import Header from './layouts/Header'
import Main from './layouts/Main'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
//Store
import { store } from './app/store';
import { Provider } from 'react-redux';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
      >
        <Container className='appContainer p-0'>
          <Provider store={store}>
            <Header />
            <Main />
          </Provider>
        </Container>
      </ThemeProvider>
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
      </p> */}
    </>
  )
}

export default App
