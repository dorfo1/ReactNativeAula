import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {Button} from 'native-base'





class TemporadaItem extends React.Component{

    tempClicked = () =>{
        this.props.temporadaClick(this.props.temporada)
    }

    render(){
        return(
            <View style={{width:'100%',justifyContent:"center"}}>
                <Button block style={{width:'80%',margin:4}} onPress={this.tempClicked} >
                    <Text>{this.props.temporada.season}</Text>
                </Button>
            </View>
        );
    }
}
export default TemporadaItem;