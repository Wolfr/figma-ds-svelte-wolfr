<script lang="ts">

    export let type: 'error' | 'default' = 'default';
    export let id: string = '';
    export let message: string = '';

</script>

<div class="form-message { type }" {id}>
    {@html message}
</div>

<style>

    .form-message {
        font-size: var(--font-size-body);
        font-family: var(--font-family);
    }

    .form-message :global(a) {
        color: var(--primary-color);
        text-decoration: none;
    }

</style>
