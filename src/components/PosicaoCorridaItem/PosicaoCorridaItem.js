import React from 'react';
import {View,StyleSheet,Text} from 'react-native'

const PosicaoCorridaItem = props =>{

    _verificaPosicao = () =>{
        if(props.posicao.position==='1'){
            return {backgroundColor:'#FFD700'}
        }else if(props.posicao.position==='2'){
            return {backgroundColor:'#C0C0C0'}
        }else if (props.posicao.position==='3'){
            return {backgroundColor:'#cd7f32'}
        }else{
            return null
        }
    }


    return(
        <View style={[styles.container,this._verificaPosicao()]}>
            <Text style={styles.primaryText}>{props.posicao.position}</Text>
            <View>
                <Text style={styles.primaryText}>{props.posicao.Driver.givenName} {props.posicao.Driver.familyName}</Text>
                <Text style={styles.secundaryText}>{props.posicao.Constructor.name}</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%'
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
})

export default PosicaoCorridaItem;