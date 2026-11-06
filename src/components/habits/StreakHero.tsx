import { StyleSheet, Text, View } from "react-native";

import { FloatingIcon3D } from "@/components/ui/FloatingIcon3D";
import { clay, colors, fonts, fontSize, radius, spacing } from "@/constants/theme";

type StreakHeroProps = {
  current: number;
  best: number;
};

/** The big warm card on the habit details screen: a floating 3D flame and the streak. */
export function StreakHero({ current, best }: StreakHeroProps) {
  return (
    <View style={styles.card}>
      <View style={styles.flameBubble}>
        <FloatingIcon3D name="fire" size={92} distance={8} />
      </View>
      <View style={styles.text}>
        <Text style={styles.number}>{current}</Text>
        <Text style={styles.label}>day streak</Text>
        <View style={styles.bestPill}>
          <Text style={styles.bestText}>Best {best}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xl,
    padding: spacing.xl,
    borderRadius: radius.xl,
    backgroundColor: colors.flame,
    backgroundImage: "linear-gradient(155deg, #FFB86B, #FF7A3D)",
    boxShadow: clay.colored(colors.flame),
  },
  flameBubble: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    boxShadow: "inset 0px 3px 4px rgba(255, 255, 255, 0.55), inset 0px -8px 14px rgba(160, 60, 0, 0.25)",
  },
  text: {
    flex: 1,
    alignItems: "flex-start",
  },
  number: {
    fontFamily: fonts.black,
    fontSize: fontSize.hero,
    lineHeight: fontSize.hero + 4,
    color: colors.white,
    textShadowColor: "rgba(140, 50, 0, 0.3)",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  label: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.lg,
    color: colors.white,
    marginTop: -4,
  },
  bestPill: {
    marginTop: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 6,
    borderRadius: radius.pill,
    backgroundColor: "rgba(255, 255, 255, 0.28)",
    boxShadow: "inset 0px 2px 2px rgba(255, 255, 255, 0.5)",
  },
  bestText: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.sm,
    color: colors.white,
  },
});
