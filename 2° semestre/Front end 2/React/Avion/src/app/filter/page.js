import Card from "@/components/card.js";
import styles from "./props.module.css";

export default function filter() {
    const caca = [
        { id: 1, nome: 'SU-24', geracao: '3° Geração', otan: 'Fencer' },
        { id: 2, nome: 'SU-25', geracao: '3° Geração', otan: 'Frogfoot' },
        { id: 3, nome: 'SU-27', geracao: '4° Geração', otan: 'Flanker' },
        { id: 4, nome: 'SU-30', geracao: '4° Geração', otan: 'Flanker C' },
        { id: 5, nome: 'SU-33', geracao: '4° Geração', otan: 'Flanker D' },
        { id: 6, nome: 'SU-34', geracao: '4° Geração', otan: 'Fullback' },
        { id: 7, nome: 'SU-35', geracao: '4° Geração', otan: 'Flanker E' },
        { id: 8, nome: 'SU-39', geracao: '4° Geração', otan: 'Flanker F' },
        { id: 9, nome: 'SU-47', geracao: '4.5° Geração', otan: 'Berkut' },
        { id: 10, nome: 'SU-57', geracao: '5° Geração', otan: 'Felon' }
    ];
    
    const nomeBusca = nome.filter(nome =>(nome.startsWith(busca)))
    const [busca, setBusca] = useState('')

    return(
        <div>
            <h1>
                Filtro
            </h1>
            <input
            value={busca}
            type="text"
            onChange={ev =>setBusca(ev.target.value)}
            />
            <ul>
                {caca.map((nome, i) =>(
                    <li>

                    </li>
                ))}
            </ul>
        </div>
    )
}

