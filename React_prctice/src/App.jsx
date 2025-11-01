import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MyButton from './components/MyButton'

function App() {
  useEffect(() => {
    document.title = "nerfnyanのボタンカウントサイト"
  }, []);
    return (
      <>
    <Header />
    <MyButton />
      </>
    )
}


export default App
