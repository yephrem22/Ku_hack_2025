<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const allQuestions = [
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

  let questions = [];
  let answerMap = {}; // Object to map questions to saved answers
  let revealedAnswers = [];

  // Get 10 random questions
  function getRandomQuestions() {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  onMount(() => {
    questions = getRandomQuestions();

    // Retrieve the answers stored as an object
    const storedAnswers = localStorage.getItem("mementoAnswersMap");
    if (storedAnswers) {
      answerMap = JSON.parse(storedAnswers);
    }

    // Default all answers to hidden
    revealedAnswers = Array(questions.length).fill(false);

    if (!currentUser) {
      goto("/"); // Redirect if user not logged in
      return;
    }
  });

  function revealAnswer(index) {
    revealedAnswers[index] = true;
  }

  function goBack() {
    goto("/dashboard");
  }
</script>

<div class="container">
  <h2>Memory Review Quiz</h2>

  <ol>
    {#each questions as question, i}
      <li class="question-block">
        <label>{question}</label>

        <button on:click={() => revealAnswer(i)}>Reveal Answer</button>

        {#if revealedAnswers[i]}
          <div class="answer">
            {#if answerMap[question]}
              <p>{answerMap[question]}</p>
            {:else}
              <p><em>No answer found for this question.</em></p>
            {/if}
          </div>
        {/if}
      </li>
    {/each}
  </ol>

  <button on:click={() => goto("/dashboard")} class="dashboard-button"
    >Back to Dashboard</button
  >
</div>

<style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    padding-top: 6rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  h2 {
    color: #ed2b48; /* Signature red color */
    text-align: center;
    font-size: 2.5rem; /* Adjusted for larger size */
    padding: 1rem;
    background-color: #fff;
    border: 2px solid #ed2b48; /* Light box border */
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Light shadow for box effect */
    margin-bottom: 1.5rem;
  }

  ol {
    list-style-type: decimal; /* Ordered list */
    padding-left: 1.5rem; /* Adds indentation to the list */
    color: black; /* Ensures text color is black */
  }

  .question-block {
    margin-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align questions to the left */
  }

  label {
    font-weight: bold;
    font-size: 1.2rem; /* Adjusted for better readability */
    color: black; /* Ensures text color is black */
  }

  button {
    margin-top: 0.5rem;
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    align-self: flex-end; /* Align the button to the right */
  }

  .dashboard-button {
    margin: 2rem auto 0; /* Top margin, horizontal auto to center */
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    display: block; /* Needed for margin auto to work on block elements */
  }

  .answer {
    margin-top: 1rem;
    font-style: italic;
    color: #555;
  }
</style>
