import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'



const CustomButton = props => {

    customButtonClick = () => {
        props.customButtonClicked(props.title)
    }

    return (
        <TouchableOpacity style={{ width: '100%', alignItems: 'center' }} onPress={this.customButtonClick}>
            <View style={[{ backgroundColor: props.cor }, styles.container]}>
                <Text style={styles.textPrimary}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        width: '80%',
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#f3f3f3',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPrimary: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFF'
    }
});

export default CustomButton;