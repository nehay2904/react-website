
import './App.css';
import MainPage from './components/Main page/MainPage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Skills from './Pages/Skills';
import {
  BrowserRouter as Router,
   Routes,
   Route,
   Link
} from "react-router-dom";
import Demo from './material ui/Demo';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route exact path="/" element={<MainPage/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/skills" element={<Skills />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
        
  
    </div>
  );
}

export default App;
