import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import Style from './Style'

export default props => {
    const [name, setName] = useState(props.name || "");

    return (
        <View>
            <Text>{name}</Text>
            <TextInput
                placeholder="Input your name:"
                value={name}
                onChangeText={name => setName(name)}
            />
        </View>
    )
}