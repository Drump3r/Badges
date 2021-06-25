import React from 'react'
import './style/Badge.css'
import confLogo from '../images/badge-header.svg'

class Badge extends React.Component {
    render() {
        return  (
        <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo de la conferencia"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon" alt="Avatar"/>
                <h1>Richard <br /> Kaufman</h1>
            </div>
            <div className="Badge__section-info">
                <p>Fronted Engineer</p>
                <p>@sparragus</p>
            </div>
            <div className="Badge__footer">
                #Platziconf
            </div>
        </div>

        )
        
    }
}

export default Badge