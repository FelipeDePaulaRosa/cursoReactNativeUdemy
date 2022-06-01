import React from 'react'
import { Text } from 'react-native'
import Style from '../Style'
import Children from './Children'

export default props => {
    return (
        <>
            <Text>Members of family:</Text>
           {props.children}
        </>
    )
}