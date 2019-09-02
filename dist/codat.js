"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}function _toArray(t){return _arrayWithHoles(t)||_iterableToArray(t)||_nonIterableRest()}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _addElementPlacement(t,e,r){var n=e[t.placement];if(!r&&-1!==n.indexOf(t.key))throw new TypeError("Duplicated element ("+t.key+")");n.push(t.key)}function _fromElementDescriptor(t){var e={kind:t.kind,key:t.key,placement:t.placement,descriptor:t.descriptor},r={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,r),"field"===t.kind&&(e.initializer=t.initializer),e}function _toElementDescriptors(t){if(void 0!==t)return _toArray(t).map(function(t){var e=_toElementDescriptor(t);return _disallowProperty(t,"finisher","An element descriptor"),_disallowProperty(t,"extras","An element descriptor"),e})}function _toElementDescriptor(t){var e=String(t.kind);if("method"!==e&&"field"!==e)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+e+'"');var r=_toPropertyKey(t.key),n=String(t.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=t.descriptor;_disallowProperty(t,"elements","An element descriptor");var o={kind:e,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==e?_disallowProperty(t,"initializer","A method descriptor"):(_disallowProperty(i,"get","The property descriptor of a field descriptor"),_disallowProperty(i,"set","The property descriptor of a field descriptor"),_disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=t.initializer),o}function _toElementFinisherExtras(t){return{element:_toElementDescriptor(t),finisher:_optionalCallableProperty(t,"finisher"),extras:_toElementDescriptors(t.extras)}}function _fromClassDescriptor(t){var e={kind:"class",elements:t.map(_fromElementDescriptor)},r={value:"Descriptor",configurable:!0};return Object.defineProperty(e,Symbol.toStringTag,r),e}function _toClassDescriptor(t){var e=String(t.kind);if("class"!==e)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+e+'"');_disallowProperty(t,"key","A class descriptor"),_disallowProperty(t,"placement","A class descriptor"),_disallowProperty(t,"descriptor","A class descriptor"),_disallowProperty(t,"initializer","A class descriptor"),_disallowProperty(t,"extras","A class descriptor");var r=_optionalCallableProperty(t,"finisher");return{elements:_toElementDescriptors(t.elements),finisher:r}}function _disallowProperty(t,e,r){if(void 0!==t[e])throw new TypeError(r+" can't have a ."+e+" property.")}function _optionalCallableProperty(t,e){var r=t[e];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+e+"' to be a function");return r}var request=require("request-promise"),btoa=require("btoa"),constants={COMPANIES:"companies",INTEGRATIONS:"integrations",CONNECTIONS:"connections",UAT:"uat",PRODUCTION:"production"};exports.constants=constants;var Api=function(){function t(e,r){_classCallCheck(this,t),this.__baseUrl=e,this.__apiKey=r}return _createClass(t,[{key:"get",value:function(t,e){return request(this.__baseRequest(t,e,"GET"))}},{key:"post",value:function(t,e,r){return request(this.__baseRequest(t,e,"POST",r))}},{key:"put",value:function(t,e,r){return request(this.__baseRequest(t,e,"PUT",r))}},{key:"delete",value:function(t,e){return request(this.__baseRequest(t,e,"DELETE"))}},{key:"__baseRequest",value:function(t,e,r,n){return{baseUrl:this.__baseUrl,uri:t,qs:e,json:!0,headers:{Authorization:"Basic ".concat(btoa(this.__apiKey))},method:r,body:n,encoding:null}}}]),t}(),AddCompany=function t(e,r){_classCallCheck(this,t),this.name=e,this.platformType=r};exports.AddCompany=AddCompany;var UpdateCompanySettings=function t(e){_classCallCheck(this,t),this.offlineConnectorInstall=e};exports.UpdateCompanySettings=UpdateCompanySettings;var CodatApiClient=function(){function t(e,r){_classCallCheck(this,t),this.baseUrl=e,this.apiKey=r,this.clientsApi=new Api(e,r)}return _createClass(t,[{key:"__companiesBaseUrl",value:function(t){return"".concat(constants.COMPANIES,"/").concat(t)}},{key:"__companyClient",value:function(){return this.clientsApi}},{key:"getIntegrations",value:function(){return this.clientsApi.get(constants.INTEGRATIONS)}},{key:"getCompanies",value:function(){return this.clientsApi.get(constants.COMPANIES)}},{key:"addCompany",value:function(t,e){return this.clientsApi.post(constants.COMPANIES,null,t instanceof AddCompany?t:new AddCompany(t,e))}},{key:"addConnection",value:function(t,e){return this.clientsApi.post(constants.COMPANIES+"/"+t+"/"+constants.CONNECTIONS,null,e)}},{key:"getAttachments",value:function(t,e,r){return this.clientsApi.get(constants.COMPANIES+"/"+t+"/"+constants.CONNECTIONS+"/data/bills/"+r+"/attachments")}},{key:"getAttachment",value:function(t,e,r,n){return this.clientsApi.get(constants.COMPANIES+"/"+t+"/"+constants.CONNECTIONS+"/data/bills/"+r+"/attachments/"+n+"/download")}},{key:"getCompany",value:function(t){return this.clientsApi.get(this.__companiesBaseUrl(t))}},{key:"updateCompany",value:function(t,e){return this.clientsApi.put(this.__companiesBaseUrl(t),null,e)}},{key:"removeCompany",value:function(t){return this.clientsApi.delete(this.__companiesBaseUrl(t))}},{key:"getCompanySettings",value:function(t){return this.clientsApi.get("".concat(this.__companiesBaseUrl(t),"/settings"))}},{key:"updateCompanySettings",value:function(t,e){return this.clientsApi.put("".concat(this.__companiesBaseUrl(t),"/settings"),null,t instanceof UpdateCompanySettings?t:new UpdateCompanySettings(e))}},{key:"getCompanyDataStatus",value:function(t){return this.clientsApi.get("".concat(this.__companiesBaseUrl(t),"/dataStatus"))}},{key:"companyDataClient",value:function(t){return new Api("".concat(this.baseUrl,"/").concat(this.__companiesBaseUrl(t),"/data"),this.apiKey)}}]),t}();exports.CodatApiClient=CodatApiClient;var uat=function(t){return new CodatApiClient("https://api-uat.codat.io",t)};exports.uat=uat;var production=function(t){return new CodatApiClient("https://api.codat.io",t)};exports.production=production,exports.apiClient=function(t){switch(t){case constants.UAT:return uat;case constants.PRODUCTION:return production}};
