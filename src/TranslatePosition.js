import React from 'react'
import { View, Text, Animated,  TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class TranslatePosition extends Component {
    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        console.log("hata")
        Animated
        .timing(this.state.animation, {
                toValue: 200,
                duration: 300,
                useNativeDriver: true // Add This line
        })
        .start()
    }

    render() {
        const animatedStyle = {
            transform: [
                {
                    translateX:this.state.animation
                }
            ]
        }
        return (
            <View style={stil.con}>
                <TouchableOpacity onPress={()=>console.log("hata")}><Text>fasdfasdfasdf</Text></TouchableOpacity>
                
                <TouchableWithoutFeedback
                    onPress={this.startAnimation}
                >
                    <Animated.View
                        style={[stil.myBox, animatedStyle]}
                    >
                        <Text style={{ color: 'white' }}> React Native</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

