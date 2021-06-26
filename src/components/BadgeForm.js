import React from 'react'

class BadgeForm extends React.Component {
    state = {}
    handleClick= e => {
        console.log('Button was clicked')
    }
    handleChangue = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
           <div>
               <h1>New Attendant</h1>
               <form action="">
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.handleChangue} 
                            className="form-control" 
                            type="text"
                            name="firstName" 
                            value={this.state.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.handleChangue} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.state.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Degree</label>
                        <input 
                            onChange={this.handleChangue} 
                            className="form-control" 
                            type="text" 
                            name="degree"
                            value={this.state.degree}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.handleChangue} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.state.twitter}
                        />
                    </div>

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>
               </form>
           </div>
        )
    }
}

export default BadgeForm