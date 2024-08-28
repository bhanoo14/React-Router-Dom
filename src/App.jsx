import {Route, Outlet, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

