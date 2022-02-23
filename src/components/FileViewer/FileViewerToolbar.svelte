<script>
  import FileViewerSearch from './FileViewerSearch.svelte';
  import Fa from 'svelte-fa';
  import {
    faAngleLeft,
    faAngleRight,
    faFileArrowUp,
    faRotateRight,
  } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="wrapper">
  <div class="icon-buttons">
    <div class="icon-button">
      <Fa icon={faAngleLeft} scale={0.8} size="2x" />
    </div>
    <div class="icon-button">
      <Fa icon={faAngleRight} scale={0.8} size="2x" />
    </div>
    <div class="icon-button">
      <Fa icon={faFileArrowUp} scale={0.8} size="2x" />
    </div>
    <div class="icon-button">
      <Fa icon={faRotateRight} scale={0.8} size="2x" />
    </div>
  </div>
  <FileViewerSearch />
</div>

<style>
  .icon-button {
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
    margin-right: 5px;
  }
  .icon-button :global(.svelte-fa) {
    color: var(--default-light-main-gray);
    transition: all 0.3s;
  }
  .icon-button:hover {
    background: var(--default-main-color);
  }
  .icon-button:hover :global(.svelte-fa) {
    color: white;
  }
  .icon-buttons {
    width: 100%;
    display: flex;
    justify-items: center;
  }
  .wrapper {
    display: flex;
    justify-items: center;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: 1px solid var(--default-light-gray);
  }
</style>
