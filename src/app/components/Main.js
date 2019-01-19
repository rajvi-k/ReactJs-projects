import React from 'react';

export class Main extends React.Component{
    
    onChangeName(){
        this.props.onChangeName(this.refs.name.value)
    }
    
    render(){
        return(
            <div>
                <input type="text" ref="name"/>
                <button onClick={()=>this.onChangeName()}>Change name</button>
                
            </div>
        )
    }
}
