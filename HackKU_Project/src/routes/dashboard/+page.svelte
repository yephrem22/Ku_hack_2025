<script>
  import { onMount } from "svelte";
  import CardLink from "$lib/CardLink.svelte";
  import CustomAlert from "$lib/CustomAlert.svelte";
  import { user } from "$lib/stores/user";
  import { supabase } from "$lib/supabaseClient";
  import { goto } from "$app/navigation";

  let currentUser;

  $: currentUser = $user;

  const cards = [
    {
      href: "/risk-quiz",
      title: "Risk Factor Quiz",
      description: "Learn more about your lifestyle and Alzheimer’s risk.",
    },
    {
      href: "/memento-box",
      title: "Memento Box",
      description:
        "Answer personal memory questions to help you recall your life story.",
    },
    {
      href: "/memory-review",
      title: "Memory Review Quiz",
      description: "Test yourself on the memories you've stored.",
    },
    {
      href: "/memory-album",
      title: "Memory Album",
      description: "See photos to remind you of your past.",
    },
  ];

  const reminders = [
    "Don't forget to drink some water.",
    "Take a deep breath. You're doing great.",
    "Have you eaten something today?",
    "Time to stretch your legs for a bit!",
    "Call someone you care about!",
    "Review your Memento Box memories when you have time.",
    "Double check your medication schedule today.",
  ];

  let alertMessage = "";
  let showAlert = false;

  onMount(() => {
    if (!currentUser) {
      goto("/"); // Redirect if user not logged in
      return;
    }

    // Show a reminder after delay
    setTimeout(() => {
      const randomReminder =
        reminders[Math.floor(Math.random() * reminders.length)];
      alertMessage = randomReminder;
      showAlert = true;
    }, 1500);
  });
</script>

{#if currentUser}
  <div
    class="min-h-screen bg-white flex items-center justify-center px-4 py-10"
  >
    <div
      class="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <h2 class="text-3xl font-bold text-rose-600 mb-2">
        Welcome to Your Dashboard {$user.user_metadata.display_name}!
      </h2>
      <p class="text-gray-700 mb-6">Choose an activity to get started</p>

      <div class="flex flex-col gap-4">
        {#each cards as card}
          <CardLink {...card} />
        {/each}
      </div>

      <CustomAlert {alertMessage} bind:showAlert />
    </div>
  </div>
{/if}
