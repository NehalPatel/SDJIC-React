import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Error404 from './Pages/Error404';
import Layout from './Layout';
import LearnReact from './Pages/LearnReact';
import ReactIntro from './Pages/Learn/ReactIntro';
import ReactInstall from './Pages/Learn/ReactInstall';
import ReactForm from './Pages/Learn/ReactForms';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="react" element={<LearnReact />}>
            <Route index element={<ReactIntro />} />
            <Route path="intro" element={<ReactIntro />} />
            <Route path="install" element={<ReactInstall />} />
            <Route path="forms" element={<ReactForm />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
