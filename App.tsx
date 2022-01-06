/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { Linking, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import NestedText from "./lib/commonjs";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <NestedText
          style={styles.text}
          textProps={{
            a: {
              onPress: () =>  console.warn('joo'),
              style: styles.a,
            },
            b: {
              style: styles.b,
            },
            u: {
              style: styles.u,
            },
            i: {
              style: styles.i,
            },
          }}
        >
          {
            "Nested <a>Text can be use to render Links</a> and <u><b>mixed</b> <i>styles</i> text</u>"
          }
        </NestedText>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "grey",
    fontSize: 20,
  },
  a: {
    color: "blue",
  },
  i: {
    fontStyle: "italic",
  },
  u: {
    textDecorationLine: "underline",
  },
  b: {
    fontWeight: "bold",
  },
});

export default App;
