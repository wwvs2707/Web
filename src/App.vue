<template>
  <div id="app">
    <!-- <router-view /> -->
    <!-- <router-view></router-view> -->
    <div id="container">
      <div id="pagehead">
        <PageHead></PageHead>
      </div>
      <div id="picdiv">
        <img src="./assets/bupt.png" id="buptpic" />
      </div>
    </div>
    <div class="main" style="height:auto">
      <div
        style="margin-top:10px; margin-bottom:20px;border:1px solid black;"
      ></div>
      <div class="container1">
        <div class="left">
          <FileUpload
            class="file_upload"
            @contextPreview="fileContextPreview"
            @resultShow="fileResultShow"
            @changeFlag="iconFlagChange"
          ></FileUpload>
        </div>
        <div class="right">
          <div>
            <Card v-bind:title="Preview"></Card>
            <div id="previewArea">{{ previewContent }}</div>
            <!-- <TextArea id="previewArea" readonly="readonly"></TextArea> -->
          </div>
          <div class="container2">
            <div>
              <Card v-bind:title="Classification"></Card>
              <div class="commonArea">
                <div
                  v-if="flag === 1"
                  style="width:100%; height:100%; display:flex; justify-content: space-around; align-items: center;"
                >
                  <a-icon
                    type="loading"
                    style="font-size:50px; color:#d6d4d4a4;"
                  />
                </div>
                <div v-else>
                  <pre>{{ classificationContent }}</pre>
                </div>
              </div>

              <!-- <TextArea></TextArea> -->
            </div>
            <div>
              <Card v-bind:title="Explanation"></Card>
              <div class="commonArea">
                <div
                  v-if="flag === 1"
                  style="width:100%; height:100%; display:flex; justify-content: space-around; align-items: center;"
                >
                  <a-icon
                    type="loading"
                    style="font-size:50px; color:#d6d4d4a4;"
                  />
                </div>
                <div v-else>
                  <pre>{{ explanationContent }}</pre>
                </div>
              </div>

              <!-- <TextArea></TextArea> -->
            </div>
            <div>
              <Card v-bind:title="Keyword"></Card>
              <div class="commonArea1">
                <div
                  v-if="flag === 1"
                  style="width:100%; height:100%; display:flex; justify-content: space-around; align-items: center;"
                >
                  <a-icon
                    type="loading"
                    style="font-size:50px; color:#d6d4d4a4;"
                  />
                </div>
                <div v-else>
                  <pre>{{ keywordContent }}</pre>
                </div>
              </div>
              <!-- <TextArea></TextArea> -->
            </div>
          </div>
          <div>
            <Card v-bind:title="Abstact"></Card>
            <div id="abstractArea">
              <div
                v-if="flag === 1"
                style="width:100%; height:100%; display:flex; justify-content: space-around; align-items: center;"
              >
                <a-icon
                  type="loading"
                  style="font-size:50px; color:#d6d4d4a4;"
                />
              </div>
              <div v-else>
                {{ abstractContent }}
              </div>
            </div>

            <!-- <TextArea></TextArea> -->
          </div>
        </div>
      </div>
      <a-divider style="margin-top:10px; margin-bottom:2px;"></a-divider>
      <!-- <Steps size="small"></Steps> -->
      <div id="footer-div">
        <footer class="page-footer">
          @ 2022 Copyright Text
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import PageHead from "@/components/PageHead";
import FileUpload from "@/components/Upload";
import TextArea from "@/components/TextArea";
import Card from "@/components/Card";
import Steps from "@/components/Steps";
import axios from "axios";
export default {
  name: "App",
  components: {
    PageHead,
    FileUpload,
    TextArea,
    Card,
    Steps
  },
  data() {
    return {
      Preview: "内容预览(Preview)",
      Classification: "分类结果(Classification)",
      Explanation: "主题解释(Explanation)",
      Keyword: "关键词提取(Keyword)",
      Abstact: "内容摘要(Abstact)",
      ServerResponse: "resp",
      previewContent: "",
      flag: 0,
      classificationContent: "",
      abstractContent: "",
      keywordContent: "",
      explanationContent: ""
    };
  },
  methods: {
    fileContextPreview(res) {
      this.previewContent = res;
      console.log(res);
    },
    fileResultShow(resp) {
      this.classificationContent = resp["classification"];
      this.keywordContent = resp["subjectKey"];
      this.explanationContent = resp["subjectDes"];
      this.abstractContent = resp["abstract"];
    },
    iconFlagChange(par) {
      this.flag = par;
    }
  }
};
</script>
<style>
#app {
  width: 100%;
  height: 100vh;
}
.main {
  height: 100%;
}
.page-footer {
  text-align: center;
  background-color: black;
  margin-bottom: 0px;
}
.container1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 60px;
  margin-top: 52px;
  margin-bottom: 53px;
}
.file_upload {
  width: 100%;
  height: 670px;
}
#container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
#pagehead {
  width: 100%;
}
.container2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.left {
  /* flex: 1 1 auto; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 600px;
  height: 600px;
}

.right {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  /* flex: 1 1 auto; */
}
#previewArea {
  width: 300px;
  height: 612px;
  border-radius: 5px;
  border: 1px solid #d6d4d4a4;
  padding: 10px;
  overflow: auto;
  font-family: "KaiTi";
  font-size: 16px;
  color: rgb(113, 118, 119);
  text-indent: 24px;
}
.commonArea {
  width: 300px;
  height: 165px;
  border-radius: 5px;
  border: 1px solid #d6d4d4a4;
  padding: 10px;
  overflow: auto;
  font-family: "KaiTi";
  font-size: 16px;
  color: rgb(113, 118, 119);
}
.commonArea1 {
  width: 300px;
  height: 166px;
  border-radius: 5px;
  border: 1px solid #d6d4d4a4;
  padding: 10px;
  overflow: auto;
  font-family: "KaiTi";
  font-size: 16px;
  color: rgb(113, 118, 119);
}
#abstractArea {
  width: 300px;
  height: 612px;
  border-radius: 5px;
  border: 1px solid #d6d4d4a4;
  padding: 10px;
  overflow: auto;
  font-family: "KaiTi";
  font-size: 18px;
  color: rgb(113, 118, 119);
}
#buptpic {
  width: 150px;
  height: 150px;
}
#picdiv {
  margin-top: 12px;
  margin-right: 15px;
}
#footer-div {
  width: 100%;
}
</style>
