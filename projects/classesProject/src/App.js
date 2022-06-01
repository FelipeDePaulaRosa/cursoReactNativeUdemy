import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import FirstComponent from './components/First'
import CompDefault, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax'
import Random from './components/Random'
import Title from './components/Title'
import CustomButton from './components/Button'
import Counter from './components/Counter'
import CounterV2 from './components/counter/CounterV2'

export default () => (
    <SafeAreaView style={style.App}>
        {/* <FirstComponent /> */}
        {/* <CompDefault /> */}
        {/* <Comp1 /> */}
        {/* <Comp2 /> */}
        {/* <MinMax min={3} max={20}/> */}
        {/* <Random min={10} max={60}/> */}
        {/* <Title principal="Fragment" secundary="Text with fragment"/> */}
        {/* <CustomButton/> */}
        {/* <Counter inicial={5}/> */}
        <CounterV2/>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#FFF',
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});




/* 1 Possibilty to export function components */
// function App() {
//     return (
//         <SafeAreaView>
//             <Text>1</Text>
//         </SafeAreaView>
//     );
// }
// export default App

/* 2 Possibilty to export function components */
// const App = function () {
//     return <Text>2</Text>
// }

// export default App

/* 2.1 Possibilty to export function components */
// export default function () {
//     return <Text>2.1</Text>
// }


/* 3 Possibilty to export function components */
// export default () => <View><FirstComponent/></View>