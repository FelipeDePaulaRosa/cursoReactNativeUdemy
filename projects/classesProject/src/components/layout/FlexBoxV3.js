import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {
    return (
        <View style={style.FlexV3}>
            <Square side={20} color='#00F' />
            <Square side={30} color='#0F0' />
            <Square side={40} color='#F00' />
            <Square side={50} color='#F0F' />
            <Square side={60} color='#0FF' />
            <Square side={70} color='#FF0' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        backgroundColor: '#000',
        height: 350,
        width: '100%'
    }
})
