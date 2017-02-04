import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import ProjectCreateTemplate from "./create.stache";

var ProjectCreateViewModel = DefineMap.extend( 'ProjectCreateViewModel', {
});

var ProjectCreatePage = Component.extend({
    tag: 'page-project-details',
    view: ProjectCreateTemplate,
    ViewModel: ProjectCreateViewModel,
});

export { ProjectCreatePage, ProjectCreateViewModel };