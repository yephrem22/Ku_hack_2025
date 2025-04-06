<script>
  import Header from '$lib/header.svelte'; 
  let { children } = $props();
  import "../app.css";


  const links = [
    { name: 'Home', url: '/' },
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Memento Box', url: '/memento-box' },
    { name: 'Memory Review', url: '/memory-review' },
  
  ];

  
  function navigateTo(url) {
    window.location.href = url;
  }
</script>

<style>
  :global(body) {
    background-image: url('../assets/col3.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  main {
    background-color:transparent; 
    border-radius: 16px;
    min-height: calc(100vh - 60px); 
    padding: 20px;
    padding-top: 20px;
  }
</style>

<Header />

<main>
  {@render children()}
</main>

