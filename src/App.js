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
import UseReducerDemo from './Pages/Learn/webhooks/useReducerDemo';
import UseMemoDemo from './Pages/Learn/webhooks/UseMemoDemo';
import UseCallbackDemo from './Pages/Learn/webhooks/UseCallbackDemo';
import ReactProps from './Pages/Learn/ReactProps';
import ReactMemo from './Pages/Learn/ReactMemo';
import CustomHook from './Pages/Learn/webhooks/CustomHook';
import ReactStyles from './Pages/Learn/ReactStyles';

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
              <Route path="props" element={<ReactProps />} />
              <Route path="forms" element={<ReactForm />} />
              <Route path="memo" element={<ReactMemo />} />
              <Route path="styles" element={<ReactStyles />} />
              <Route path="web-hooks" element={<WebHooks />}>
                <Route path="intro" element={<WebHooksIntro />} />
                <Route path="use-state" element={<UseStateDemo />} />
                <Route path="use-effect" element={<UseEffectDemo />} />
                <Route path="use-context" element={<UseContextDemo />} />
                <Route path="use-ref" element={<UseRefDemo />} />
                <Route path="use-reducer" element={<UseReducerDemo />} />
                <Route path="use-memo" element={<UseMemoDemo />} />
                <Route path="use-callback" element={<UseCallbackDemo />} />
                <Route path="custom-hook" element={<CustomHook />} />
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
