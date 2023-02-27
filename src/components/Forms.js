import { useState } from 'react'

function Form () {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario} className="cadastro">
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text"
                        id="name" 
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                     />
                </div>
                
                <div>
                    <label htmlFor="lastname">Sobrenome:</label>
                    <input type="text" placeholder="Digite seu sobrenome" />
                </div>

                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form

/* 
onClick - Ao clicar
onSubmit - Ao submeter
onChange - Ao mudar

e.preventDefault() -> interrompe o comportamento padrao de um elemento - no caso do form, impede o envio
event.stopPropagation() interrompe a propagação de um evento ou impede a ocorrência do evento na fase de
bubbling ou capturing

hooks : 

*/