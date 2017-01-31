import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import DashboardIndexTemplate from "./index.stache";

var DashBoardIndexViewModel = DefineMap.extend( 'DashBoardIndexViewModel', {
    bench: {
        Type: DefineMap,
        value: null
    },
});

var DashBoardIndexPage = Component.extend({
    tag: 'page-dashboard-index',
    view: DashboardIndexTemplate,
    ViewModel: DashBoardIndexViewModel,
});

export { DashBoardIndexPage, DashBoardIndexViewModel };
