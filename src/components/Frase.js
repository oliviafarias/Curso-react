import styles from './Frase.css'

function Frase() {
    return (
        <div  className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este eh um componente com uma frase!</p>
            <p className={styles.fraseTwo}>Esta eh uma segunda frase</p>
        </div>
    )
}

export default Frase