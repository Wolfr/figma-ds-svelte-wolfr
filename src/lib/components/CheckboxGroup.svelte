<script lang="ts">
    const uuid = crypto.randomUUID();
    import Checkbox from "$lib/components/Checkbox.svelte";
    import Label from "$lib/components/Label.svelte";
    import Fieldset from "$lib/components/Fieldset.svelte";
    import Legend from "$lib/components/Legend.svelte";

    export let legend: string = 'Legend title';

    interface Item {
        id?: string;
        name: string;
        label: string;
        value: string;
        disabled?: boolean;
    }

    export let items: Item[] = [
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
    <div class="flex">
      {#each items as item, index}
        <div class="checkbox">
          <Checkbox id={item.id ? item.id : uuid+index} name={item.name} value={item.value} disabled={item.disabled} />
          <Label light xFor={item.id ? item.id : uuid+index}>{item.label || item.name}</Label>
        </div>
      {/each}
    </div>
  </Fieldset>
{:else}
  <div class="flex">
    {#each items as item, index}
      <div class="checkbox">
        <Checkbox id={item.id ? item.id : uuid+index} name={item.name} value={item.value} disabled={item.disabled} />
        <Label light xFor={item.id ? item.id : uuid+index}>{item.label || item.name}</Label>
      </div>
    {/each}
  </div>
{/if}

<style>

    .checkbox {
        align-items: center;
        display: flex;
        gap: 4px;
    }

    .flex {
        align-items: center;
        display: flex;
        gap: 8px;
    }

</style>
