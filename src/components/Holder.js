/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';


export default class Holders extends React.Component {
    render() {
        return this.props.allUsers.map((userData, i) => {
            return (



                <div className="list-group" key={i}>
                    <button type="button" className="list-group-item list-group-item-action" data-toggle="modal" data-target={"#exampleModalLong"+i}>{userData.name}</button>
               
               
               
               
               
               
                <div className="modal fade" id={"exampleModalLong"+i} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">              
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{userData.email}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {userData.phone}
                        {userData.email}
                        {userData.address.street}
                        {userData.address.suite}
                        {userData.address.city}
                        {userData.address.zipcode}
                        {userData.address.geo.lat}
                        {userData.address.geo.lng}
                        {userData.phone}
                        {userData.website}
                        {userData.company.name}
                        {userData.company.catchPhrase}
                        {userData.company.bs}
                       
                       

                   </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>               
            </div>
            );
        });
    }
} 



