/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import React from 'react';


export default class Holders extends React.Component {
    render() {
        return this.props.allUsers.map((userData, i) => {
            return (



                <div class="list-group" key={i}>
                    <button type="button" className="list-group-item list-group-item-action" data-toggle="modal" data-target={"#exampleModalLong"+i}>{userData.name}</button>
               
               
               
               
               
               
                <div class="modal fade" id={"exampleModalLong"+i} tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">              
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">{userData.email}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>               
            </div>
            );
        });
    }
} 



