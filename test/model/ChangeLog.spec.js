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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiManagerPortal);
  }
}(this, function(expect, ApiManagerPortal) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ApiManagerPortal.ChangeLog();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChangeLog', function() {
    it('should create an instance of ChangeLog', function() {
      // uncomment below and update the code to test ChangeLog
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be.a(ApiManagerPortal.ChangeLog);
    });

    it('should have the property action (base name: "action")', function() {
      // uncomment below and update the code to test the property action
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property credentialId (base name: "credentialId")', function() {
      // uncomment below and update the code to test the property credentialId
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property credentialLogin (base name: "credentialLogin")', function() {
      // uncomment below and update the code to test the property credentialLogin
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property credentialName (base name: "credentialName")', function() {
      // uncomment below and update the code to test the property credentialName
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property jsonAfter (base name: "jsonAfter")', function() {
      // uncomment below and update the code to test the property jsonAfter
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property jsonBefore (base name: "jsonBefore")', function() {
      // uncomment below and update the code to test the property jsonBefore
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property objectId (base name: "objectId")', function() {
      // uncomment below and update the code to test the property objectId
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property objectType (base name: "objectType")', function() {
      // uncomment below and update the code to test the property objectType
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new ApiManagerPortal.ChangeLog();
      //expect(instance).to.be();
    });

  });

}));
