import React from 'react'
import {View,StyleSheet,Text} from 'react-native'


const PilotoItem = props =>{

    return(
        <View style={styles.container}>
            <Text style={styles.primaryText}>{props.piloto.givenName} {props.piloto.familyName}</Text>
            <Text style={styles.secundaryText}>{props.piloto.nationality}</Text>
            <View style={styles.divider}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    primaryText:{
        fontSize:20,
        color:'#263238',
        fontWeight:'bold',
        marginTop:8,
        marginLeft:8
    },
    secundaryText:{
        fontSize:16,
        color:'#546E7A',
        marginLeft:8
    },
    divider:{
        width:'100%',
        marginTop:4,
        height:1,
        backgroundColor:'#CFD8DC'
    }
  
});

export default PilotoItem
