import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('./assets/burguer.jpg')} />
      <Text>Sistema</Text>
      <Text style={styles.titulo}>Comanda</Text>
      <TextInput style={styles.input} placeholder='e-mail' />
      <TextInput style={styles.input} placeholder='senha' secureTextEntry />
      <Text style={styles.botao}>entrar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#121A2C',
    fontSize: 32,
    fontWeight: 'bold'
  },
  input:{
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: '#747474',
    borderWidth: 1,
    marginVertical: 20
  },
  botao: {
    backgroundColor: '#121A2C',
    color: '#FFBA26',
    paddingVertical: 8,
    paddingHorizontal: 60,
    borderRadius: 4
  },
  imagem:{
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0
  }
}); 
