import React from 'react';
import { View, Text, Image } from 'react-native';
import batLogo from '../../../assets/bat-logo.png';
import { styles } from './BatLogoStyles';

export function BatLogo() {
    return (
        <>
            <Text style={styles.title}>BAT PASS GENERATOR</Text>
            <Image 
            style={styles.batLogo}
            source={batLogo}/>
        </>
    );
}