<script>

  export let active = false;
</script>

<button role="tab" aria-selected={active}><slot /></button>

<style>


  [role="tab"] {
      appearance: none;
      -webkit-appearance: none;
      font-size: 11px;
      font-weight: 600;
      background: none;
      padding: 0;
      border: none;
      opacity: .5;
      padding: 6px;
      color: #000;
  }

  @media (prefers-color-scheme: dark) {
      [role="tab"] {
          color: #FFF;
      }
  }

  [role="tab"][aria-selected="true"] {
      opacity: 1;
  }

  [role="tabpanel"].is-hidden {
    display: none;
  }

  [role="tab"]:active {
      opacity: .44;
  }

</style>
