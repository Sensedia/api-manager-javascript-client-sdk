# ApiManagerPortal.AppsApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countUsingGET11**](AppsApi.md#countUsingGET11) | **GET** /apps/count | Retrieve App total
[**deleteAppTokenUsingDELETE1**](AppsApi.md#deleteAppTokenUsingDELETE1) | **DELETE** /apps/{code} | Delete a app
[**getAppTokenByAppGalleryUsingGET1**](AppsApi.md#getAppTokenByAppGalleryUsingGET1) | **GET** /apps/gallery | Return all apps
[**getAppTokenByFilterUsingGET1**](AppsApi.md#getAppTokenByFilterUsingGET1) | **GET** /apps | Find app list by filters
[**getAppTokenByIdUsingGET1**](AppsApi.md#getAppTokenByIdUsingGET1) | **GET** /apps/{code} | Find app by code
[**getAppTokenChangeLogUsingGET1**](AppsApi.md#getAppTokenChangeLogUsingGET1) | **GET** /apps/{code}/changelog | Retrive changelog per app id
[**postAppTokenUsingPOST1**](AppsApi.md#postAppTokenUsingPOST1) | **POST** /apps | Create a new app
[**putAppTokenUsingPUT1**](AppsApi.md#putAppTokenUsingPUT1) | **PUT** /apps/{id} | Update a app
[**validatePartialAppUsingPOST1**](AppsApi.md#validatePartialAppUsingPOST1) | **POST** /apps/validate | Validate partial app


<a name="countUsingGET11"></a>
# **countUsingGET11**
> &#39;Number&#39; countUsingGET11(opts)

Retrieve App total

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

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
apiInstance.countUsingGET11(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAppTokenUsingDELETE1"></a>
# **deleteAppTokenUsingDELETE1**
> deleteAppTokenUsingDELETE1(id, opts)

Delete a app

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var id = "id_example"; // String | id

var opts = { 
  'sensediaAuth': "sensediaAuth_example" // String | Sensedia-Auth
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAppTokenUsingDELETE1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppTokenByAppGalleryUsingGET1"></a>
# **getAppTokenByAppGalleryUsingGET1**
> [APP] getAppTokenByAppGalleryUsingGET1(opts)

Return all apps

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

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
apiInstance.getAppTokenByAppGalleryUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[APP]**](APP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppTokenByFilterUsingGET1"></a>
# **getAppTokenByFilterUsingGET1**
> [APP] getAppTokenByFilterUsingGET1(opts)

Find app list by filters

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'clientId': "clientId_example", // String | clientId
  'name': "name_example", // String | name
  'keyword': "keyword_example", // String | keyword
  'status': "status_example", // String | status
  'developer': "developer_example", // String | developer
  'actualPage': 56, // Number | actualPage
  'pageSize': 56, // Number | pageSize
  'appIds': "appIds_example", // String | appIds
  'beginDate': "beginDate_example", // String | beginDate
  'endDate': "endDate_example", // String | endDate
  'extraFields': "extraFields_example" // String | extraFields
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppTokenByFilterUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **clientId** | **String**| clientId | [optional] 
 **name** | **String**| name | [optional] 
 **keyword** | **String**| keyword | [optional] 
 **status** | **String**| status | [optional] 
 **developer** | **String**| developer | [optional] 
 **actualPage** | **Number**| actualPage | [optional] 
 **pageSize** | **Number**| pageSize | [optional] 
 **appIds** | **String**| appIds | [optional] 
 **beginDate** | **String**| beginDate | [optional] 
 **endDate** | **String**| endDate | [optional] 
 **extraFields** | **String**| extraFields | [optional] 

### Return type

[**[APP]**](APP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppTokenByIdUsingGET1"></a>
# **getAppTokenByIdUsingGET1**
> APP getAppTokenByIdUsingGET1(code, opts)

Find app by code

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var code = "code_example"; // String | Client ID

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'limitAccessTokens': 56, // Number | Limit the access token return
  'codeAccessTokens': "codeAccessTokens_example", // String | Code access token
  'filterAccessTokens': true // Boolean | Filter access tokens
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppTokenByIdUsingGET1(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Client ID | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **limitAccessTokens** | **Number**| Limit the access token return | [optional] 
 **codeAccessTokens** | **String**| Code access token | [optional] 
 **filterAccessTokens** | **Boolean**| Filter access tokens | [optional] 

### Return type

[**APP**](APP.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppTokenChangeLogUsingGET1"></a>
# **getAppTokenChangeLogUsingGET1**
> [ChangeLogBean] getAppTokenChangeLogUsingGET1(id, opts)

Retrive changelog per app id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

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
apiInstance.getAppTokenChangeLogUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[ChangeLogBean]**](ChangeLogBean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postAppTokenUsingPOST1"></a>
# **postAppTokenUsingPOST1**
> APPResponse postAppTokenUsingPOST1(opts)

Create a new app

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'appTokenBean': new ApiManagerPortal.APP() // APP | App json to create a new app.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postAppTokenUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **appTokenBean** | [**APP**](APP.md)| App json to create a new app. | [optional] 

### Return type

[**APPResponse**](APPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="putAppTokenUsingPUT1"></a>
# **putAppTokenUsingPUT1**
> APPResponse putAppTokenUsingPUT1(id, appTokenBean, opts)

Update a app

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var id = "id_example"; // String | App json to update a app.

var appTokenBean = new ApiManagerPortal.APP(); // APP | appTokenBean

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
apiInstance.putAppTokenUsingPUT1(id, appTokenBean, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| App json to update a app. | 
 **appTokenBean** | [**APP**](APP.md)| appTokenBean | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**APPResponse**](APPResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="validatePartialAppUsingPOST1"></a>
# **validatePartialAppUsingPOST1**
> Object validatePartialAppUsingPOST1(opts)

Validate partial app

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AppsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'appTokenBean': new ApiManagerPortal.APP() // APP | App json to validate app
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validatePartialAppUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **appTokenBean** | [**APP**](APP.md)| App json to validate app | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

