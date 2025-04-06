<script>
  // Import the Header component
  import Header from '$lib/header.svelte'; // Make sure the path is correct

  
  
  let { children } = $props();
  import "../app.css";

  // Define links for the dropdown
  const links = [
    { name: 'Home', url: '/' },
    { name: 'Dashboard', url: '/dashboard' },
    { name: 'Memento Box', url: '/memento-box' },
    { name: 'Memory Review', url: '/memory-review' },
    // Add more pages here
  ];

  // Function to navigate to a selected page
  function navigateTo(url) {
    window.location.href = url;
  }
</script>


<Header />

<main>
  {@render children()}
</main>

