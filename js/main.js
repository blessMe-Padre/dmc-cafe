import { initEventSlider } from "./module/event-slider.js";
import { initMainSlider } from "./module/main-slider.js";
import { initMenu } from "./module/menu.js";
import { initNewSlider } from "./module/new-slider.js";
import { initStickyHeader } from "./module/sticky-header.js";
import { initTabs } from "./module/tabs.js";
import { initCatalogSlider1, initCatalogSlider2, initCatalogSlider3, initCatalogSlider4, initCatalogSlider5, initCatalogSlider6 } from "./module/catalog-slider.js";
import { initModal } from "./module/modal.js";
import { initLoadMore } from "./module/loadMore.js";


window.addEventListener('DOMContentLoaded', () => {
    console.log('подключен скрипт main.js');

    initMenu();
    initNewSlider();
    initMainSlider();
    initStickyHeader();
    initEventSlider();
    initTabs();
    initCatalogSlider1();
    initCatalogSlider2();
    initCatalogSlider3();
    initCatalogSlider4();
    initCatalogSlider5();
    initCatalogSlider6();
    initLoadMore();
    initModal();

});
