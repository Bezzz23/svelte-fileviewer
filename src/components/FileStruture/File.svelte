<script>
  import Fa from 'svelte-fa';
  import { faFile } from '@fortawesome/free-solid-svg-icons';
  export let name = '';
  export let extension = '';
</script>

<div class="file">
  <div>
    <Fa
      icon={faFile}
      style="color: var(--default-gray-color)"
      scale={0.6}
      size="2x"
    />
  </div>

  {name}.{extension}
</div>

<style>
  .file {
    display: flex;
    align-items: center;
  }
</style>
