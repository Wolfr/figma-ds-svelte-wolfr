<script>

  export let name
</script>

<div class="component-example-box">
  <h2>{name}</h2>
  <div class="example">
    <slot />
  </div>
</div>

<style>

    .component-example-box {
        margin: 0 0 16px;
    }

    @media (min-width: 800px) {
        .component-example-box {
            display: flex;
            gap: 16px;
        }

        .component-example-box .example {
            flex: 1 0 auto;
        }
    }

    .component-example-box > h2 {
        font-size: 11px;
        font-family: monospace;
        opacity: .5;
        font-weight: 400;
        flex: 0 0 160px;
    }


</style>
