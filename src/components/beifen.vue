<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    accept=".txt"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">
      单击或拖动文件到此区域以上传
    </p>
    <p class="ant-upload-hint">
      仅支持上传单个TXT格式文件
    </p>
  </a-upload-dragger>
</template>
<script>
export default {
  name: "FileUpload",
  data() {
    return {};
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    }
  }
};
</script>
