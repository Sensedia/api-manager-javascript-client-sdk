# ApiManagerPortal.DevelopersApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countUsingGET12**](DevelopersApi.md#countUsingGET12) | **GET** /developers/count | Retrieve developers total
[**createOrUpdateDeveloper1**](DevelopersApi.md#createOrUpdateDeveloper1) | **PUT** /developers/{login} | Create or update developer
[**removeUserAccountUsingDELETE1**](DevelopersApi.md#removeUserAccountUsingDELETE1) | **DELETE** /developers/{login} | Delete developer
[**retieveUserAccountUsingGET1**](DevelopersApi.md#retieveUserAccountUsingGET1) | **GET** /developers/{login} | Retrive developer per Login
[**retrieveAccountChangeLogUsingGET1**](DevelopersApi.md#retrieveAccountChangeLogUsingGET1) | **GET** /developers/{username}/changelog | Retrive audit developer per username
[**retrieveUserAccountsUsingGET1**](DevelopersApi.md#retrieveUserAccountsUsingGET1) | **GET** /developers | Retrive developers


<a name="countUsingGET12"></a>
# **countUsingGET12**
> &#39;Number&#39; countUsingGET12(opts)

Retrieve developers total

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

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
apiInstance.countUsingGET12(opts, callback);
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

<a name="createOrUpdateDeveloper1"></a>
# **createOrUpdateDeveloper1**
> Developer createOrUpdateDeveloper1(login, bean, opts)

Create or update developer

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

var login = "login_example"; // String | Developer Login

var bean = new ApiManagerPortal.Developer(); // Developer | bean

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
apiInstance.createOrUpdateDeveloper1(login, bean, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| Developer Login | 
 **bean** | [**Developer**](Developer.md)| bean | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**Developer**](Developer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="removeUserAccountUsingDELETE1"></a>
# **removeUserAccountUsingDELETE1**
> removeUserAccountUsingDELETE1(login, opts)

Delete developer

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

var login = "login_example"; // String | Developer Login

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
apiInstance.removeUserAccountUsingDELETE1(login, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| Developer Login | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retieveUserAccountUsingGET1"></a>
# **retieveUserAccountUsingGET1**
> Developer retieveUserAccountUsingGET1(login, opts)

Retrive developer per Login

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

var login = "login_example"; // String | Developer Login

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
apiInstance.retieveUserAccountUsingGET1(login, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| Developer Login | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**Developer**](Developer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retrieveAccountChangeLogUsingGET1"></a>
# **retrieveAccountChangeLogUsingGET1**
> [ChangeLogBean] retrieveAccountChangeLogUsingGET1(username, opts)

Retrive audit developer per username

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

var username = "username_example"; // String | Developer username

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
apiInstance.retrieveAccountChangeLogUsingGET1(username, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Developer username | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[ChangeLogBean]**](ChangeLogBean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="retrieveUserAccountsUsingGET1"></a>
# **retrieveUserAccountsUsingGET1**
> [Developer] retrieveUserAccountsUsingGET1(opts)

Retrive developers

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.DevelopersApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'loginOrEmail': "loginOrEmail_example", // String | Login or E-mail
  'name': "name_example", // String | Developer Name
  'email': "email_example", // String | Developer E-mail
  'actualPage': 56, // Number | Number of the page in pagination. The starting page number is zero.
  'pageSize': 56 // Number | Define the size of the returned list of developers.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveUserAccountsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **loginOrEmail** | **String**| Login or E-mail | [optional] 
 **name** | **String**| Developer Name | [optional] 
 **email** | **String**| Developer E-mail | [optional] 
 **actualPage** | **Number**| Number of the page in pagination. The starting page number is zero. | [optional] 
 **pageSize** | **Number**| Define the size of the returned list of developers. | [optional] 

### Return type

[**[Developer]**](Developer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

