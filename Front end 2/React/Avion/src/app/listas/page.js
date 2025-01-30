export default function Listas(){
    const  cacas = ['SU-27', 'SU-34', 'F-39 GRIPPEN','F-111', 'JF-17', 'MIRRAGE-2000', "F-15", "F-16"]
    const cacaOBJ = [
        {
            caca: "SU-27",
            id: 1
        },
        {
            caca: "SU-34",
            id: 2
        },
        {
            caca: "SU-37",
            id: 3
        },
        {
            caca: "F-39 GRIPPEN",
            id: 4
        },
        {
            caca: "F-111",
            id: 5
        },
        {
            caca: "JF-17",
            id: 6   
        },
        {
            caca: "MIRRAGE-2000",
            id: 7
        },
        {
            caca: "F-15",
            id: 8
        },
        {
            caca: "F-16",
            id: 9
        }
    ]
    return(
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
            
            <ul style={{display: "flex", flexDirection: "column", gap: 20}}>
                <h2>
                    Lista Comum
                </h2>
                {cacas.map((listas, indice) => (
                       <div key={indice}>
                            {indice + 1} - {listas} 
                       </div>
                ))}
                <h2>
                    Listas de objetos
                </h2>
                {cacaOBJ.map(listas => (
                <div key={listas.id}>
                    {listas.id} - {listas.caca}  
                </div>
            ))}
            </ul>

        </div>
    )
}