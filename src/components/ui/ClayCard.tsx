import { StyleSheet, View, type ViewProps } from "react-native";

import { clay, colors, gradients, radius, spacing } from "@/constants/theme";

type ClayCardProps = ViewProps & {
  /** "raised" floats above the background, "well" is pressed into it. */
  variant?: "raised" | "well";
  /** Show the pushed-in look (for example while the card is being pressed). */
  pressed?: boolean;
};

export function ClayCard({ variant = "raised", pressed = false, style, children, ...rest }: ClayCardProps) {
  return (
    <View
      style={[styles.base, variant === "raised" ? styles.raised : styles.well, pressed && styles.pressed, style]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  raised: {
    backgroundColor: colors.surface,
    backgroundImage: gradients.surface,
    boxShadow: clay.raised,
  },
  well: {
    backgroundColor: colors.well,
    boxShadow: clay.well,
  },
  pressed: {
    boxShadow: clay.pressed,
    transform: [{ scale: 0.985 }],
  },
});
