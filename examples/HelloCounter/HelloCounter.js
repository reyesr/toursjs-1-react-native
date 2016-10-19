import React, { Component } from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export class HelloCounter extends Component {
    constructor(props){
        super(props);
        this.state = {counter: 0};
    }

    increaseCounter() {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
                <TouchableOpacity onPress={()=>this.increaseCounter()}>
                    <Text style={{fontSize: 128}}>{this.state.counter}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
