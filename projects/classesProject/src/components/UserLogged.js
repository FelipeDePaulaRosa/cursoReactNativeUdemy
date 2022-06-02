import React from 'react'
import { Text } from 'react-native'
import Style from './Style'
import If from './If'

export default (props) => {
    const user = props.user || {}
    return (
        <>
            <If teste={user && Object.keys(user).length !== 0}>
                <Text style={Style.textSizeBig}>User Logged:</Text>
                <Text style={Style.textSizeBig}>{user.name} - {user.mail}</Text>
            </If>
        </>
    )
}