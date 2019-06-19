import React from 'react';
import { View } from 'react-native';
import * as api from '../../utils/F1API';


class DetalhesCorrida extends React.Component {

    state = {
        posicoes: []
    }

    componentWillMount() {
        api.buscarDetalhesCorrida(this.props.navigation.getParam('Temporada'), this.props.navigation.getParam('Corrida'))
    }

    render() {
        return (
            <View></View>
        );
    }
}


export default DetalhesCorrida;