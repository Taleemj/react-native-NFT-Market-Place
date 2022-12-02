import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
// import { StatusBar } from "expo-status-bar";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";
import {
  CircleButton,
  RectButton,
  FocusedStatusBar,
  SubInfo,
  DetailsDesc,
  DetailsBid,
} from "../components";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={10}
      top={StatusBar.currentHeight + 15}
    />
    <CircleButton
      imgUrl={assets.heart}
      right={10}
      top={StatusBar.currentHeight + 15}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  // console.log(data);
  return (
    <>
      <View
        style={{
          flex: 1,
        }}
      >
        <FocusedStatusBar
          translucent={true}
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <View
          style={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: SIZES.font,
            backgroundColor: "rgba(255,255,255,0.0)",
            zIndex: 1,
          }}
        >
          <RectButton minwidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
        </View>
        <FlatList
          data={data.bids}
          renderItem={({ item }) => <DetailsBid bid={item} />}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
          ListHeaderComponent={() => (
            <>
              <DetailsHeader data={data} navigation={navigation} />
              <SubInfo />
              <View style={{ padding: SIZES.font }}>
                <DetailsDesc data={data} />

                {data.bids.length > 0 && (
                  <Text
                    style={{ fontSize: SIZES.font, fontFamily: FONTS.semiBold }}
                  >
                    Current Bids
                  </Text>
                )}
              </View>
            </>
          )}
        />
      </View>
    </>
  );
};

export default Details;
