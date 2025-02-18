import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      flexDirection: 'column',
      borderColor: '#fff',
      borderWidth: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 60,
      paddingTop: 20,
      paddingBottom:10,
      backgroundColor: '#4D4D4D',
    },
    inputContainer:{
      width: '80%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 5,
    }
  });

  export default styles;