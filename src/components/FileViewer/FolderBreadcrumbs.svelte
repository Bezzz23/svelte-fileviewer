<script>
  import Fa from 'svelte-fa';
  import { faFolder } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="wrapper">
  <div class="first-folder">
    <Fa icon={faFolder} style="color: var(--default-main-folder-color)" />
  </div>

  <div>Stylemix</div>
  <div class="separator">/</div>
  <div>Public html</div>
  <div class="separator">/</div>
  <div>active folder</div>
</div>

<style>
  .first-folder {
    margin-right: 10px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    color: var(--default-gray-color);
  }
  .separator {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
