<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

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
    "Is there a family heirloom or item that means a lot to you?"
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
    const storedAnswers = localStorage.getItem('mementoAnswersMap');
    if (storedAnswers) {
      answerMap = JSON.parse(storedAnswers);
    }

    // Default all answers to hidden
    revealedAnswers = Array(questions.length).fill(false);
  });

  function revealAnswer(index) {
    revealedAnswers[index] = true;
  }

  function goBack() {
    goto('/dashboard');
  }
</script>

<style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }

  h2 {
    color: #ed2b48;
    text-align: center;
  }

  .question-block {
    margin-bottom: 1.5rem;
  }

  label {
    font-weight: bold;
  }

  .answer {
    margin-top: 1rem;
    font-style: italic;
    color: #555;
  }

  button {
    margin-top: 0.5rem;
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
  }

  .back-button {
    background-color: #ccc;
    margin-top: 2rem;
  }
</style>

<div class="container">
  <h2>Memory Review Quiz</h2>

  {#each questions as question, i}
    <div class="question-block">
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
    </div>
  {/each}

  <button on:click={goBack} class="back-button">Back to Dashboard</button>
</div>
