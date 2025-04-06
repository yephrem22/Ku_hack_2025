<script>
    export let alertMessage = "";
    export let showAlert = false;
  
    function closeAlert() {
      showAlert = false;
    }
  </script>
  
  {#if showAlert}
    <div class="custom-alert">
      <div class="custom-alert-content">
        <p>{alertMessage}</p> <!-- Make sure this line exists -->
        <button on:click={closeAlert}>OK</button>
      </div>
    </div>
  {/if}
  
  <style>
    .custom-alert {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
  
    .custom-alert-content {
      background-color: white;
      padding: 2rem;
      border: 2px solid #ed2b48;
      border-radius: 8px;
      color: #ed2b48;
      text-align: center;
      max-width: 400px;
      width: 100%;
      font-family: Arial, sans-serif;
    }
  
    button {
      margin-top: 1rem;
      background-color: #ed2b48;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  