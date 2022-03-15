<template>
  <div style="background-color: #F5F5F5; padding:0px;">
    <a-page-header
      :ghost="false"
      title="文本分类与摘要生成系统"
      sub-title="文本分类 主题解释 关键词提取 摘要生成"
    >
      <template slot="extra"> </template>
      <a-descriptions size="small" :column="3">
        <a-descriptions-item label="创作者">
          王健
        </a-descriptions-item>
        <a-descriptions-item label="学校">
          北京邮电大学
        </a-descriptions-item>
        <a-descriptions-item label="创作时间">
          2022-03-11
        </a-descriptions-item>
        <a-descriptions-item label="主要算法及模型">
          MultinomialNB,TextRank,Bert,LDA
        </a-descriptions-item>
        <a-descriptions-item label="指导教师">
          张成文
        </a-descriptions-item>
        <a-descriptions-item label="最近更新时间">
          2022-03-13
        </a-descriptions-item>
      </a-descriptions>
    </a-page-header>
  </div>
</template>

<script>
export default {
  name: "PageHead"
};
</script>

<style>
tr:last-child td {
  padding-bottom: 0;
}
</style>
