import Item from "./Item.js"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Fiat" ano_lancamento={1997}/>
                <Item />
            </ul>
        </>
    )
}

export default List