<script lang="ts">

    import Icon from "$lib/components/Icon.svelte";

    export let href: string;
    export let target: string;

</script>

{#if target === "_blank"}
    <a {href} {target} class="external"><slot /> <Icon name="external-link" /></a>
{:else}
    <a {href} class="external"><slot /></a>
{/if}

<style>

  a {
    font-size: var(--font-size-body);
    color: var(--primary-color);
    text-decoration: none;
  }

  a svg * {
     stroke: var(--primary-color);
  }

  a.external {
      display: flex;
      align-items: center;
      gap: 4px;
  }

</style>
