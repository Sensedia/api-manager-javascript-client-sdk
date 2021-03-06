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
    instance = new ApiManagerPortal.RevisionSimpleBean();
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

  describe('RevisionSimpleBean', function() {
    it('should create an instance of RevisionSimpleBean', function() {
      // uncomment below and update the code to test RevisionSimpleBean
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be.a(ApiManagerPortal.RevisionSimpleBean);
    });

    it('should have the property apiBroken (base name: "apiBroken")', function() {
      // uncomment below and update the code to test the property apiBroken
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property deployments (base name: "deployments")', function() {
      // uncomment below and update the code to test the property deployments
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property interceptors (base name: "interceptors")', function() {
      // uncomment below and update the code to test the property interceptors
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property lifeCycle (base name: "lifeCycle")', function() {
      // uncomment below and update the code to test the property lifeCycle
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property resources (base name: "resources")', function() {
      // uncomment below and update the code to test the property resources
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property revisionNumber (base name: "revisionNumber")', function() {
      // uncomment below and update the code to test the property revisionNumber
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new ApiManagerPortal.RevisionSimpleBean();
      //expect(instance).to.be();
    });

  });

}));
