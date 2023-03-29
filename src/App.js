import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Weather from './components/Weather'
import Watch from './components/Watch/Watch'
import Trafic from './components/Trafic';

function App() {
  return (
    <div className="App">
      <Header />
      <Watch />
      <Weather />
      <Trafic />
      <Footer />
    </div>
  )
}

export default App;
