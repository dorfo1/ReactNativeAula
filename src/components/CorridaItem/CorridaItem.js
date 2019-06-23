import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native'


const CorridaItem = props => {

    onItemClick = () =>{
        props.onClick(props.corrida)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={this.onItemClick}>
            <Image style={styles.image} source={require('./../../../assets/race_icon.png')}/>
            <View style={styles.containerNome}>
                <Text style={styles.primaryText}>{props.corrida.circuitName}</Text>
                <Text style={styles.secundaryText}>{props.corrida.Location.locality}-{props.corrida.Location.country}</Text>
                <View style={styles.divider}></View>
            </View>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center'
    },
    containerNome:{
        width:'100%'
    },
    image:{
        width:50,
        height:50,
    },
    primaryText: {
        fontSize: 20,
        color: '#1A237E',
        fontWeight: 'bold',
        marginTop: 8,
        marginLeft: 8
    },
    secundaryText: {
        fontSize: 16,
        color: '#546E7A',
        marginLeft: 8
    },
    divider: {
        width: '100%',
        marginTop: 4,
        height: 1,
        backgroundColor: '#CFD8DC'
    }

});

export default CorridaItem
