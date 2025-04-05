import { writable } from 'svelte/store';

export interface Memory { //create memory from page to page
  question: string; 
  answer: string;
}

export const memories = writable<Memory[]>([]);


// import { writable } from 'svelte/store';

// const stored = localStorage.getItem('memories');
// export const memories = writable<Memory[]>(stored ? JSON.parse(stored) : []);

// memories.subscribe((value) => {
//   localStorage.setItem('memories', JSON.stringify(value));
// });
