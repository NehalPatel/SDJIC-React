import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import Layout from './Layout';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
