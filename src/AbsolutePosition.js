import React from 'react'
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class AbsolutePosition extends Component {
    state={
        animation:new Animated.Value(0),
    }
    startAnimation=()=>{
        Animated
        .timing(
            this.state.animation,
            {
                toValue:50,
                duration:500
            })
            .start();
    }
    render() {
        const animatedStyle={
            left:this.state.animation,
            right:this.state.animation,
            bottom:this.state.animation
        }
        return (
            <View style={stil.con}>
                <TouchableWithoutFeedback
                onPress={this.startAnimation}
                >
                    <Animated.View
                    style={[stil.myBox,animatedStyle]}
                    >
                        <Text>React native</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
