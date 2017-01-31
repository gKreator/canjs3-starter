/**
 *
 */

import "styles/styles.css!";

import "es6-shim";
import DefineMap from "can-define/map/map";
import stache from "can-stache";
import can from "can-namespace";
import route from 'can-route';
import "can-route-pushstate";
import 'can-stache/helpers/route';

window.can = can; // This is just for debugging.

const AppViewModel = DefineMap.extend('App', {
        /**
         *
         **/
        app_name: {
            serialize: false,
            value: 'Canjs3 Starter'
        },
        /**
         *
         **/
        get page_title(){
            return this.pageComponentConfig.title;
        },
        /**
         *
         **/
        get title(){
            return this.app_name + ' | ' + this.page_title;
        },
        /**
         * preloaded
         **/
        preloaded: {
            serialize: false,
            value: false
        },
        /**
         *
         **/
        page: 'string',
        /**
         *
         **/
        project_id: 'number',
        /**
         *
         * Promise object
         **/
        pagePromise: {
            value: undefined,
            serialize: false
        },
        /**
         *
         **/
        get pageComponentConfig() {

            var page = this.page;

            if(page === "dashboard-index") {
                return {
                    title: "Dashboard",
                    componentName: "page-dashboard-index",
                    attributes: "{(init_options)}='./init_options'",
                    moduleName: "dashboard/index/",
                    padding: false,
                };

            } else {
                return {
                    title: "Page Not Found",
                    componentName: "page-error-404",
                    moduleName: "error/404/",
                    padding: true,
                };
            }
        },
        /**
         *
         * The status code used for server-side rendering.
         **/
        statusCode: {
            get: function(lastSet, resolve) {
                var pageConfig = this.pageComponentConfig;

                if(pageConfig.statusCode) {
                    return pageConfig.statusCode;
                }

                var pagePromise = this.pagePromise;
                if(pagePromise){
                    // pagePromise is guaranteed to be resolved here
                    // because done-ssr will not call the statusCode
                    // getter until the app is done loading
                    return pagePromise.then(function(){
                        resolve(200);
                    }, function(){
                        resolve(404);
                    });
                }else{
                    return 200;
                }
            }
        },
    });

stache.registerHelper("pageComponent", function(options){
    var pageComponent = options.context.pageComponentConfig,
        template =
            "<can-import from='canjs3-starter-client/components/pages/" + pageComponent.moduleName + "'>" +
            "{{#if isResolved}}" +
            "{{#with ../.}}<"+pageComponent.componentName + " " + pageComponent.attributes + "/>{{/with}}" +
            "{{/if}}" +
            "</can-import>";
    return stache(template)(this, options.helpers, options.nodeList);
});

route( "{page}" );

route( "{page}",{page: "dashboard-index"});

export default AppViewModel;