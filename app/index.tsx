import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {

  return <View style={styles.container}>
    <Text>Week 1</Text>
    <Link href="/hello" style={styles.link}>Hello World!</Link>
    <Link href="/calculator" style={styles.link}>Calculator</Link>
    <Link href="/guess" style={styles.link}>Guessing game</Link>

    <Text>Week 2</Text>
    <Link href="/calc_history" style={styles.link}>Calculator with history</Link>
    <Link href="/shoppinglist" style={styles.link}>Shoppinglist</Link>

    <Text>Week 3</Text>
    <Link href="/calc" style={styles.link}>Calculator</Link>
    <Link href="/only_calc_history" style={styles.link}>Calculator history</Link>
    
    <Text>Week 4</Text>
    <Link href ="/reseptit" style={styles.link}>Reseptilista</Link>
    <Link href ="/exchange_rate" style={styles.link}>Exchange rate</Link>

  </View>;
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "silver",
    padding: 10,
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  link: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5
  }
});