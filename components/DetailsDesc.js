import { View, Text } from "react-native";
import React, { useState } from "react";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, settext] = useState(data.description.slice(0, 100));
  const [readMore, setreadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.large * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>
      </View>
      <View style={{ marginVertical: SIZES.large }}>
        <Text
          style={{
            fontSize: SIZES.small + 2,
            color: COLORS.secondary,
            lineHeight: SIZES.large,
          }}
        >
          {text}

          {!readMore && "..."}
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
            onPress={() => {
              if (!readMore) {
                settext(data.description);
                setreadMore(!readMore);
              } else {
                settext(data.description.slice(0, 100));
                setreadMore(!readMore);
              }
            }}
          >
            {readMore ? "Show Less" : "Read More"}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default DetailsDesc;
