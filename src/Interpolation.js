import React from 'react'
import { View, Text, TouchableWithoutFeedback, Animated, TouchableOpacity } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class Interpolation extends Component {
    state = {
        animation: new Animated.Value(0),
    }

    startAnimation = () => {
        console.log("asdfgasdfasdf")
        Animated
            .timing(this.state.animation, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: false
            })
            .start();
    }
    render() {
        const boxInterpolate = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['red','black']
        });

        const textInterpolate = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:['black','white']
        });

        const boxAnimationStyle = {
            backgroundColor: boxInterpolate
        }

        const textAnimationStyle = {
            color: textInterpolate
        }
        return (
            <View style={stil.con}>
                
                <TouchableWithoutFeedback
                    onPress={this.startAnimation}
                >
                    <Animated.View
                        style={[stil.myBox, boxAnimationStyle]}
                    >
                        <Animated.Text style={textAnimationStyle}>React Native</Animated.Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

