import React from 'react'
import {View,StyleSheet,Text,FlatList,TextInput,Dimensions} from 'react-native';

import TemporadaItem from '../../components/TemporadaItem/TemporadaItem'






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
       fetch("https://ergast.com/api/f1/seasons.json",
       {method:"GET", headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',}})
            .then(resp => resp.json())
            .then(resp => this.setState({result:resp.MRData.SeasonTable.Seasons}))
            .catch(error => alert(error))
    }

    onTemporadaClick = temporada =>{
        console.log(this.props.navigation)
        console.log(temporada)
        //this.props.navigation.navigate("Corridas")
    }

   
    render(){
        return(
           <FlatList data={this.state.result} keyExtractor={ (item,index) => String(index)} renderItem={({item}) =>{
                return <TemporadaItem temporadaClick={this.onTemporadaClick} temporada={item}/>
           }}/>
        );
       
    }
}

const screenWidth = Dimensions.width;

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginLeft:20
    },
    textField:{
        width:'100%',
    },
    listaTemporadas:{
        flex:1,
        width:screenWidth
    }

})

export default Seasons