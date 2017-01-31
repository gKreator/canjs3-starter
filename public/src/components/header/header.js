import Component from "can-component/";
import DefineMap from "can-define/map/";
import HeaderTemplate from "./header.stache!";

var HeaderViewModel = DefineMap.extend( "HeaderViewModel", {
    app_name: {
        type: 'string',
        value: null
    },
    page_title: {
        type: '*',
        value: null
    },
});

var HeaderComponent = Component.extend({
    tag: "component-header",
    view: HeaderTemplate,
    ViewModel: HeaderViewModel,
});

export { HeaderComponent, HeaderViewModel };