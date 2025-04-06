<script>
  import { goto } from '$app/navigation';

  let name = '';
  let password = '';

  function handleSubmit() {
    // In a real app you'd handle validation/auth here
    if (name && password) {
      goto('/dashboard');
    } else {
      alert('Please fill out all fields.');
    }
  }
</script>

<style>
  .log_in-container {
    max-width: 500px;
    margin: 3rem auto;
    padding: 2rem;
    background-color: transparent; /* Semi-transparent white */
    opacity: 1;
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
    color: black;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent input */
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

<div class="log_in-container">
  <h2>Log Into Recall</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="name">Name</label>
      <input id="name" type="text" bind:value={name} required />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />
    </div>

    <button type="submit">Log In</button>
  </form>
</div>