import Vue from "vue";
import VueI18n from "vue-i18n";
import cn from "./lang/zh.js";
import en from "./lang/en.js";
import iviewen from "view-design/dist/locale/en-US";
import iviewzh from "view-design/dist/locale/zh-CN";
import jscookie from "js-cookie";
Vue.use(VueI18n);
const langList = ["en", "zh"];

const initKey = initLangKey();

const i18n = new VueI18n({
    locale: initKey,
    messages: {
        en: Object.assign({}, iviewen, en),
        zh: Object.assign({}, iviewzh, cn),
    },
});

// 使view-design多语言生效
Vue.locale = () => {};


// 初始化语言key
function initLangKey() {
    console.log('initLangKey');
    let langkey = jscookie.get("langkey");
    // 如果未初始化，通过浏览器判断应该设置成啥语言
    if (!langkey) {
        const lang = (navigator.language || navigator.browserLanguage)
            .toLowerCase()
            .substring(0, 2);
        switch (lang) {
            case "en":
                langkey = "en";
                break;
            case "zh":
                langkey = "zh";
                break;

            default:
                langkey = "zh";
                break;
        }
    } else if (!langList.includes(langkey)) {
        // 如果不是en,zh,默认en
        langkey = "en";
    }
    jscookie.set("langkey", langkey, { expires: 180 });
    return langkey;
}

export default i18n;
