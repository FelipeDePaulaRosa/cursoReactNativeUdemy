import React, { useState } from 'react'
import { Text } from 'react-native'
import Style from '../Style'
import CounterDisplay from './CounterDisplay'
import CounterButton from './CounterButton'

export default props => {
    const [num, setNum] = useState(0);

    const increment = () => setNum(num + 1)
    const decrement = () => setNum(num - 1)

    return (

        <>
            <Text style={Style.textSizeBig}>
                CounterV2
            </Text>
            <CounterDisplay num={num} />
            <CounterButton increment={increment} decrement={decrement}/>
        </>
    )
}