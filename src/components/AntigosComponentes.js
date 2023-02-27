//import './App.css';
// import { useState } from 'react'

// import Pessoa from './components/Pessoa';
// import SayMyName from './components/SayMyName'
// import Frase from './components/Frase';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Forms';
// import Condicional from './components/Condicional';
// import OutraLista from './components/OutraLista';
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';

// const pessoas = [
//   {
//     nome: 'Olivia',
//     idade: 26,
//     profissao: 'Dev',
//     foto: 'https://via.placeholder.com/150',
//   },
//   {
//     nome: 'Filipe',
//     idade: 34,
//     profissao: 'Dev Sr',
//     foto: 'https://via.placeholder.com/150',
//   },
//   {
//     nome: 'Jurema',
//     idade: 34,
//     profissao: 'Dev Sr',
//     foto: 'https://via.placeholder.com/150',
//   },
// ]

function App() {
  
    // const meusItens = ['React', 'Vue', 'Angular']
  
    // const [nome, setNome] = useState()
  
    return (
      <div className="App">
  
  
  
        {/* <h1>State Lift</h1>
        <SeuNome setNome={setNome}/>
        {nome}
        <Saudacao nome={nome}/> */}
        
        {/* <h1>Renderizacao Condicional</h1>
        <Condicional></Condicional>
        <h2>Renderização de Lista</h2>
        <OutraLista  itens={meusItens}/>
        <OutraLista itens={[]} /> */}
        
        {/* <SayMyName nome="Olivia" />
        <Pessoa 
        nome="Olivia"
        idade="26"
        profissao="Estagiario"
        foto="https://via.placeholder.com/150"/>
        <Frase />
        <List />
        <Evento numero="2"/>
        <Form /> */}
      </div>
    );
  }
  
  export default App;
  
  /*      {pessoas.filter((val) =>
          (val.profissao === 'Dev Sr') ?
            <Pessoa nome={val.nome} idade={val.idade} profissao={val.profissao} foto={val.foto} />
            : 'Nao Sr')
        }
        */