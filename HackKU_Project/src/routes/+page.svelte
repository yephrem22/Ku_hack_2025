<script>
  import { onMount } from 'svelte';
  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

<div class={`max-w-3xl mx-auto my-12 px-6 py-10 text-center bg-white transform transition-all duration-500 ${animate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
  <div class="bg-[#ed2b48] text-white p-8 rounded-xl shadow-lg mb-8">
    <h1 class="text-4xl font-bold mb-2">Welcome to Recall</h1>
  </div>

  <p class="text-lg text-gray-700 mb-8">
    This site helps people with Alzheimer's reinforce important memories
    and build routines by engaging with personalized memory flashcards.
  </p>

  <div class="flex justify-center gap-4">
    <a href="/log-in">
      <button class="bg-[#ed2b48] hover:bg-[#c41f39] text-white px-6 py-2 rounded-md text-base transition-colors duration-300">
        Log In
      </button>
    </a>
    <a href="/signup">
      <button class="bg-[#ed2b48] hover:bg-[#c41f39] text-white px-6 py-2 rounded-md text-base transition-colors duration-300">
        Sign Up
      </button>
    </a>
  </div>
</div>
