<script>
    import Swatch from './Swatch.svelte';

    const swatches = [
        { hex: '#191919', color: '--gray-7', label: 'gray-7' },
        { hex: '#2C2C2C', color: '--gray-6', label: 'gray-6' },
        { hex: '#565656', color: '--gray-5', label: 'gray-5' },
        { hex: '#7F7F7F', color: '--gray-4', label: 'gray-4' },
        { hex: '#B2B2B2', color: '--gray-3', label: 'gray-3' },
        { hex: '#DDDDDD', color: '--gray-2', label: 'gray-2' },
        { hex: '#F0F0F0', color: '--gray-1', label: 'gray-1' },
        { hex: '#007BE5', color: '--blue-4', label: 'blue-4' },
        { hex: '#4597F7', color: '--blue-3', label: 'blue-3' },
        { hex: '#E1F3FF', color: '--blue-1', label: 'blue-1' },
        { hex: '#E05534', color: '--red-4', label: 'red-4' },
        { hex: '#FBE9E4', color: '--red-1', label: 'red-1' },
        { hex: '#31BCAD', color: '--green-4', label: 'green-4' },
        { hex: '#0ED2BD', color: '--green-3', label: 'green-3' },
    ];
</script>

<ul>
{#each swatches as swatch}
  <li><Swatch color={swatch.color} hex={swatch.hex} label={swatch.label} /></li>
{/each}
</ul>

<style>
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        gap: 16px;
    }

</style>
