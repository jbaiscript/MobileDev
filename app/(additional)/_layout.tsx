import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const items = [
    {
        page : "about_me",
        title: "aboutme",
        icon: "person",
    },
    {
        page : "school",
        title: "School",
        icon: "school",
    },
    {
        page : "more",
        title: "More",
        icon: "more-horiz",
    },
]

function TabLayout(){
    return(

        <Tabs screenOptions={{
            tabBarActiveTintColor: "#ff9800"
        }}>
            {
                items.map((item, index) => (
                    <Tabs.Screen
                        key = {item.page + index}
                        name={item.page}
                        options={{
                            title: item.title,
                            headerTitleAlign: 'center',
                            tabBarIcon: ({color}) => <MaterialIcons size={30} name={item.icon} color={color}/>,
                            tabBarShowLabel: items.length > 5 ? false : true,
                        }}                    
                    />
                ))
            }
        </Tabs>
    )
}
export default TabLayout