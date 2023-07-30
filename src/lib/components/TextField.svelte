<script lang="ts">
  import Label from "$lib/components/Label.svelte";
  import Input from "$lib/components/Input.svelte";
  import FormMessage from "$lib/components/FormMessage.svelte";
  import TextArea from "$lib/components/TextArea.svelte";

  export let id: string | undefined = undefined
  export let value: string | undefined = undefined
  export let type: 'password' | 'textarea' | 'email' | 'search' | 'text' = 'text';

  export let formMessage: string | undefined = undefined
  export let formMessageType: string | undefined = undefined

  export let label: string | undefined = undefined
  export let placeholder: string | undefined = undefined

  // Textarea specific
  export let rows: number = undefined | 5
  export let cols: number = undefined | undefined

  // Number specific
  export let min: number = undefined | undefined
  export let max: number  = undefined | undefined
</script>

<div class="text-field">
  <Label xFor={id}>{label}</Label>
  {#if type === "password"}
    <Input type="password" {id} {value} {placeholder} />
  {:else if type === "textarea"}
    <TextArea {id} {value} {placeholder} {cols} {rows} />
  {:else if type === "email"}
    <Input type="email" {id} {value} {placeholder} />
  {:else if type === "number"}
    <Input type="number" {id} {value} {placeholder} {min} {max} />
  {:else if type === "search"}
    <Input type="search" {id} {value} {placeholder} />
  {:else}
    <Input type="text" {id} {value} {placeholder} />
  {/if}
  {#if formMessage}
    <FormMessage type={formMessageType} message={formMessage} />
  {/if}
</div>

<style>

  .text-field :global(label) {
    margin-bottom: 4px;
  }

  .text-field :global(.form-message) {
      margin-top: 4px;
  }

</style>
