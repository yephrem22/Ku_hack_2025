<script>
  import { user } from "$lib/stores/user";
  import { supabase } from "$lib/supabaseClient";
  import { goto } from "$app/navigation";

  let currentUser;

  $: currentUser = $user;

  import logo from "../assets/logo3.png";

  function logOut() {
    supabase.auth.signOut();
    goto("/");
  }

  function logout() {
    window.location.href = "/"; // Redirect to homepage
  }
</script>

<div class="header">
  <div class="logo-container">
    <img src={logo} alt="logo" />
  </div>

  <div class="title">Recall</div>

  <button class="logout-button" on:click={logout} aria-label="Log Out">
    <svg class="logout-icon" viewBox="0 0 24 24">
      <path
        d="M10 16v-3H3v-2h7V8l6 4-6 4zM20 3H12v2h8v14h-8v2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  </button>
</div>

<style>
  .header {
    background-color: #ed2b48;
    fill-opacity: 100;
    color: white;
    padding: 1rem 2rem;
    font-family: "Arial";
    font-size: 2rem;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }

  .logo-container img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .title {
    flex: 1;
    text-align: center;
  }

  .logout-button {
    background-color: white;
    color: #ed2b48;
    border: none;
    padding: 0.6rem 0.8rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }

  .logout-button:hover {
    background-color: #ffe6ea;
  }
  .logout-icon {
    width: 1.6rem;
    height: 1.6rem;
    fill: #ed2b48;
  }
</style>
