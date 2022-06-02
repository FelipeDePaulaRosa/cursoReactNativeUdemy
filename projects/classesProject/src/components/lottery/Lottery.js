import React, { Component } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import Style from '../Style'
import Number from './Number'

export default class Lottery extends Component {
    state = {
        quantity: this.props.quantity,
        numbers: []
    }

    changeNumberQuantity = (numberQuantity) => {
        this.setState({ quantity: +numberQuantity });
    }

    generateNumberNotContained = numbers => {
        const newNumber = parseInt(Math.random() * 60) + 1;
        return numbers.includes(newNumber) ? this.generateNumberNotContained(numbers) : newNumber;
    }

    generateNumbers = () => {
        const numbers = Array(this.state.quantity)
            .fill()
            .reduce(number => [...number, this.generateNumberNotContained(number)], []);
        this.setState({ numbers });
    }

    showNumbers = () => {
        const numbers = this.state.numbers;
        return numbers.map(number => {
            return <Number key={number} number={number} />
        })
    }

    render() {
        return (
            <>
                <Text style={Style.textSizeBig}>Lottery generator</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Quantity of numbers'
                    value={`${this.state.quantity}`}
                    onChangeText={numberQuantity => this.changeNumberQuantity(numberQuantity)}
                />
                <Button
                    title='Generate'
                    onPress={this.generateNumbers}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.showNumbers()}
                </View>
                {/* <Text style={Style.textMidSize}>
                    {this.state.numbers.join(',')}
                </Text> */}
            </>
        )
    }
}