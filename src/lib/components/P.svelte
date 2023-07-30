<script lang="ts">

    export let muted: boolean = false;

</script>

<p class:muted><slot /></p>

<style>

    p {
        font-size: var(--font-size-body);
        font-family: var(--font-family)
    }

  .muted {
    color: var(--gray-4);
  }

</style>
