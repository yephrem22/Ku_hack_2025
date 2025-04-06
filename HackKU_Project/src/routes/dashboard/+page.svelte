 <script>
  import { onMount } from 'svelte';
  import CardLink from '../../lib/CardLink.svelte';

  const cards = [
    {
      href: "/risk-quiz",
      title: "Risk Factor Quiz",
      description: "Learn more about your lifestyle and Alzheimer's risk."
    },
    {
      href: "/memento-box",
      title: "Memento Box",
      description: "Answer personal memory questions to help you recall your life story."
    },
    {
      href: "/memory-review",
      title: "Memory Review Quiz",
      description: "Test yourself on the memories you've stored."
    },
    {
      href: "/memory-album",
      title: "Memory Album",
      description: "See photos to remind you of your past."
    }
  ];

  const reminders = [ 
    "Don't forget to drink some water.",
    "Take a deep breath. You're doing great.",
    "Have you eaten something today?",
    "Time to stretch your legs for a bit!",
    "Call someone you care about!",
    "Review your Memento Box memories when you have time.",
    "Double check your medication schedule today."
  ];
</script>

<div class="min-h-screen flex items-center justify-center px-4 py-10 pt-24 bg-transparent"> 
  <div class="w-full max-w-3xl p-8 text-center space-y-6 bg-white rounded-2xl shadow-xl">
    <h2 class="text-3xl font-bold text-rose-600 mb-2">Welcome to Your Dashboard</h2>
    <p class="text-gray-700 mb-6">Choose an activity to get started</p>

    <div class="flex flex-col gap-4">
      {#each cards as card}
        <div class="bg-transparent bg-opacity-1 rounded-xl shadow-lg">
          <CardLink {...card} />
        </div>
      {/each}

      <div class="bg-rose-50 border border-rose-200 rounded-lg p-6 shadow-md">
        <h3 class="text-2xl font-semibold text-rose-600 mb-4">Reminders</h3>
        <ul class="list-disc pl-5 text-left text-gray-700">
          {#each reminders as reminder}
            <li>{reminder}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
