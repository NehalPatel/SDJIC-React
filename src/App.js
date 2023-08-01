import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import WebHooks from './Pages/Learn/WebHooks';
import WebHooksIntro from './Pages/Learn/webhooks/WebHooksIntro';
import UseStateDemo from './Pages/Learn/webhooks/UseStateDemo';
import UseEffectDemo from './Pages/Learn/webhooks/UseEffectDemo';
import ReactComponent from './Pages/Learn/ReactComponent';
import UseContextDemo from './Pages/Learn/webhooks/UseContextDemo';
import UseRefDemo from './Pages/Learn/webhooks/UseRefDemo';

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
              <Route path="component" element={<ReactComponent />} />
              <Route path="forms" element={<ReactForm />} />
              <Route path="web-hooks" element={<WebHooks />}>
                <Route path="intro" element={<WebHooksIntro />} />
                <Route path="use-state" element={<UseStateDemo />} />
                <Route path="use-effect" element={<UseEffectDemo />} />
                <Route path="use-context" element={<UseContextDemo />} />
                <Route path="use-ref" element={<UseRefDemo />} />
              </Route>
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
