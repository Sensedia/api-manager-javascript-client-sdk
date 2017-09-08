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
    root.ApiManagerPortal.RolePermissionBean = factory(root.ApiManagerPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RolePermissionBean model module.
   * @module model/RolePermissionBean
   * @version 2.0
   */

  /**
   * Constructs a new <code>RolePermissionBean</code>.
   * @alias module:model/RolePermissionBean
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RolePermissionBean</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RolePermissionBean} obj Optional instance to populate.
   * @return {module:model/RolePermissionBean} The populated <code>RolePermissionBean</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/RolePermissionBean.PermissionEnum} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * @member {module:model/RolePermissionBean.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>permission</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PermissionEnum = {
    /**
     * value: "DASHBOARD"
     * @const
     */
    "DASHBOARD": "DASHBOARD",
    /**
     * value: "ANALYTICS"
     * @const
     */
    "ANALYTICS": "ANALYTICS",
    /**
     * value: "APIS_HEALTH"
     * @const
     */
    "APIS_HEALTH": "APIS_HEALTH",
    /**
     * value: "APIS"
     * @const
     */
    "APIS": "APIS",
    /**
     * value: "BAAS"
     * @const
     */
    "BAAS": "BAAS",
    /**
     * value: "NOTIFICATIONS"
     * @const
     */
    "NOTIFICATIONS": "NOTIFICATIONS",
    /**
     * value: "PLANS"
     * @const
     */
    "PLANS": "PLANS",
    /**
     * value: "APPS"
     * @const
     */
    "APPS": "APPS",
    /**
     * value: "ACCESS_TOKENS"
     * @const
     */
    "ACCESS_TOKENS": "ACCESS_TOKENS",
    /**
     * value: "SECRETS"
     * @const
     */
    "SECRETS": "SECRETS",
    /**
     * value: "DEVELOPERS"
     * @const
     */
    "DEVELOPERS": "DEVELOPERS",
    /**
     * value: "TRACE"
     * @const
     */
    "TRACE": "TRACE",
    /**
     * value: "ENVIRONMENTS"
     * @const
     */
    "ENVIRONMENTS": "ENVIRONMENTS",
    /**
     * value: "CALLBACKS"
     * @const
     */
    "CALLBACKS": "CALLBACKS",
    /**
     * value: "HEALTH_CHECKS"
     * @const
     */
    "HEALTH_CHECKS": "HEALTH_CHECKS",
    /**
     * value: "USERS"
     * @const
     */
    "USERS": "USERS",
    /**
     * value: "ROLES"
     * @const
     */
    "ROLES": "ROLES",
    /**
     * value: "TEAMS"
     * @const
     */
    "TEAMS": "TEAMS",
    /**
     * value: "AUDIT"
     * @const
     */
    "AUDIT": "AUDIT",
    /**
     * value: "OAUTH"
     * @const
     */
    "OAUTH": "OAUTH",
    /**
     * value: "LDAP"
     * @const
     */
    "LDAP": "LDAP",
    /**
     * value: "ROOT"
     * @const
     */
    "ROOT": "ROOT",
    /**
     * value: "NONE"
     * @const
     */
    "NONE": "NONE",
    /**
     * value: "ALERT"
     * @const
     */
    "ALERT": "ALERT",
    /**
     * value: "MAIL_SETTINGS"
     * @const
     */
    "MAIL_SETTINGS": "MAIL_SETTINGS"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "VIEW"
     * @const
     */
    "VIEW": "VIEW",
    /**
     * value: "EDIT"
     * @const
     */
    "EDIT": "EDIT"  };


  return exports;
}));

