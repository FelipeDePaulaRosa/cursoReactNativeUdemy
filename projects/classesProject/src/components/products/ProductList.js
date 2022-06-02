import React from 'react'
import { FlatList, Text } from 'react-native'
import Style from '../Style'
import Products from './Products'

export default props => {
    let index = 0;
    const GetProductListFlatList = ({ item: product }) => {
        return <Text>{product.id}) Name: {product.name} - Price ${product.price}</Text>
    }

    function GetProductListMap() {
        return Products.map((product, index = 0) => {
            return <Text key={product.id}>{index + 1}) Name: {product.name} - Price ${product.price}</Text>
        })
    }

    return (
        <>
            <Text style={Style.textSizeBig}> List of products map: </Text>
            {GetProductListMap()}

            <Text style={Style.textSizeBig}> List of products flat list: </Text>
            <FlatList
                data={Products}
                keyExtractor={product => product.id}
                renderItem={GetProductListFlatList}
            />

        </>
    )
}