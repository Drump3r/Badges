import React from 'react'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return  (
        <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div>
                <img src="" alt="Avatar"/>
                <h1>Richard <br /> Kaufman</h1>
            </div>
            <div>
                <p>Fronted Engineer</p>
                <p>@sparragus</p>
            </div>
            <div>
                #Platziconf
            </div>
        </div>

        )
        
    }
}

export default Badge