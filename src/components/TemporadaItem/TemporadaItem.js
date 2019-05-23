import React from 'react'
import {View,StyleSheet} from 'react-native'
import {Button} from 'native-base'

const TemporadaItem = props =>{
    return(
    // <View styles={styles.container}>
        <Button>{props.temporada.season}</Button>
    // </View>)
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%'
    }
});

export default TemporadaItem;