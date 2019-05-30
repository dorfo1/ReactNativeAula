import React from 'react'
import {StyleSheet,Text,View} from 'react-native'
import * as api from '../../utils/F1API'

class Pilotos extends React.Component{

    state={
        pilotos:[]
    }
    
    componentDidMount(){
        let temporada = this.props.navigation.getParam('temporada')
        api.buscarPilotos(temporada.season)
            .then(response => console.log(response))
            .catch(error => console.log(error.message))
    }

    render(){
        return(
            <View></View>
        )
    }

}


export default Pilotos