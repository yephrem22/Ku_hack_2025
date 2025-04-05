// src/stores.js
import { writable } from 'svelte/store';

export const mementoData = writable({
  name: '',
  birthPlace: '',
  favoriteMemory: '',
  // Add more fields as needed
});
