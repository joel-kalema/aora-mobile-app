import { Image, StyleSheet, Platform, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import tw from 'twrnc';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { images } from '@/constants';

export default function App() {
  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View style={tw`w-full justify-center items-center h-full px-4`}>
          <Image
            source={images.logo}
            style={tw`w-[130px] h-[84px]`}
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            style={tw`max-w-[380px] w-full h-[300px]`}
            resizeMode='contain'
          />

          <View style={tw`relative mt-5`}>
            <Text style={tw`text-3xl text-white font-bold text-center`}>Discover Endless Possibilities with{' '}
              <Text style={tw`text-[#FFA001]`}>Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={tw`w-[136px] w-full h-[15px] absolute -bottom-3 -right-30`}
              resizeMode='contain'
            />
          </View>

          <Text style={tw`text-sm font-pregular text-gray-100 mt-7 text-center`}>
            Where creativity meets innovation:
            embark on a jorney of limitatless exploration with Aora
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}