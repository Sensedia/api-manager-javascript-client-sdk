# ApiManagerPortal.AccessTokensApi

All URIs are relative to *https://localhost/api-manager/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**countUsingGET10**](AccessTokensApi.md#countUsingGET10) | **GET** /access-tokens/count | Retrieve access token total
[**removeAuthTokenUsingDELETE1**](AccessTokensApi.md#removeAuthTokenUsingDELETE1) | **DELETE** /access-tokens/{id} | Remove a access token
[**retrieveAuthTokenChangeLogUsingGET1**](AccessTokensApi.md#retrieveAuthTokenChangeLogUsingGET1) | **GET** /access-tokens/{id}/changelog | Retrive changelog per access token id
[**retriveAuthTokenByCodeUsingGET1**](AccessTokensApi.md#retriveAuthTokenByCodeUsingGET1) | **GET** /access-tokens/{code} | Find access token by code
[**retriveAuthTokenUsingGET1**](AccessTokensApi.md#retriveAuthTokenUsingGET1) | **GET** /access-tokens | Find access token list by filters
[**saveAuthTokenUsingPOST1**](AccessTokensApi.md#saveAuthTokenUsingPOST1) | **POST** /access-tokens | Create a new access token
[**updateAuthTokenUsingPUT1**](AccessTokensApi.md#updateAuthTokenUsingPUT1) | **PUT** /access-tokens/{id} | Update a access token
[**validatePartialAccessTokenUsingPOST1**](AccessTokensApi.md#validatePartialAccessTokenUsingPOST1) | **POST** /access-tokens/validate | Validate partial access token


<a name="countUsingGET10"></a>
# **countUsingGET10**
> &#39;Number&#39; countUsingGET10(opts)

Retrieve access token total

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

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
apiInstance.countUsingGET10(opts, callback);
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

<a name="removeAuthTokenUsingDELETE1"></a>
# **removeAuthTokenUsingDELETE1**
> removeAuthTokenUsingDELETE1(id, opts)

Remove a access token

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var id = "id_example"; // String | App id

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
apiInstance.removeAuthTokenUsingDELETE1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| App id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retrieveAuthTokenChangeLogUsingGET1"></a>
# **retrieveAuthTokenChangeLogUsingGET1**
> [ChangeLogBean] retrieveAuthTokenChangeLogUsingGET1(id, opts)

Retrive changelog per access token id

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var id = 789; // Number | Access token id

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
apiInstance.retrieveAuthTokenChangeLogUsingGET1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Access token id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**[ChangeLogBean]**](ChangeLogBean.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retriveAuthTokenByCodeUsingGET1"></a>
# **retriveAuthTokenByCodeUsingGET1**
> AccessToken retriveAuthTokenByCodeUsingGET1(code, opts)

Find access token by code

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var code = "code_example"; // String | Code

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
apiInstance.retriveAuthTokenByCodeUsingGET1(code, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| Code | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="retriveAuthTokenUsingGET1"></a>
# **retriveAuthTokenUsingGET1**
> [AccessToken] retriveAuthTokenUsingGET1(opts)

Find access token list by filters

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'code': "code_example", // String | code
  'owner': "owner_example", // String | owner
  'status': "status_example", // String | staus(ACTIVE, REVOKED, EXPIRED)
  'expiresIn': 789, // Number | Expires in millisecond
  'refreshToken': "refreshToken_example", // String | Refresh code
  'scope': "scope_example", // String | Scope
  'keyword': "keyword_example", // String | Keyword to find between code or owner
  'actualPage': 56, // Number | Number of the page in pagination. The starting page number is zero.
  'pageSize': 56, // Number | Define the size of the returned list of developers.
  'authIds': "authIds_example", // String | Id access token separated by space. Ex:(1 3 6 8)
  'beginDate': "beginDate_example", // String | Begin date
  'endDate': "endDate_example", // String | End date
  'extraFields': "extraFields_example" // String | Extra field separated by comma
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retriveAuthTokenUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **code** | **String**| code | [optional] 
 **owner** | **String**| owner | [optional] 
 **status** | **String**| staus(ACTIVE, REVOKED, EXPIRED) | [optional] 
 **expiresIn** | **Number**| Expires in millisecond | [optional] 
 **refreshToken** | **String**| Refresh code | [optional] 
 **scope** | **String**| Scope | [optional] 
 **keyword** | **String**| Keyword to find between code or owner | [optional] 
 **actualPage** | **Number**| Number of the page in pagination. The starting page number is zero. | [optional] 
 **pageSize** | **Number**| Define the size of the returned list of developers. | [optional] 
 **authIds** | **String**| Id access token separated by space. Ex:(1 3 6 8) | [optional] 
 **beginDate** | **String**| Begin date | [optional] 
 **endDate** | **String**| End date | [optional] 
 **extraFields** | **String**| Extra field separated by comma | [optional] 

### Return type

[**[AccessToken]**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveAuthTokenUsingPOST1"></a>
# **saveAuthTokenUsingPOST1**
> AccessToken saveAuthTokenUsingPOST1(opts)

Create a new access token

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'bean': new ApiManagerPortal.AccessToken() // AccessToken | Access token json to create a new access token.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveAuthTokenUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **bean** | [**AccessToken**](AccessToken.md)| Access token json to create a new access token. | [optional] 

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAuthTokenUsingPUT1"></a>
# **updateAuthTokenUsingPUT1**
> AccessTokenResponse updateAuthTokenUsingPUT1(id, opts)

Update a access token

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var id = "id_example"; // String | Access token id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'bean': new ApiManagerPortal.AccessToken() // AccessToken | Access token json to update a access token.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAuthTokenUsingPUT1(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Access token id | 
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **bean** | [**AccessToken**](AccessToken.md)| Access token json to update a access token. | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="validatePartialAccessTokenUsingPOST1"></a>
# **validatePartialAccessTokenUsingPOST1**
> Object validatePartialAccessTokenUsingPOST1(opts)

Validate partial access token

### Example
```javascript
var ApiManagerPortal = require('api_manager_portal');

var apiInstance = new ApiManagerPortal.AccessTokensApi();

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // String | Sensedia-Auth
  'bean': new ApiManagerPortal.AccessToken() // AccessToken | Access token json to validate a access token.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validatePartialAccessTokenUsingPOST1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sensediaAuth** | **String**| Sensedia-Auth | [optional] 
 **bean** | [**AccessToken**](AccessToken.md)| Access token json to validate a access token. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

