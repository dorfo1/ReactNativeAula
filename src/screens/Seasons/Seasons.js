import React from 'react'
import {View,StyleSheet,FlatList,ActivityIndicator} from 'react-native';

import TemporadaItem from '../../components/TemporadaItem/TemporadaItem'

import * as api from '../../utils/F1API'


class Seasons extends React.PureComponent{
    
    state={
        temporada:"",
        result:[],
        data:[1,2,3,4,5],
        loading:true
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
    
        api.buscarTemporadas().then(response => this.setState({result:response,loading:false}))
    }

    onTemporadaClick = temporada =>{
        this.props.navigation.navigate("MenuTemporada",{
            temporada:temporada
        })
    }

   
    render(){
        return(
            <View style={styles.container}>
                <FlatList data={this.state.result} numColumns={2} keyExtractor={ (item,index) => String(index)} renderItem={({item}) =>{
                    return <TemporadaItem temporadaClick={this.onTemporadaClick} temporada={item}/>
                }}/>
                {this.state.loading===true ? <ActivityIndicator size='large' color='#333' style={styles.loadingBar}/> : null }
            </View>
        );
       
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

export default Seasons