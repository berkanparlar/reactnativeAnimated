import React from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'


export default class Timing extends Component { //1
    state ={
        animation: new Animated.Value(1)
    }

    startAnimation =()=>{
        Animated
            .timing(this.state.animation,{
                toValue:0,
                duration:2000,
            })
            .start(()=>{
                Animated
                    .timing(this.state.animation,{
                        toValue:2,
                        duration:2000
                    })
                    .start();
            });
    }
    render() {
        this.state.animation.addListener(({value})=>console.log(value))
        const animatedStyle={
            opacity:this.state.animation
        }
    return (
        <View style={stil.con}>
            <TouchableOpacity
            onPress={this.startAnimation}
            >
                <Animated.View
                style={[stil.myBox,animatedStyle]}
                >
                    <Text style={{color:'white'}}> React Native</Text>
                </Animated.View>
            </TouchableOpacity>
        </View>
    )
}
}

