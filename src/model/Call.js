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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.Call = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Call model module.
   * @module model/Call
   * @version 2.0
   */

  /**
   * Constructs a new <code>Call</code>.
   * @alias module:model/Call
   * @class
   */
  var exports = function() {
    var _this = this;

















































  };

  /**
   * Constructs a <code>Call</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Call} obj Optional instance to populate.
   * @return {module:model/Call} The populated <code>Call</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
      if (data.hasOwnProperty('accessTokenOwner')) {
        obj['accessTokenOwner'] = ApiClient.convertToType(data['accessTokenOwner'], 'String');
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], 'String');
      }
      if (data.hasOwnProperty('apiComponentType')) {
        obj['apiComponentType'] = ApiClient.convertToType(data['apiComponentType'], 'String');
      }
      if (data.hasOwnProperty('apiId')) {
        obj['apiId'] = ApiClient.convertToType(data['apiId'], 'Number');
      }
      if (data.hasOwnProperty('apiName')) {
        obj['apiName'] = ApiClient.convertToType(data['apiName'], 'String');
      }
      if (data.hasOwnProperty('appDeveloper')) {
        obj['appDeveloper'] = ApiClient.convertToType(data['appDeveloper'], 'String');
      }
      if (data.hasOwnProperty('appName')) {
        obj['appName'] = ApiClient.convertToType(data['appName'], 'String');
      }
      if (data.hasOwnProperty('appToken')) {
        obj['appToken'] = ApiClient.convertToType(data['appToken'], 'String');
      }
      if (data.hasOwnProperty('authOwner')) {
        obj['authOwner'] = ApiClient.convertToType(data['authOwner'], 'String');
      }
      if (data.hasOwnProperty('baseUrl')) {
        obj['baseUrl'] = ApiClient.convertToType(data['baseUrl'], 'String');
      }
      if (data.hasOwnProperty('billing')) {
        obj['billing'] = ApiClient.convertToType(data['billing'], 'Boolean');
      }
      if (data.hasOwnProperty('cache')) {
        obj['cache'] = ApiClient.convertToType(data['cache'], 'Boolean');
      }
      if (data.hasOwnProperty('callDate')) {
        obj['callDate'] = ApiClient.convertToType(data['callDate'], 'Date');
      }
      if (data.hasOwnProperty('callerAddress')) {
        obj['callerAddress'] = ApiClient.convertToType(data['callerAddress'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
      if (data.hasOwnProperty('completeUrl')) {
        obj['completeUrl'] = ApiClient.convertToType(data['completeUrl'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('durationMillis')) {
        obj['durationMillis'] = ApiClient.convertToType(data['durationMillis'], 'Number');
      }
      if (data.hasOwnProperty('environmentId')) {
        obj['environmentId'] = ApiClient.convertToType(data['environmentId'], 'Number');
      }
      if (data.hasOwnProperty('environmentName')) {
        obj['environmentName'] = ApiClient.convertToType(data['environmentName'], 'String');
      }
      if (data.hasOwnProperty('gatewayDurationMillis')) {
        obj['gatewayDurationMillis'] = ApiClient.convertToType(data['gatewayDurationMillis'], 'Number');
      }
      if (data.hasOwnProperty('httpStatus')) {
        obj['httpStatus'] = ApiClient.convertToType(data['httpStatus'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('insertedOnDate')) {
        obj['insertedOnDate'] = ApiClient.convertToType(data['insertedOnDate'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = ApiClient.convertToType(data['operationId'], 'Number');
      }
      if (data.hasOwnProperty('operationName')) {
        obj['operationName'] = ApiClient.convertToType(data['operationName'], 'String');
      }
      if (data.hasOwnProperty('receivedFromAddress')) {
        obj['receivedFromAddress'] = ApiClient.convertToType(data['receivedFromAddress'], 'String');
      }
      if (data.hasOwnProperty('receivedOn')) {
        obj['receivedOn'] = ApiClient.convertToType(data['receivedOn'], 'Number');
      }
      if (data.hasOwnProperty('receivedOnDate')) {
        obj['receivedOnDate'] = ApiClient.convertToType(data['receivedOnDate'], 'String');
      }
      if (data.hasOwnProperty('redis')) {
        obj['redis'] = ApiClient.convertToType(data['redis'], 'Boolean');
      }
      if (data.hasOwnProperty('requestHeaders')) {
        obj['requestHeaders'] = ApiClient.convertToType(data['requestHeaders'], 'String');
      }
      if (data.hasOwnProperty('requestID')) {
        obj['requestID'] = ApiClient.convertToType(data['requestID'], 'String');
      }
      if (data.hasOwnProperty('requestPayload')) {
        obj['requestPayload'] = ApiClient.convertToType(data['requestPayload'], 'Number');
      }
      if (data.hasOwnProperty('resourceId')) {
        obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
      }
      if (data.hasOwnProperty('resourceName')) {
        obj['resourceName'] = ApiClient.convertToType(data['resourceName'], 'String');
      }
      if (data.hasOwnProperty('responseHeaders')) {
        obj['responseHeaders'] = ApiClient.convertToType(data['responseHeaders'], 'String');
      }
      if (data.hasOwnProperty('responsePayload')) {
        obj['responsePayload'] = ApiClient.convertToType(data['responsePayload'], 'Number');
      }
      if (data.hasOwnProperty('resultStatus')) {
        obj['resultStatus'] = ApiClient.convertToType(data['resultStatus'], 'Number');
      }
      if (data.hasOwnProperty('revisionId')) {
        obj['revisionId'] = ApiClient.convertToType(data['revisionId'], 'Number');
      }
      if (data.hasOwnProperty('trace')) {
        obj['trace'] = ApiClient.convertToType(data['trace'], 'String');
      }
      if (data.hasOwnProperty('transactionID')) {
        obj['transactionID'] = ApiClient.convertToType(data['transactionID'], 'String');
      }
      if (data.hasOwnProperty('typeError')) {
        obj['typeError'] = ApiClient.convertToType(data['typeError'], 'String');
      }
      if (data.hasOwnProperty('typeStatus')) {
        obj['typeStatus'] = ApiClient.convertToType(data['typeStatus'], 'String');
      }
      if (data.hasOwnProperty('uri')) {
        obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('yearMonth')) {
        obj['yearMonth'] = ApiClient.convertToType(data['yearMonth'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;
  /**
   * @member {String} accessTokenOwner
   */
  exports.prototype['accessTokenOwner'] = undefined;
  /**
   * @member {String} additionalData
   */
  exports.prototype['additionalData'] = undefined;
  /**
   * @member {String} apiComponentType
   */
  exports.prototype['apiComponentType'] = undefined;
  /**
   * @member {Number} apiId
   */
  exports.prototype['apiId'] = undefined;
  /**
   * @member {String} apiName
   */
  exports.prototype['apiName'] = undefined;
  /**
   * @member {String} appDeveloper
   */
  exports.prototype['appDeveloper'] = undefined;
  /**
   * @member {String} appName
   */
  exports.prototype['appName'] = undefined;
  /**
   * @member {String} appToken
   */
  exports.prototype['appToken'] = undefined;
  /**
   * @member {String} authOwner
   */
  exports.prototype['authOwner'] = undefined;
  /**
   * @member {String} baseUrl
   */
  exports.prototype['baseUrl'] = undefined;
  /**
   * @member {Boolean} billing
   */
  exports.prototype['billing'] = undefined;
  /**
   * @member {Boolean} cache
   */
  exports.prototype['cache'] = undefined;
  /**
   * @member {Date} callDate
   */
  exports.prototype['callDate'] = undefined;
  /**
   * @member {String} callerAddress
   */
  exports.prototype['callerAddress'] = undefined;
  /**
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;
  /**
   * @member {String} completeUrl
   */
  exports.prototype['completeUrl'] = undefined;
  /**
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Number} durationMillis
   */
  exports.prototype['durationMillis'] = undefined;
  /**
   * @member {Number} environmentId
   */
  exports.prototype['environmentId'] = undefined;
  /**
   * @member {String} environmentName
   */
  exports.prototype['environmentName'] = undefined;
  /**
   * @member {Number} gatewayDurationMillis
   */
  exports.prototype['gatewayDurationMillis'] = undefined;
  /**
   * @member {String} httpStatus
   */
  exports.prototype['httpStatus'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} insertedOnDate
   */
  exports.prototype['insertedOnDate'] = undefined;
  /**
   * @member {String} method
   */
  exports.prototype['method'] = undefined;
  /**
   * @member {Number} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {String} operationName
   */
  exports.prototype['operationName'] = undefined;
  /**
   * @member {String} receivedFromAddress
   */
  exports.prototype['receivedFromAddress'] = undefined;
  /**
   * @member {Number} receivedOn
   */
  exports.prototype['receivedOn'] = undefined;
  /**
   * @member {String} receivedOnDate
   */
  exports.prototype['receivedOnDate'] = undefined;
  /**
   * @member {Boolean} redis
   */
  exports.prototype['redis'] = undefined;
  /**
   * @member {String} requestHeaders
   */
  exports.prototype['requestHeaders'] = undefined;
  /**
   * @member {String} requestID
   */
  exports.prototype['requestID'] = undefined;
  /**
   * @member {Number} requestPayload
   */
  exports.prototype['requestPayload'] = undefined;
  /**
   * @member {Number} resourceId
   */
  exports.prototype['resourceId'] = undefined;
  /**
   * @member {String} resourceName
   */
  exports.prototype['resourceName'] = undefined;
  /**
   * @member {String} responseHeaders
   */
  exports.prototype['responseHeaders'] = undefined;
  /**
   * @member {Number} responsePayload
   */
  exports.prototype['responsePayload'] = undefined;
  /**
   * @member {Number} resultStatus
   */
  exports.prototype['resultStatus'] = undefined;
  /**
   * @member {Number} revisionId
   */
  exports.prototype['revisionId'] = undefined;
  /**
   * @member {String} trace
   */
  exports.prototype['trace'] = undefined;
  /**
   * @member {String} transactionID
   */
  exports.prototype['transactionID'] = undefined;
  /**
   * @member {module:model/Call.TypeErrorEnum} typeError
   */
  exports.prototype['typeError'] = undefined;
  /**
   * @member {module:model/Call.TypeStatusEnum} typeStatus
   */
  exports.prototype['typeStatus'] = undefined;
  /**
   * @member {String} uri
   */
  exports.prototype['uri'] = undefined;
  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * @member {String} yearMonth
   */
  exports.prototype['yearMonth'] = undefined;


  /**
   * Allowed values for the <code>typeError</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeErrorEnum = {
    /**
     * value: "client"
     * @const
     */
    "client": "client",
    /**
     * value: "server"
     * @const
     */
    "server": "server",
    /**
     * value: "blocked"
     * @const
     */
    "blocked": "blocked"  };

  /**
   * Allowed values for the <code>typeStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeStatusEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


