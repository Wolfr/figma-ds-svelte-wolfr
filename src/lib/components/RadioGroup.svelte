<script>
    import Radio from "$lib/components/Radio.svelte";
    import Label from "$lib/components/Label.svelte";
    import Legend from "$lib/components/Legend.svelte";
    import Fieldset from "$lib/components/Fieldset.svelte";

    export let legend = 'Legend title';

    export let items = [
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
  <div class="radio-group">
    {#each items as item}
      <div class="radio">
        <Label light>
          <Radio id={item.id} name={item.name} value={item.value} disabled={item.disabled} />
          <div class="radio-text-wrapper">
            {item.label}
          </div>
        </Label>
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

    .radio :global(label) {
        display: flex;
    }

    .radio-group {
        align-items: center;
        display: flex;
        gap: 8px;
    }

    .radio-group .radio-text-wrapper {
        /* Include the wrappers for flex control and detailed spacing control */
        position: relative;
        bottom: 1.5px;
    }

</style>
