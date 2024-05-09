import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
