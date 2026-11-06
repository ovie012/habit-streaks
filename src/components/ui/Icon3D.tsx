import { Image } from "expo-image";
import { View } from "react-native";

import { icons3d, type Icon3DName } from "@/constants/icons3d";
import { clay, colors, gradients } from "@/constants/theme";

type Icon3DProps = {
  name: Icon3DName;
  size?: number;
  /** Tints the clay bubble behind the icon. */
  color?: string;
  /** Set to false to show the icon on its own, with no bubble. */
  bubble?: boolean;
};

export function Icon3D({ name, size = 56, color = colors.accent, bubble = true }: Icon3DProps) {
  const imageSize = bubble ? size * 0.66 : size;
  const image = (
    <Image source={icons3d[name]} style={{ width: imageSize, height: imageSize }} contentFit="contain" />
  );

  if (!bubble) return image;

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.34,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
        backgroundImage: gradients.tinted(color),
        boxShadow: clay.tinted(color),
      }}
    >
      {image}
    </View>
  );
}
