import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Foto from "../../trabalho-mobile/src/assets/foto_giovanni.jpg";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.header}>
        <Image  style={styles.fotoImg} source={Foto}/>
      </View>
      <View style={styles.category}>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Sobre Mim</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.categoryText}>Experiências</Text>
      </TouchableOpacity>
       
      </View>
      <Text style={styles.nameText}>Giovanni Cláudio Santos</Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "#00f",
    },
  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
  fotoImg: {
    flex: 1,
  },
  nameText: {
    color: "red",
    fontSize: 18,
    fontWeight: "700",
    paddingBottom: 20,
    marginTop: 52,
    marginHorizontal: 70,
  }
  });

