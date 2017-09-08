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
    define(['ApiClient', 'model/DeploymentSimpleBean', 'model/EvironmentUserBean', 'model/TeamBean', 'model/UserBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeploymentSimpleBean'), require('./EvironmentUserBean'), require('./TeamBean'), require('./UserBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.EnvironmentSimpleBean = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.DeploymentSimpleBean, root.ApiManagerPortal.EvironmentUserBean, root.ApiManagerPortal.TeamBean, root.ApiManagerPortal.UserBean);
  }
}(this, function(ApiClient, DeploymentSimpleBean, EvironmentUserBean, TeamBean, UserBean) {
  'use strict';




  /**
   * The EnvironmentSimpleBean model module.
   * @module model/EnvironmentSimpleBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>EnvironmentSimpleBean</code>.
   * @alias module:model/EnvironmentSimpleBean
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>EnvironmentSimpleBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnvironmentSimpleBean} obj Optional instance to populate.
   * @return {module:model/EnvironmentSimpleBean} The populated <code>EnvironmentSimpleBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('inboundUrl')) {
        obj['inboundUrl'] = ApiClient.convertToType(data['inboundUrl'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = UserBean.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('revisionDeployed')) {
        obj['revisionDeployed'] = DeploymentSimpleBean.constructFromObject(data['revisionDeployed']);
      }
      if (data.hasOwnProperty('teamVisibility')) {
        obj['teamVisibility'] = TeamBean.constructFromObject(data['teamVisibility']);
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [EvironmentUserBean]);
      }
      if (data.hasOwnProperty('visibilityType')) {
        obj['visibilityType'] = ApiClient.convertToType(data['visibilityType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} inboundUrl
   */
  exports.prototype['inboundUrl'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/UserBean} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {module:model/DeploymentSimpleBean} revisionDeployed
   */
  exports.prototype['revisionDeployed'] = undefined;
  /**
   * @member {module:model/TeamBean} teamVisibility
   */
  exports.prototype['teamVisibility'] = undefined;
  /**
   * @member {Array.<module:model/EvironmentUserBean>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {module:model/EnvironmentSimpleBean.VisibilityTypeEnum} visibilityType
   */
  exports.prototype['visibilityType'] = undefined;


  /**
   * Allowed values for the <code>visibilityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityTypeEnum = {
    /**
     * value: "ORGANIZATION"
     * @const
     */
    "ORGANIZATION": "ORGANIZATION",
    /**
     * value: "TEAM"
     * @const
     */
    "TEAM": "TEAM",
    /**
     * value: "ME"
     * @const
     */
    "ME": "ME"  };


  return exports;
}));


