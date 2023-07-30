<script lang="ts">

  export let type: 'text' | 'password' = 'text'
  export let value: string

  export let placeholder: string | undefined = undefined
  export let autocomplete: 'on' | 'off' = 'off'

  export let id: string | undefined = undefined

  export let min: number = undefined | undefined
  export let max: number  = undefined | undefined

</script>

{#if type === 'password'}
  <input type="password" bind:value={value} {id} {placeholder} {autocomplete}>
{:else if type === 'email'}
  <input type="email" bind:value={value} {id} {placeholder} {autocomplete}>
{:else if type === 'url'}
  <input type="url" bind:value={value} {id} {placeholder}>
{:else if type === 'number'}
  <input type="number" bind:value={value} {id} {placeholder} {min} {max}>
{:else}
  <input type="text" bind:value={value} {id} {placeholder} {autocomplete}>
{/if}

<style>

  input:where([type="text"], [type="password"], [type="email"], [type="url"], [type="number"], [type="search"]) {
      font-family: var(--font-family);
      font-size: 12px;
      line-height: var(--body-line-height);
      border: 1px solid var(--field-border-color, hotpink);
      width: 100%;
      color: var(--gray-5, hotpink);
      padding: 6px 4px;
      box-sizing: border-box;
      border-radius: var(--border-radius-small);
  }

  input:where([type="text"], [type="password"], [type="email"], [type="url"], [type="number"], [type="search"]):focus {
      outline: 0;
  }

  input:where([type="text"], [type="password"], [type="email"], [type="url"], [type="number"], [type="search"]):focus-visible {
      border-color: var(--focus-ring-color);
      box-shadow: 0 0 0 1px var(--focus-ring-color);
  }

  @media (prefers-color-scheme: dark) {
      input:where([type="text"], [type="password"], [type="email"], [type="url"], [type="number"], [type="search"]) {
          background: none;
          color: #FFF;
      }
  }

</style>
