import React from 'react';
import {View,StyleSheet,Image,Text,ActivityIndicator} from 'react-native';
import * as api from '../../utils/F1API';

class DetalhesPiloto extends React.Component{
    

    state ={
        piloto:null,
        loading:true
    }
    
    static navigationOptions = () =>{
        return {
            title: "Detalhes do Piloto"
        }
    }

    componentDidMount(){
        api.buscarDetalhesPiloto(this.props.navigation.getParam('temporada'), this.props.navigation.getParam('piloto').driverId)
            .then(response => this.setState({piloto:response,loading:false}))
    }

    _renderDetalhes = () => {
        console.log(this.state.piloto)
        if(this.state.piloto!==null){
            return (
                <View style={styles.container}>
                 <Text style={styles.labelText}>Temporada {this.props.navigation.getParam('temporada')}</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.imagem} source={require('./../../../assets/racer_icon.png')}/>
                        <View style={{justifyContent: 'center',}}>
                            <Text style={styles.textPrimary}>Piloto: {this.state.piloto.Driver.givenName} {this.state.piloto.Driver.familyName}</Text>
                            <Text style={styles.secundaryText}>Nacionalidade: {this.state.piloto.Driver.nationality}</Text>
                            <Text style={styles.secundaryText}>Data de nascimento: {this.state.piloto.Driver.dateOfBirth}</Text>
                            <Text style={styles.secundaryText}>Equipe: {this.state.piloto.Constructors[0].name}</Text>
                        </View>
                    </View>
                    <View style={styles.divider}></View>
                    <Text style={styles.labelText}>Resultados na temporada</Text>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.imagem} source={require('./../../../assets/standings_icon.png')}/>
                        <View style={{justifyContent: 'center',}}>
                            <Text style={styles.textPrimary}>Posição: {this.state.piloto.position}</Text>
                            <Text style={styles.secundaryText}>Pontuação: {this.state.piloto.points}</Text>
                            <Text style={styles.secundaryText}>Vitórias: {this.state.piloto.wins}</Text>
                        </View>
                    </View>
                </View>
            )
            
        } else{
            return null;
        }    
    }
   
    render(){
        return(
            <View style={{flex:1}}>
                {this._renderDetalhes()}
                {this.state.loading===true ? <ActivityIndicator size='large' color='#333' style={styles.loadingBar}/> : null }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imagem:{
        width:150,
        height:150,
        resizeMode:'contain'
    },
    labelText :{
        width:'100%',
        padding: 8,
        textAlign:'center',
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor:'#D3D3D3',
        alignSelf: 'center',
    },
    textPrimary: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    secundaryText: {
        fontSize: 16,
        color: '#546E7A',
    },
    divider: {
        width: '100%',
        marginTop: 4,
        height: 1,
        backgroundColor: '#CFD8DC'
    },
    loadingBar:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignSelf: 'center',
    }
});


export default DetalhesPiloto;