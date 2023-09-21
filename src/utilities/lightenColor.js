const colors = [
  "#b12121",
  "#f7a313",
  "#48f713",
  "#008bc7",
  "#0028c7",
  "#6700c7",
  "#ff007b",
  "#0091ff",
];

function getRandomColor() {
  const rndColor = colors[Math.floor(Math.random() * colors.length)];
  const shadowColor = lightenColor(rndColor);

  return { rndColor, shadow: "2px 2px 5px " + shadowColor };
}

function lightenColor(hex, percent = 0.5) {
  if (!hex) {
    return null;
  }

  // Check if the provided hex color starts with '#', and remove it if present
  hex = hex.startsWith("#") ? hex.slice(1) : hex;

  // Parse the hex color into its RGB components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Calculate the new RGB values by adding a percentage of white
  const newR = Math.min(255, r + (255 - r) * percent);
  const newG = Math.min(255, g + (255 - g) * percent);
  const newB = Math.min(255, b + (255 - b) * percent);

  // Convert the new RGB values back to hexadecimal
  const newHex = `#${Math.round(newR)
    .toString(16)
    .padStart(2, "0")}${Math.round(newG)
    .toString(16)
    .padStart(2, "0")}${Math.round(newB).toString(16).padStart(2, "0")}`;

  return newHex;
}
export default getRandomColor;
