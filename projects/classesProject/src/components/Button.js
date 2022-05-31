import React from 'react'
import { Button } from 'react-native'

export default props => {
    function execute() {
        console.warn("Event: onPress");
    }

    return (
        <>
            <Button
                title="Execute #01"
                onPress={execute}
            />
            <Button
                title="Execute #02"
                onPress={() => console.warn("Event: onPress Arrow Function")}
            />
        </>
    )
}