<script>
  // Later, we can pass user's name here too
  import CardLink from '../../lib/CardLink.svelte';

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
      href: "/memory_review",
      title: "Memory Review Quiz",
      description: "Test yourself on the memories you've stored."
    },
    {
      href: "/medication-reminder",
      title: "Medication Reminder",
      description: "Set up reminders for your perscriptions."
    }
  ];
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
  
</div>

