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
    instance = new ApiManagerPortal.InterceptorBean();
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

  describe('InterceptorBean', function() {
    it('should create an instance of InterceptorBean', function() {
      // uncomment below and update the code to test InterceptorBean
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be.a(ApiManagerPortal.InterceptorBean);
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property executionPoint (base name: "executionPoint")', function() {
      // uncomment below and update the code to test the property executionPoint
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property idTemp (base name: "idTemp")', function() {
      // uncomment below and update the code to test the property idTemp
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property operation (base name: "operation")', function() {
      // uncomment below and update the code to test the property operation
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property parentType (base name: "parentType")', function() {
      // uncomment below and update the code to test the property parentType
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property planId (base name: "planId")', function() {
      // uncomment below and update the code to test the property planId
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property resource (base name: "resource")', function() {
      // uncomment below and update the code to test the property resource
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ApiManagerPortal.InterceptorBean();
      //expect(instance).to.be();
    });

  });

}));