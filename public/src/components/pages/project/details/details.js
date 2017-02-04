mport Component from 'can-component/';
import DefineMap from 'can-define/map/';
import ProjectDetailsTemplate from "./details.stache";

var ProjectDetailsViewModel = DefineMap.extend( 'ProjectDetailsViewModel', {
});

var ProjectDetailsPage = Component.extend({
    tag: 'page-project-details',
    view: ProjectDetailsTemplate,
    ViewModel: ProjectDetailsViewModel,
});

export { ProjectDetailsPage, ProjectDetailsViewModel };