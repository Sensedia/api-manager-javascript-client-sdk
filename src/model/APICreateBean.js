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
    define(['ApiClient', 'model/API', 'model/RevisionBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./API'), require('./RevisionBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.APICreateBean = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.API, root.ApiManagerPortal.RevisionBean);
  }
}(this, function(ApiClient, API, RevisionBean) {
  'use strict';




  /**
   * The APICreateBean model module.
   * @module model/APICreateBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>APICreateBean</code>.
   * @alias module:model/APICreateBean
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>APICreateBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APICreateBean} obj Optional instance to populate.
   * @return {module:model/APICreateBean} The populated <code>APICreateBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('api')) {
        obj['api'] = API.constructFromObject(data['api']);
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = RevisionBean.constructFromObject(data['revision']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/API} api
   */
  exports.prototype['api'] = undefined;
  /**
   * @member {module:model/RevisionBean} revision
   */
  exports.prototype['revision'] = undefined;



  return exports;
}));


