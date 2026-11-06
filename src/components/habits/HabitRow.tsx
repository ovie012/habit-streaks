import { Pressable, StyleSheet, Text, View } from "react-native";

import { WeekDots, type WeekDay } from "@/components/habits/WeekDots";
import { ClayCard } from "@/components/ui/ClayCard";
import { ClayCheck } from "@/components/ui/ClayCheck";
import { Icon3D } from "@/components/ui/Icon3D";
import type { Icon3DName } from "@/constants/icons3d";
import { colors, fonts, fontSize, spacing } from "@/constants/theme";

export type HabitRowProps = {
  name: string;
  icon: Icon3DName;
  color: string;
  /** Current streak in days. */
  streak: number;
  /** The last 7 days, oldest first, today last. */
  week: WeekDay[];
  doneToday: boolean;
  /** Tick or untick today. */
  onToggle?: () => void;
  /** Open the habit's details. */
  onPress?: () => void;
};

export function HabitRow({ name, icon, color, streak, week, doneToday, onToggle, onPress }: HabitRowProps) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={`${name}, open details`} onPress={onPress}>
      {({ pressed }) => (
        <ClayCard pressed={pressed} style={styles.card}>
          <Icon3D name={icon} color={color} size={58} />

          <View style={styles.middle}>
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
            <View style={styles.streakRow}>
              <Icon3D name="fire" bubble={false} size={16} />
              <Text style={[styles.streak, streak > 0 && { color: colors.flame }]}>
                {streak > 0 ? `${streak} day streak` : "Start today"}
              </Text>
            </View>
            <WeekDots days={week} color={color} />
          </View>

          <ClayCheck
            done={doneToday}
            color={color}
            onPress={onToggle}
            accessibilityLabel={doneToday ? `Untick ${name}` : `Tick ${name} for today`}
          />
        </ClayCard>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md + 2,
    paddingVertical: spacing.md + 2,
  },
  middle: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.lg,
    color: colors.ink,
  },
  streakRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  streak: {
    fontFamily: fonts.bold,
    fontSize: fontSize.sm,
    color: colors.muted,
  },
});
