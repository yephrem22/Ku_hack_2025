<script>
  import { goto } from "$app/navigation";
  import { supabase } from "$lib/supabaseClient";
  import { user } from "$lib/stores/user";

  let email = "";
  let password = "";

  async function handleSubmit() {
    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      // Update the user store
      user.set(data.user);
      goto("/dashboard");
    }
  }
</script>

<div class="log_in-container">
  <h2>Log Into Recall</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>

    <div>
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />
    </div>

    <button type="submit">Log In</button>
  </form>
</div>

<style>
  .log_in-container {
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
    color: black;
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
