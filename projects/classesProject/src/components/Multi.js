import React from 'react'
import { Text } from 'react-native'
import Style from './Style'

export default function CompDefault() {
    return <Text style={Style.textSizeBig}>Comp #Default</Text>
}

export function Comp1() {
    return <Text style={Style.textSizeBig}>Comp #01</Text>
}

export function Comp2() {
    return <Text style={Style.textSizeBig}>Comp #02</Text>
}
