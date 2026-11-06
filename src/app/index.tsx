// Temporary home screen until the real Today screen is built (Phase 6).

import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ClayButton } from "@/components/ui/ClayButton";
import { ClayCard } from "@/components/ui/ClayCard";
import { FloatingIcon3D } from "@/components/ui/FloatingIcon3D";
import { ScreenBackground } from "@/components/ui/ScreenBackground";
import { colors, fonts, fontSize, spacing } from "@/constants/theme";

export default function Index() {
  return (
    <ScreenBackground>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safe}>
        <ClayCard style={styles.card}>
          <FloatingIcon3D name="fire" size={110} distance={8} />
          <View style={styles.text}>
            <Text style={styles.title}>Habit Streaks</Text>
            <Text style={styles.body}>Setting up. The real Today screen arrives in Phase 6.</Text>
          </View>
          <ClayButton title="Open design preview" onPress={() => router.push("/design-preview")} />
        </ClayCard>
      </SafeAreaView>
    </ScreenBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.xl,
  },
  card: {
    alignItems: "center",
    gap: spacing.xl,
    paddingVertical: spacing.xxl,
  },
  text: {
    alignItems: "center",
    gap: spacing.sm,
  },
  title: {
    fontFamily: fonts.black,
    fontSize: fontSize.xxl,
    color: colors.ink,
  },
  body: {
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    color: colors.inkSoft,
    textAlign: "center",
  },
});
