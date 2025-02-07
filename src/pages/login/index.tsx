import React, { useState } from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native'

import { style } from "./styles";
import Logo from '../../assets/logo.png'
import {MaterialIcons} from '@expo/vector-icons';
import { themes } from "../../global/themes";


export default function Login (){

    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    async function getLogin(){
        try {
            setLoading(true)
            if(!user || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios!')
            }
            
            setTimeout(()=>{
                if(user == 'ans.servicos@gmail.com' && password == '123456'){
                    Alert.alert('Logado com sucesso!')
                }else{
                    Alert.alert('Usuario não Cadastrado')
                }
                setLoading(false)
            }, 3000)


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Text style={style.tittleInput}>USUÁRIO</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={user}
                        onChangeText={setUser}
                    />
                    <MaterialIcons 
                        name="person"
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
                <Text style={style.tittleInput}>SENHA</Text>
                <View style={style.boxInput}>
                    <TextInput 
                        style={style.input}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <MaterialIcons 
                        name="remove-red-eye"
                        size={20}
                        color={themes.colors.gray}
                    />
                </View>
            </View>
            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {loading?
                        <ActivityIndicator color={'#FFFF'} size={'small'} />
                    :
                        <Text style={style.txtButton}>
                        Entrar
                    </Text>}
                    </TouchableOpacity>
            </View>
            <Text style={style.txtBottom}>
                Cadastrar novo <Text style={style.txtBottomCreate}>
                Usuário
                </Text>
            </Text>
        </View>
    )
}