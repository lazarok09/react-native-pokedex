export function getEnglishFlavor(specie: PokedexSpecie) {
  const result = specie.flavor_text_entries?.find(entry => {
    return entry.language.name === 'en';
  });
  return result?.flavor_text.replace(/\n/g, ' ') || '';
}

export function getADarkenColor(
  color: PokemonTypeColors,
  percent: number,
): PokemonTypeColors {
  const r = parseInt(color.substring(1, 3), 16);
  const g = parseInt(color.substring(3, 5), 16);
  const b = parseInt(color.substring(5, 7), 16);

  // Darken the color by reducing RGB values by a percentage
  const darkenedR = Math.round(r * (1 - percent / 100));
  const darkenedG = Math.round(g * (1 - percent / 100));
  const darkenedB = Math.round(b * (1 - percent / 100));

  // Increase red and blue by multiplying them by a factor
  const increasedR = Math.round(darkenedR * 1.2);
  const increasedB = Math.round(darkenedB * 1.2);

  // Ensure that RGB values are within valid range
  const finalR = Math.max(0, Math.min(255, increasedR));
  const finalG = Math.max(0, Math.min(255, darkenedG));
  const finalB = Math.max(0, Math.min(255, increasedB));

  // Convert RGB values to hex format and return resulting color string
  const resultColor: any = `#${finalR.toString(16)}${finalG.toString(
    16,
  )}${finalB.toString(16)}`;
  return resultColor;
}
