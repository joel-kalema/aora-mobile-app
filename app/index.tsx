import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-extrabold text-3xl font-pblack mb-6`}>Dev</Text>
        <StatusBar style='auto' />
        <Link href="/profile">Go to profile</Link>
    </View>
  );
}