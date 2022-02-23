<script>
  import Fa from 'svelte-fa';
  import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
  export let name = '';
  export let isOpened = false;
</script>

<div class="folder">
  <div class="icon">
    <Fa
      icon={isOpened ? faFolderOpen : faFolder}
      style="color: var(--default-main-folder-color)"
      scale={0.6}
      size="2x"
    />
  </div>

  {name}
</div>

<style>
  .folder {
    display: flex;
    align-items: center;
  }
</style>
