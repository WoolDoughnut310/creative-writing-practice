<script lang="ts">
    import { PlayIcon, RefreshCwIcon } from "svelte-feather-icons";
    import clsx from "clsx";
    import { text } from "./stores";
    import tagger from "./tagger";

    function onClick() {
        if ($text.output) {
            $text.output = "";
        } else {
            [$text.output, $text.confidence] = tagger($text.raw);
        }
    }

    const iconClassName = "w-full h-full";
</script>

<button
    title="Convert text"
    type="button"
    on:click={onClick}
    class={clsx(
        "w-16 h-10 p-2 bg-blue-200 hover:bg-blue-100 dark:bg-blue-400 dark:hover:bg-blue-300 rounded-full absolute right-2 top-0 transition-transform",
        { "-translate-y-14": $text.raw || $text.output }
    )}
>
    {#if $text.output}
        <RefreshCwIcon class={iconClassName} />
    {:else}
        <PlayIcon class={iconClassName} />
    {/if}
</button>
