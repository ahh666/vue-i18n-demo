<template>
  <div>
    <ul class="lang" @click="changeLang">
      <li :class="isActive?'active':''">zh</li>/
      <li :class="!isActive?'active':''">en</li>
    </ul>
    <div>{{$t('language.current')}}：{{$t('language.name')}}</div>
    <ul>
      <li>{{ $t('navbar.home') }}</li>
      <li>{{ $t('navbar.about') }}</li>
      <li>{{ $t('navbar.join') }}</li>
      <li>{{ $t('navbar.contact') }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "I18nDemo",
  data() {
    return {
      isActive: true
    };
  },
  created() {
    let lang = document.documentElement.lang;
    localStorage.setItem("lang", lang);
    this.toActive(lang);
  },
  methods: {
    changeLang(e) {
      let lang = e.target.innerText;
      this.$i18n.locale = lang;
      this.toActive(lang);
    },
    toActive(lang) {
      this.isActive = lang == "zh" ? true : false;
    }
  }
};
</script>

<style scoped>
ul {
  width: 300px;
  margin: 30px auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
ul > li {
  padding: 0 5px;
  list-style-type: none;
  cursor: pointer;
}
.lang {
  width: 50px;
}
.active {
  color: red;
}
</style>