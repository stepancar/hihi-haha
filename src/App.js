import logo from './al-khwarizmi.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span className="Name">Хихи хаха клуб</span>
          - клуб без обязательств, где мы решаем задачки и пиздим с пацанами на позитиве
        </h1>
        <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C-%D0%A5%D0%BE%D1%80%D0%B5%D0%B7%D0%BC%D0%B8">
          <img src={logo} className="App-logo" alt="Аль-Хорезми" />
        </a>
        
        <a
          className="App-link"
          href="https://t.me/joinchat/IdBhMiKdNEt64TT6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Присоединяйся к ХИХИ-ХАХА
        </a>
      </header>
    </div>
  );
}

export default App;
