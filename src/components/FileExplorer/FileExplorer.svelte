<script lang="ts">
  import FileStructure from '../FileStruture/FileStructure.svelte';
  import FileViewer from '../FileViewer/FileViewerContainer.svelte';
  import FileViewerActionPanel from '../FileViewerPanel/FileViewerActionPanel.svelte';
  import ThemeProvider from '../ThemeProvider.svelte';

  const files = {
    name: 'Root',
    type: 'folder',
    key: 0,
    children: [
      {
        name: '222',
        type: 'folder',
        key: 2,
        children: [
          {
            type: 'folder',
            name: '2221111',
            key: 3,
            children: [
              {
                type: 'file',
                name: '132',
                key: 4,
                extension: 'json',
              },
            ],
          },
        ],
      },
      {
        type: 'file',
        key: 1,
        name: '132',
        extension: 'json',
      },
    ],
  };
</script>

<ThemeProvider>
  <div>
    <FileStructure {files} />
    <FileViewer {files} />
    <FileViewerActionPanel />
  </div>
</ThemeProvider>

<style>
  div {
    display: flex;
    height: 100%;
  }
</style>
