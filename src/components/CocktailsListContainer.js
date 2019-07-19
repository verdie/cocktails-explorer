import React, {Component} from 'react'
import { connect } from 'react-redux'
import CoctailList from './CocktailList';

class CocktailsListContainer extends Component{    
    render (){
        return <CoctailList cocktails={this.props.cocktails} />
    }
}

const mapStateToProps = (state) => {
    return {
      cocktails: state.cocktails
    }
}

export default connect(mapStateToProps)(CocktailsListContainer)