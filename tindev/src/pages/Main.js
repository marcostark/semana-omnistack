import React from 'react';
import { SafeAreaView, Image } from 'react-native';


import api from '../services/api';

import logo from '../assets/logo.png'

export default function Main() {
    return (
        <SafeAreaView>
            <Image source={logo} />
        </SafeAreaView>
    )
}