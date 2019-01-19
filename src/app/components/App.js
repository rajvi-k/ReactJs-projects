import React from 'react';
import {User} from './User';
import {Main} from './Main';
import {connect} from 'react-redux';

export class App extends React.Component{
   
    render(){
        return(
            <div>
                <Main onChangeName={(name)=>this.props.setName(name)}/>
                <User username={this.props.user.name}/>    
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        setName:(name)=>{
            dispatch({
                type:"Set_Name",
                payload:name
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);