<template>
  <div class="header">
    <Select v-model="lang" class="lang-wrapper" style="width: 124px" @on-change="getSelectLang">
      <Option value="zh">
        中文
      </Option>
      <Option value="en">
        English
      </Option>
    </Select>
  </div>
</template>

<script>
  import jscookie from 'js-cookie';
  export default {
    data() {
      return {
        lang: null,
      };
    },
    methods: {
      getKey() {
        const key = jscookie.get('langkey');
        key === 'zh' ? (this.lang = 'zh') : (this.lang = 'en');
        this.$i18n.locale = this.lang;
      },

      // 改变语言
      getSelectLang(val) {
        this.lang = val;
        this.$i18n.locale = this.lang;
        jscookie.set('langkey', this.lang, { expires: 180 });
      },
    },
    mounted() {
      this.getKey();
    },
  };
</script>

<style lang="less" scoped>
    .header {
        position: absolute;
        top: 10px;
        right: 10px;
    }
</style>
