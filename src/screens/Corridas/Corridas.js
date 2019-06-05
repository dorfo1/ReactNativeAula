import React from 'react'
import {Text,View,FlatList} from 'react-native'
import * as api from '../../utils/F1API'
import CorridaItem from '../../components/CorridaItem/CorridaItem'

class Corridas extends React.Component{

    state = {
        corridas:[]
    }

    static navigationOptions = ({navigation}) =>{
        return {
            title: "Corridas de " + navigation.getParam('temporada').season
        }
    }

    componentDidMount(){
        let temporada = this.props.navigation.getParam('temporada')
        api.buscarCorridas(temporada.season)
            .then(response => this.setState({corridas:response}))
            .catch(error => console.log(error))
    }



    render(){
        return(
            <FlatList data={this.state.corridas} keyExtractor={item => item.circuitId} renderItem={({item}) =>
                <CorridaItem corrida={item}/>
            }/>
        )
    }
}

export default Corridas;