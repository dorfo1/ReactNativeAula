import React from 'react';
import { View,Text,StyleSheet,FlatList,ActivityIndicator } from 'react-native';
import * as api from '../../utils/F1API';

import PosicaoCorridaitem from '../../components/PosicaoCorridaItem/PosicaoCorridaItem'



class DetalhesCorrida extends React.Component {

    state = {
        corrida: "",
        posicoes:[],
        loading:true
    }

    static navigationOptions = () =>{
        return {
            title: "Detalhes da Corrida"
        }
    }

    componentWillMount() {
        api.buscarDetalhesCorrida(this.props.navigation.getParam('temporada'), this.props.navigation.getParam('corrida').circuitId)
            .then(response => this.setState({corrida:response.raceName,posicoes:response.Results,loading:false}))
    }

    render() {
        return (
            <View style={styles.container} >
                <Text style={styles.textPrimary}>{this.state.corrida}  {this.state.loading===false ? "- " + this.props.navigation.getParam('temporada') : null} </Text>
                <FlatList data={this.state.posicoes} keyExtractor={item => item.position} style={{marginTop:15}} renderItem={({item}) =>{
                    return <PosicaoCorridaitem posicao={item} />
                }}/>
                {this.state.loading===true ? <ActivityIndicator size='large' color='#333' style={styles.loadingBar}/> : null }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    textPrimary: {
        fontSize: 28,
        marginTop:25,
        fontWeight: 'bold',
        alignSelf: 'center',
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


export default DetalhesCorrida;