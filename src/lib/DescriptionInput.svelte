<script lang="ts">
    import { text } from "./stores";
    import { afterUpdate } from "svelte";

    let prevOutputText = "";
    let element: HTMLTextAreaElement;

    afterUpdate(() => {
        if ($text.output === "" && prevOutputText !== "") {
            element.focus();
        }

        prevOutputText = $text.output;
    });

    const onInput = (event: any) => ($text.raw = event.target.value);

    const className =
        "whitespace-pre-line relative z-10 focus:ring-2 focus:ring-indigo-500 w-full h-[40rem] resize-none focus:border-0 rounded-2xl bg-gray-300 dark:bg-slate-500 p-10";
</script>

{#if $text.output}
    <div class={className}>
        {@html $text.output}
    </div>
{:else}
    <textarea
        bind:this={element}
        class={className}
        readonly={Boolean($text.output)}
        value={$text.raw}
        on:input={onInput}
    />
{/if}
