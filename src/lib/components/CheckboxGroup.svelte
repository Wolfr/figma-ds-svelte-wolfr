<script>
    import Fieldset from "./Fieldset.svelte";
    import Legend from "./Legend.svelte";
    import CheckboxGroupInner from "$lib/components/CheckboxGroupInner.svelte";

    export let legend = "Legend title";
    export let items = [
        {
            "id": "id3",
            "name": "name",
            "value": "value1",
            label: "label 1"
        },
        {
            "id": "id4",
            "name": "name",
            "value": "value2",
            label: "label 2"
        }
    ];
</script>

<slot></slot>

{#if items.length > 1}
  <Fieldset>
    {#if legend}
      <Legend spaced legend={legend} />
    {/if}
    <CheckboxGroupInner {items}  />
  </Fieldset>
{:else}
  <CheckboxGroupInner {items}  />
{/if}
