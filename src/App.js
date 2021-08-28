// import logo from './logo.svg';
import './App.css';
import NavbarComp from './components/Navbar.jsx';
import Avatar from './components/Avatar';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {

 return (
    <div className="App">
      <NavbarComp/>     
      <Avatar/>
      <About />      
      <Work />
      <Skills /> 
      <Contact />
      <footer>   
        <h1>
            Thank you for the time &#128151; 
             Have a Good Day  &#128516;  
        </h1>
      </footer>
    </div>
  );
}

export default App;
