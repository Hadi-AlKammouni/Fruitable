import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDBE3B'
  },
  header: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 3,
      backgroundColor: "#ffffff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 20,
      paddingHorizontal: 30
  },
  text_header: {
      color: "#ffffff",
      fontWeight: 'bold',
      fontSize: 30,
  },
  button: {
      justifyContent:'center',
      alignItems: 'center',
      marginTop: 50,
      backgroundColor: "#FDBE3B",
      height: 50,
      borderRadius:15
  },
  disable_button: {
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 50,
    backgroundColor: "#AAA8A8",
    height: 50,
    borderRadius:15
  },
  logo: {
      width: 70,
      height: 70
  }
});

export default styles;