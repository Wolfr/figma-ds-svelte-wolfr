<script lang="ts">

  export let value: string;
  export let name: string;
  export let id: string;
  export let disabled: boolean;

</script>

<input type="radio" {name} {id} {value} bind:group={value} {disabled} on:change on:focus on:blur />

<style>

  input[type="radio"] {
      margin: 0;
      padding: 0;
      -webkit-appearance: none;
      appearance: none;
  }

  input[type="radio"] {
      border-radius: 50%;
      position: relative;
      margin-right: 4px;
  }

  input[type="radio"]:before {
      content: " ";
      width: 11px;
      height: 11px;
      display: block;
      border-radius: 50%;
      transition: 120ms transform ease-in-out;
      box-shadow: 0 0 0 1px var(--gray-3, hotpink);
  }

  @media (prefers-color-scheme: dark) {
      input[type="radio"]:before {
          box-shadow: 0 0 0 1px var(--gray-5, hotpink);
      }
  }

  input[type="radio"]:checked:before {
      box-shadow: 0 0 0 1px var(--primary-color, hotpink);
  }

  input[type="radio"]:checked:after {
      content: " ";
      background: var(--primary-color, hotpink);
      width: 7px;
      height: 7px;
      display: block;
      position: absolute;
      top: 2px;
      left: 2px;
      border-radius: 50%;
      transition: 120ms transform ease-in-out;
  }

  input[type="radio"]:disabled {
      opacity: .35;
  }

</style>
