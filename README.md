## Angular 2 tutorial - practice. 
### https://angular.io/docs/ts/latest/tutorial/
### Started Aug/07/2016
#### Architecture ==>  main building block
* Modules
	* one angular app ==> one (_root module_ _AppModule_) or more 
    * @NgModule __decorator__ fucntion ==> decorators are functions that modify JS classes. 
    * @NgModule takes a metadata object and tells angular how to complile and run module code. 
	    * declarations --> view classes that belong to this module
	    * imports --> other required modules
	    * exports --> subset of declarations that can be referred outside 
	    * providers --> creator of __services__ in order of DI
	    * bootstrap --> root module only to identify main view (_root component_)

* Components
    * Controls UI widget (view) of one web page 
* Templates
    * Angular interactived HTML 
* MetaData
	* Tells Angular how to process a class
	* Attach metadata by using a __decorator__ (__@__ xxxx)
		* selector --> CSS selector to specify the target HTML element in order to create and insert an instance of this component
		* template / templateUrl --> address of .html
		* style / styleUrl --> address of .css
		* directives --> array of components or directives that this component requires
		* provides --> services creator for DI
* Data Binding
	* data flows between template(DOM) and component
		* Component ----> DOM  {{value}}
		* Componnet ----> DOM [property] = "value"
		* Component <---- DOM (event) = "handler function"
		* COmponent <---> DOM [(ng-module)] = "property"
* Directives
	* Angular template are dynamic. When Angular renders target template, DOM structure/attribute is built based on the instructions given by __directives__.
	* Component --> directive with a template
	* Structural directive --> alter DOM layout  ==> *ngFor / *ngIf
	* Attribute directive --> alter appearance or behavior of an existing element ==> ngModel two-way binding
* Services
* Dependency Injection
* Pipes
* Router


