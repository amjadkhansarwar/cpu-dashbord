import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Watch from './components/Watch'
import Weather from './components/Weather'
import Trafick from './components/Trafick'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Watch />
        <Weather />
        <Trafick />
      </div>
      <Footer />
    </div>
  );
}

export default App;
