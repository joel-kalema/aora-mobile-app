import React, { useState } from 'react'
import { Text, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { images } from '@/constants';
import FormField from '@/components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  return (
    <SafeAreaView style={tw`bg-[#161622] h-full`}>
      <ScrollView>
        <View style={tw`w-full justify-center h-full px-4 my-6`}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={tw`w-[115px] h-[35px]`}
          />
           <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn