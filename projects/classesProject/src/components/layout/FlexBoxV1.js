import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'

export default props => {
    return (
        <View style={style.FlexV1}>
            <Square side={50} color='#00F' />
            <Square side={50} color='#0F0' />
            <Square side={50} color='#F00' />
            <Square side={50} color='#F0F' />
            <Square side={50} color='#0FF' />
            <Square side={50} color='#FF0' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1:{
        flexGrow: 1,
        backgroundColor: '#000',
        justifyContent: "center",
    }
})
