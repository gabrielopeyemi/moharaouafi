import React from 'react'

export default function Address() {
    return (
        <>
            <div className="text-primary contact">
                <div className="flex flex-col">
                    <div>
                        <h1 className="uppercase font-bold">E-mail:</h1> 
                        <span className="font-light">Contact@Moharaouafi.fr</span>
                    </div> 
                    <div>
                        <h1 className="uppercase font-bold">Téléphone:</h1> 
                        <span>06.26.52.02.09</span>
                    </div>
                </div>
            </div>
            <br />
            <div className="text-primary">
                <h1 className="uppercase font-bold">Adresse:</h1> 
                <span>12 Boulevard de Cessole Nice</span> <br/>
                <span>Provence-Alpes-Côte d'Azur</span>  <br/>
                <span>06000 Nice</span>
            </div>    
        </>
    )
}
