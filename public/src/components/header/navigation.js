import Component from "can-component/";
import DefineMap from "can-define/map/map";
import route from "can-route/";
import NavigationTemplate from "./navigation.stache!";
import {NavigationModel} from "canjs3-starter-client/models/navigation";

var NavigationComponentViewModel = DefineMap.extend( "NavigationComponentViewModel", {
    navigation: {
        Type: DefineMap,
        value: NavigationModel
    },
});

var NavigationComponent = Component.extend({
    tag: "component-navigation",
    view: NavigationTemplate,
    ViewModel: NavigationComponentViewModel,
    helpers: {
        isCurrentRoute: function( item, options ){
            if( item().url ){
                if( route.current( item().url.serialize(), true ) ){
                    return options.fn( item );
                } else {
                    if( route.data.get().page == item().url.page ) {
                        return options.fn( item );
                    }
                }
            }
            return options.inverse( item );
        },
        createUrl: function( url ){
            return route.url( url().serialize() )
        }
    },
});

export { NavigationComponent, NavigationComponentViewModel };