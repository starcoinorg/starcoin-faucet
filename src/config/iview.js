// 按需加载ui库组件
import { Message, Progress, Modal, Notice, Spin, Icon, Scroll, Select, Option, Table, Dropdown, DropdownItem, DropdownMenu, Tooltip, Slider, Menu, MenuItem, Drawer, Page } from "view-design";

export default function(Vue) {
    Vue.component("Modal", Modal);
    Vue.component("Notice", Notice);
    Vue.component("Drawer", Drawer);
    Vue.component("Spin", Spin);
    Vue.component("Icon", Icon);
    Vue.component("Scroll", Scroll);
    Vue.component("Table", Table);
    Vue.component("Select", Select);
    Vue.component("Option", Option);
    Vue.component("Table", Table);
    Vue.component("Dropdown", Dropdown);
    Vue.component("DropdownItem", DropdownItem);
    Vue.component("DropdownMenu", DropdownMenu);
    Vue.component("Slider", Slider);
    Vue.component("Tooltip", Tooltip);
    Vue.component("Menu", Menu);
    Vue.component("MenuItem", MenuItem);
    Vue.component("Page", Page);
    Vue.component("Progress", Progress);
    Vue.component("Message", Message);
    Vue.prototype.$Notice = Notice;
    Vue.prototype.$Message = Message;
}