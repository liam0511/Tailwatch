import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // Ensures proper padding
import { useNavigation } from "@react-navigation/native";
import homeStyles from "../StyleSheet/HomeStyle";

const communityPosts = [
  { 
    id: "1", 
    name: "Liam Carlo Amador", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: require("../assets/cat.jpg"),
    profile: require("../assets/Amador.jpg"),
  },
  { 
    id: "2", 
    name: "Ronn Bernard Belarmino", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: require("../assets/Dog.jpg"),
    profile: require("../assets/Belarmino.jpg"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={homeStyles.container}> 
      {/* Header */}
      <View style={homeStyles.header}>
        <Image source={require("../assets/logo.png")} style={homeStyles.logo} />
        
        <View style={homeStyles.navLinks}>
  <TouchableOpacity onPress={() => navigation.navigate("Home")}>
    <Text style={homeStyles.navText}>Home</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("Adopt")}>
    <Text style={homeStyles.navText}>Adopt Pets</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("Report")}>
    <Text style={homeStyles.navText}>Report</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => navigation.navigate("Lost")} style={homeStyles.lostPetsButton}>
    <Text style={homeStyles.navText}>Lost Pets</Text>
  </TouchableOpacity>
</View>

      </View>

      {/* Search Bar */}
      <View style={homeStyles.searchBarContainer}>
        <TextInput style={homeStyles.searchBar} placeholder="What are you looking for?" />
      </View>

      {/* Community Posts */}
      <FlatList
        data={communityPosts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80, flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={homeStyles.postContainer}>
            <View style={homeStyles.profileSection}>
              <Image source={item.profile} style={homeStyles.profileImage} />
              <View>
                <Text style={homeStyles.userName}>{item.name}</Text>
              </View>
              <TouchableOpacity>
                <Text style={homeStyles.followText}>Follow</Text>
              </TouchableOpacity>
            </View>
            <View style={homeStyles.postBox}>
              <Text>{item.post}</Text>
              {item.image && <Image source={item.image} style={homeStyles.postImage} resizeMode="cover" />} 
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation */}
      <View style={homeStyles.bottomNav}>
        <TouchableOpacity>
          <Image source={require("../assets/Location.png")} style={homeStyles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Image source={require("../assets/Notification.png")} style={homeStyles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/Map.png")} style={homeStyles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Image source={require("../assets/Settings.png")} style={homeStyles.navIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
