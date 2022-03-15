<template>
  <a-upload-dragger
    name="file"
    :multiple="true"
    action="http://127.0.0.1:5000/filereceive"
    accept=".txt"
    :showUploadList="false"
    @change="handleChange"
    @reject="rejectAlert"
    :beforeUpload="beforework"
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
      if (status === "uploading") {
        this.$emit("changeFlag", 1);
      }
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
        console.log(typeof info.fileList);
        console.log(info.fileList);
        this.$emit("changeFlag", 0);
      }
      if (status === "done") {
        // info.fileList.this.$message.success(
        //   `${info.file.name} 文件上传成功`,
        //   1
        // );
        this.$notification.open({
          message: "提示",
          description: "文件已上传并完成分类及摘要处理",
          duration: 2,
          icon: <a-icon type="bulb" style="color: #108ee9" />
        });
        let resp = info.file.response;
        console.log("***************");
        console.log(resp);
        this.$emit("resultShow", resp);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} 文件上传失败`, 1);
      }
    },
    rejectAlert() {
      this.$message.warning("仅支持TXT格式文件拖拽上传", 1);
    },
    beforework(file, fileList) {
      console.log(file);
      console.log(typeof file);
      var reader = new FileReader();
      reader.readAsText(file);
      var res = "";
      let _this = this;
      reader.onload = function(e) {
        res = e.target.result;
        _this.$emit("contextPreview", res);
        console.log(res);
      };
    }
  }
};
</script>
