import React, { Component } from "react";
// function Pessoa (props) {

//     return (
//         <div>
//             <img src={props.foto} alt={props.nome} />
//             <h2>Nome: {props.nome}</h2>
//             <p>Idade: {props.idade}</p>
//             <p>Profissao: {props.profissao}</p>
//         </div>
//     )
// }
/* Para a funcao pessoa usou-se muita repeticao de 'props' -> Struct */
/* Para facilitar : */

// function Pessoa ({nome, idade, profissao, foto}) {
//     return (
//         <div>
//             <img src={foto} alt={nome} />
//             <h2>Nome: {nome} </h2>
//             <p>Idade: {idade} </p>
//             <p>Profissao: {profissao}</p>
//         </div>
//     )
// }

export default class Pessoa extends Component {

    render() {
        return (
            <div>
                <img src={this.props.foto} alt={this.props.nome} />
                <h2>Nome: {this.props.nome} </h2>
                <p>Idade: {this.props.idade} </p>
                <p>Profissao: {this.props.profissao}</p>
            </div>
        )
    }
}


