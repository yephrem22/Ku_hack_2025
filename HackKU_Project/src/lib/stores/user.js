// src/lib/stores/user.js
import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';

export const user = writable(null);

// Load current user session on startup
supabase.auth.getUser().then(({ data: { user: currentUser } }) => {
    user.set(currentUser);
});

// React to login/logout/auth changes
supabase.auth.onAuthStateChange((_event, session) => {
    user.set(session?.user || null);
});