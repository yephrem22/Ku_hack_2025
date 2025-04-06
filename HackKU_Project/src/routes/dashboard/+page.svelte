<!-- <script>
  import { onMount } from 'svelte';
  import CardLink from '../../lib/CardLink.svelte';
  import CustomAlert from '../../lib/CustomAlert.svelte';

  const cards = [
    {
      href: "/risk-quiz",
      title: "Risk Factor Quiz",
      description: "Learn more about your lifestyle and Alzheimer’s risk."
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

  let alertMessage = '';
  let showAlert = false;

  onMount(() => {
    setTimeout(() => {
      const randomReminder = reminders[Math.floor(Math.random() * reminders.length)];
      alertMessage = randomReminder;
      showAlert = true;
    }, 1500);
  });
</script>

<div class="min-h-screen bg-white flex items-center justify-center px-4 py-10">
  <div class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center">
    <h2 class="text-3xl font-bold text-rose-600 mb-2">Welcome to Your Dashboard</h2>
    <p class="text-gray-700 mb-6">Choose an activity to get started</p>

    Stack the cards vertically using Tailwind's flex and flex-col utilities -->
    <!-- <div class="flex flex-col gap-4">
      {#each cards as card}
        <CardLink {...card} />
      {/each}
    </div>

    <CustomAlert {alertMessage} bind:showAlert />
  </div>
</div>  -->
<script>
  import { onMount } from 'svelte';
  import CardLink from '../../lib/CardLink.svelte';

  const cards = [
    {
      href: "/risk-quiz",
      title: "Risk Factor Quiz",
      description: "Learn more about your lifestyle and Alzheimer’s risk."
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

  // List of reminders
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

<!-- Tailwind-based layout -->
<div class="min-h-screen bg-white flex items-center justify-center px-4 py-10 pt-24"> <!-- Adjusted top padding (pt-24) -->
  <div class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center">
    <h2 class="text-3xl font-bold text-rose-600 mb-2">Welcome to Your Dashboard</h2>
    <p class="text-gray-700 mb-6">Choose an activity to get started</p>

    <!-- Stack the cards vertically using Tailwind's flex and flex-col utilities -->
    <div class="flex flex-col gap-4">
      {#each cards as card}
        <CardLink {...card} />
      {/each}

      <!-- Reminders Card -->
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

