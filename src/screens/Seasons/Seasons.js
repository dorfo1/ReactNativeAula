import React from 'react'
import {View,StyleSheet,Text,FlatList,TextInput,Dimensions} from 'react-native';

import TemporadaItem from '../../components/TemporadaItem/TemporadaItem'

import * as api from '../../utils/F1API'


class Seasons extends React.PureComponent{
    
    state={
        temporada:"",
        result:[],
        data:[1,2,3,4,5]
    }

    static navigationOptions = () =>{
        return {
            title: 'Temporadas'
        }
    }

    onTextChanged = (key,valor) =>{
        this.setState({[key]:valor})
    }

    componentDidMount(){
        this.renderSeason()
    }

    renderSeason(){
    
        api.buscarTemporadas().then(response => this.setState({result:response}))
    }

    onTemporadaClick = temporada =>{
        this.props.navigation.navigate("MenuTemporada",{
            temporada:temporada
        })
    }

   
    render(){
        return(
            <FlatList data={this.state.result} numColumns={2} keyExtractor={ (item,index) => String(index)} renderItem={({item}) =>{
                return <TemporadaItem temporadaClick={this.onTemporadaClick} temporada={item}/>
            }}/>
        );
       
    }
}

export default Seasons