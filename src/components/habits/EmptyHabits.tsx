import { StyleSheet, Text, View } from "react-native";

import { ClayButton } from "@/components/ui/ClayButton";
import { ClayCard } from "@/components/ui/ClayCard";
import { FloatingIcon3D } from "@/components/ui/FloatingIcon3D";
import { colors, fonts, fontSize, spacing } from "@/constants/theme";

type EmptyHabitsProps = {
  onAdd?: () => void;
};

/** Shown on Today when there are no habits yet. */
export function EmptyHabits({ onAdd }: EmptyHabitsProps) {
  return (
    <ClayCard style={styles.card}>
      <FloatingIcon3D name="calendar" size={96} />
      <View style={styles.text}>
        <Text style={styles.title}>No habits yet</Text>
        <Text style={styles.body}>Small things, done every day, add up. Start with one.</Text>
      </View>
      <ClayButton title="Add your first habit" onPress={onAdd} />
    </ClayCard>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    gap: spacing.lg,
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
  },
  text: {
    alignItems: "center",
    gap: spacing.xs,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: fontSize.xl,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    color: colors.inkSoft,
    textAlign: "center",
    lineHeight: 22,
  },
});
