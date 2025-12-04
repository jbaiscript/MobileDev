import { Text, View, Button, Alert, TouchableOpacity, Linking } from "react-native";

export default function AboutMe() {
  const age = 19;

  const onClick = () => {
    Alert.alert("Next Year I'll Be...", `${age + 1} years old!`);
  };

  const openFacebook = () => {
    Linking.openURL("https://www.facebook.com/james.laurente.924556");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f0f4f8", padding: 20 }}>

      {/* Main Content - Centered & Clean */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2c3e50", textAlign: "center", marginBottom: 20 }}>
          Hello! I am Jeril James S. Laurente
        </Text>

        <Text style={{ fontSize: 22, color: "#34495e", textAlign: "center", marginBottom: 30 }}>
          19 years old • Pasig City, Philippines
        </Text>

        <Text style={{ fontSize: 24, fontWeight: "600", color: "#2c3e50", marginBottom: 20 }}>
          My Favorites:
        </Text>

        <Text style={{ fontSize: 22, color: "#2c3e50", lineHeight: 38 }}>
          • Chess{"\n"}
          • Tetris{"\n"}
          • Grapes{"\n"}
          • Playing Games{"\n"}
          • HTML & Coding
        </Text>
      </View>

      {/* Age Button */}
      <View style={{ marginBottom: 30 }}>
        <Button
          title="This will predict my age next year using LLM"
          onPress={onClick}
          color="#3498db"
        />
      </View>

      {/* Go to face book */}
      <TouchableOpacity
        onPress={openFacebook}
        style={{
          backgroundColor: "#1877f2",
          padding: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          View My Facebook Profile
        </Text>
      </TouchableOpacity>

    </View>
  );
}
