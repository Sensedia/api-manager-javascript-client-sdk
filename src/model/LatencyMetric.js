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
    root.ApiManagerPortal.LatencyMetric = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LatencyMetric model module.
   * @module model/LatencyMetric
   * @version 2.0
   */

  /**
   * Constructs a new <code>LatencyMetric</code>.
   * @alias module:model/LatencyMetric
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>LatencyMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LatencyMetric} obj Optional instance to populate.
   * @return {module:model/LatencyMetric} The populated <code>LatencyMetric</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('latencyMillis')) {
        obj['latencyMillis'] = ApiClient.convertToType(data['latencyMillis'], 'Number');
      }
      if (data.hasOwnProperty('totalLatency')) {
        obj['totalLatency'] = ApiClient.convertToType(data['totalLatency'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Number} latencyMillis
   */
  exports.prototype['latencyMillis'] = undefined;
  /**
   * @member {Number} totalLatency
   */
  exports.prototype['totalLatency'] = undefined;



  return exports;
}));

