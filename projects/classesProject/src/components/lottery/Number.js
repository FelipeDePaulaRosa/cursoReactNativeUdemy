import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Style from '../Style'

export default ({ number }) => {
    return (
        <View style={style.Container}>
            <Text style={[Style.textSizeBig, style.Num]}>
                {number}
            </Text>
        </View>
    )
}


const style = StyleSheet.create({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#FFF'
    }
})