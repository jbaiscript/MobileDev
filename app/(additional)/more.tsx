import { Text, View, Linking, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {} from "@react-navigation/elements";
export default function More() {
  const goToGrok = () => {
    Linking.openURL("https://grok.com/");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8fafc",
      }}
    >
      <Text
        style={{
          fontSize: 64,
          fontWeight: "900",
          color: "#1e293b",
          textAlign: "center",
        }}
      >
        Nothing more to see here...
      </Text>
      <Text
        style={{
          fontSize: 54,
          fontWeight: "300",
          color: "#1e293b",
          textAlign: "center",
        }}
      >
        But if you want to know who did most of the design Click "Know More"
      </Text>
      <TouchableOpacity
        onPress={goToGrok}
        style={{
          backgroundColor: "#84838fff",
          paddingVertical: 18,
          borderRadius: 1,
          alignItems: "center",
        }}
      >
        <Text>Know More</Text>
      </TouchableOpacity>

      <MaterialIcons name="arrow-back" size={200} color={"#646c8bff"} />
      <Link
        style={{
          fontSize: 64,
          fontWeight: "200",
          color: "#1e293b",
          textAlign: "center",
          textDecorationStyle: "solid",
          textDecorationColor: "#00f",
          textDecorationLine: "underline",
        }}
        href="/"
      >
        Go Back
      </Link>
    </View>
  );
}
