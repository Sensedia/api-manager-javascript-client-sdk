# ApiManagerPortal.APIsApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cloneApiUsingPOST1**](APIsApi.md#cloneApiUsingPOST1) | **POST** /apis/{id}/clone | Clone a API
[**createAPIUsingPOST1**](APIsApi.md#createAPIUsingPOST1) | **POST** /apis | Create a new API
[**deleteAPIUsingDELETE1**](APIsApi.md#deleteAPIUsingDELETE1) | **DELETE** /apis/{id} | Delete a API
[**findLastRevisionUsingGET1**](APIsApi.md#findLastRevisionUsingGET1) | **GET** /apis/{id}/revisions | Find last revision by API id
[**findVersionsByAPIUsingGET1**](APIsApi.md#findVersionsByAPIUsingGET1) | **GET** /apis/{id}/versions | Find version by API id
[**getAPIByIdUsingGET1**](APIsApi.md#getAPIByIdUsingGET1) | **GET** /apis/{apiId} | Find API by id
[**getAPIChangeLogUsingGET1**](APIsApi.md#getAPIChangeLogUsingGET1) | **GET** /apis/{id}/changelog | Retrive changelog per API id
[**getAPIsUsingGET1**](APIsApi.md#getAPIsUsingGET1) | **GET** /apis | Return all APIs
[**newVersionAPIUsingPOST1**](APIsApi.md#newVersionAPIUsingPOST1) | **POST** /apis/{id}/versions | Create new version
[**removeEnvironmentUsingDELETE1**](APIsApi.md#removeEnvironmentUsingDELETE1) | **DELETE** /apis/{id}/environments/{environmentId} | Delete environment link with API
[**updateAPIUsingPUT1**](APIsApi.md#updateAPIUsingPUT1) | **PUT** /apis/{id} | Update a API
[**validatePartialAPIUsingPOST1**](APIsApi.md#validatePartialAPIUsingPOST1) | **POST** /apis/validate | Validate partial a API


<a name="cloneApiUsingPOST1"></a>
# **cloneApiUsingPOST1**
> APIResponse cloneApiUsingPOST1(id, opts)

Clone a API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiBean': new ApiManagerPortal.API() // API | API json to update a api
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cloneApiUsingPOST1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiBean** | [**API**](API.md)| API json to update a api | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createAPIUsingPOST1"></a>
# **createAPIUsingPOST1**
> APIResponse createAPIUsingPOST1(opts)

Create a new API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'bean': new ApiManagerPortal.APICreateBean() // APICreateBean | API json to create a API
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAPIUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **bean** | [**APICreateBean**](APICreateBean.md)| API json to create a API | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="deleteAPIUsingDELETE1"></a>
# **deleteAPIUsingDELETE1**
> ResponseEntity deleteAPIUsingDELETE1(id, opts)

Delete a API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAPIUsingDELETE1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findLastRevisionUsingGET1"></a>
# **findLastRevisionUsingGET1**
> RevisionBean findLastRevisionUsingGET1(id, opts)

Find last revision by API id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = 789; // Number | id

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findLastRevisionUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**RevisionBean**](RevisionBean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findVersionsByAPIUsingGET1"></a>
# **findVersionsByAPIUsingGET1**
> [API] findVersionsByAPIUsingGET1(id, opts)

Find version by API id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findVersionsByAPIUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[API]**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIByIdUsingGET1"></a>
# **getAPIByIdUsingGET1**
> API getAPIByIdUsingGET1(apiId, opts)

Find API by id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var apiId = "apiId_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'filter': "filter_example" // String | Filter type searched
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIByIdUsingGET1(apiId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiId** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **filter** | **String**| Filter type searched | [optional] 

### Return type

[**API**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIChangeLogUsingGET1"></a>
# **getAPIChangeLogUsingGET1**
> [ChangeLog] getAPIChangeLogUsingGET1(id, opts)

Retrive changelog per API id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = 789; // Number | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIChangeLogUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[ChangeLog]**](ChangeLog.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAPIsUsingGET1"></a>
# **getAPIsUsingGET1**
> [API] getAPIsUsingGET1(opts)

Return all APIs

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'privateAPI': true, // Boolean | Private API
  'filter': "filter_example" // String | Filter type searched
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAPIsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **privateAPI** | **Boolean**| Private API | [optional] 
 **filter** | **String**| Filter type searched | [optional] 

### Return type

[**[API]**](API.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="newVersionAPIUsingPOST1"></a>
# **newVersionAPIUsingPOST1**
> APIResponse newVersionAPIUsingPOST1(id, opts)

Create new version

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiBean': new ApiManagerPortal.API() // API | API json to update a api
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.newVersionAPIUsingPOST1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiBean** | [**API**](API.md)| API json to update a api | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEnvironmentUsingDELETE1"></a>
# **removeEnvironmentUsingDELETE1**
> ResponseEntity removeEnvironmentUsingDELETE1(id, environmentId, opts)

Delete environment link with API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | id

var environmentId = "environmentId_example"; // String | environmentId

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeEnvironmentUsingDELETE1(id, environmentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **environmentId** | **String**| environmentId | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="updateAPIUsingPUT1"></a>
# **updateAPIUsingPUT1**
> APIResponse updateAPIUsingPUT1(id, opts)

Update a API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var id = "id_example"; // String | API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiBean': new ApiManagerPortal.API() // API | API json to update a api
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAPIUsingPUT1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| API id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiBean** | [**API**](API.md)| API json to update a api | [optional] 

### Return type

[**APIResponse**](APIResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validatePartialAPIUsingPOST1"></a>
# **validatePartialAPIUsingPOST1**
> ResponseEntity validatePartialAPIUsingPOST1(opts)

Validate partial a API

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.APIsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'bean': new ApiManagerPortal.API() // API | API json to validate a API
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validatePartialAPIUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **bean** | [**API**](API.md)| API json to validate a API | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

