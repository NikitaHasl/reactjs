export const selectCharacters = state => state.characters.data;
export const selectCharactersStatus = state => state.characters.status;
export const selectCharactersError = state => state.characters.error;
export const selectCharactersCount = state => state.characters.info.count;
export const selectCharactersPages = state => state.characters.info.pages;