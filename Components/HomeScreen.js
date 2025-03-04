import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from "react-native";
import homeStyles from "../StyleSheet/HomeStyle"; // Ensure the path is correct

const communityPosts = [
  { 
    id: "1", 
    name: "Liam Carlo Amador", 
    residence: "", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../assets/cat.jpg") // Adjusted path
  },
  { 
    id: "2", 
    name: "Ronn Bernard Belarmino", 
    residence: "", 
    post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require("../assets/cat.jpg") // Adjusted path
  },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={homeStyles.header}>
        <Image source={require("../assets/Belarmino.jpg")} style={homeStyles.logo} />
        <TextInput style={homeStyles.searchBar} placeholder="What are you looking for?" />
        <TouchableOpacity>
          <Image source={require("../assets/Belarmino.jpg")} style={homeStyles.settingsIcon} />
        </TouchableOpacity>
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
              <Image source={require("../assets/Belarmino.jpg")} style={homeStyles.profileImage} />
              <View>
                <Text style={homeStyles.userName}>{item.name}</Text>
                <Text style={homeStyles.residence}>Residence</Text>
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
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>✉️</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>👥</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>📷</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
