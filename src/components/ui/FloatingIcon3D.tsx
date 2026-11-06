import { useEffect } from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

import { Icon3D } from "@/components/ui/Icon3D";
import type { Icon3DName } from "@/constants/icons3d";

type FloatingIcon3DProps = {
  name: Icon3DName;
  size?: number;
  /** How far it bobs up and down, in points. */
  distance?: number;
};

/** A 3D icon that gently floats up and down and tilts, so it feels like a real object. */
export function FloatingIcon3D({ name, size = 80, distance = 6 }: FloatingIcon3DProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.set(withRepeat(withTiming(1, { duration: 1800, easing: Easing.inOut(Easing.sin) }), -1, true));
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const p = progress.get();
    return {
      transform: [{ translateY: -distance * p }, { rotate: `${-4 + 8 * p}deg` }],
    };
  });

  return (
    <Animated.View style={animatedStyle}>
      <Icon3D name={name} size={size} bubble={false} />
    </Animated.View>
  );
}
