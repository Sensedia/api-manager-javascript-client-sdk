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
    root.ApiManagerPortal.DeploymentSimpleBean = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeploymentSimpleBean model module.
   * @module model/DeploymentSimpleBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>DeploymentSimpleBean</code>.
   * @alias module:model/DeploymentSimpleBean
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DeploymentSimpleBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeploymentSimpleBean} obj Optional instance to populate.
   * @return {module:model/DeploymentSimpleBean} The populated <code>DeploymentSimpleBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('apiId')) {
        obj['apiId'] = ApiClient.convertToType(data['apiId'], 'Number');
      }
      if (data.hasOwnProperty('apiName')) {
        obj['apiName'] = ApiClient.convertToType(data['apiName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('revisionId')) {
        obj['revisionId'] = ApiClient.convertToType(data['revisionId'], 'Number');
      }
      if (data.hasOwnProperty('revisionNumber')) {
        obj['revisionNumber'] = ApiClient.convertToType(data['revisionNumber'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} apiId
   */
  exports.prototype['apiId'] = undefined;
  /**
   * @member {String} apiName
   */
  exports.prototype['apiName'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} revisionId
   */
  exports.prototype['revisionId'] = undefined;
  /**
   * @member {Number} revisionNumber
   */
  exports.prototype['revisionNumber'] = undefined;



  return exports;
}));


