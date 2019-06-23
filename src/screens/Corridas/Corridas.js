import React from 'react'
import {StyleSheet,View,FlatList,ActivityIndicator} from 'react-native'
import * as api from '../../utils/F1API'
import CorridaItem from '../../components/CorridaItem/CorridaItem'

class Corridas extends React.Component{

    state = {
        corridas:[],
        loading:true
    }

    static navigationOptions = ({navigation}) =>{
        return {
            title: "Corridas de " + navigation.getParam('temporada').season
        }
    }

    onCorridaClick = corrida =>{
        const temporada = this.props.navigation.getParam('temporada').season;
        this.props.navigation.navigate("DetalhesCorrida",{
            temporada:temporada,
            corrida:corrida
        })
    }



    componentDidMount(){
        let temporada = this.props.navigation.getParam('temporada')
        api.buscarCorridas(temporada.season)
            .then(response => this.setState({corridas:response,loading:false}))
            .catch(error => console.log(error))
    }



    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.corridas} keyExtractor={item => item.circuitId} renderItem={({item}) =>
                    <CorridaItem corrida={item} onClick={this.onCorridaClick}/>
                }/>
                {this.state.loading===true ? <ActivityIndicator size='large' color='#333' style={styles.loadingBar}/> : null }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    loadingBar:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignSelf: 'center',
    }
})


export default Corridas;