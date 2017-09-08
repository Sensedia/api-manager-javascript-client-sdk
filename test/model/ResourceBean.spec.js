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
    instance = new ApiManagerPortal.ResourceBean();
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

  describe('ResourceBean', function() {
    it('should create an instance of ResourceBean', function() {
      // uncomment below and update the code to test ResourceBean
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be.a(ApiManagerPortal.ResourceBean);
    });

    it('should have the property apiBroken (base name: "apiBroken")', function() {
      // uncomment below and update the code to test the property apiBroken
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property config (base name: "config")', function() {
      // uncomment below and update the code to test the property config
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property interceptors (base name: "interceptors")', function() {
      // uncomment below and update the code to test the property interceptors
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property operations (base name: "operations")', function() {
      // uncomment below and update the code to test the property operations
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

    it('should have the property timeout (base name: "timeout")', function() {
      // uncomment below and update the code to test the property timeout
      //var instane = new ApiManagerPortal.ResourceBean();
      //expect(instance).to.be();
    });

  });

}));