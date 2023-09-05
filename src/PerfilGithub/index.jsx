import { useEffect, useState} from 'react'


export function PerfilGithub(){

const [nomeUsuario, setNomeUsuario] =  useState('Lucas')
const [idadeUsuario, setIdadeUsuario] = useState(26)

    useEffect (() => {
        alert(`${nomeUsuario} Entrou na tela e tem ${idadeUsuario}`)
    }, [idadeUsuario,nomeUsuario])

    return (
        <div>
            <h1>Olá</h1>
            <input type="text" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} />
            <input type="number" value={idadeUsuario} onChange={(e) => setIdadeUsuario(e.target.value)} />
        </div>
    )
}