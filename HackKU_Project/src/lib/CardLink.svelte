<script>
    export let href = "/";
    export let title = "Title";
    export let description = "Description";
</script>
  
  <a href={href} class="card-link">
    <div class="card">
      <h3><b>{title}</b></h3>
      <p>{description}</p>
    </div>
  </a>

<style>
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