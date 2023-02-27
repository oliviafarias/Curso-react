import Frase from "./Frase"
/* Utilizando um componente dentro de outro componente */

function HelloWorld () {

    return (
        <div>
            <h1>Meu primeiro componente.</h1>
            <Frase />
        </div>
    )

}

export default HelloWorld