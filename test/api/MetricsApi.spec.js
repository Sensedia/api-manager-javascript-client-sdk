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
    instance = new ApiManagerPortal.MetricsApi();
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

  describe('MetricsApi', function() {
    describe('findHealthUsingGET1', function() {
      it('should call findHealthUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test findHealthUsingGET1
        //instance.findHealthUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTopAccessTokensUsingGET1', function() {
      it('should call findTopAccessTokensUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test findTopAccessTokensUsingGET1
        //instance.findTopAccessTokensUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('findTopAppsUsingGET1', function() {
      it('should call findTopAppsUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test findTopAppsUsingGET1
        //instance.findTopAppsUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccessTokensByMonthUsingGET1', function() {
      it('should call getAccessTokensByMonthUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getAccessTokensByMonthUsingGET1
        //instance.getAccessTokensByMonthUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppsByMonthUsingGET1', function() {
      it('should call getAppsByMonthUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getAppsByMonthUsingGET1
        //instance.getAppsByMonthUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCacheLatencyUsingGET1', function() {
      it('should call getCacheLatencyUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getCacheLatencyUsingGET1
        //instance.getCacheLatencyUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCacheSizeUsingGET1', function() {
      it('should call getCacheSizeUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getCacheSizeUsingGET1
        //instance.getCacheSizeUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCacheUsingGET1', function() {
      it('should call getCacheUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getCacheUsingGET1
        //instance.getCacheUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCallsByMonthUsingGET1', function() {
      it('should call getCallsByMonthUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getCallsByMonthUsingGET1
        //instance.getCallsByMonthUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLatencyByMonthUsingGET1', function() {
      it('should call getLatencyByMonthUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getLatencyByMonthUsingGET1
        //instance.getLatencyByMonthUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStatusErrorUsingGET1', function() {
      it('should call getStatusErrorUsingGET1 successfully', function(done) {
        //uncomment below and update the code to test getStatusErrorUsingGET1
        //instance.getStatusErrorUsingGET1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
