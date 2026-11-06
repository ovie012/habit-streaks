import { useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import { clay, colors, fonts, fontSize, gradients, radius, spacing } from "@/constants/theme";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SPRING = { damping: 14, stiffness: 320 };

type ClayButtonProps = {
  title: string;
  onPress?: () => void;
  /** "solid" is coloured clay, "soft" is white clay with coloured text. */
  variant?: "solid" | "soft";
  color?: string;
  loading?: boolean;
  disabled?: boolean;
};

export function ClayButton({
  title,
  onPress,
  variant = "solid",
  color = colors.accent,
  loading = false,
  disabled = false,
}: ClayButtonProps) {
  const [pressed, setPressed] = useState(false);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ scale: scale.get() }] }));
  const solid = variant === "solid";

  const look = solid
    ? {
        backgroundColor: color,
        backgroundImage: gradients.colored(color),
        boxShadow: pressed ? clay.coloredPressed(color) : clay.colored(color),
      }
    : {
        backgroundColor: colors.surface,
        backgroundImage: gradients.surface,
        boxShadow: pressed ? clay.pressed : clay.raised,
      };

  return (
    <AnimatedPressable
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || loading, busy: loading }}
      disabled={disabled || loading}
      onPress={onPress}
      onPressIn={() => {
        setPressed(true);
        scale.set(withSpring(0.96, SPRING));
      }}
      onPressOut={() => {
        setPressed(false);
        scale.set(withSpring(1, SPRING));
      }}
      style={[styles.base, look, disabled && styles.disabled, animatedStyle]}
    >
      {loading ? (
        <ActivityIndicator color={solid ? colors.white : color} />
      ) : (
        <Text style={[styles.label, solid ? styles.labelSolid : { color }]}>{title}</Text>
      )}
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 56,
    paddingHorizontal: spacing.xl,
    borderRadius: radius.md + 2,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.md,
    letterSpacing: 0.3,
  },
  labelSolid: {
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.18)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});
