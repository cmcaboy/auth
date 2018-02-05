import React from 'react';
import {View,Text,Platform,StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
)

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: Platform.OS === 'ios'? 0:0,
        shadowColor: '#000',
        shadowOffset: { width:0,height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export {Header};