import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {
    return (
        <View style={style.FlexV4}>
            <View style={style.V0}/>
            <View style={style.V1}/>
            <View style={style.V2}/>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000',
    },
    V0: {
        backgroundColor: '#36c9a7',
        height: 300
    },
    V1: {
        backgroundColor: '#fff10a',
        flexGrow: 2
    },
    V2: {
        backgroundColor: '#dd2f00',
        flexGrow: 1        
    }
})
