import Linha from "../components/linha"

export default function Tabuleiro() {

    function renderizarTabuleiro(){
        const lista = []

        for(let i = 1; i <= 8; i++ ){
            lista.push(<Linha className = {`Linha${i}`} id={`Linha${i}`} key={i} reverse={ i%2 == 0 ? true : false }/>)
        }

        return(lista)
    }


return(
    <div className="tabuleiro" id="tabuleiro">     
       {renderizarTabuleiro()}  
    </div>
)
}