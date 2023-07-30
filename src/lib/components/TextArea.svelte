<script lang="ts">

  export let value: string = '';
  export let placeholder: string = '';
  export let rows: number = 3;
  // cols has no default
  export let cols: number;

</script>

<textarea placeholder={placeholder} bind:value={value} {rows} {cols}></textarea>

<style>

    textarea {
        font-family: var(--font-family);
        font-size: 12px;
        line-height: 1.3;
        border: 1px solid var(--field-border-color, hotpink);
        width: 100%;
        color: #333;
        box-sizing: border-box;
        padding: 6px 4px;
        outline: 0;
        border-radius: var(--border-radius-small);
    }

    textarea:focus-visible {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
    }

    @media (prefers-color-scheme: dark) {
        textarea {
            background: none;
            border-color: var(--gray-5, hotpink);
            color: #FFF;
        }
    }


</style>
