import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const TrackScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Track</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrackScreen;