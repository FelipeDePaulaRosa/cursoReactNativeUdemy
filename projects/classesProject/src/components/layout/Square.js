import React from 'react'
import { View } from 'react-native'

export default props => {
    return (
        <View style={{
            height: props.side || 20,
            width: props.side || 20,
            backgroundColor: props.color || '#000'
        }}></View>
    )
}

// const style = StyleSheet.create({
//     square: {
//         height:20,
//         width: 20,
//         backgroundColor: '#000'
//     }
// })