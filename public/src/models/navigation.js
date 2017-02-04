import DefineMap from "can-define/map/";
import DefineList from "can-define/list/";

var NavigationModel = DefineMap.extend( 'NavigationModel', {
    data: {
        Type: DefineList,
        value: [
            {
                title: "Dashboard",
                url: { page: "dashboard-index" },
                icon: {
                    type: "fa",
                    icon: "tachometer"
                }
            },
            {
                title: "Projects",
                children: [
                    {
                        title: "Project List",
                        url: { page: "project-list" },
                        icon: {
                            type: "fa",
                            icon: "list"
                        }
                    },
                    {
                        title: "Create Project",
                        url: { page: "project-create" },
                        icon: {
                            type: "fa",
                            icon: "plus"
                        }
                    }
                ],
                icon: {
                    type: "fa",
                    icon: "film"
                }
            },
        ]
    }
});

export { NavigationModel };