import { StyleSheet, Text, View } from "react-native";

import { ClayProgress } from "@/components/ui/ClayProgress";
import { FloatingIcon3D } from "@/components/ui/FloatingIcon3D";
import { clay, colors, fonts, fontSize, gradients, radius, spacing } from "@/constants/theme";

type TodayProgressCardProps = {
  done: number;
  total: number;
};

/** The coloured hero card at the top of Today: "3 of 5 done" with a progress bar. */
export function TodayProgressCard({ done, total }: TodayProgressCardProps) {
  const allDone = total > 0 && done === total;
  const left = total - done;
  const message = total === 0 ? "Add your first habit" : allDone ? "All done. Great work!" : `${left} to go today`;

  return (
    <View style={styles.card}>
      <View style={styles.top}>
        <View style={styles.text}>
          <Text style={styles.kicker}>Today&apos;s progress</Text>
          <Text style={styles.count}>
            {done}
            <Text style={styles.total}> of {total}</Text>
          </Text>
          <Text style={styles.message}>{message}</Text>
        </View>
        <FloatingIcon3D name={allDone ? "trophy" : "sparkles"} size={84} />
      </View>
      <ClayProgress value={total === 0 ? 0 : done / total} tone="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    padding: spacing.xl,
    gap: spacing.lg,
    backgroundColor: colors.accent,
    backgroundImage: gradients.colored(colors.accent),
    boxShadow: clay.colored(colors.accent),
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    gap: 2,
  },
  kicker: {
    fontFamily: fonts.bold,
    fontSize: fontSize.sm,
    color: "rgba(255, 255, 255, 0.8)",
  },
  count: {
    fontFamily: fonts.black,
    fontSize: 44,
    color: colors.white,
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  total: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.xl,
    color: "rgba(255, 255, 255, 0.85)",
  },
  message: {
    fontFamily: fonts.bold,
    fontSize: fontSize.md,
    color: colors.white,
  },
});
