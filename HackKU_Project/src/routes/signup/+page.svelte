<script>
  import { goto } from '$app/navigation';

  let name = '';
  let age = '';
  let password = '';

  function handleSubmit() {
    if (name && age && password) {
      goto('/dashboard');
    } else {
      alert('Please fill out all fields.');
    }
  }
</script>

<div class="max-w-md mx-auto my-12 px-6 py-8 bg-white rounded-lg shadow-xl">
  <h2 class="text-2xl font-semibold text-red-600 mb-6 text-center">Create Your Account</h2>
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div class="space-y-2">
      <label for="name" class="text-left font-bold text-gray-700">Name</label>
      <input id="name" type="text" bind:value={name} required class="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
    </div>

    <div class="space-y-2">
      <label for="age" class="text-left font-bold text-gray-700">Age</label>
      <input id="age" type="number" min="0" bind:value={age} required class="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
    </div>

    <div class="space-y-2">
      <label for="password" class="text-left font-bold text-gray-700">Password</label>
      <input id="password" type="password" bind:value={password} required class="w-full p-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500" />
    </div>

    <button type="submit" class="w-full py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300">Sign Up</button>
  </form>
</div>
