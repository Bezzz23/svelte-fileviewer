<script>
  import FolderBreadcrumbs from './FolderBreadcrumbs.svelte';
  import FileViewerToolbar from './FileViewerToolbar.svelte';
  import FileRenderer from './FileRenderer.svelte';
  export let files = {};
</script>

<div class="wrapper">
  <FolderBreadcrumbs />
  <FileViewerToolbar />
  <FileRenderer {files} />
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    padding: 10px 20px;
  }
</style>
