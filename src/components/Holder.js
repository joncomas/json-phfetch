/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';


export default class Holders extends React.Component {
    render() {
        return this.props.allUsers.map((userData) => {
            return (
            <ul className="list-group">             
                <li className="list-group-item">{userData.name}</li>
                <li className="list-group-item">{userData.username}</li>
            </ul>     
             );
        });        
    }
}   

