import React from 'react';

export class User extends React.Component{
    
    render(){
        return(
            <div>
                <h5>{this.props.username}</h5>
            </div>
        )
    }
}
