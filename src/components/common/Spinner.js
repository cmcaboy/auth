import React from 'react';
import {View,ActivityIndicator} from 'react-native';


const Spinner = ({size}) => {
    return (
        <View style={styles.spinnerStyle}>
            {/* you can pass in a size parameter. In this example, we are assigning the passed in parameter,
                but if none is specified, we will assign large as the size. */}
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export {Spinner};