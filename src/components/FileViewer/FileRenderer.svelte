<script>
  import { findNodeByKey } from '../../store/treeStore';
  import FileViewerFolder from './FileViewerFolder.svelte';
  import FileViewerFile from './FileViewerFile.svelte';

  let nodeKey = 0;

  export let files = {};
  let currentFolderItems = findNodeByKey(files, nodeKey);
  let currentFolderChildrens = currentFolderItems.children;

  const handleSelectNode = (key) => {
    nodeKey = key;
    currentFolderItems = findNodeByKey(files, nodeKey);
    currentFolderChildrens = currentFolderItems.children;
  };
</script>

<div class="wrapper">
  {#if currentFolderChildrens}
    {#each currentFolderChildrens as children}
      {#if children.type === 'folder'}
        <FileViewerFolder
          name={children.name}
          size={children.size}
          on:click={() => handleSelectNode(children.key)}
        />
      {/if}
      {#if children.type === 'file'}
        <FileViewerFile
          name={children.name}
          size={children.size}
          extenstion={children.extension}
        />
      {/if}
    {/each}
  {/if}
</div>

<style>
  .wrapper {
    padding-top: 10px;
  }
</style>
