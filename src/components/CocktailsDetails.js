import React, {Component} from 'react'

export default class CocktailsDetails extends Component{
    render(){
        return <div>
            <img src = {this.props.thumbnail} alt= ''/>
            <h1>{this.props.drink}</h1>
            <h3>{this.props.category}</h3>
            <p>{this.props.instructions}</p>
        </div>
    }
}