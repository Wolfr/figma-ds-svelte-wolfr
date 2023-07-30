<script lang="ts">
    import Radio from "$lib/components/Radio.svelte";
    import Label from "$lib/components/Label.svelte";
    import Legend from "$lib/components/Legend.svelte";
    import Fieldset from "$lib/components/Fieldset.svelte";

    export let legend = 'Legend title';

    interface Item {
        id: string;
        /* Name is used to group radio buttons. */
        name: string;
        value: string;
        /* The label is used for the text of the radio button. */
        label?: string;
        checked?: boolean;
        disabled?: boolean;
    }

    export let items: Item[] = [
        {
            id: "id1",
            name: "name",
            value: "value1",
            label: "label",
            checked: true
        },
        {
            id: "id2",
            name: "name",
            label: "label",
            value: "value2"
        },
        {
            id: "id3",
            name: "name",
            label: "label",
            value: "value3",
            disabled: true
        }
    ];

</script>

<slot></slot>

<Fieldset>
  <Legend spaced legend={legend} />
  <div class="flex">
    {#each items as item}
      <div class="radio">
        <Radio id={item.id} name={item.name} value={item.value} disabled={item.disabled} />
        <Label light xFor="{item.id}">{item.label}</Label>
      </div>
      {/each}
  </div>
</Fieldset>

<style>

    .radio {
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
