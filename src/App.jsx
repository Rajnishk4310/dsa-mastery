import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Home, Contact, Error } from './components'

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </>;
}

export default App;
