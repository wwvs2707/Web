<template>
  <a-popover title="说明">
    <template slot="content">
      <p>Content</p>
      <p>Content</p>
    </template>
    <a-button type="primary">
      Hover me
    </a-button>
  </a-popover>
</template>
<script>
export default {
  name: "Popover"
};
</script>
