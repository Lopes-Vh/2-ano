export default function Listas(){
    const  contato = ['Email', 'Telefone']
    const contatoOBJ = [
        {
            caca: "Email: aaaaa@gmail.com",
            id: 1
        },
        {
            caca: "Telefone: 7070 se nao der 70 dnv",
            id: 2
        }
    ]
    return(
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            
            <ul style={{display: "flex", flexDirection: "column", gap: 20}}>
                <h2>
                    Lista Comum
                </h2>
                {contato.map((listas, indice) => (
                       <div key={indice}>
                            {indice + 1} - {listas} 
                       </div>
                ))}
                <h2>
                    Listas de objetos
                </h2>
                {contatoOBJ.map(listas => (
                <div key={listas.id}>
                    {listas.id} - {listas.caca}  
                </div>
            ))}
            </ul>

        </div>
    )
}