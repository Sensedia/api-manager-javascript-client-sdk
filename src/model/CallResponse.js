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
    define(['ApiClient', 'model/Call'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.CallResponse = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.Call);
  }
}(this, function(ApiClient, Call) {
  'use strict';




  /**
   * The CallResponse model module.
   * @module model/CallResponse
   * @version 2.0
   */

  /**
   * Constructs a new <code>CallResponse</code>.
   * @alias module:model/CallResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CallResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallResponse} obj Optional instance to populate.
   * @return {module:model/CallResponse} The populated <code>CallResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('calls')) {
        obj['calls'] = ApiClient.convertToType(data['calls'], [Call]);
      }
      if (data.hasOwnProperty('callsSize')) {
        obj['callsSize'] = ApiClient.convertToType(data['callsSize'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Call>} calls
   */
  exports.prototype['calls'] = undefined;
  /**
   * @member {Number} callsSize
   */
  exports.prototype['callsSize'] = undefined;



  return exports;
}));


