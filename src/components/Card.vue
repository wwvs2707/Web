<template>
  <div>
    <a-card style="width: 300px"
      ><div class="title" slot="title">
        {{ title }}
        <div v-if="title == '内容预览(Preview)'">
          <a-popover title="说明(Introduction)">
            <template slot="content">
              <p>显示待分析文本的原始内容</p>
            </template>
            <a-icon id="myicon" type="question-circle" />
          </a-popover>
        </div>
        <div v-if="title == '分类结果(Classification)'">
          <a-popover title="说明(Introduction)">
            <template slot="content">
              <p>利用多项式贝叶斯算法和系统默认的语料库对文章进行分类</p>
            </template>
            <a-icon id="myicon" type="question-circle" />
          </a-popover>
        </div>
        <div v-if="title == '主题解释(Explanation)'">
          <a-popover title="说明(Introduction)">
            <template slot="content">
              <p>
                利用LDA和Bertopic模型对文本所属主题进行解释，展示对文章所属主题起关键作用的词语及其得分
              </p>
            </template>
            <a-icon id="myicon" type="question-circle" />
          </a-popover>
        </div>
        <div v-if="title == '关键词提取(Keyword)'">
          <a-popover title="说明(Introduction)">
            <template slot="content">
              <p>
                利用TextRank算法和KeyBert模型对文章进行关键词提取，展示能代表文章主题的词语
              </p>
            </template>
            <a-icon id="myicon" type="question-circle" />
          </a-popover>
        </div>
        <div v-if="title == '内容摘要(Abstact)'">
          <a-popover title="说明(Introduction)">
            <template slot="content">
              <p>
                利用TextRank算法及Bert模型对文章进行摘要，展示能够代表文章主旨的句子
              </p>
            </template>
            <a-icon id="myicon" type="question-circle" />
          </a-popover>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      default: () => {}
    }
  }
};
</script>
<style>
.title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
#myicon {
  color: rgb(102, 105, 240);
}
</style>
