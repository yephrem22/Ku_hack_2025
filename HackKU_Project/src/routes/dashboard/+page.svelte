<script>
  import { onMount } from 'svelte';
  import CardLink from '../../lib/CardLink.svelte';
  import CustomAlert from '../../lib/CustomAlert.svelte'; // Import custom alert

  const cards = [
    {
      href: "/risk-quiz",
      title: "Risk Factor Quiz",
      description: "Learn more about your lifestyle and Alzheimer’s risk."
    },
    {
      href: "/memento-box",
      title: "Memento Box",
      description: "Answer personal memory questions to help you recall your life story."
    },
    {
      href: "/memory-review",
      title: "Memory Review Quiz",
      description: "Test yourself on the memories you've stored."
    },
    {
      href: "/memory-album",
      title: "Memory Album",
      description: "See photos to remind you of your past."
    }
  ];

  const reminders = [ 
    "Don't forget to drink some water.",
    "Take a deep breath. You're doing great.",
    "Have you eaten something today?",
    "Time to stretch your legs for a bit!",
    "Call someone you care about!",
    "Review your Memento Box memories when you have time.",
    "Double check your medication schedule today."
  ];

  let alertMessage = '';
  let showAlert = false;

  onMount(() => {
    setTimeout(() => {
      const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
      alertMessage = randomReminder;
      showAlert = true;
    }, 1500);
  });
</script>

<style>
  .dashboard {
    max-width: 800px;
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

  .card-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }
</style>

<div class="dashboard">
  <h2>Welcome to Your Dashboard</h2>
  <p>Choose an activity to get started</p>

  <div class="card-links">
    {#each cards as card}
      <CardLink {...card} />
    {/each}
  </div>

  <CustomAlert {alertMessage} bind:showAlert />
</div>

