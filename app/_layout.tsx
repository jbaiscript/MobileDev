import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" 
    options={{
        headerTitle: "Home Page",
        headerTitleStyle: { fontSize: 25, fontWeight: "bold", color: "#f00" }
      }} />
    <Stack.Screen 
    name="(additional)"
    options={{
      headerShown: false
    }}
    
    />
  </Stack>;
}
