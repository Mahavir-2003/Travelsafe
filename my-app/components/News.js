import { Text, View ,ScrollView} from 'react-native'
import NewsCard from "./NewsCard"

const News = () => {
    return (
      <View>
        <Text className="mt-2 text-white text-2xl" style={{ fontFamily: "Barlow_bold" }}>News</Text>
        <ScrollView className="mt-2">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </ScrollView>
      </View>
    )
}

export default News