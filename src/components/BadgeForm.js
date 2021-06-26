import React from 'react'

class BadgeForm extends React.Component {
    handleClick= e => {
        console.log('Button was clicked')
    }
    render() {
        return (
           <div>
               <h1>New Attendant</h1>
               <form action="">
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text"
                            name="firstName" 
                            value={this.props.formValue.firstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName"
                            value={this.props.formValue.lastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Degree</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="degree"
                            value={this.props.formValue.degree}
                        />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.formValue.twitter}
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