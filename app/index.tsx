import { Text, View, Image, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (


    <View style={styles.container} >
      <View style={styles.idCard}>
        <View style={styles.imageContainer}>
          <Image
            source={require("@/assets/images/James.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
            />
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>Jeril James S. Laurente</Text>
          <Text style={styles.title}>Aspiring Developer</Text>

          <View style={styles.bioContainer}>
            <Text style={styles.bio}>
              I am Jeril James S. Laurente, I want to be a developer someday. There
              is nothing interesting about me — if you want to know more, just{" "}
              <Text style={styles.clickText}>"Click me"</Text>.
            </Text>
          </View>

          <Link href="/(additional)/about_me" style={styles.linkButton}>
            <Text style={styles.linkText}>Click Me →</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },


  idCard: {
    width: "95%",
    maxWidth: 500,
    height: 300,                    
    backgroundColor: "#ffffff",
    borderRadius: 28,
    flexDirection: "row",           
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 24,
  },


  imageContainer: {
    width: "40%",
    height: "100%",
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
  },

  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },

  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1e293b",
    marginBottom: 4,
  },

  title: {
    fontSize: 16,
    color: "#64748b",
    fontWeight: "600",
    marginBottom: 16,
    letterSpacing: 1,
  },

  bioContainer: {
    backgroundColor: "rgba(241, 245, 249, 0.9)",
    padding: 14,
    borderRadius: 12,
    marginBottom: 16,
  },

  bio: {
    fontSize: 14.5,
    color: "#475569",
    lineHeight: 20,
  },

  clickText: {
    color: "#3b82f6",
    fontWeight: "bold",
  },

  linkButton: {
    marginTop: 8,
  },

  linkText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#1e293b",
    textDecorationLine: "underline",
    textDecorationColor: "#3b82f6",
  },
});