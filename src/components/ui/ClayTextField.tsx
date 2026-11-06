import { useState } from "react";
import { StyleSheet, Text, TextInput, View, type TextInputProps } from "react-native";

import { clay, colors, fonts, fontSize, radius, spacing } from "@/constants/theme";
import { withAlpha } from "@/utils/color";

type ClayTextFieldProps = TextInputProps & {
  label: string;
  error?: string;
};

export function ClayTextField({ label, error, onFocus, onBlur, style, ...rest }: ClayTextFieldProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.well, focused && styles.focused, !!error && styles.errored]}>
        <TextInput
          placeholderTextColor={colors.muted}
          selectionColor={colors.accent}
          style={[styles.input, style]}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.sm,
  },
  label: {
    fontFamily: fonts.bold,
    fontSize: fontSize.sm,
    color: colors.inkSoft,
    marginLeft: spacing.xs,
  },
  well: {
    minHeight: 56,
    borderRadius: radius.md,
    backgroundColor: colors.well,
    boxShadow: clay.well,
    borderWidth: 2,
    borderColor: "transparent",
    justifyContent: "center",
  },
  focused: {
    borderColor: withAlpha(colors.accent, 0.45),
  },
  errored: {
    borderColor: withAlpha(colors.danger, 0.55),
  },
  input: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    fontFamily: fonts.semiBold,
    fontSize: fontSize.md,
    color: colors.ink,
  },
  error: {
    fontFamily: fonts.bold,
    fontSize: fontSize.sm,
    color: colors.danger,
    marginLeft: spacing.xs,
  },
});
