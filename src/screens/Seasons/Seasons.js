import React from 'react'
import {View,StyleSheet,Text,FlatList,TextInput} from 'react-native';

import TemporadaItem from '../../components/TemporadaItem/TemporadaItem'




class Seasons extends React.PureComponent{
    
    state={
        temporada:"",
        result:[]
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

   
    render(){
        return(
            <View style={styles.container}>
                <TextInput placeholder="Busque a temporada"  onChangeText={(text) => {this.onTextChanged("temporada",text)}} value={this.state.temporada} style={styles.textField}/>
                <FlatList data={this.state.result} keyExtractor={ (item,index) => String(index)} renderItem={(item) =>{
                    <TemporadaItem temporada={item}/>
                }}/>
                <Text>{this.state.result.length}</Text>
            </View>
        );
       
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      marginLeft:20
    },
    textField:{
        width:'100%',
        marginTop:'20%',
    },

})

export default Seasons