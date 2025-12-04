import { Text, View, TouchableOpacity, Linking } from "react-native";

export default function School() {
  const goToschool = () => {
    Linking.openURL("https://www.facebook.com/MFIPolytechnic");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#f5f7ff", padding: 24 }}>
      <View style={{ alignItems: "center", marginTop: 80 }}>
        <Text style={{ fontSize: 56, fontWeight: "900", color: "#4f46e5" }}>
          MFI
        </Text>
        <Text style={{ fontSize: 22, color: "#6366f1", marginTop: 10, fontWeight: "600" }}>
          Polytechnic Institute
        </Text>
      </View>
      <Text style={{
        fontSize: 28,
        fontWeight: "bold",
        color: "#1e293b",
        textAlign: "center",
        marginTop: 60,
        marginBottom: 30,
      }}>
        School Subjects
      </Text>

      <View style={{ alignItems: "center", gap: 16, flex: 1, justifyContent: "center" }}>
        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16, width: "90%", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 8 }}>
          <Text style={{ fontSize: 22, color: "#1e40af", textAlign: "center" }}>• Python</Text>
        </View>

        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16, width: "90%", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 8 }}>
          <Text style={{ fontSize: 22, color: "#1e40af", textAlign: "center" }}>• JavaScript</Text>
        </View>

        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16, width: "90%", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 8 }}>
          <Text style={{ fontSize: 22, color: "#1e40af", textAlign: "center" }}>• C#</Text>
        </View>

        <View style={{ backgroundColor: "white", padding: 20, borderRadius: 16, width: "90%", shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 10, elevation: 8 }}>
          <Text style={{ fontSize: 22, color: "#1e40af", textAlign: "center" }}>• HTML</Text>
        </View>
      </View>

      <View style={{ paddingBottom: 40 }}>
        <TouchableOpacity
          onPress={goToschool}
          style={{
            backgroundColor: "#4f46e5",
            paddingVertical: 18,
            borderRadius: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Go to MFI
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}