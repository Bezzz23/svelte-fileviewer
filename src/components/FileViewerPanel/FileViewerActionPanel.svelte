<script>
  import Fa from 'svelte-fa';
  import {
    faFolderPlus,
    faFile,
    faFileArrowDown,
    faFileArrowUp,
    faTrash,
  } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="wrapper">
  <div class="icon-button">
    <div class="icon-button-icon">
      <Fa
        icon={faFolderPlus}
        scale={0.8}
        size="2x"
        color="var(--default-main-color)"
      />
    </div>
    <div class="icon-button-text">New Folder</div>
  </div>
  <div class="icon-button">
    <div class="icon-button-icon">
      <Fa
        icon={faFile}
        scale={0.8}
        size="2x"
        color="var(--default-main-color)"
      />
    </div>
    <div class="icon-button-text">New File</div>
  </div>
  <div class="icon-button">
    <div class="icon-button-icon">
      <Fa
        icon={faFileArrowUp}
        scale={0.8}
        size="2x"
        color="var(--default-main-color)"
      />
    </div>
    <div class="icon-button-text">Upload File</div>
  </div>
  <div class="icon-button">
    <div class="icon-button-icon">
      <Fa
        icon={faFileArrowDown}
        scale={0.8}
        size="2x"
        color="var(--default-main-color)"
      />
    </div>
    <div class="icon-button-text">Download File</div>
  </div>
  <div class="icon-button">
    <div class="icon-button-icon">
      <Fa
        icon={faTrash}
        scale={0.8}
        size="2x"
        color="var(--default-main-color)"
      />
    </div>
    <div class="icon-button-text">Remove</div>
  </div>
</div>

<style>
  .icon-button {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .icon-button-icon {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--default-light-main-color);
    border-radius: 100%;
  }
  .icon-button-text {
    margin-top: 5px;
    color: var(--default-gray-color);
  }
  .wrapper {
    border-left: 2px solid var(--default-lighter-main-color);
    width: 150px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
