<script lang="ts">

  export let value: string | undefined = undefined
  export let placeholder: string | undefined = undefined
  export let id: string | undefined = undefined
  export let rows: number = undefined | 5
  export let cols: number = undefined | undefined

</script>

<textarea placeholder={placeholder} {id} bind:value={value} {rows} {cols}></textarea>

<style>

  textarea {
      font-family: var(--font-family);
      font-size: 12px;
      line-height: var(--body-line-height);
      border: 1px solid var(--field-border-color, hotpink);
      width: 100%;
      color: var(--semantic-text-body, hotpink);
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
