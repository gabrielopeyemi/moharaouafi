import React from 'react'

export default function Address() {
    return (
        <>
            <div className="text-primary contact">
                <div className="flex flex-col">
                    <div>
                        <h1 className="uppercase font-bold">E-mail:</h1> 
                        <span className="font-light"><a href='mailto:Contact@Moharaouafi.fr'>Contact@Moharaouafi.fr</a></span>
                    </div> 
                    <div>
                        <h1 className="uppercase font-bold">Téléphone:</h1> 
                        <span><a href='tel:+33 6 26 52 02 09'>+33 6 26 52 02 09</a></span>
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
