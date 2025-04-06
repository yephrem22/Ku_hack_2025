<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import CustomAlert from "../../lib/CustomAlert.svelte"; // Import CustomAlert
  import { supabase } from "$lib/supabaseClient"; // Ensure supabase is properly initialized

  let questions = [
    "What is your earliest memory?",
    "Describe your childhood home.",
    "Who was your best friend growing up?",
    "What was your favorite family tradition?",
    "Describe a moment you felt truly proud.",
    "What’s a trip you’ll never forget?",
    "Tell me about a holiday you loved.",
    "Who influenced you most in life?",
    "What did you want to be as a child?",
    "What was your favorite meal as a kid?",
    "Do you have a spouse?",
    "What is your birthday?",
    "What was your favorite job?",
    "What nickname do the people closest to you call you as?",
    "Who is your favorite musician?",
    "Tell me about a funny story you remember.",
    "What are the names of your children or grandchildren?",
    "What is a favorite memory you have with your family?",
    "What kind of car did you love driving the most?",
    "Did you have a favorite pet? What was their name?",
    "Who was your favorite president, and why?",
    "Is there a country you loved visiting or dream of visiting?",
    "What’s an address you remember living at?",
    "What’s a recipe or meal you’ve passed down to others?",
    "What do your grandchildren call you?",
    "Is there a family heirloom or item that means a lot to you?",
  ];

  let answerMap = {};
  let showAlert = false;
  let alertMessage = "";

  // Handle fetching data if any (You can skip this if you want to initialize empty answers)
  onMount(async () => {
    const stored = localStorage.getItem("mementoAnswersMap");
    if (stored) {
      answerMap = JSON.parse(stored);
    } else {
      questions.forEach((q) => {
        answerMap[q] = ""; // Initialize empty answers
      });
    }

    // Check if user is logged in, otherwise redirect
    const { data: userData, error } = await supabase.auth.getUser();
    if (error || !userData) {
      goto("/"); // Redirect if user not logged in
      return;
    }
  });

  async function submitAnswers() {
    const { data: user, error } = await supabase.auth.getUser(); // Get the current user

    if (error) {
      console.error("Error fetching user:", error.message);
      alertMessage = "You need to log in first!";
      showAlert = true;
      return;
    }

    if (!user) {
      console.error("User is not logged in");
      alertMessage = "You need to log in first!";
      showAlert = true;
      return;
    }

    for (const [question, answer] of Object.entries(answerMap)) {
      const { error: insertError } = await supabase
        .from("memento_answers")
        .insert([
          {
            user_id: user.id, // Use user.id to save the current user's answers
            question: question,
            answer: answer,
          },
        ]);

      if (insertError) {
        console.error("Insert error:", insertError); // Log the error
        alertMessage = "Failed to save your answer!";
        showAlert = true;
        return;
      }
    }

    alertMessage = "Your answers have been saved!";
    showAlert = true;
  }
  async function getCurrentUserUuid() {
    const {
      data: { user, user_metadata },
    } = await supabase.auth.getUser();

    if (user) {
      console.log("Current user's UUID:", user.id);
      console.log("Current user's name:", user_metadata.display_name); // This is the UUID of the current user
      return user.id;
    } else {
      console.error("No user found");
      return null;
    }
  }

  // Call the function to get the current user's UUID
  getCurrentUserUuid();
</script>

<div class="container">
  <h2>Memento Box</h2>
  {#each questions as question}
    <div class="question-block">
      <label>{question}</label>
      <textarea bind:value={answerMap[question]}></textarea>
    </div>
  {/each}

  <button on:click={submitAnswers} class="save-button">Save Answers</button>
  <button on:click={() => goto("/dashboard")} class="dashboard-button">
    Back to Dashboard
  </button>

  <!-- CustomAlert component -->
  <CustomAlert {alertMessage} {showAlert} />
</div>

<style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 3rem;
    padding-top: 6rem; /* 🛠 Add this line: pushes content below fixed header */
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  h2 {
    color: #ed2b48;
    text-align: center;
    font-size: 2.5rem;
    padding: 1rem;
    background-color: #fff;
    border: 2px solid #ed2b48;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 1.5rem;
  }

  .question-block {
    margin-bottom: 1.5rem;
  }

  label {
    color: black;
    font-weight: bold;
  }

  textarea {
    width: 100%;
    height: 70px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #000000;
    margin-top: 0.5rem;
    resize: vertical;
    color: black;
  }

  button {
    background-color: #ed2b48;
    color: rgb(255, 255, 255);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    margin: 2rem auto 0;
  }
</style>
