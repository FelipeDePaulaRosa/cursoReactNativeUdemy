import React from 'react'
import { Text, View } from 'react-native'
import Style from './Style'

export default ({ num = 0 }) => {
    return (
        <View>
            <Text style={Style.textSizeBig}>Result is:</Text>
            <Text style={Style.textSizeBig}>{num % 2 === 0 ? 'Par' : 'Impar'}</Text>
        </View>
    )
}