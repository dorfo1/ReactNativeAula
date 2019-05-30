import React from 'react'
import {View,FlatList ,Text,StyleSheet} from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'



export default class MenuTemporada extends React.Component{

    state={
        temporada: null
    }

    componentWillMount(){
        this.setState({temporada:this.props.navigation.getParam('temporada')})
    }

    onCustomButtonClicked = title =>{
        this.props.navigation.navigate(title,{
            temporada:this.state.temporada
        })
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.textHeader}>Temporada : {this.state.temporada.season}</Text>
                <View style={styles.containerButtons}>
                    <CustomButton title={"Corridas"} cor={'#9575cd'} customButtonClicked={this.onCustomButtonClicked}/>
                    <CustomButton title={"Pilotos"} cor={'#00897b'} customButtonClicked={this.onCustomButtonClicked}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    containerButtons:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    textHeader:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:40
    }
})