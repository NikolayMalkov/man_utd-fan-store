
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>

      
          <Main />
      

        <footer>
          <About />
        </footer>

      </div>
    </BrowserRouter>

  );
}

export default App;
