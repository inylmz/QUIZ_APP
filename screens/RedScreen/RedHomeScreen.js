import { StyleSheet, Text, View, Image, Pressable, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ height: 390, width: "100%", resizeMode: "contain" }}
          source={require('../../assets/redteam.png') } 
        />

        <View style={{ padding: 10 }}>
          <Text
            style={{
              textAlign: "center",
              color: "mediumblue",
              fontSize: 20,
              fontWeight: "600",
            }}
          >
            QUIZ KURALLARI
          </Text>

          <View
            style={{
              padding: 10,
              backgroundColor: "#F88379",
              borderRadius: 6,
              marginTop: 15,
            }}
          >
            
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <Text style={{ color: "white" }}>•</Text>
              <Text
                style={{
                  marginLeft: 4,
                  color: "#722F37",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Her sorunun 15 saniyelik bir zaman sınırı vardır.
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 5,
              }}
            >
              <Text style={{ color: "white" }}>•</Text>
              <Text
                style={{
                  marginLeft: 4,
                  color: "#722F37",
                  fontSize: 15,
                  fontWeight: "500",
                }}
              >
                Tüm soruları zorunlu olarak cevaplamalısınız.
              </Text>
            </View>
          </View>
        </View>

        <Pressable
        onPress={() => navigation.navigate("RedQuiz")}
          style={{
            backgroundColor: "red",
            padding: 14,
            width:150,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Red Team Quiz</Text>
        </Pressable>
        <Pressable
        onPress={() => navigation.navigate("RedCards")}
          style={{
            backgroundColor: "red",
            padding: 14,
            width:150,
            borderRadius: 25,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
          }}
        >
          <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Bilgi Kartları</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
