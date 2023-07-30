<script lang="ts">

  export let type: 'text' | 'password' = 'text'
  export let value: string
  export let placeholder: string
  export let autocomplete: 'on' | 'off' = 'off'

  export let min: number
  export let max: number

</script>

{#if type === 'password'}
  <input type="password" bind:value={value} {placeholder} {autocomplete}>
{:else if type === 'email'}
  <input type="email" bind:value={value} {placeholder} {autocomplete}>
{:else if type === 'number'}
  <input type="number" bind:value={value} {placeholder} {min} {max}>
{:else}
  <input type="text" bind:value={value} {placeholder} {autocomplete}>
{/if}

<style>

    input:where([type="text"], [type="password"], [type="email"], [type="number"], [type="search"]) {
        font-family: Inter, Arial, sans-serif;
        font-size: 12px;
        line-height: 1.3;
        border: 1px solid var(--field-border-color, hotpink);
        width: 100%;
        color: var(--gray-5, hotpink);
        padding: 6px 4px;
        box-sizing: border-box;
        border-radius: var(--border-radius-small);
    }

    input:where([type="text"], [type="password"], [type="email"], [type="number"], [type="search"]):focus {
        outline: 0;
    }

    input:where([type="text"], [type="password"], [type="email"], [type="number"], [type="search"]):focus-visible {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
    }

    @media (prefers-color-scheme: dark) {
        input:where([type="text"], [type="password"], [type="email"], [type="number"], [type="search"]) {
            background: none;
            color: #FFF;
        }
    }

</style>
