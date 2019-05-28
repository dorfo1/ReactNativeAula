import React from 'react'
import {View} from 'react-native'
import { FlatList ,Text} from 'react-native';


export default class Corridas extends React.Component{

    componentWillMount(){
        console.log(this.props)
    }

    render(){
        return(
            <FlatList
            data={[{key: 'a'}, {key: 'b'}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
        );
    }
}