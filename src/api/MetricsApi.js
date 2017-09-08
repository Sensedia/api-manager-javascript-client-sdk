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
    define(['ApiClient', 'model/CacheMetric', 'model/CallsMetric', 'model/LatencyMetric', 'model/OperationHealth', 'model/OperationMetric', 'model/TokensMetric', 'model/TopAccessToken', 'model/TopApp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CacheMetric'), require('../model/CallsMetric'), require('../model/LatencyMetric'), require('../model/OperationHealth'), require('../model/OperationMetric'), require('../model/TokensMetric'), require('../model/TopAccessToken'), require('../model/TopApp'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.MetricsApi = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.CacheMetric, root.ApiManagerPortal.CallsMetric, root.ApiManagerPortal.LatencyMetric, root.ApiManagerPortal.OperationHealth, root.ApiManagerPortal.OperationMetric, root.ApiManagerPortal.TokensMetric, root.ApiManagerPortal.TopAccessToken, root.ApiManagerPortal.TopApp);
  }
}(this, function(ApiClient, CacheMetric, CallsMetric, LatencyMetric, OperationHealth, OperationMetric, TokensMetric, TopAccessToken, TopApp) {
  'use strict';

  /**
   * Metrics service.
   * @module api/MetricsApi
   * @version 2.0
   */

  /**
   * Constructs a new MetricsApi. 
   * @alias module:api/MetricsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the findHealthUsingGET1 operation.
     * @callback module:api/MetricsApi~findHealthUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OperationHealth>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find Health
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Boolean} opts.healthPortal Health Portal
     * @param {module:api/MetricsApi~findHealthUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OperationHealth>}
     */
    this.findHealthUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'healthPortal': opts['healthPortal']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [OperationHealth];

      return this.apiClient.callApi(
        '/metrics/health', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findTopAccessTokensUsingGET1 operation.
     * @callback module:api/MetricsApi~findTopAccessTokensUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TopAccessToken>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find top access token
     * @param {Number} howMany How many
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.status Metric status
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~findTopAccessTokensUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TopAccessToken>}
     */
    this.findTopAccessTokensUsingGET1 = function(howMany, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'howMany' is set
      if (howMany === undefined || howMany === null) {
        throw new Error("Missing the required parameter 'howMany' when calling findTopAccessTokensUsingGET1");
      }


      var pathParams = {
        'howMany': howMany
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'status': opts['status'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [TopAccessToken];

      return this.apiClient.callApi(
        '/metrics/top-access-tokens/{howMany}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findTopAppsUsingGET1 operation.
     * @callback module:api/MetricsApi~findTopAppsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TopApp>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find top apps
     * @param {Number} howMany How many
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.status Metric status
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~findTopAppsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TopApp>}
     */
    this.findTopAppsUsingGET1 = function(howMany, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'howMany' is set
      if (howMany === undefined || howMany === null) {
        throw new Error("Missing the required parameter 'howMany' when calling findTopAppsUsingGET1");
      }


      var pathParams = {
        'howMany': howMany
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'status': opts['status'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [TopApp];

      return this.apiClient.callApi(
        '/metrics/top-apps/{howMany}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAccessTokensByMonthUsingGET1 operation.
     * @callback module:api/MetricsApi~getAccessTokensByMonthUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TokensMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find access token consolited by month
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~getAccessTokensByMonthUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TokensMetric>}
     */
    this.getAccessTokensByMonthUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [TokensMetric];

      return this.apiClient.callApi(
        '/metrics/access-tokens', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAppsByMonthUsingGET1 operation.
     * @callback module:api/MetricsApi~getAppsByMonthUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TokensMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find apps consolited by month
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~getAppsByMonthUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TokensMetric>}
     */
    this.getAppsByMonthUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [TokensMetric];

      return this.apiClient.callApi(
        '/metrics/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCacheLatencyUsingGET1 operation.
     * @callback module:api/MetricsApi~getCacheLatencyUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OperationMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cache latency
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Number} opts.apiId API id
     * @param {Number} opts.revisionId Revision id
     * @param {Number} opts.operationId Operation id
     * @param {Number} opts.environmentId Environment id
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~getCacheLatencyUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OperationMetric>}
     */
    this.getCacheLatencyUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apiId': opts['apiId'],
        'revisionId': opts['revisionId'],
        'operationId': opts['operationId'],
        'environmentId': opts['environmentId'],
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [OperationMetric];

      return this.apiClient.callApi(
        '/metrics/cache/latency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCacheSizeUsingGET1 operation.
     * @callback module:api/MetricsApi~getCacheSizeUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/CacheMetric} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive cache size
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Number} opts.apiId API id
     * @param {Number} opts.revisionId Revision id
     * @param {Number} opts.operationId Operation id
     * @param {Number} opts.environmentId Environment id
     * @param {module:api/MetricsApi~getCacheSizeUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CacheMetric}
     */
    this.getCacheSizeUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apiId': opts['apiId'],
        'revisionId': opts['revisionId'],
        'operationId': opts['operationId'],
        'environmentId': opts['environmentId']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = CacheMetric;

      return this.apiClient.callApi(
        '/metrics/cache/size', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCacheUsingGET1 operation.
     * @callback module:api/MetricsApi~getCacheUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OperationMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find cache
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {Number} opts.apiId API id
     * @param {Number} opts.revisionId Revision id
     * @param {Number} opts.operationId Operation id
     * @param {Number} opts.environmentId Environment id
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~getCacheUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OperationMetric>}
     */
    this.getCacheUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'apiId': opts['apiId'],
        'revisionId': opts['revisionId'],
        'operationId': opts['operationId'],
        'environmentId': opts['environmentId'],
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [OperationMetric];

      return this.apiClient.callApi(
        '/metrics/cache', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCallsByMonthUsingGET1 operation.
     * @callback module:api/MetricsApi~getCallsByMonthUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CallsMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find calls by month
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {Number} opts.environmentId Environment id
     * @param {Number} opts.apiId API id
     * @param {Number} opts.revisionId Revision id
     * @param {module:api/MetricsApi~getCallsByMonthUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CallsMetric>}
     */
    this.getCallsByMonthUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution'],
        'environmentId': opts['environmentId'],
        'apiId': opts['apiId'],
        'revisionId': opts['revisionId']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [CallsMetric];

      return this.apiClient.callApi(
        '/metrics/calls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLatencyByMonthUsingGET1 operation.
     * @callback module:api/MetricsApi~getLatencyByMonthUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LatencyMetric>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find latency by month
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {String} opts.beginDate Begin date
     * @param {String} opts.endDate End date
     * @param {module:model/String} opts.resolution Metric resolution
     * @param {module:api/MetricsApi~getLatencyByMonthUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/LatencyMetric>}
     */
    this.getLatencyByMonthUsingGET1 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'beginDate': opts['beginDate'],
        'endDate': opts['endDate'],
        'resolution': opts['resolution']
      };
      var headerParams = {
        'Sensedia-Auth': opts['sensediaAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = [LatencyMetric];

      return this.apiClient.callApi(
        '/metrics/latency', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatusErrorUsingGET1 operation.
     * @callback module:api/MetricsApi~getStatusErrorUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {'Number'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive Status Error
     * @param {Object} opts Optional parameters
     * @param {String} opts.sensediaAuth Sensedia-Auth
     * @param {module:api/MetricsApi~getStatusErrorUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Number'}
     */
    this.getStatusErrorUsingGET1 = function(opts, callback) {
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
      var accepts = ['*/*'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/metrics/statusError', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));