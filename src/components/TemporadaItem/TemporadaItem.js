import React from 'react'
import {View,StyleSheet,Text,TouchableHighlight} from 'react-native'
import {Button, Item} from 'native-base'


class TemporadaItem extends React.Component{

    tempClicked = () =>{
        this.props.temporadaClick(this.props.temporada)
    }

    render(){
        return(
            <TouchableHighlight style={{flex:1}} onPress={this.tempClicked}>
                <View style={styles.gridView}>
                    <Text style={styles.gridText}>{this.props.temporada.season}</Text>
                </View>
            </TouchableHighlight>
            
        );
    }
}

const styles = StyleSheet.create({
    gridView:{
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        height:50,
        backgroundColor:'#348faa',
        margin:5
    },
    gridText:{
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'center',
        color:'#fff',
        padding:10
    }
})


export default TemporadaItem;