import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={{flex:1}}>
      <Text style={styles.title}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        numColumns={2}
        renderItem={({ item }) => {
          return (
              <Image style={styles.image} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    marginHorizontal: 1,
    marginVertical: 1
  },
  title:{
      marginVertical:10,
      fontSize:18,
      fontWeight:'bold'
  }
});

export default ResultsShowScreen;
