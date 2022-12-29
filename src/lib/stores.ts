import { writable } from "svelte/store";

export const text = writable({ raw: "", output: "", confidence: 0 });
