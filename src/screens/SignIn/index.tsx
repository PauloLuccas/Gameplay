
import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import { Background } from '../../../src/components/Background';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme';

export function SignIn() {
  // const Navigation = useNavigation();
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    // Navigation.navigate('Home');
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error)
    }
  }  

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}  
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seu amigos
          </Text>

          { 
            loading ?  <ActivityIndicator color={theme.colors.primary} />
            :
            <ButtonIcon
              title="Entrar com Discord"
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  )
}