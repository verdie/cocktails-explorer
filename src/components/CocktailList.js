import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class CoctailList extends Component{
    render () {
        return <div>
            <h1>Cocktails explorer</h1>
            <ul>
                {this.props.cocktails.map((cocktail)=>{
                    return <li key={cocktail.id}>
                        <Link to={ `/cocktails/${cocktail.id}` }>{cocktail.drink}</Link>
                    </li>
                })}
                
            </ul>
        </div>
    }
}