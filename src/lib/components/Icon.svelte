<script lang="ts">
  export let name: string

</script>

<div class="icon">

  {#if name === "external-link"}
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.5 9.5L9 1M9 1V6M9 1H4.5" stroke="#007BE5"/>
    </svg>
  {/if}

  {#if name === "arrow-right"}
    <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.05097e-05 4.01041L12.0209 4.01041M12.0209 4.01041L8.48537 7.54594M12.0209 4.01041L8.83893 0.828427" stroke="#007BE5"/>
    </svg>
  {/if}

</div>

<style>

  .icon :global(svg *) {
      stroke: var(--primary-color);
  }

</style>
