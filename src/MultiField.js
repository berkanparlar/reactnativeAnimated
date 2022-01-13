import React from 'react'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { stil } from './stil'

export default class MultiField extends Component {
    state = {
        animationWidth: new Animated.Value(200),
        animationHeight: new Animated.Value(200)
    }

    startAnimataion = () => {
        console.log("hata")
        Animated
            .timing(this.state.animationWidth,
                {
                    toValue: 350,
                    duration: 1000,
                })
            .start();

        Animated
            .timing(this.state.animationHeight,
                {
                    toValue: 350,
                    duration: 200,
                })
            .start();
    }
    render() {
        const animatedStyle = {
            width: this.state.animationWidth,
            height: this.state.animationHeight
        }
        return (

            <View style={stil.con}>
                <TouchableWithoutFeedback
                    onPress={this.startAnimataion}
                >
                    <Animated.View
                        style={[stil.myBox,animatedStyle]}
                    >
                        <Text>
                            React Native
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}