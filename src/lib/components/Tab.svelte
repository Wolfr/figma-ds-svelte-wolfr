<script>

  export let active = false;
</script>

<button class:active><slot /></button>

<style>

  button {
      appearance: none;
      -webkit-appearance: none;
      font-size: 12px;
      font-weight: 600;
      background: none;
      padding: 0;
      border: none;
      opacity: .66;
      padding: 6px;
  }

  .active {
      opacity: 1;
  }

  button:active {
      opacity: .44;
  }

</style>
