import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import FirstComponent from './components/First'

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
export default () => <View><FirstComponent/></View>