import React, { useState } from "react";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { style } from "./styles";
import Logo from "../../assets/logo.png";
import { MaterialIcons, Octicons, FontAwesome } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export default function Login() {
  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!user || !password) {
        return Alert.alert("Atenção", "Informe os campos obrigatórios!");
      }

      setTimeout(() => {
        if (user == "ans.servicos@gmail.com" && password == "123456") {
          Alert.alert("Logado com sucesso!");
        } else {
          Alert.alert("Usuario não Cadastrado");
        }
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image source={Logo} style={style.logo} resizeMode="contain" />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMid}>
        <Input 
          value={user}
          onChangeText={setUser}
          Tittle={'USUÁRIO'}
          IconRight={MaterialIcons}
          IconRightName={'email'}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          Tittle={'SENHA'}
          IconRight={Octicons}
          IconRightName={showPassword?'eye-closed':'eye'}
          secureTextEntry={showPassword}
          onIconRightPress={()=> setShowPassword(!showPassword)}
        />
      </View>
      <View style={style.boxBottom}>
       <Button 
          text={'ENTRAR'}
          loading={loading}
          onPress={()=>getLogin()}
       /> 
      </View>
      <Text style={style.txtBottom}>
        Cadastrar novo <Text style={style.txtBottomCreate}>Usuário</Text>.
      </Text>
    </View>
  );
}
