import React, { Component } from "react";

class Data extends Component{
    render(){
        const {name , age ,city} = this.props
        return(
            <div>
                <p>name is : {name} </p>
                <p>age is : {age} </p>
                <p>city is : {city} </p>
            </div>
        )
    }
}
export default Data