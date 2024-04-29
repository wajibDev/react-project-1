
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
    <main className='main_container'>
    <ContactHeader/>
    <ContactForm/> 
    </main>
    </>
  )
}

export default App
