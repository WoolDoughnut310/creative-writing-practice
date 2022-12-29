<script lang="ts">
    import Header from "./lib/Header.svelte";
    import DescriptionInput from "./lib/DescriptionInput.svelte";
    import ActionButton from "./lib/ActionButton.svelte";
    import ConfidenceRating from "./lib/ConfidenceRating.svelte";
</script>

<main
    class="w-full h-full flex flex-col justify-center items-center bg-white dark:bg-slate-800 text-gray-700 dark:text-white"
>
    <Header />
    <div class="relative w-3/4">
        <ActionButton />
        <DescriptionInput />
    </div>
    <ConfidenceRating />
    <span
        class="absolute bottom-5 bg-gray-200 dark:bg-gray-400/70 px-4 py-2 border-gray-700 dark:border-white border-2 rounded-2xl"
    >
        <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com/icon/Fu4FClqDtEMZ/creative-writing"
            class="underline">Creative Writing</a
        >
        icon by
        <a
            target="_blank"
            rel="noreferrer"
            href="https://icons8.com"
            class="underline">Icons8</a
        >
    </span>
</main>
