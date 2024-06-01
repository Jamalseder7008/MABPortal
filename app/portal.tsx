import { StyleSheet, Text, View } from 'react-native';

// // index.tsx - this might need to go into index.tsx
// import { AppRegistry } from 'react-native';
// import App from '../src/App'; // Ensure this path is correct
// import { name as appName } from '../package.json'; // Use package.json for Expo projects

// AppRegistry.registerComponent(appName, () => App);
// //up to here
export default function Portal() {
  return (

    <View style={styles.container}>
        <Text style={{ color: '#000' }}>This is where the Quran classes portal will go</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});