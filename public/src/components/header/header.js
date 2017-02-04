import Component from "can-component/";
import DefineMap from "can-define/map/";
import HeaderTemplate from "./header.stache!";

var HeaderViewModel = DefineMap.extend( "HeaderViewModel", {
    app: {
        Type: DefineMap
    }
});

var HeaderComponent = Component.extend({
    tag: "component-header",
    view: HeaderTemplate,
    ViewModel: HeaderViewModel,
    events: {
        init: function(){
            console.log( this.viewModel );
            console.log( 'header init' );
        }
    }
});

export { HeaderComponent, HeaderViewModel };