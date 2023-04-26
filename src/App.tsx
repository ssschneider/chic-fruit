import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "./pages/Home"
import { Products } from "./pages/Products"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App