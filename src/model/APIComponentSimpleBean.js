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
    root.ApiManagerPortal.APIComponentSimpleBean = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIComponentSimpleBean model module.
   * @module model/APIComponentSimpleBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>APIComponentSimpleBean</code>.
   * @alias module:model/APIComponentSimpleBean
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>APIComponentSimpleBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIComponentSimpleBean} obj Optional instance to populate.
   * @return {module:model/APIComponentSimpleBean} The populated <code>APIComponentSimpleBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiBroken')) {
        obj['apiBroken'] = ApiClient.convertToType(data['apiBroken'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('planBroken')) {
        obj['planBroken'] = ApiClient.convertToType(data['planBroken'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} apiBroken
   */
  exports.prototype['apiBroken'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} planBroken
   */
  exports.prototype['planBroken'] = undefined;



  return exports;
}));


