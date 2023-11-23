import { initEventSlider } from "./module/event-slider.js";
import { initMainSlider } from "./module/main-slider.js";
import { initMenu } from "./module/menu.js";
import { initNewSlider } from "./module/new-slider.js";
import { initStickyHeader } from "./module/sticky-header.js";
import { showBands } from './data.js'
import { initTabs } from "./module/tabs.js";
import { initCatalogSlider1, initCatalogSlider2 } from "./module/catalog-slider.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initMenu();
    initNewSlider();
    initMainSlider();
    initStickyHeader();
    initEventSlider();
    showBands();
    initTabs();
    initCatalogSlider1();
    initCatalogSlider2();

    

});
