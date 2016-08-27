## Angular 2 tutorial - practice. 
### https://angular.io/docs/ts/latest/tutorial/
### Started Aug/07/2016
#### Architecture ==>  main building block
* Modules
	* one angular app ==> one (_root module_ _AppModule_) or more 
    * @NgModule decorator fucntion ==> decorators are functions that modify JS classes. 
    * @NgModule takes a metadata object and tells angular how to complile and run module code. 
	    * declarations --> view classes that belong to this module
	    * imports --> other required modules
	    * exports --> subset of declarations that can be referred outside 
	    * providers --> creator of __services__ in order of DI
	    * bootstrap --> root module only to identify main view (_root component_)

* Components
    * controls UI widget (view) of one web page 
* Templates
    * Angular interactived HTML 
* Data Binding
* Directives
* Services
* Dependency Injection
* Pipes
* Router


