import React, {Component} from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const OrderTracking = () => {
    return (
        <View style={StyleSheet.container}>
            <Text> TRACKING </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default OrderTracking;