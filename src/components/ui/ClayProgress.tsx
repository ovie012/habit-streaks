import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { clay, colors, gradients, radius } from "@/constants/theme";

type ClayProgressProps = {
  /** From 0 to 1. */
  value: number;
  color?: string;
  /** "light" for use on a coloured card. */
  tone?: "default" | "light";
  height?: number;
};

export function ClayProgress({ value, color = colors.accent, tone = "default", height = 16 }: ClayProgressProps) {
  const percent = Math.max(0, Math.min(1, value)) * 100;
  const width = useSharedValue(percent);

  useEffect(() => {
    width.set(withTiming(percent, { duration: 550 }));
  }, [percent, width]);

  const fillStyle = useAnimatedStyle(() => ({ width: `${width.get()}%` }));
  const light = tone === "light";

  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }, light ? styles.trackLight : styles.trackDefault]}>
      <Animated.View
        style={[
          styles.fill,
          { borderRadius: height / 2 },
          light
            ? styles.fillLight
            : { backgroundColor: color, backgroundImage: gradients.colored(color), boxShadow: clay.coloredSmall(color) },
          fillStyle,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: "100%",
    overflow: "hidden",
    borderRadius: radius.pill,
  },
  trackDefault: {
    backgroundColor: colors.well,
    boxShadow: clay.well,
  },
  trackLight: {
    backgroundColor: "rgba(255, 255, 255, 0.22)",
    boxShadow: "inset 0px 3px 6px rgba(0, 0, 0, 0.18)",
  },
  fill: {
    height: "100%",
  },
  fillLight: {
    backgroundColor: colors.white,
    boxShadow: "inset 0px -3px 5px rgba(96, 104, 150, 0.25), inset 0px 2px 2px rgba(255, 255, 255, 1)",
  },
});
