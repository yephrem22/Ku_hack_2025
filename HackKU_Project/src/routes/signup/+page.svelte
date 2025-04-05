<script>
  import { goto } from '$app/navigation';

  let name = '';
  let age = '';
  let password = '';

  function handleSubmit() {
    // In a real app you'd handle validation/auth here
    if (name && age && password) {
      goto('/dashboard');
    } else {
      alert('Please fill out all fields.');
    }
  }
</script>

<style>
  .signup-container {
    max-width: 500px;
    margin: 3rem auto;
    padding: 2rem;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    text-align: center;
  }

  h2 {
    color: #ed2b48;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #c41f39;
  }

  label {
    text-align: left;
    font-weight: bold;
    color: #444;
  }
</style>

<div class="signup-container">
  <h2>Create Your Account</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" bind:value={name} required />
    </div>

    <div>
      <label for="age">Age</label>
      <input id="age" type="number" min="0" bind:value={age} required />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />
    </div>

    <button type="submit">Sign Up</button>
  </form>
</div>
