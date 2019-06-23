import React from 'react'
import {StyleSheet,View,FlatList,ActivityIndicator} from 'react-native'
import * as api from '../../utils/F1API'
import PilotoItem from '../../components/PilotoItem/PilotoItem'

class Pilotos extends React.Component{

    state={
        pilotos:[],
        loading:true
    }

    static navigationOptions = ({navigation}) =>{
        return {
            title: "Pilotos de " + navigation.getParam('temporada').season
        }
    }


    onPilotoClick = piloto =>{
        const temporada = this.props.navigation.getParam('temporada').season;
        this.props.navigation.navigate("DetalhesPiloto",{
            temporada:temporada,
            piloto:piloto
        })
    }
    
    componentDidMount(){
        let temporada = this.props.navigation.getParam('temporada')
        api.buscarPilotos(temporada.season)
            .then(response => this.setState({pilotos:response,loading:false}))
            .catch(error => console.log(error))
    
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.pilotos} keyExtractor={item => item.driverId} renderItem={({item}) =>
                    <PilotoItem piloto={item} onClick={this.onPilotoClick}/>
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



export default Pilotos