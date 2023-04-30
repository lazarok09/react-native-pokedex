export function getEnglishFlavor(specie: PokedexSpecie) {
  const result = specie.flavor_text_entries?.find(entry => {
    return entry.language.name === 'en';
  });
  return result?.flavor_text.replace(/\n/g, ' ') || '';
}
