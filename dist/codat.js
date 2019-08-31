"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _toArray(e){return _arrayWithHoles(e)||_iterableToArray(e)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _addElementPlacement(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)}function _fromElementDescriptor(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),"field"===e.kind&&(t.initializer=e.initializer),t}function _toElementDescriptors(e){if(void 0!==e)return _toArray(e).map(function(e){var t=_toElementDescriptor(e);return _disallowProperty(e,"finisher","An element descriptor"),_disallowProperty(e,"extras","An element descriptor"),t})}function _toElementDescriptor(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=_toPropertyKey(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;_disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?_disallowProperty(e,"initializer","A method descriptor"):(_disallowProperty(i,"get","The property descriptor of a field descriptor"),_disallowProperty(i,"set","The property descriptor of a field descriptor"),_disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o}function _toElementFinisherExtras(e){return{element:_toElementDescriptor(e),finisher:_optionalCallableProperty(e,"finisher"),extras:_toElementDescriptors(e.extras)}}function _fromClassDescriptor(e){var t={kind:"class",elements:e.map(_fromElementDescriptor)},r={value:"Descriptor",configurable:!0};return Object.defineProperty(t,Symbol.toStringTag,r),t}function _toClassDescriptor(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');_disallowProperty(e,"key","A class descriptor"),_disallowProperty(e,"placement","A class descriptor"),_disallowProperty(e,"descriptor","A class descriptor"),_disallowProperty(e,"initializer","A class descriptor"),_disallowProperty(e,"extras","A class descriptor");var r=_optionalCallableProperty(e,"finisher");return{elements:_toElementDescriptors(e.elements),finisher:r}}function _disallowProperty(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}function _optionalCallableProperty(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}var request=require("request-promise"),btoa=require("btoa"),constants={COMPANIES:"companies",INTEGRATIONS:"integrations",CONNECTIONS:"connections",UAT:"uat",PRODUCTION:"production"};exports.constants=constants;var Api=function(){function e(t,r){_classCallCheck(this,e),this.__baseUrl=t,this.__apiKey=r}return _createClass(e,[{key:"get",value:function(e,t){return request(this.__baseRequest(e,t,"GET"))}},{key:"post",value:function(e,t,r){return request(this.__baseRequest(e,t,"POST",r))}},{key:"put",value:function(e,t,r){return request(this.__baseRequest(e,t,"PUT",r))}},{key:"delete",value:function(e,t){return request(this.__baseRequest(e,t,"DELETE"))}},{key:"__baseRequest",value:function(e,t,r,n){return{baseUrl:this.__baseUrl,uri:e,qs:t,json:!0,headers:{Authorization:"Basic ".concat(btoa(this.__apiKey))},method:r,body:n,encoding:null}}}]),e}(),AddCompany=function e(t,r){_classCallCheck(this,e),this.name=t,this.platformType=r};exports.AddCompany=AddCompany;var AddConnection=function e(t,r){_classCallCheck(this,e),this.companyId=t,this.platformKey=r};exports.AddConnection=AddConnection;var UpdateCompanySettings=function e(t){_classCallCheck(this,e),this.offlineConnectorInstall=t};exports.UpdateCompanySettings=UpdateCompanySettings;var CodatApiClient=function(){function e(t,r){_classCallCheck(this,e),this.baseUrl=t,this.apiKey=r,this.clientsApi=new Api(t,r)}return _createClass(e,[{key:"__companiesBaseUrl",value:function(e){return"".concat(constants.COMPANIES,"/").concat(e)}},{key:"__companyClient",value:function(){return this.clientsApi}},{key:"getIntegrations",value:function(){return this.clientsApi.get(constants.INTEGRATIONS)}},{key:"getCompanies",value:function(){return this.clientsApi.get(constants.COMPANIES)}},{key:"addCompany",value:function(e,t){return this.clientsApi.post(constants.COMPANIES,null,e instanceof AddCompany?e:new AddCompany(e,t))}},{key:"addConnection",value:function(e,t){return this.clientsApi.post(constants.COMPANIES+"/"+e+"/"+constants.CONNECTIONS,null,t)}},{key:"getCompany",value:function(e){return this.clientsApi.get(this.__companiesBaseUrl(e))}},{key:"updateCompany",value:function(e,t){return this.clientsApi.put(this.__companiesBaseUrl(e),null,t)}},{key:"removeCompany",value:function(e){return this.clientsApi.delete(this.__companiesBaseUrl(e))}},{key:"getCompanySettings",value:function(e){return this.clientsApi.get("".concat(this.__companiesBaseUrl(e),"/settings"))}},{key:"updateCompanySettings",value:function(e,t){return this.clientsApi.put("".concat(this.__companiesBaseUrl(e),"/settings"),null,e instanceof UpdateCompanySettings?e:new UpdateCompanySettings(t))}},{key:"getCompanyDataStatus",value:function(e){return this.clientsApi.get("".concat(this.__companiesBaseUrl(e),"/dataStatus"))}},{key:"companyDataClient",value:function(e){return new Api("".concat(this.baseUrl,"/").concat(this.__companiesBaseUrl(e),"/data"),this.apiKey)}}]),e}();exports.CodatApiClient=CodatApiClient;var uat=function(e){return new CodatApiClient("https://api-uat.codat.io",e)};exports.uat=uat;var production=function(e){return new CodatApiClient("https://api.codat.io",e)};exports.production=production,exports.apiClient=function(e){switch(e){case constants.UAT:return uat;case constants.PRODUCTION:return production}};
