# ApiManagerPortal.MetricsApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**findHealthUsingGET1**](MetricsApi.md#findHealthUsingGET1) | **GET** /metrics/health | Find Health
[**findTopAccessTokensUsingGET1**](MetricsApi.md#findTopAccessTokensUsingGET1) | **GET** /metrics/top-access-tokens/{howMany} | Find top access token
[**findTopAppsUsingGET1**](MetricsApi.md#findTopAppsUsingGET1) | **GET** /metrics/top-apps/{howMany} | Find top apps
[**getAccessTokensByMonthUsingGET1**](MetricsApi.md#getAccessTokensByMonthUsingGET1) | **GET** /metrics/access-tokens | Find access token consolited by month
[**getAppsByMonthUsingGET1**](MetricsApi.md#getAppsByMonthUsingGET1) | **GET** /metrics/apps | Find apps consolited by month
[**getCacheLatencyUsingGET1**](MetricsApi.md#getCacheLatencyUsingGET1) | **GET** /metrics/cache/latency | Find cache latency
[**getCacheSizeUsingGET1**](MetricsApi.md#getCacheSizeUsingGET1) | **GET** /metrics/cache/size | Retrive cache size
[**getCacheUsingGET1**](MetricsApi.md#getCacheUsingGET1) | **GET** /metrics/cache | Find cache
[**getCallsByMonthUsingGET1**](MetricsApi.md#getCallsByMonthUsingGET1) | **GET** /metrics/calls | Find calls by month
[**getLatencyByMonthUsingGET1**](MetricsApi.md#getLatencyByMonthUsingGET1) | **GET** /metrics/latency | Find latency by month
[**getStatusErrorUsingGET1**](MetricsApi.md#getStatusErrorUsingGET1) | **GET** /metrics/statusError | Retrive Status Error


<a name="findHealthUsingGET1"></a>
# **findHealthUsingGET1**
> [OperationHealth] findHealthUsingGET1(opts)

Find Health

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'healthPortal': true // Boolean | Health Portal
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findHealthUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **healthPortal** | **Boolean**| Health Portal | [optional] 

### Return type

[**[OperationHealth]**](OperationHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="findTopAccessTokensUsingGET1"></a>
# **findTopAccessTokensUsingGET1**
> [TopAccessToken] findTopAccessTokensUsingGET1(howMany, opts)

Find top access token

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var howMany = 56; // Number | How many

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'status': "status_example", // String | Metric status
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTopAccessTokensUsingGET1(howMany, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **howMany** | **Number**| How many | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **status** | **String**| Metric status | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[TopAccessToken]**](TopAccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="findTopAppsUsingGET1"></a>
# **findTopAppsUsingGET1**
> [TopApp] findTopAppsUsingGET1(howMany, opts)

Find top apps

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var howMany = 56; // Number | How many

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'status': "status_example", // String | Metric status
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findTopAppsUsingGET1(howMany, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **howMany** | **Number**| How many | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **status** | **String**| Metric status | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[TopApp]**](TopApp.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAccessTokensByMonthUsingGET1"></a>
# **getAccessTokensByMonthUsingGET1**
> [TokensMetric] getAccessTokensByMonthUsingGET1(opts)

Find access token consolited by month

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccessTokensByMonthUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[TokensMetric]**](TokensMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getAppsByMonthUsingGET1"></a>
# **getAppsByMonthUsingGET1**
> [TokensMetric] getAppsByMonthUsingGET1(opts)

Find apps consolited by month

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppsByMonthUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[TokensMetric]**](TokensMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCacheLatencyUsingGET1"></a>
# **getCacheLatencyUsingGET1**
> [OperationMetric] getCacheLatencyUsingGET1(opts)

Find cache latency

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiId': 789, // Number | API id
  'revisionId': 789, // Number | Revision id
  'operationId': 789, // Number | Operation id
  'environmentId': 789, // Number | Environment id
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCacheLatencyUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiId** | **Number**| API id | [optional] 
 **revisionId** | **Number**| Revision id | [optional] 
 **operationId** | **Number**| Operation id | [optional] 
 **environmentId** | **Number**| Environment id | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[OperationMetric]**](OperationMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCacheSizeUsingGET1"></a>
# **getCacheSizeUsingGET1**
> CacheMetric getCacheSizeUsingGET1(opts)

Retrive cache size

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiId': 789, // Number | API id
  'revisionId': 789, // Number | Revision id
  'operationId': 789, // Number | Operation id
  'environmentId': 789 // Number | Environment id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCacheSizeUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiId** | **Number**| API id | [optional] 
 **revisionId** | **Number**| Revision id | [optional] 
 **operationId** | **Number**| Operation id | [optional] 
 **environmentId** | **Number**| Environment id | [optional] 

### Return type

[**CacheMetric**](CacheMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCacheUsingGET1"></a>
# **getCacheUsingGET1**
> [OperationMetric] getCacheUsingGET1(opts)

Find cache

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'apiId': 789, // Number | API id
  'revisionId': 789, // Number | Revision id
  'operationId': 789, // Number | Operation id
  'environmentId': 789, // Number | Environment id
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCacheUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **apiId** | **Number**| API id | [optional] 
 **revisionId** | **Number**| Revision id | [optional] 
 **operationId** | **Number**| Operation id | [optional] 
 **environmentId** | **Number**| Environment id | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[OperationMetric]**](OperationMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getCallsByMonthUsingGET1"></a>
# **getCallsByMonthUsingGET1**
> [CallsMetric] getCallsByMonthUsingGET1(opts)

Find calls by month

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example", // String | Metric resolution
  'environmentId': 789, // Number | Environment id
  'apiId': 789, // Number | API id
  'revisionId': 789 // Number | Revision id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallsByMonthUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 
 **environmentId** | **Number**| Environment id | [optional] 
 **apiId** | **Number**| API id | [optional] 
 **revisionId** | **Number**| Revision id | [optional] 

### Return type

[**[CallsMetric]**](CallsMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getLatencyByMonthUsingGET1"></a>
# **getLatencyByMonthUsingGET1**
> [LatencyMetric] getLatencyByMonthUsingGET1(opts)

Find latency by month

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'resolution': "resolution_example" // String | Metric resolution
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLatencyByMonthUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **resolution** | **String**| Metric resolution | [optional] 

### Return type

[**[LatencyMetric]**](LatencyMetric.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getStatusErrorUsingGET1"></a>
# **getStatusErrorUsingGET1**
> &#39;Number&#39; getStatusErrorUsingGET1(opts)

Retrive Status Error

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.MetricsApi();

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
apiInstance.getStatusErrorUsingGET1(opts, callback);
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
 - **Accept**: */*

