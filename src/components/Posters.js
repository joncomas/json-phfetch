import React from 'react';

const Posters = (props)=>{

        return props.allPics.map((apiData, i) => {
            
            return (
                <div className="col-md-3">
                    <img className="imagen" key={i} src={apiData.url} alt='...'/>
                </div>
            )
        }
    )
}

export default Posters;