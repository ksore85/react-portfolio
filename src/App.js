import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import Aboutme from "./pages/aboutme"
import Work from "./pages/work"
import Contactme from "./pages/contactme"
function App() {
  return (
    <div className="App">
        <Nav/>

        <Aboutme/>

        <Work/>

        <Contactme/>


    </div>
  );
}

export default App;
