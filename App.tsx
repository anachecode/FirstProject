
import { StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default function App() {
  function goalInputHandlerP() {};
  function addGoalHandler() {};
  return (
    <View style={styles.appContainer}>
      <View style= {styles.appContainer}>
        <TextInput style={styles.goalsContainer} placeholder="Your course goal!"/>
        <Button title = "Add Goal" />
      </View>
      <View style ={styles.goalsContainer}>
        <Text> Anache's Application !</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalsContainer: {
    margin:16,
    borderWidth:2,
    borderColor: 'red',

  }
});
