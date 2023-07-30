<script lang="ts">

  export let id: string;
  export let hidden: boolean = true;

</script>

<div role='tabpanel' class:is-hidden={hidden} {id}>
  <slot />
</div>

<style>

    [role="tabpanel"].is-hidden {
        display: none;
    }

</style>
