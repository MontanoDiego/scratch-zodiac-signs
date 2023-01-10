import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer.js';
import Header from './components/header/header.js';
import Main from './components/main/main.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
