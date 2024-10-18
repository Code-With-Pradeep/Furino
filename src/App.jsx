import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage/Homepage'
import About from './Pages/About/About'
import Shop from './Pages/Shop/Shop'
import Contact from './Pages/Contact/Contact'
import Navbar from './assets/components/Navbar/Navbar'
import Error from './Pages/Error/Error'
import Footer from './assets/components/Footer/Footer'
import Product from './Pages/Product/Product'
import BreadCrumb from './assets/components/Breadcrumbs/BreadCrumb'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <BreadCrumb />
       <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="*" element={<Error />} />
       </Routes>
       <Footer />
      </BrowserRouter>
 
    </>
  )
}

export default App
