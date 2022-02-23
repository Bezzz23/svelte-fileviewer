<script lang="ts">
  import FileRenderer from './FileRenderer.svelte';
  export let files = {};
</script>

<div class="wrapper">
  <FileRenderer {...files} />
</div>

<style>
  .wrapper {
    border-right: 2px solid var(--default-lighter-main-color);
    padding: 10px 20px;
    width: 300px;
    height: 100%;
  }
</style>
