<script lang="ts">

  export let legend: string;
  export let spaced: boolean = false;

</script>

<legend class:spaced>{legend}</legend>

<style>

    legend {
        padding: 0;
        margin: 0;
        font-size: 12px;
        font-weight: 600;
    }

    .spaced {
        margin: 0 0 4px;
    }

</style>
