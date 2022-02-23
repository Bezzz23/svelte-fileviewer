<script lang="ts">
  import FileExplorer from './components/FileExplorer/FileExplorer.svelte';
</script>

<main>
  <FileExplorer />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  :global(body) {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    font-family: 'Nunito Sans', sans-serif;
  }
  :global(#app) {
    height: 100%;
    width: 100%;
  }
  :global(*) {
    box-sizing: border-box;
  }
  main {
    height: 100%;
  }
</style>
