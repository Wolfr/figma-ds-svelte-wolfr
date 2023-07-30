<script lang="ts">
  import Label from "$lib/components/Label.svelte";
  import Checkbox from "$lib/components/Checkbox.svelte";
  import { CheckboxItem } from "$lib/types/CheckboxItem.ts";

  export let items: CheckboxItem[] = [
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

<div class="checkbox-group">
  {#each items as item, index}
    <div class="checkbox">
      <Label light>
        <Checkbox id={item.id} name={item.name} value={item.value} disabled={item.disabled} />
        <div class="checkbox-text-wrapper">
          {item.label || item.name}
        </div>
      </Label>
    </div>
  {/each}
</div>

<style>

  .checkbox {
      align-items: center;
      display: flex;
      gap: 4px;
  }

  .checkbox-group {
      align-items: center;
      display: flex;
      gap: 8px;
  }

</style>
