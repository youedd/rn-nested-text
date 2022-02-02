import React from "react";
import { Linking, SafeAreaView } from "react-native";
import NestedText from "./lib/commonjs";

// to add or change text's default props
NestedText.defaultTextProps.link = {
  onPress: () => Linking.openURL("https://www.example.com"),
  style: { color: "blue" },
};

const App = () => (
  <SafeAreaView>
    <NestedText
      style={{ color: "#2F4F4F", margin: 20 }}
      textProps={{
        nt: { style: { color: "black", fontWeight: 'bold' } },
      }}
    >
      {
        "<nt>Nested Text</nt> can be used to render <link>clickable links</link> and <u><b>mixed</b> <i>styles</i> text</u>"
      }
    </NestedText>
  </SafeAreaView>
);

export default App;
