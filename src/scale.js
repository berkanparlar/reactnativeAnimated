import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class Scale extends Component {
    state={
        animation: new Animated.Value(1)
    }

    startAnimation= ()=>{
        Animated
        .spring(this.state.animation,{
            duration:3000,
            toValue:0
        })
        .start();
    }

    render(){
        const animatedStyle={
            transform:[
                {
                    scale : this.state.animation
                    //   scaleY :this.state.animation
                //   scaleX :this.state.animation

                }
            ]
        }
    return (
        <View style={stil.con}>
            <Text>dfasdfasdfasdf</Text>
            <TouchableOpacity
            onPress={this.startAnimation}
            >
                <Animated.View
                style={[stil.myBox,animatedStyle]}
                >
                    <Text> React Native</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}
}

