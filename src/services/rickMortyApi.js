const BASE_URL = 'https://rickandmortyapi.com/api';

export const rickMortyApi = {
  getAllCharacters: async (page = 1) => {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) throw new Error('Error al cargar personajes');
    return response.json();
  },

  getCharacterById: async (id) => {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) throw new Error('Error al cargar personaje');
    return response.json();
  },

  searchCharacters: async (name) => {
    const response = await fetch(`${BASE_URL}/character?name=${name}`);
    if (!response.ok) throw new Error('No se encontraron personajes');
    return response.json();
  },
};
