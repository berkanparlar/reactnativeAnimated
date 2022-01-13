import React from 'react'
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class InterpolationRotate extends Component {
    state={
        animation:new Animated.Value(0),
    }
    
    startAnimation=()=>{
        Animated
        .timing(this.state.animation,{
            toValue:360,
            duration:1000,
        })
        .start();
    }
    render(){
        const interpolate=this.state.animation.interpolate({
            inputRange:[0,360],
            outputRange:['0deg','360deg']
        });

        const animatedStyles={
            transform:[{
                rotate:interpolate
            }]
        }
    return (
        <View style={stil.con}>
            <TouchableWithoutFeedback
            onPress={this.startAnimation}
            >
                <Animated.View
                style={[stil.myBox,animatedStyles]}
                >
                    <Text>React native</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    )
}
}