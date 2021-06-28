import React from 'react'

import './style/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends React.Component {
    state = { form: {
        firstName:'Charlie', 
        lastName:'Brown' ,
        twitter:'briansg03',
        degree:'Fonted Engineer',
        avatar:'https://cdn.costumewall.com/wp-content/uploads/2017/06/charlie-brown.jpg'} }
    handleChangue = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        return (
            <div>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                            firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            twitter={this.state.form.twitter}
                            degree={this.state.form.degree}
                            avatar={this.state.form.avatar}
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChangue} formValue={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew