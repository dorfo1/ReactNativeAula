import React from 'react'
import {StyleSheet,Text,View,FlatList} from 'react-native'
import * as api from '../../utils/F1API'
import PilotoItem from '../../components/PilotoItem/PilotoItem'

class Pilotos extends React.Component{

    state={
        pilotos:[]
    }

    static navigationOptions = ({navigation}) =>{
        return {
            title: "Pilotos de " + navigation.getParam('temporada').season
        }
    }
    
    componentDidMount(){
        let temporada = this.props.navigation.getParam('temporada')
        api.buscarPilotos(temporada.season)
            .then(response => this.setState({pilotos:response}))
            .catch(error => console.log(error))
    
    }

    render(){
        return(
            <FlatList data={this.state.pilotos} keyExtractor={item => item.driverId} renderItem={({item}) =>
                <PilotoItem piloto={item}/>
            }/>
        )
    }

}


export default Pilotos