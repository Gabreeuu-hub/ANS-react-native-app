import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text } from 'react-native'
import { style } from "./style";

type Props = TouchableHighlightProps & {
    text: String,
    loading?:boolean,
}

export function Button ({...rest}:Props){
    return (
        <TouchableOpacity 
            style={style.button}
            {...rest}
            activeOpacity={0.6}    
        >
            {rest.loading?<ActivityIndicator />:<Text style={style.txtButton}>{rest.text}</Text>}
        </TouchableOpacity>
    )
}