<script lang="ts">
    import { text } from "./stores";
</script>

{#if $text.output}
    <div class="flex mt-2 font-mono text-slate-200 mr-[15%] self-end">
        Confidence: {$text.confidence}
    </div>
{/if}
