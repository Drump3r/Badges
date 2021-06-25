import React from 'react'

import './style/BadgeNew.css'
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'


class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                            firtName="Charlie" 
                            lastName="Brown" 
                            twitter="briansg03" 
                            avatar="https://cdn.costumewall.com/wp-content/uploads/2017/06/charlie-brown.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew