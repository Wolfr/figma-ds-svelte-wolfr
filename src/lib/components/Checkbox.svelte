<script lang="ts">

    export let value: string;
    export let name: string;
    export let id: string;
    export let checked: boolean;
    export let indeterminate: boolean;
    export let disabled: boolean;

</script>

<input type="checkbox" {name} {indeterminate} {id} {value} bind:checked={checked} {disabled}  on:change on:focus on:blur />


<style>

    input[type="checkbox"] {
        margin: 0;
        padding: 0;
        -webkit-appearance: none;
        appearance: none;
    }

    input[type="checkbox"],
    input[type="checkbox"]:before,
    input[type="checkbox"]:after {
        box-sizing: border-box;
    }

    input[type="checkbox"] {
        position: relative;
    }

    input[type="checkbox"]:before {
        content: " ";
        width: 11px;
        height: 11px;
        display: block;
        border-radius: var(--border-radius-small, 3px);
        transition: 120ms transform ease-in-out;
        box-shadow: 0 0 0 1px var(--field-border-color, hotpink);
    }

    input[type="checkbox"]:checked:before {
        background: var(--primary-color) url("data:image/svg+xml,%0A%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.17647 2.82377L3.05882 4.70613L6.82353 0.941406L8 2.11788L3.05882 7.05908L0 4.00024L1.17647 2.82377Z' fill='white'/%3E%3C/svg%3E") no-repeat center center;
        box-shadow: 0 0 0 1px var(--primary-color);
    }

    input[type="checkbox"]:disabled {
        opacity: .35;
    }


</style>

