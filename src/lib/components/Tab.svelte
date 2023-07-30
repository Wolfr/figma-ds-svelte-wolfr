<script>

  export let active = false;
</script>

<button class="tab" class:active><slot /></button>

<style>

  .tab {
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

  .tab.active {
      opacity: 1;
  }

  .tab:active {
      opacity: .44;
  }

</style>
