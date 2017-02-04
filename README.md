# canjs3-starter

## Not ready.. but try it... not quite full sentences

## The simple way to start your next web app.

**ES6** out of the box

**CanJS is the easiest and most concise full framework**

> explain how it is a full framework, compare it to react where you have multiple routing libraries
>
> easy because it makes sinple sense
>
>does not try to over complicate simple concepts
>
>show small scale examples via jsbin
>
>try to showcase the things the docs don't quite show
>
> need to explain the patterns and not just the functions that the docs cover

***

This example/tutorial will do it's best o teach you the minimal requirements to develop a web app using the canjs/donejs enviorment. Simplifying the packages to suite the average need.

We will cover **CanJS, DoneJS, and StealJS**. This is the TriForce.

> list of keywords/topics

***

We will touch such goodies as two way data binding, automatic event listeners, and server side rendering.

Service Side Rendering or **SSR**: 
http://donejs.com/Features.html#section=section_Server_SideRendered

Two Way Data Bindings:
http://canjs.com/doc/can-stache-bindings.html
http://canjs.com/doc/can-define/map/map.html

***

The power of templates.

***

To do..

***

#### Server

Currently not working and ready in this example. Skip to the **Client** part of the tutorial and check out the **public/** folder.

**create a server that routes to json files, no database**

**ignore just notes**

>install donejs
>
>done-ssr
>
>http-proxy, header pass
>
>virtual dom


***

#### Client

**ignore just notes**

>make sure to have done-autorender for index.html
>
>done-autorender binds viewModel to the route, can-import viewModel binds that models properties to the route
>
>propDefinition can set precise getter and setters for object properties
>
>do your best to not use events: {} on components, especially init
>
>draw out how 2 way binding works with stache and such
>
>explain DefineMap and the getter compute, aka how it listens to changes and executes automatically
>
>view-bindings with stache
>
>can-stache-converters, for easy dom form handling

can-stache-converters and propDefinitions
http://jsbin.com/zogigubahi/1/edit?html,js,output

http://forums.donejs.com/t/form-viewmodel-sync/543

http://forums.donejs.com/t/canjs-3-what-is-the-best-way-to-execute-a-function-on-a-component/503

http://forums.donejs.com/t/canjs-3-2-1-can-component-inserted-event/491/6



***

### Module Loader

**StealJS**

https://stealjs.com/docs/steal.html

**ignore just notes**

>explain package.json, and the namespace
>
>can-view-import and packe.json
>
>build
>
>tie in with donejs


***

To do..

***

**Nginx**

>explain my config

***

To do..

***