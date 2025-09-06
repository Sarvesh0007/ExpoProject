import { useEffect, useRef } from "react";
import { Easing, Animated, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const rotateAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnimation, {
        toValue: 1,
        duration: 2500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnimation]);

  const rotate = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const radius = 32;
  return (
    <SafeAreaView>
      <View className="mt-[50%] flex items-center justify-center">
        <View className="h-20 w-20 p-4 bg-red-500 rounded-full">
          <Animated.View
            style={{
              position: "absolute",
              left: 32,
              top: 32,
              transform: [{ rotate }, { translateX: radius }],
            }}
          >
            <View className="rounded-full h-4 w-4 bg-black"></View>
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}
