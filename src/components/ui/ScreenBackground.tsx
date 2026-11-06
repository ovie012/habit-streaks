import { StyleSheet, View, type ViewProps } from "react-native";

import { colors, gradients } from "@/constants/theme";

/** The soft gradient behind every screen, with two faint coloured glows for depth. */
export function ScreenBackground({ style, children, ...rest }: ViewProps) {
  return (
    <View style={[styles.screen, style]} {...rest}>
      <View pointerEvents="none" style={[styles.glow, styles.glowTop]} />
      <View pointerEvents="none" style={[styles.glow, styles.glowBottom]} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    backgroundImage: gradients.screen,
  },
  glow: {
    position: "absolute",
    width: 360,
    height: 360,
    borderRadius: 180,
  },
  glowTop: {
    top: -140,
    right: -120,
    backgroundImage: "radial-gradient(circle, rgba(124, 108, 242, 0.20), rgba(124, 108, 242, 0))",
  },
  glowBottom: {
    bottom: -160,
    left: -140,
    backgroundImage: "radial-gradient(circle, rgba(46, 196, 182, 0.16), rgba(46, 196, 182, 0))",
  },
});
