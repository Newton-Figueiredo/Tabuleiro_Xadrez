import styles from '../styles/casa.module.css'

export default function Casa(props) {
    return(
        <div 
        style = {{
            backgroundColor: props.preto? "#000" : "#fff"
        }}
        className={styles.casa}>
            
        </div>
    )
    }