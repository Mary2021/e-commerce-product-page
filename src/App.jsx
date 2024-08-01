import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
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
    </>
  )
}

export default App
