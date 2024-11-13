'use client'
import {useState} from 'react';

export default function State(){
    // let conteudo= "Bom dia"
    const[conteudo, setConteudo]= useState('Bom dia')
    const[name, setName]=useState('')

    const[showDiv, setShowDiv]= useState(true)

    let controlarParagrafo= ()=>{
        // conteudo= 'Boa tarde'
        setConteudo('Boa tarde');
        console.log("conteudo")
    }

    let controlarInput=(evento)=>{
       console.log(evento.target.value)
       setName(evento.target.value)  
    }
    return(
        <div>
            {/* <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>mudar</button> */}
            <button onClick={() => { setShowDiv(!showDiv) }}>
    {showDiv ? 'Esconder' : 'Mostrar'}
</button>

            {showDiv &&
                (
                    <div> 
                        <p>Nome: {name}</p>
                        <input type="text" onChange={controlarInput} />
                    </div>
                )
            }
            
        </div>
    )
} 