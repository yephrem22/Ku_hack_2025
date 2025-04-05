<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

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
    "Is there a family heirloom or item that means a lot to you?"
  ];

  let answerMap = {};

  onMount(() => {
    const stored = localStorage.getItem('mementoAnswersMap');
    if (stored) {
      answerMap = JSON.parse(stored);
    } else {
      questions.forEach(q => {
        answerMap[q] = ""; // Initialize empty answers
      });
    }
  });

  function submitAnswers() {
    localStorage.setItem('mementoAnswersMap', JSON.stringify(answerMap));
    alert('Your answers have been saved!');
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
  textarea {
    width: 100%;
    height: 70px;
    padding: 0.5rem;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-top: 0.5rem;
    resize: vertical;
  }
  button {
    background-color: #ed2b48;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    display: block;
    margin: 2rem auto 0;
  }
</style>

<div class="container">
  <h2>Memento Box</h2>
  {#each questions as question}
    <div class="question-block">
      <label>{question}</label>
      <textarea bind:value={answerMap[question]}></textarea>
    </div>
  {/each}

  <button on:click={submitAnswers} class="save-button">Save Answers</button>
  <button on:click={() => goto('/dashboard')} class="dashboard-button">Back to Dashboard</button>
</div>


