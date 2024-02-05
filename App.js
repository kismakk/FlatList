import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import { DATA } from "./Data";
import Row from "./components/Row";
import { useEffect, useState } from "react";
import Search from "./components/Search";

export default function App() {
  const [items, setItems] = useState([])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastName.startsWith(search));
    setItems(searchArray)
  }

  useEffect(() => {
    setItems(DATA)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Row person={item} />
        )}
        keyExtractor={item => item.id.toString()}
        style={{ flex: 1, margin: 100 }}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 50
  },
});
