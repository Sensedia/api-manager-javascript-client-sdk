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
    instance = new ApiManagerPortal.DevelopersApi();
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

  describe('DevelopersApi', function() {
    describe('countUsingGET12', function() {
      it('should call countUsingGET12 successfully', function(done) {
        //uncomment below and update the code to test countUsingGET12
        //instance.countUsingGET12(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeUserAccountUsingDELETE1', function() {
      it('should call removeUserAccountUsingDELETE1 successfully', function(done) {
        //uncomment below and update the code to test removeUserAccountUsingDELETE1
        //instance.removeUserAccountUsingDELETE1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retieveUserAccountUsingGET1', function() {
      it('should call retieveUserAccountUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test retieveUserAccountUsingGET1
        //instance.retieveUserAccountUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAccountChangeLogUsingGET1', function() {
      it('should call retrieveAccountChangeLogUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test retrieveAccountChangeLogUsingGET1
        //instance.retrieveAccountChangeLogUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveUserAccountsUsingGET1', function() {
      it('should call retrieveUserAccountsUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test retrieveUserAccountsUsingGET1
        //instance.retrieveUserAccountsUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveUserAccountUsingPUT1', function() {
      it('should call saveUserAccountUsingPUT1 successfully', function(done) {
        //uncomment below and update the code to test saveUserAccountUsingPUT1
        //instance.saveUserAccountUsingPUT1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));