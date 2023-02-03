import { BrowserRouter } from "react-router-dom";
import "./App.css"
import Pages from "./components/pages/Pages"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <>
    <ToastContainer position='bottom-center' />
    <BrowserRouter>
    <Pages />
    </BrowserRouter>
  </>
  );
}

export default App
