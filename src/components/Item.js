import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default Item

/* <> </> React Fragment */

/* Destructuring:
function Item({marca, lancamento}) 
    ao inves de usar props, que seria:

    function Item (props) {
        <li>{props.marca}
    }
*/

/*
PropTypes :
PropTypes é um sistema de tipos simples que verifica se os dados correspondem aos tipos esperados no 
ambiente de execução. Ele serve como uma documentação e verificador de erros que ajudará você a manter 
seu aplicativo previsível à medida que ele for escalonado.

Serve para verificar os tipos, isRequired

defaultProps :
Seta um valor default para o item
*/