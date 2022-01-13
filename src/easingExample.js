import React from 'react'
import { View, Text, Animated, TouchableWithoutFeedback, Dimensions, Easing } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class easingExample extends Component {
    state = {
        animation: new Animated.Value(0),
    }

    startAnimation = () => {
        Animated
            .timing(this.state.animation, {
                toValue: 1,
                duration: 1000,
                easing: Easing.bounce
            })
            .start(() => {
                Animated
                    .timing(this.state.animation, {
                        duration: 1000,
                        toValue: 0,
                        easing: Easing.elastic(3)
                    })
                    .start(() => {
                        this.startAnimation()
                    })
            });
    }

    render() {
        const animatedStyles = {
            transform: [{
                translateX: this.state.animation
            }]
        }
        return (
            <View style={stil.con}>
                <TouchableWithoutFeedback
                    onPress={this.startAnimation}
                >
                    <Animated.View
                        style={[stil.myBox, animatedStyles]}
                    >
                        <Text>React Native</Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

