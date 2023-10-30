import React from "react"

export function Home({User,setUser}) {

    const handleLogout = () => {
     
        setUser([])
    }

    return(
        <div>
            <h1>Bienvenido</h1>
            <h2>{User}</h2>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    )
}