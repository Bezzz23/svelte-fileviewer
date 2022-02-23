<script>
  import Folder from './Folder.svelte';
  import File from './File.svelte';
  export let name = '';
  export let children = [];
  export let indent = 0;
  export let type = '';
  export let extension = '';
  let open = false;

  function toggleOpen() {
    open = !open;
  }
</script>

<div style="padding-left: {indent}px" on:click={toggleOpen}>
  {#if type === 'folder'}
    <Folder {name} isOpened={open} />
  {/if}
  {#if type === 'file'}
    <File {name} extension={extension ? extension : ''} />
  {/if}
</div>

{#if open}
  {#each children as child}
    <svelte:self {...child} indent={indent + 24} />
  {/each}
{/if}

<style>
  div {
    cursor: pointer;
    user-select: none;
  }
</style>
