import React from 'react'
import { Text } from 'react-native'
import Style from './Style'

export default props => {
    let {min, max} = props;
    min += 1000;
    max += 1000;
    const delta = max - min + 1;
    const random = parseInt(Math.random() * delta) + min;
    return(
        <Text style={Style.textSizeBig}>
            O valor aleatório é {random}
        </Text>
    )
}