import React, { Component } from 'react';
import { Button, View } from 'react-native';

export default class Main extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Click this" onPress={() => { this.props.navigation.navigate('Next') }} />
            </View>
        );
    }
}
