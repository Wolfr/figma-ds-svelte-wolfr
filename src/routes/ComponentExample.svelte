<script>

  export let name
</script>

<div class="box">
  <h2>{name}</h2>
  <div class="example">
    <slot />
  </div>
</div>

<style>

  .box {
      margin: 0 0 16px;
  }

  @media (min-width: 800px) {
      .box {
          display: flex;
          gap: 16px;
      }

      .box .example {
          flex: 1 0 auto;
      }
  }


  .box h2 {
      font-size: 11px;
      font-family: monospace;
      font-weight: 400;
      flex: 0 0 160px;
  }


</style>
