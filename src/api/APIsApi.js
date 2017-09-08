/**
 * API Manager Portal
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/API', 'model/APICreateBean', 'model/APIResponse', 'model/ChangeLog', 'model/ResponseEntity', 'model/RevisionBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/API'), require('../model/APICreateBean'), require('../model/APIResponse'), require('../model/ChangeLog'), require('../model/ResponseEntity'), require('../model/RevisionBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.APIsApi = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.API, root.ApiManagerPortal.APICreateBean, root.ApiManagerPortal.APIResponse, root.ApiManagerPortal.ChangeLog, root.ApiManagerPortal.ResponseEntity, root.ApiManagerPortal.RevisionBean);
  }
}(this, function(ApiClient, API, APICreateBean, APIResponse, ChangeLog, ResponseEntity, RevisionBean) {
  'use strict';

  /**
   * APIs service.
   * @module api/APIsApi
   * @version 2.0
   */

  /**
   * Constructs a new APIsApi. 
   * @alias module:api/APIsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cloneApiUsingPOST1 operation.
     * @callback module:api/APIsApi~cloneApiUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Clone a API
     * @param {String} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/API} opts.apiBean API json to update a api
     * @param {module:api/APIsApi~cloneApiUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponse}
     */
    this.cloneApiUsingPOST1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['apiBean'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cloneApiUsingPOST1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = APIResponse;

      return this.apiClient.callApi(
        '/apis/{id}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createAPIUsingPOST1 operation.
     * @callback module:api/APIsApi~createAPIUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new API
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/APICreateBean} opts.bean API json to create a API
     * @param {module:api/APIsApi~createAPIUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponse}
     */
    this.createAPIUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['bean'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = APIResponse;

      return this.apiClient.callApi(
        '/apis', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAPIUsingDELETE1 operation.
     * @callback module:api/APIsApi~deleteAPIUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a API
     * @param {String} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/APIsApi~deleteAPIUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.deleteAPIUsingDELETE1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAPIUsingDELETE1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/apis/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findLastRevisionUsingGET1 operation.
     * @callback module:api/APIsApi~findLastRevisionUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RevisionBean} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find last revision by API id
     * @param {Number} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/APIsApi~findLastRevisionUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RevisionBean}
     */
    this.findLastRevisionUsingGET1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findLastRevisionUsingGET1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RevisionBean;

      return this.apiClient.callApi(
        '/apis/{id}/revisions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findVersionsByAPIUsingGET1 operation.
     * @callback module:api/APIsApi~findVersionsByAPIUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/API>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find version by API id
     * @param {String} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/APIsApi~findVersionsByAPIUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/API>}
     */
    this.findVersionsByAPIUsingGET1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling findVersionsByAPIUsingGET1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [API];

      return this.apiClient.callApi(
        '/apis/{id}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIByIdUsingGET1 operation.
     * @callback module:api/APIsApi~getAPIByIdUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/API} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find API by id
     * @param {String} apiId API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/String} opts.filter Filter type searched
     * @param {module:api/APIsApi~getAPIByIdUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/API}
     */
    this.getAPIByIdUsingGET1 = function(apiId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'apiId' is set
      if (apiId === undefined || apiId === null) {
        throw new Error("Missing the required parameter 'apiId' when calling getAPIByIdUsingGET1");
      }


      var pathParams = {
        'apiId': apiId
      };
      var queryParams = {
        'filter': opts['filter']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = API;

      return this.apiClient.callApi(
        '/apis/{apiId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIChangeLogUsingGET1 operation.
     * @callback module:api/APIsApi~getAPIChangeLogUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChangeLog>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive changelog per API id
     * @param {Number} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/APIsApi~getAPIChangeLogUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChangeLog>}
     */
    this.getAPIChangeLogUsingGET1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAPIChangeLogUsingGET1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [ChangeLog];

      return this.apiClient.callApi(
        '/apis/{id}/changelog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAPIsUsingGET1 operation.
     * @callback module:api/APIsApi~getAPIsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/API>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all APIs
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Boolean} opts.privateAPI Private API
     * @param {module:model/String} opts.filter Filter type searched
     * @param {module:api/APIsApi~getAPIsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/API>}
     */
    this.getAPIsUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'privateAPI': opts['privateAPI'],
        'filter': opts['filter']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [API];

      return this.apiClient.callApi(
        '/apis', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the newVersionAPIUsingPOST1 operation.
     * @callback module:api/APIsApi~newVersionAPIUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new version
     * @param {String} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/API} opts.apiBean API json to update a api
     * @param {module:api/APIsApi~newVersionAPIUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponse}
     */
    this.newVersionAPIUsingPOST1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['apiBean'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling newVersionAPIUsingPOST1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = APIResponse;

      return this.apiClient.callApi(
        '/apis/{id}/versions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeEnvironmentUsingDELETE1 operation.
     * @callback module:api/APIsApi~removeEnvironmentUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete environment link with API
     * @param {String} id id
     * @param {String} environmentId environmentId
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/APIsApi~removeEnvironmentUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.removeEnvironmentUsingDELETE1 = function(id, environmentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling removeEnvironmentUsingDELETE1");
      }

      // verify the required parameter 'environmentId' is set
      if (environmentId === undefined || environmentId === null) {
        throw new Error("Missing the required parameter 'environmentId' when calling removeEnvironmentUsingDELETE1");
      }


      var pathParams = {
        'id': id,
        'environmentId': environmentId
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/apis/{id}/environments/{environmentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAPIUsingPUT1 operation.
     * @callback module:api/APIsApi~updateAPIUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a API
     * @param {String} id API id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/API} opts.apiBean API json to update a api
     * @param {module:api/APIsApi~updateAPIUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APIResponse}
     */
    this.updateAPIUsingPUT1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['apiBean'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateAPIUsingPUT1");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = APIResponse;

      return this.apiClient.callApi(
        '/apis/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validatePartialAPIUsingPOST1 operation.
     * @callback module:api/APIsApi~validatePartialAPIUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntity} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate partial a API
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/API} opts.bean API json to validate a API
     * @param {module:api/APIsApi~validatePartialAPIUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntity}
     */
    this.validatePartialAPIUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['bean'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = ResponseEntity;

      return this.apiClient.callApi(
        '/apis/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
