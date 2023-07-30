<script lang="ts">

  export let skin: 'secondary' | 'primary' = 'secondary';
  export let block = false;
  export let disabled = false;

</script>

<button class:secondary={skin === 'secondary'} class:primary={skin === 'primary'} class:block={block} class:disabled={disabled}>
  <slot/>
</button>

<style>

    button {
        border: none;
        padding: 5px 12px;
        border-radius: var(--border-radius-med);
        font-family: var(--font-family);
        font-size: var(--font-size-body);
        line-height: 1.3;
    }

    .block {
        width: 100%;
    }

    .disabled {
        opacity: .3;
    }

    button.secondary {
        border: 1px solid var(--gray-4, hotpink);
        background: none;
    }

    @media (prefers-color-scheme: dark) {
        button.secondary {
            border: 1px solid #FFF;
        }
    }

    button.primary {
        border: 1px solid var(--primary-color);
        background: var(--primary-color);
        color: #FFF;
        font-weight: 600;
        -webkit-font-smoothing: antialiased;
    }

    button:focus {
        outline: 0;
    }

    button:focus-visible {
        border-color: var(--focus-ring-color);
        box-shadow: 0 0 0 1px var(--focus-ring-color);
    }

    @media (prefers-color-scheme: dark) {
        button {
            background: var(--gray-6);
            color: #FFF;
        }
    }


</style>

