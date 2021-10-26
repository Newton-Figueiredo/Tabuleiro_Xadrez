import styles from '../styles/linha.module.css'
import Casa from './casa'

export default function Linha(props) {

    function renderizarLista(){
        const lista = []

        for(let i = 1; i <= 8; i++ ){
            lista.push(<Casa key={i} preto={ i%2 == 0 ? true : false }/>)
        }

        return(lista)
    }

    return(
        <div  
        style = {{
            flexDirection: props.reverse? 'row-reverse' : 'row' 
        }
        }
        className={styles.linha} 
        >
               {renderizarLista()}  
        </div>
    )
    }