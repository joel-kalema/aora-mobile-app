import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`font-extrabold text-3xl`}>_layout</Text>
    </View>
  );
}