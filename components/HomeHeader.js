import { View, Text, Image, TextInput } from "react-native";
import { COLORS, SIZES, SHADOWS, assets, FONTS } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            resizeMode="contain"
            source={assets.person01}
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            resizeMode="contain"
            source={assets.badge}
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello there
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            marginTop: SIZES.base / 2,
            color: COLORS.white,
          }}
        >
          Let's find a masterpiece.
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font - 10,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: SIZES.small - 2,
            paddingHorizontal: SIZES.font,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput placeholder="Search NFTs" onChangeText={onSearch} />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
