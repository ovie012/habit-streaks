// DESIGN PREVIEW: every clay component with sample data, to judge the look on a real phone.
// Not part of the final app. Delete this screen once the real screens are built.

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyHabits } from "@/components/habits/EmptyHabits";
import { HabitRow } from "@/components/habits/HabitRow";
import { StreakHero } from "@/components/habits/StreakHero";
import { TodayProgressCard } from "@/components/habits/TodayProgressCard";
import type { WeekDay } from "@/components/habits/WeekDots";
import { ClayButton } from "@/components/ui/ClayButton";
import { ClayTextField } from "@/components/ui/ClayTextField";
import { Icon3D } from "@/components/ui/Icon3D";
import { ScreenBackground } from "@/components/ui/ScreenBackground";
import { habitIconNames, type Icon3DName } from "@/constants/icons3d";
import { clay, colors, fonts, fontSize, gradients, habitColors, spacing } from "@/constants/theme";

// ---- Sample data (preview only; the real data comes from Firestore) ----------

type SampleHabit = {
  id: string;
  name: string;
  icon: Icon3DName;
  color: string;
  streak: number;
  /** The 6 days before today, oldest first. */
  past: boolean[];
  doneToday: boolean;
};

const SAMPLE_HABITS: SampleHabit[] = [
  { id: "1", name: "Read 10 pages", icon: "books", color: habitColors[0], streak: 5, past: [false, true, true, true, true, true], doneToday: false },
  { id: "2", name: "Drink 2 litres of water", icon: "droplet", color: habitColors[1], streak: 12, past: [true, true, true, true, true, true], doneToday: true },
  { id: "3", name: "Morning run", icon: "shoe", color: habitColors[5], streak: 0, past: [true, false, true, false, false, false], doneToday: false },
  { id: "4", name: "Sleep by 11pm", icon: "moon", color: habitColors[6], streak: 2, past: [false, false, false, false, true, true], doneToday: false },
];

const LETTERS = ["S", "M", "T", "W", "T", "F", "S"];

function previewWeek(past: boolean[], doneToday: boolean): WeekDay[] {
  const today = new Date();
  return [...past, doneToday].map((done, index) => {
    const day = new Date(today);
    day.setDate(today.getDate() - (6 - index));
    return { label: LETTERS[day.getDay()], done, isToday: index === 6 };
  });
}

function greeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

// ---- Screen -------------------------------------------------------------------

export default function DesignPreview() {
  const [habits, setHabits] = useState(SAMPLE_HABITS);
  const doneCount = habits.filter((habit) => habit.doneToday).length;
  const dateLabel = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

  function toggle(id: string) {
    setHabits((current) =>
      current.map((habit) =>
        habit.id === id
          ? { ...habit, doneToday: !habit.doneToday, streak: habit.doneToday ? habit.streak - 1 : habit.streak + 1 }
          : habit,
      ),
    );
  }

  return (
    <ScreenBackground>
      <StatusBar style="dark" />
      <SafeAreaView edges={["top"]} style={styles.safe}>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.date}>{dateLabel.toUpperCase()}</Text>
            <Text style={styles.title}>{greeting()}</Text>
          </View>

          <TodayProgressCard done={doneCount} total={habits.length} />

          <Section title="Your habits" />
          {habits.map((habit) => (
            <HabitRow
              key={habit.id}
              name={habit.name}
              icon={habit.icon}
              color={habit.color}
              streak={habit.streak}
              week={previewWeek(habit.past, habit.doneToday)}
              doneToday={habit.doneToday}
              onToggle={() => toggle(habit.id)}
            />
          ))}

          <Section title="Buttons" />
          <View style={styles.buttonRow}>
            <View style={styles.flex}>
              <ClayButton title="Add habit" />
            </View>
            <View style={styles.flex}>
              <ClayButton title="Cancel" variant="soft" />
            </View>
          </View>
          <ClayButton title="Delete habit" color={colors.danger} />

          <Section title="Text fields" />
          <ClayTextField label="Habit name" placeholder="Read 10 pages" />
          <ClayTextField
            label="Email"
            defaultValue="ovie@"
            error="That email does not look right"
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <Section title="Habit details" />
          <StreakHero current={12} best={21} />

          <Section title="Empty state" />
          <EmptyHabits />

          <Section title="Habit icons" />
          <View style={styles.iconGrid}>
            {habitIconNames.map((name, index) => (
              <View key={name} style={styles.iconItem}>
                <Icon3D name={name} color={habitColors[index % habitColors.length]} size={64} />
                <Text style={styles.iconLabel}>{name}</Text>
              </View>
            ))}
          </View>

          <Section title="Colours" />
          <View style={styles.chipRow}>
            {habitColors.map((color) => (
              <View
                key={color}
                style={[styles.chip, { backgroundColor: color, backgroundImage: gradients.colored(color), boxShadow: clay.colored(color) }]}
              />
            ))}
          </View>

          <Text style={styles.footer}>Design preview. Tap the circles to try the ticks.</Text>
        </ScrollView>
      </SafeAreaView>
    </ScreenBackground>
  );
}

function Section({ title }: { title: string }) {
  return <Text style={styles.section}>{title}</Text>;
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  content: {
    padding: spacing.xl - 4,
    paddingBottom: 64,
    gap: spacing.lg,
  },
  header: {
    gap: 2,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
  },
  date: {
    fontFamily: fonts.extraBold,
    fontSize: fontSize.xs,
    letterSpacing: 1.2,
    color: colors.muted,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: fontSize.xxl,
    color: colors.ink,
  },
  section: {
    fontFamily: fonts.black,
    fontSize: fontSize.lg,
    color: colors.ink,
    marginTop: spacing.lg,
  },
  buttonRow: {
    flexDirection: "row",
    gap: spacing.md,
  },
  flex: {
    flex: 1,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: spacing.lg,
    justifyContent: "space-between",
  },
  iconItem: {
    width: "23%",
    alignItems: "center",
    gap: 6,
  },
  iconLabel: {
    fontFamily: fonts.bold,
    fontSize: fontSize.xs,
    color: colors.inkSoft,
  },
  chipRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chip: {
    width: 34,
    height: 34,
    borderRadius: 17,
  },
  footer: {
    marginTop: spacing.xl,
    textAlign: "center",
    fontFamily: fonts.semiBold,
    fontSize: fontSize.sm,
    color: colors.muted,
  },
});
