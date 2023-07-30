<script>
    export let color;
    export let label;
    export let hex;
</script>

<style>
    .swatch {
        width: 50px;
        height: 50px;
    }

    div {
        font-size: var(--font-size-body);
        font-family: monospace;
    }
</style>

<div>
  <div class="swatch" style={`background: var(${color});`}></div>
  {label}<br /><span style="opacity: .4;">{hex}</span>
</div>
