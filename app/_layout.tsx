import { Tabs } from 'expo-router';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} size={25} color={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="portal"
        options={{
          title: 'Portal',
          tabBarIcon: ({ color, focused }) => (
            <Icon name={focused ? 'globe' : 'globe-outline'} size={25} color={color}/>
          ),
        }}
      />

      {/*for custom images 
      <Tabs.Screen
          name="portal"
          options={{
            title: 'My profile',
            tabBarIcon: ({size,focused,color}) => {
              return (
                <Image
                  style={{ width: size, height: size }}
                  source={{
                    uri:
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                  }}
                />
              );
            },
          }}
        /> */}
    </Tabs>
  );
}
