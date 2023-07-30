<script lang="ts">
  export let light: boolean = false;
  export let xFor: string | undefined = undefined

</script>

<label class:light={light} for={xFor}><slot /></label>

<style>

    label {
        font-family: var(--font-family);
        color: var(--semantic-text-label);
        font-size: 12px;
        display: block;
        font-weight: 600;
    }

    label.light {
        font-weight: 400;
    }

</style>
