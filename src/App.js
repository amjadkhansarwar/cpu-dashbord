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
      <Watch />
      <Weather />
      <Trafick />
      <Footer />
    </div>
  )
}

export default App;
