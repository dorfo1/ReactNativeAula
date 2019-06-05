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

    static navigationOptions = ({navigation}) =>{
        return {
            title: "Temporada: " + navigation.getParam('temporada').season
        }
    }

    onCustomButtonClicked = title =>{
        this.props.navigation.navigate(title,{
            temporada:this.state.temporada
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <CustomButton title={"Corridas"} cor={'#1A237E'} customButtonClicked={this.onCustomButtonClicked}/>
                <CustomButton title={"Pilotos"} cor={'#263238'} customButtonClicked={this.onCustomButtonClicked}/>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
  
})