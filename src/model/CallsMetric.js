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
    root.ApiManagerPortal.CallsMetric = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CallsMetric model module.
   * @module model/CallsMetric
   * @version 2.0
   */

  /**
   * Constructs a new <code>CallsMetric</code>.
   * @alias module:model/CallsMetric
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CallsMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CallsMetric} obj Optional instance to populate.
   * @return {module:model/CallsMetric} The populated <code>CallsMetric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('blocked')) {
        obj['blocked'] = ApiClient.convertToType(data['blocked'], 'Number');
      }
      if (data.hasOwnProperty('clientError')) {
        obj['clientError'] = ApiClient.convertToType(data['clientError'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Number');
      }
      if (data.hasOwnProperty('serverError')) {
        obj['serverError'] = ApiClient.convertToType(data['serverError'], 'Number');
      }
      if (data.hasOwnProperty('success')) {
        obj['success'] = ApiClient.convertToType(data['success'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} blocked
   */
  exports.prototype['blocked'] = undefined;
  /**
   * @member {Number} clientError
   */
  exports.prototype['clientError'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {Number} serverError
   */
  exports.prototype['serverError'] = undefined;
  /**
   * @member {Number} success
   */
  exports.prototype['success'] = undefined;



  return exports;
}));


