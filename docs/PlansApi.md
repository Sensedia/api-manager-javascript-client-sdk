# ApiManagerPortal.PlansApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**clonePlanUsingPOST1**](PlansApi.md#clonePlanUsingPOST1) | **POST** /plans/{id}/clone | Clone a plan
[**countUsingGET13**](PlansApi.md#countUsingGET13) | **GET** /plans/count | Retrieve plan total
[**deletePlanUsingDELETE1**](PlansApi.md#deletePlanUsingDELETE1) | **DELETE** /plans/{id} | Delete a plan
[**getPlanChangeLogUsingGET3**](PlansApi.md#getPlanChangeLogUsingGET3) | **GET** /plans/{id}/changelog | Retrive changelog per plan id
[**getPlanDefaultByApiUsingGET1**](PlansApi.md#getPlanDefaultByApiUsingGET1) | **GET** /plans/{id}/defaultPlan | Find default plan by api id
[**getPlanUsingGET2**](PlansApi.md#getPlanUsingGET2) | **GET** /plans/{id} | Find plan by id
[**getPlanUsingGET3**](PlansApi.md#getPlanUsingGET3) | **GET** /plans | Return all plan
[**postPlanUsingPOST1**](PlansApi.md#postPlanUsingPOST1) | **POST** /plans | Create a new plan
[**putPlanUsingPUT1**](PlansApi.md#putPlanUsingPUT1) | **PUT** /plans/{id} | Update a plan
[**validatePartialPlanUsingPOST1**](PlansApi.md#validatePartialPlanUsingPOST1) | **POST** /plans/validate | Validate partial a plan


<a name="clonePlanUsingPOST1"></a>
# **clonePlanUsingPOST1**
> PlanResponse clonePlanUsingPOST1(id, opts)

Clone a plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var id = "id_example"; // String | Plan id

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
apiInstance.clonePlanUsingPOST1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**PlanResponse**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="countUsingGET13"></a>
# **countUsingGET13**
> &#39;Number&#39; countUsingGET13(opts)

Retrieve plan total

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

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
apiInstance.countUsingGET13(opts, callback);
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

<a name="deletePlanUsingDELETE1"></a>
# **deletePlanUsingDELETE1**
> ResponseEntity deletePlanUsingDELETE1(id, opts)

Delete a plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var id = "id_example"; // String | Plan id

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
apiInstance.deletePlanUsingDELETE1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPlanChangeLogUsingGET3"></a>
# **getPlanChangeLogUsingGET3**
> [ChangeLogBean] getPlanChangeLogUsingGET3(id, opts)

Retrive changelog per plan id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

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
apiInstance.getPlanChangeLogUsingGET3(id, opts, callback);
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

<a name="getPlanDefaultByApiUsingGET1"></a>
# **getPlanDefaultByApiUsingGET1**
> PlanResponse getPlanDefaultByApiUsingGET1(id, opts)

Find default plan by api id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var id = "id_example"; // String | Api id

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
apiInstance.getPlanDefaultByApiUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Api id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**PlanResponse**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPlanUsingGET2"></a>
# **getPlanUsingGET2**
> PlanResponse getPlanUsingGET2(id, opts)

Find plan by id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var id = "id_example"; // String | id

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
apiInstance.getPlanUsingGET2(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**PlanResponse**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPlanUsingGET3"></a>
# **getPlanUsingGET3**
> [PlanResponse] getPlanUsingGET3(opts)

Return all plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

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
apiInstance.getPlanUsingGET3(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[PlanResponse]**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postPlanUsingPOST1"></a>
# **postPlanUsingPOST1**
> PlanResponse postPlanUsingPOST1(planBean, opts)

Create a new plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var planBean = new ApiManagerPortal.PlanResponse(); // PlanResponse | planBean

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
apiInstance.postPlanUsingPOST1(planBean, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **planBean** | [**PlanResponse**](PlanResponse.md)| planBean | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**PlanResponse**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="putPlanUsingPUT1"></a>
# **putPlanUsingPUT1**
> PlanResponse putPlanUsingPUT1(id, opts)

Update a plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var id = "id_example"; // String | Plan id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'planBean': new ApiManagerPortal.PlanResponse() // PlanResponse | Plan json to update a plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putPlanUsingPUT1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Plan id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **planBean** | [**PlanResponse**](PlanResponse.md)| Plan json to update a plan | [optional] 

### Return type

[**PlanResponse**](PlanResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="validatePartialPlanUsingPOST1"></a>
# **validatePartialPlanUsingPOST1**
> ResponseEntity validatePartialPlanUsingPOST1(opts)

Validate partial a plan

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.PlansApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'planBean': new ApiManagerPortal.PlanResponse() // PlanResponse | Plan json to validate a plan
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validatePartialPlanUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **planBean** | [**PlanResponse**](PlanResponse.md)| Plan json to validate a plan | [optional] 

### Return type

[**ResponseEntity**](ResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

