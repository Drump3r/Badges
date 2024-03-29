import React from 'react';
import { Link } from 'react-router-dom';

import './style/Badges.css';
import confLogo from '../images/badge-header.svg';

import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError';
import BadgesList from '../components/BadgesList';
import api from '../api';
class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }
    componentDidMount(){
        this.fetchData()
    }
    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }
    render() {
        if (this.state.loading) {
            return <PageLoading/>
        }
        if (this.state.error){
            return <PageError error={this.state.error}/>
        }
        return (
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                className="Badges_conf-logo" 
                                src={confLogo} 
                                alt="Logo conferencia" 
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                    <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                    </div>

                </div>
                <BadgesList badges={this.state.data} />
            </div>
        )
    }
}
export default Badges