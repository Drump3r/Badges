import React from 'react'
import './style/BadgeList.css'
import {Link} from 'react-router-dom'

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          />
  
          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
  
  class BadgesList extends React.Component {
    render() {
      if (this.props.badges.length === 0) {
        return (
          <div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">Create new Badge</Link>
          </div>
        )
      }
      return (
        <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.badges.map(badge => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
  
  export default BadgesList;