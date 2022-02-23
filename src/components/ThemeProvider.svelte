<script>
  export let name = 'unknown';
  export let theme = {
    name: 'theme',
    color: 'red',
    radius: '10px',
  };

  // $: style = themefunc(theme);
</script>

<slot />

<style>
  :root {
    --default-main-color: #559fff;
    --default-second-color: #fa3c6a;
    --default-main-folder-color: #ffb200;
    --default-black-color: #161616;
    --default-gray-color: #acacac;
    --default-light-white-color: #f7f7f7;
    --default-light-gray: #f0f0f0;
    --default-light-main-color: #e1efff;
    --default-lighter-main-color: #edf1f6;
    --default-light-main-gray: #ced9df;
  }
</style>
