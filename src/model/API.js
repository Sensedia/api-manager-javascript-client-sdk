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
    define(['ApiClient', 'model/APIUserBean', 'model/EnvironmentSimpleBean', 'model/PlanSimpleBean', 'model/RevisionSimpleBean', 'model/TeamBean', 'model/UserBean'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./APIUserBean'), require('./EnvironmentSimpleBean'), require('./PlanSimpleBean'), require('./RevisionSimpleBean'), require('./TeamBean'), require('./UserBean'));
  } else {
    // Browser globals (root is window)
    if (!root.ApiManagerPortal) {
      root.ApiManagerPortal = {};
    }
    root.ApiManagerPortal.API = factory(root.ApiManagerPortal.ApiClient, root.ApiManagerPortal.APIUserBean, root.ApiManagerPortal.EnvironmentSimpleBean, root.ApiManagerPortal.PlanSimpleBean, root.ApiManagerPortal.RevisionSimpleBean, root.ApiManagerPortal.TeamBean, root.ApiManagerPortal.UserBean);
  }
}(this, function(ApiClient, APIUserBean, EnvironmentSimpleBean, PlanSimpleBean, RevisionSimpleBean, TeamBean, UserBean) {
  'use strict';




  /**
   * The API model module.
   * @module model/API
   * @version 2.0
   */

  /**
   * Constructs a new <code>API</code>.
   * API Model
   * @alias module:model/API
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>API</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/API} obj Optional instance to populate.
   * @return {module:model/API} The populated <code>API</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accessTokenExpiresIn')) {
        obj['accessTokenExpiresIn'] = ApiClient.convertToType(data['accessTokenExpiresIn'], 'Number');
      }
      if (data.hasOwnProperty('appsCount')) {
        obj['appsCount'] = ApiClient.convertToType(data['appsCount'], 'Number');
      }
      if (data.hasOwnProperty('basePath')) {
        obj['basePath'] = ApiClient.convertToType(data['basePath'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], [EnvironmentSimpleBean]);
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('lastRevision')) {
        obj['lastRevision'] = RevisionSimpleBean.constructFromObject(data['lastRevision']);
      }
      if (data.hasOwnProperty('lastVersion')) {
        obj['lastVersion'] = ApiClient.convertToType(data['lastVersion'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = UserBean.constructFromObject(data['owner']);
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
      }
      if (data.hasOwnProperty('plans')) {
        obj['plans'] = ApiClient.convertToType(data['plans'], [PlanSimpleBean]);
      }
      if (data.hasOwnProperty('privateAPI')) {
        obj['privateAPI'] = ApiClient.convertToType(data['privateAPI'], 'Boolean');
      }
      if (data.hasOwnProperty('releaseNotes')) {
        obj['releaseNotes'] = ApiClient.convertToType(data['releaseNotes'], 'String');
      }
      if (data.hasOwnProperty('revisions')) {
        obj['revisions'] = ApiClient.convertToType(data['revisions'], [RevisionSimpleBean]);
      }
      if (data.hasOwnProperty('teamVisibility')) {
        obj['teamVisibility'] = TeamBean.constructFromObject(data['teamVisibility']);
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [APIUserBean]);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('visibilityType')) {
        obj['visibilityType'] = ApiClient.convertToType(data['visibilityType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} accessTokenExpiresIn
   */
  exports.prototype['accessTokenExpiresIn'] = undefined;
  /**
   * @member {Number} appsCount
   */
  exports.prototype['appsCount'] = undefined;
  /**
   * @member {String} basePath
   */
  exports.prototype['basePath'] = undefined;
  /**
   * @member {Date} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/EnvironmentSimpleBean>} environments
   */
  exports.prototype['environments'] = undefined;
  /**
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/RevisionSimpleBean} lastRevision
   */
  exports.prototype['lastRevision'] = undefined;
  /**
   * @member {Boolean} lastVersion
   */
  exports.prototype['lastVersion'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/UserBean} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * @member {Number} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * @member {Array.<module:model/PlanSimpleBean>} plans
   */
  exports.prototype['plans'] = undefined;
  /**
   * @member {Boolean} privateAPI
   */
  exports.prototype['privateAPI'] = undefined;
  /**
   * @member {String} releaseNotes
   */
  exports.prototype['releaseNotes'] = undefined;
  /**
   * @member {Array.<module:model/RevisionSimpleBean>} revisions
   */
  exports.prototype['revisions'] = undefined;
  /**
   * @member {module:model/TeamBean} teamVisibility
   */
  exports.prototype['teamVisibility'] = undefined;
  /**
   * @member {Array.<module:model/APIUserBean>} users
   */
  exports.prototype['users'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/API.VisibilityTypeEnum} visibilityType
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


