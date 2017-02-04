import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import ProjectListTemplate from "./list.stache";

var ProjectListViewModel = DefineMap.extend( 'ProjectListViewModel', {
});

var ProjectListPage = Component.extend({
    tag: 'page-project-list',
    view: ProjectListTemplate,
    ViewModel: ProjectListViewModel,
});

export { ProjectListPage, ProjectListViewModel };