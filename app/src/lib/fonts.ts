import {
  Caveat,
  DM_Sans,
  Fraunces,
  JetBrains_Mono,
  Patrick_Hand,
  Bowlby_One_SC,
} from "next/font/google";

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-fraunces",
});

export const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-patrick-hand",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bowlby",
});
