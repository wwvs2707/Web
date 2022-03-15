<template>
  <div>
    <a-alert message="Warning" type="warning" show-icon />
    <a-alert
      message="警告"
      description="仅支持TXT格式文件上传"
      type="warning"
      show-icon
    />
  </div>
</template>
<script>
export default {
  name: "Alert"
};
</script>
