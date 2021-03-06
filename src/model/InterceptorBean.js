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
    define(['ApiClient', 'model/APIComponentSimpleBean', 'model/InterceptorReferenceBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIComponentSimpleBean'), require('./InterceptorReferenceBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.InterceptorBean = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.APIComponentSimpleBean, root.ApiManagerPortal.InterceptorReferenceBean);
  }
}(this, function(ApiClient, APIComponentSimpleBean, InterceptorReferenceBean) {
  'use strict';




  /**
   * The InterceptorBean model module.
   * @module model/InterceptorBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>InterceptorBean</code>.
   * @alias module:model/InterceptorBean
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>InterceptorBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InterceptorBean} obj Optional instance to populate.
   * @return {module:model/InterceptorBean} The populated <code>InterceptorBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('executionPoint')) {
        obj['executionPoint'] = ApiClient.convertToType(data['executionPoint'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('idTemp')) {
        obj['idTemp'] = ApiClient.convertToType(data['idTemp'], 'Number');
      }
      if (data.hasOwnProperty('operation')) {
        obj['operation'] = APIComponentSimpleBean.constructFromObject(data['operation']);
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = InterceptorReferenceBean.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('parentType')) {
        obj['parentType'] = ApiClient.convertToType(data['parentType'], 'String');
      }
      if (data.hasOwnProperty('planId')) {
        obj['planId'] = ApiClient.convertToType(data['planId'], 'Number');
      }
      if (data.hasOwnProperty('position')) {
        obj['position'] = ApiClient.convertToType(data['position'], 'Number');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = APIComponentSimpleBean.constructFromObject(data['resource']);
      }
      if (data.hasOwnProperty('revision')) {
        obj['revision'] = APIComponentSimpleBean.constructFromObject(data['revision']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {module:model/InterceptorBean.ExecutionPointEnum} executionPoint
   */
  exports.prototype['executionPoint'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} idTemp
   */
  exports.prototype['idTemp'] = undefined;
  /**
   * @member {module:model/APIComponentSimpleBean} operation
   */
  exports.prototype['operation'] = undefined;
  /**
   * @member {module:model/InterceptorReferenceBean} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * @member {module:model/InterceptorBean.ParentTypeEnum} parentType
   */
  exports.prototype['parentType'] = undefined;
  /**
   * @member {Number} planId
   */
  exports.prototype['planId'] = undefined;
  /**
   * @member {Number} position
   */
  exports.prototype['position'] = undefined;
  /**
   * @member {module:model/APIComponentSimpleBean} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * @member {module:model/APIComponentSimpleBean} revision
   */
  exports.prototype['revision'] = undefined;
  /**
   * @member {module:model/InterceptorBean.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>executionPoint</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ExecutionPointEnum = {
    /**
     * value: "FIRST"
     * @const
     */
    "FIRST": "FIRST",
    /**
     * value: "SECOND"
     * @const
     */
    "SECOND": "SECOND",
    /**
     * value: "ANY"
     * @const
     */
    "ANY": "ANY"  };

  /**
   * Allowed values for the <code>parentType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ParentTypeEnum = {
    /**
     * value: "REVISION"
     * @const
     */
    "REVISION": "REVISION",
    /**
     * value: "RESOURCE"
     * @const
     */
    "RESOURCE": "RESOURCE",
    /**
     * value: "OPERATION"
     * @const
     */
    "OPERATION": "OPERATION",
    /**
     * value: "PLAN"
     * @const
     */
    "PLAN": "PLAN"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "CHANGED_VALUE"
     * @const
     */
    "CHANGED_VALUE": "CHANGED_VALUE",
    /**
     * value: "REFERENCE"
     * @const
     */
    "REFERENCE": "REFERENCE",
    /**
     * value: "REMOVED"
     * @const
     */
    "REMOVED": "REMOVED"  };


  return exports;
}));


