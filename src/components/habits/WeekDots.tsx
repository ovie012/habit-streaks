import { StyleSheet, Text, View } from "react-native";

import { clay, colors, fonts, gradients } from "@/constants/theme";

export type WeekDay = {
  /** One letter, for example "M". */
  label: string;
  done: boolean;
  isToday?: boolean;
};

type WeekDotsProps = {
  /** The last 7 days, oldest first, today last. */
  days: WeekDay[];
  color: string;
};

export function WeekDots({ days, color }: WeekDotsProps) {
  return (
    <View style={styles.row}>
      {days.map((day, index) => (
        <View key={`${index}-${day.label}`} style={styles.item}>
          <View
            style={[
              styles.dot,
              day.done
                ? { backgroundColor: color, backgroundImage: gradients.colored(color), boxShadow: clay.coloredSmall(color) }
                : styles.empty,
            ]}
          />
          <Text style={[styles.label, day.isToday && styles.today]}>{day.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 6,
  },
  item: {
    alignItems: "center",
    gap: 3,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
  empty: {
    backgroundColor: colors.well,
    boxShadow: clay.well,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: 10,
    color: colors.muted,
  },
  today: {
    color: colors.ink,
    fontFamily: fonts.black,
  },
});
