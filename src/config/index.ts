export { baseConfig } from './base';
export { colors, darkColors } from './colors';
export const twExclude = [
  /-hex-/,                      // disable hex color
  /-\$/,                        // disable variable
  /(rem|em|px|vh|vw|ch|ex)$/,   // disable size
  /-\d*[13579]$/,               // disable odd number
  /-([0-9]{1,}[.][0-9]*)$/,     // disable float
  /^!/,                         // disable important utility
];
