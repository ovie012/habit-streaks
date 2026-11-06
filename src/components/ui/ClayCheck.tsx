import { SymbolView } from "expo-symbols";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";

import { clay, colors, fonts, gradients } from "@/constants/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type ClayCheckProps = {
  done: boolean;
  color: string;
  onPress?: () => void;
  size?: number;
  accessibilityLabel?: string;
};

/** The round tick button: an empty hollow when not done, a coloured clay ball when done. */
export function ClayCheck({ done, color, onPress, size = 52, accessibilityLabel }: ClayCheckProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.get() }] }));

  function handlePress() {
    // squash, then bounce back a little past full size
    scale.set(withSequence(withTiming(0.8, { duration: 90 }), withSpring(1, { damping: 7, stiffness: 260 })));
    onPress?.();
  }

  return (
    <AnimatedPressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
      accessibilityLabel={accessibilityLabel}
      hitSlop={8}
      onPress={handlePress}
      style={[
        styles.base,
        { width: size, height: size, borderRadius: size / 2 },
        done
          ? { backgroundColor: color, backgroundImage: gradients.colored(color), boxShadow: clay.colored(color) }
          : styles.empty,
        animatedStyle,
      ]}
    >
      {done ? (
        <SymbolView
          name="checkmark"
          size={size * 0.42}
          tintColor={colors.white}
          weight="heavy"
          fallback={<Text style={[styles.fallback, { fontSize: size * 0.42 }]}>✓</Text>}
        />
      ) : null}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    backgroundColor: colors.well,
    boxShadow: clay.well,
  },
  fallback: {
    color: colors.white,
    fontFamily: fonts.black,
  },
});
