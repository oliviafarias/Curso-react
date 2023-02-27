import './App.css';
import HelloWorld from './components/HelloWorld';


function App() {
  const name = 'Olivia';

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Meu App</h2>
      <p>Meu primeiro App</p>
      <p>{name} esta criando um app.</p>
      <p> Soma: {sum(2, 2)} </p>
      <img src={url} alt="Minha Imagem"/>
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;
