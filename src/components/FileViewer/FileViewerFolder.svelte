<script>
  import Fa from 'svelte-fa';
  import { faFolder, faEllipsis } from '@fortawesome/free-solid-svg-icons';
  export let name = '';
  export let size = '';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>

<div class="folder" on:click={() => dispatch('click')}>
  <div class="folder-selector" />
  <div class="folder-icon">
    <Fa icon={faFolder} size="2x" />
  </div>
  <div class="folder-text">{name}</div>
  <div class="folder-size">{size}</div>
  <div class="folder-more">
    <Fa icon={faEllipsis} scale={0.8} size="2x" />
  </div>
</div>

<style>
  .folder-selector {
    width: 18px;
    height: 18px;
    border: 1px solid var(--default-main-color);
    border-radius: 100%;
    margin-right: 15px;
    flex-shrink: 0;
    display: none;
  }
  .folder {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 10px;
  }

  .folder:hover {
    background: var(--default-light-main-color);
  }

  /* .folder:hover .folder-selector {
    display: block;
  } */

  .folder:hover .folder-text,
  .folder:hover .folder-size {
    color: var(--default-main-color);
  }

  .folder:hover .folder-icon :global(.svelte-fa),
  .folder:hover .folder-more :global(.svelte-fa) {
    color: var(--default-main-color);
  }

  .folder-icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .folder-icon :global(.svelte-fa) {
    color: var(--default-main-folder-color);
    transition: all 0.2s;
  }

  .folder-more :global(.svelte-fa) {
    color: var(--default-gray-color);
    transition: all 0.2s;
  }

  .folder-text {
    font-size: 16px;
    width: 100%;
    margin-left: 20px;
    transition: all 0.2s;
  }
  .folder-size {
    font-size: 16px;
    transition: all 0.2s;
  }
  .folder-more {
    width: 100px;
    /* background: red; */
    text-align: right;
  }
</style>
