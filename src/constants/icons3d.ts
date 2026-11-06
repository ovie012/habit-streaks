// 3D icons from Microsoft's Fluent Emoji set (MIT licence,
// see assets/images/3d/LICENSE-fluentui-emoji.txt).

export const icons3d = {
  books: require("../../assets/images/3d/books.png"),
  droplet: require("../../assets/images/3d/droplet.png"),
  shoe: require("../../assets/images/3d/shoe.png"),
  moon: require("../../assets/images/3d/moon.png"),
  laptop: require("../../assets/images/3d/laptop.png"),
  seedling: require("../../assets/images/3d/seedling.png"),
  heart: require("../../assets/images/3d/heart.png"),
  bed: require("../../assets/images/3d/bed.png"),
  coffee: require("../../assets/images/3d/coffee.png"),
  pencil: require("../../assets/images/3d/pencil.png"),
  music: require("../../assets/images/3d/music.png"),
  apple: require("../../assets/images/3d/apple.png"),
  fire: require("../../assets/images/3d/fire.png"),
  trophy: require("../../assets/images/3d/trophy.png"),
  sparkles: require("../../assets/images/3d/sparkles.png"),
  calendar: require("../../assets/images/3d/calendar.png"),
} as const;

export type Icon3DName = keyof typeof icons3d;

/** The icons a user can pick for a habit (the rest are for the app itself). */
export const habitIconNames: Icon3DName[] = [
  "books",
  "droplet",
  "shoe",
  "moon",
  "laptop",
  "seedling",
  "heart",
  "bed",
  "coffee",
  "pencil",
  "music",
  "apple",
];
