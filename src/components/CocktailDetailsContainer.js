import React, {Component} from 'react'
import { connect } from 'react-redux'
import CoctailsDetails from './CocktailsDetails';

class CocktailsDetailsContainer extends Component{    
    render (){
        const cocktail= this.props.cocktails.find((cocktail)=> cocktail.id===this.props.match.params.id)

        return <CoctailsDetails {...cocktail} />
    }
}

const mapStateToProps = (state) => {
    return {
      cocktails: state.cocktails
    }
}

export default connect(mapStateToProps)(CocktailsDetailsContainer)