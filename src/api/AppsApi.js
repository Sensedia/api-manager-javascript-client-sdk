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
    define(['ApiClient', 'model/APP', 'model/APPResponse', 'model/ChangeLogBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/APP'), require('../model/APPResponse'), require('../model/ChangeLogBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.AppsApi = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.APP, root.ApiManagerPortal.APPResponse, root.ApiManagerPortal.ChangeLogBean);
  }
}(this, function(ApiClient, APP, APPResponse, ChangeLogBean) {
  'use strict';

  /**
   * Apps service.
   * @module api/AppsApi
   * @version 2.0
   */

  /**
   * Constructs a new AppsApi. 
   * @alias module:api/AppsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the countUsingGET11 operation.
     * @callback module:api/AppsApi~countUsingGET11Callback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve App total
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/AppsApi~countUsingGET11Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.countUsingGET11 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


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
      var accepts = ['application/json'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/apps/count', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAppTokenUsingDELETE1 operation.
     * @callback module:api/AppsApi~deleteAppTokenUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a app
     * @param {String} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/AppsApi~deleteAppTokenUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteAppTokenUsingDELETE1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteAppTokenUsingDELETE1");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/apps/{code}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppTokenByAppGalleryUsingGET1 operation.
     * @callback module:api/AppsApi~getAppTokenByAppGalleryUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/APP>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return all apps
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/AppsApi~getAppTokenByAppGalleryUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/APP>}
     */
    this.getAppTokenByAppGalleryUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


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
      var accepts = ['application/json'];
      var returnType = [APP];

      return this.apiClient.callApi(
        '/apps/gallery', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppTokenByFilterUsingGET1 operation.
     * @callback module:api/AppsApi~getAppTokenByFilterUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/APP>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find app list by filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.clientId clientId
     * @param {String} opts.name name
     * @param {String} opts.keyword keyword
     * @param {String} opts.status status
     * @param {String} opts.developer developer
     * @param {Number} opts.actualPage actualPage
     * @param {Number} opts.pageSize pageSize
     * @param {String} opts.appIds appIds
     * @param {String} opts.beginDate beginDate
     * @param {String} opts.endDate endDate
     * @param {String} opts.extraFields extraFields
     * @param {module:api/AppsApi~getAppTokenByFilterUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/APP>}
     */
    this.getAppTokenByFilterUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'clientId': opts['clientId'],
        'name': opts['name'],
        'keyword': opts['keyword'],
        'status': opts['status'],
        'developer': opts['developer'],
        'actualPage': opts['actualPage'],
        'pageSize': opts['pageSize'],
        'appIds': opts['appIds'],
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'extraFields': opts['extraFields']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [APP];

      return this.apiClient.callApi(
        '/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppTokenByIdUsingGET1 operation.
     * @callback module:api/AppsApi~getAppTokenByIdUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APP} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find app by code
     * @param {String} code Client ID
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Number} opts.limitAccessTokens Limit the access token return
     * @param {String} opts.codeAccessTokens Code access token
     * @param {Boolean} opts.filterAccessTokens Filter access tokens
     * @param {module:api/AppsApi~getAppTokenByIdUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APP}
     */
    this.getAppTokenByIdUsingGET1 = function(code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getAppTokenByIdUsingGET1");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
        'limitAccessTokens': opts['limitAccessTokens'],
        'codeAccessTokens': opts['codeAccessTokens'],
        'filterAccessTokens': opts['filterAccessTokens']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = APP;

      return this.apiClient.callApi(
        '/apps/{code}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppTokenChangeLogUsingGET1 operation.
     * @callback module:api/AppsApi~getAppTokenChangeLogUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChangeLogBean>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive changelog per app id
     * @param {Number} id id
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/AppsApi~getAppTokenChangeLogUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChangeLogBean>}
     */
    this.getAppTokenChangeLogUsingGET1 = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getAppTokenChangeLogUsingGET1");
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
      var returnType = [ChangeLogBean];

      return this.apiClient.callApi(
        '/apps/{code}/changelog', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postAppTokenUsingPOST1 operation.
     * @callback module:api/AppsApi~postAppTokenUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new app
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/APP} opts.appTokenBean App json to create a new app.
     * @param {module:api/AppsApi~postAppTokenUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APPResponse}
     */
    this.postAppTokenUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['appTokenBean'];


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
      var returnType = APPResponse;

      return this.apiClient.callApi(
        '/apps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putAppTokenUsingPUT1 operation.
     * @callback module:api/AppsApi~putAppTokenUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/APPResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a app
     * @param {String} id App json to update a app.
     * @param {module:model/APP} appTokenBean appTokenBean
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/AppsApi~putAppTokenUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/APPResponse}
     */
    this.putAppTokenUsingPUT1 = function(id, appTokenBean, opts, callback) {
      opts = opts || {};
      var postBody = appTokenBean;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putAppTokenUsingPUT1");
      }

      // verify the required parameter 'appTokenBean' is set
      if (appTokenBean === undefined || appTokenBean === null) {
        throw new Error("Missing the required parameter 'appTokenBean' when calling putAppTokenUsingPUT1");
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
      var returnType = APPResponse;

      return this.apiClient.callApi(
        '/apps/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validatePartialAppUsingPOST1 operation.
     * @callback module:api/AppsApi~validatePartialAppUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate partial app
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:model/APP} opts.appTokenBean App json to validate app
     * @param {module:api/AppsApi~validatePartialAppUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.validatePartialAppUsingPOST1 = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['appTokenBean'];


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
      var returnType = Object;

      return this.apiClient.callApi(
        '/apps/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
