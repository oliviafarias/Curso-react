import Button from './evento/Button'

function Evento ({numero}) {

    function meuEvento () {
        alert(`Opa, fui ativado!`)
    }

    function SegundoEvento () {
        alert('Sou o segundo evento!')
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={SegundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento