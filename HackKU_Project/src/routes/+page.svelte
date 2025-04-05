<script>
  import { onMount } from 'svelte';
  let animate = false;

  onMount(() => {
    animate = true;
  });
</script>

<style>
  .container {
    max-width: 800px;
    margin: 3rem auto;
    padding: 2rem;
    text-align: center;
    font-family: Arial, sans-serif;
    transform: scale(0.9);
    opacity: 0;
    transition: all 0.6s ease;
  }

  .container.animate {
    transform: scale(1);
    opacity: 1;
  }

  .header-box {
    background-color: #ed2b48;
    color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    color: #444;
    margin: 1rem 0 2rem;
  }

  button {
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #c41f39;
  }

  a {
    text-decoration: none;
  }
</style>

<div class="container {animate ? 'animate' : ''}">
  <div class="header-box">
    <h1>Welcome to Recall</h1>
  </div>
  <p>
    This site helps people with Alzheimer's reinforce important memories
    and build routines by engaging with personalized memory flashcards.
  </p>
  <a href="/log_in">
    <button>Log In</button>
  </a>
  <a href="/signup">
    <button>Sign Up</button>
  </a>
</div>
