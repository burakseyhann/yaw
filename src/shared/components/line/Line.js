import React from 'react';
import { Text, View } from 'react-native';

import styles from "./style"

function Line  (props)  {
    return(
        <View style={{...styles.line,...props.style}}>
        <Text style={styles.descriptor}>
           {props.descriptor}: <Text style={styles.description}>{props.description}</Text>
        </Text>
      </View>
);
};

export default Line;
