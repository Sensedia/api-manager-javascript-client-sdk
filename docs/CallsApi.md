# ApiManagerPortal.CallsApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveCallByIdUsingGET1**](CallsApi.md#retrieveCallByIdUsingGET1) | **GET** /calls/{id} | Retrive call by id
[**retrieveCallsWithFiltersUsingGET1**](CallsApi.md#retrieveCallsWithFiltersUsingGET1) | **GET** /calls | Retrive calls with filters
[**retrieveTotalCallsByDateUsingGET1**](CallsApi.md#retrieveTotalCallsByDateUsingGET1) | **GET** /calls/count/{date} | Retrive calls total by date


<a name="retrieveCallByIdUsingGET1"></a>
# **retrieveCallByIdUsingGET1**
> Call retrieveCallByIdUsingGET1(id, opts)

Retrive call by id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.CallsApi();

var id = "id_example"; // String | Call id

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
apiInstance.retrieveCallByIdUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Call id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**Call**](Call.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retrieveCallsWithFiltersUsingGET1"></a>
# **retrieveCallsWithFiltersUsingGET1**
> CallResponse retrieveCallsWithFiltersUsingGET1(opts)

Retrive calls with filters

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.CallsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'actualPage': 56, // Number | Number of the page in pagination. The starting page number is zero.
  'baseUris': "baseUris_example", // String | Base uris
  'appTokenCode': "appTokenCode_example", // String | Code app token
  'pageSize': 56, // Number | Define the size of the returned list of developers.
  'appTokenName': "appTokenName_example", // String | Name app token
  'authTokenOwner': "authTokenOwner_example", // String | Owner auth token
  'apiId': 789, // Number | API id
  'operationId': 789, // Number | Operation id
  'resourceId': 789, // Number | Resource id
  'environmentId': 789, // Number | Environment id
  'revisionId': 789, // Number | Revision id
  'uri': "uri_example", // String | URI
  'customSearch': "customSearch_example", // String | Custom search
  'method': "method_example", // String | HTTP Method (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)
  'httpStatusFrom': 56, // Number | HTTP status from
  'httpStatusTo': 56, // Number | HTTP status to
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'appDeveloper': "appDeveloper_example", // String | APP Developer
  'forceDownload': "forceDownload_example" // String | Force archive download
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveCallsWithFiltersUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **actualPage** | **Number**| Number of the page in pagination. The starting page number is zero. | [optional] 
 **baseUris** | **String**| Base uris | [optional] 
 **appTokenCode** | **String**| Code app token | [optional] 
 **pageSize** | **Number**| Define the size of the returned list of developers. | [optional] 
 **appTokenName** | **String**| Name app token | [optional] 
 **authTokenOwner** | **String**| Owner auth token | [optional] 
 **apiId** | **Number**| API id | [optional] 
 **operationId** | **Number**| Operation id | [optional] 
 **resourceId** | **Number**| Resource id | [optional] 
 **environmentId** | **Number**| Environment id | [optional] 
 **revisionId** | **Number**| Revision id | [optional] 
 **uri** | **String**| URI | [optional] 
 **customSearch** | **String**| Custom search | [optional] 
 **method** | **String**| HTTP Method (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD) | [optional] 
 **httpStatusFrom** | **Number**| HTTP status from | [optional] 
 **httpStatusTo** | **Number**| HTTP status to | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **appDeveloper** | **String**| APP Developer | [optional] 
 **forceDownload** | **String**| Force archive download | [optional] 

### Return type

[**CallResponse**](CallResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retrieveTotalCallsByDateUsingGET1"></a>
# **retrieveTotalCallsByDateUsingGET1**
> &#39;Number&#39; retrieveTotalCallsByDateUsingGET1(_date, opts)

Retrive calls total by date

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.CallsApi();

var _date = "_date_example"; // String | Date searched

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiId': 789 // Number | API id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveTotalCallsByDateUsingGET1(_date, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**| Date searched | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiId** | **Number**| API id | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

