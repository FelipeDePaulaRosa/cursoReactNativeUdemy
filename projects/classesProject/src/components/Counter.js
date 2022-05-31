import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Style from './Style'

export default ({inicial = 0}) => {
    // let number = props.inicial;
    const [number, setNumber] = useState(inicial)


    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);

    return (
        <>
            <Text>{number}</Text>
            <Button title='+' onPress={increment} />
            <Button title='-' onPress={decrement} />
        </>
    )

}