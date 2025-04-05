<script>
  // Later, we can pass user's name here too
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

  a {
    text-decoration: none;
  }

  .card {
    background-color: #f9f9f9;
    border-left: 6px solid #ed2b48;
    padding: 1.5rem;
    border-radius: 8px;
    transition: transform 0.2s ease;
  }

  .card:hover {
    transform: translateY(-4px);
    background-color: #ffe5ea;
  }

  .card h3 {
    margin: 0;
    color: #333;
  }

  .card p {
    margin: 0.5rem 0 0;
    color: #555;
  }
</style>

<div class="dashboard">
  <h2>Welcome to Your Dashboard</h2>
  <p>Choose an activity to get started</p>

  <div class="card-links">
    <a href="/risk-quiz">
      <div class="card">
        <h3>Risk Factor Quiz</h3>
        <p>Learn more about your lifestyle and Alzheimer’s risk.</p>
      </div>
    </a>

    <a href="/memento-box">
      <div class="card">
        <h3>Memento Box</h3>
        <p>Answer personal memory questions to help you recall your life story.</p>
      </div>
    </a>

    <a href="/memory-review">
      <div class="card">
        <h3>Memory Review Quiz</h3>
        <p>Test yourself on the memories you've stored.</p>
      </div>
    </a>
  </div>
</div>

