import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { CalcHistoryProvider } from '../../contexts/CalcHistoryContext';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <CalcHistoryProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: { position: 'absolute' },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="calc"
          options={{
            title: 'Calculator',
            tabBarIcon: ({ color }) => <Ionicons name="calculator" size={28} color={color} />,
          }}
        />
        <Tabs.Screen
          name="only_calc_history"
          options={{
            title: 'History',
            tabBarIcon: ({ color }) => <Ionicons name="document-text-outline" size={28} color={color} />,
          }}
        />
      </Tabs>
    </CalcHistoryProvider>
  );
}
