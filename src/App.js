import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Weather from './components/Weather'
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App">
      <Header />
      <Watch />
      <Weather />
      <Footer />
    </div>
  )
}

export default App;
