import { View, Text ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const NewsCard = () => {
  return (
    <TouchableOpacity>
    <View className="w-full flex-row my-2">
            <View className="mr-4">
                <Image 
                style={{width : 140 , height : 100 , borderRadius : 10}}
                source={{
                    uri:"https://www.shutterstock.com/image-photo/soft-focus-beautiful-scenary-mist-260nw-354707522.jpg"
                }}
                />
            </View>
            <View className="w-full flex-1 justify-between">
                <Text className=" w-full text-white text-base" style={{ fontFamily: "Barlow_bold" , fontSize : 16}}>in ante metus dictum at tempor commodo...</Text>
                <Text className=" w-full text-white text-xs" style={{ fontFamily: "Barlow_medium" , fontSize : 12}}>vel risus commodo viverra maecenas commodo viverra maecenas volutpat est velit est...</Text>
            </View>
        </View>
        </TouchableOpacity>
  )
}

export default NewsCard