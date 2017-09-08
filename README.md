# api_manager_portal

ApiManagerPortal - JavaScript client for api_manager_portal
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0
- Package version: 2.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install api_manager_portal --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your api_manager_portal from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('api_manager_portal')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ApiManagerPortal = require('api_manager_portal');

var api = new ApiManagerPortal.APIsApi()

var id = "id_example"; // {String} API id

var opts = { 
  'sensediaAuth': "sensediaAuth_example", // {String} Sensedia-Auth
  'apiBean': new ApiManagerPortal.API() // {API} API json to update a api
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.cloneApiUsingPOST1(id, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost/api-manager/api/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiManagerPortal.APIsApi* | [**cloneApiUsingPOST1**](docs/APIsApi.md#cloneApiUsingPOST1) | **POST** /apis/{id}/clone | Clone a API
*ApiManagerPortal.APIsApi* | [**createAPIUsingPOST1**](docs/APIsApi.md#createAPIUsingPOST1) | **POST** /apis | Create a new API
*ApiManagerPortal.APIsApi* | [**deleteAPIUsingDELETE1**](docs/APIsApi.md#deleteAPIUsingDELETE1) | **DELETE** /apis/{id} | Delete a API
*ApiManagerPortal.APIsApi* | [**findLastRevisionUsingGET1**](docs/APIsApi.md#findLastRevisionUsingGET1) | **GET** /apis/{id}/revisions | Find last revision by API id
*ApiManagerPortal.APIsApi* | [**findVersionsByAPIUsingGET1**](docs/APIsApi.md#findVersionsByAPIUsingGET1) | **GET** /apis/{id}/versions | Find version by API id
*ApiManagerPortal.APIsApi* | [**getAPIByIdUsingGET1**](docs/APIsApi.md#getAPIByIdUsingGET1) | **GET** /apis/{apiId} | Find API by id
*ApiManagerPortal.APIsApi* | [**getAPIChangeLogUsingGET1**](docs/APIsApi.md#getAPIChangeLogUsingGET1) | **GET** /apis/{id}/changelog | Retrive changelog per API id
*ApiManagerPortal.APIsApi* | [**getAPIsUsingGET1**](docs/APIsApi.md#getAPIsUsingGET1) | **GET** /apis | Return all APIs
*ApiManagerPortal.APIsApi* | [**newVersionAPIUsingPOST1**](docs/APIsApi.md#newVersionAPIUsingPOST1) | **POST** /apis/{id}/versions | Create new version
*ApiManagerPortal.APIsApi* | [**removeEnvironmentUsingDELETE1**](docs/APIsApi.md#removeEnvironmentUsingDELETE1) | **DELETE** /apis/{id}/environments/{environmentId} | Delete environment link with API
*ApiManagerPortal.APIsApi* | [**updateAPIUsingPUT1**](docs/APIsApi.md#updateAPIUsingPUT1) | **PUT** /apis/{id} | Update a API
*ApiManagerPortal.APIsApi* | [**validatePartialAPIUsingPOST1**](docs/APIsApi.md#validatePartialAPIUsingPOST1) | **POST** /apis/validate | Validate partial a API
*ApiManagerPortal.AccessTokensApi* | [**countUsingGET10**](docs/AccessTokensApi.md#countUsingGET10) | **GET** /access-tokens/count | Retrieve access token total
*ApiManagerPortal.AccessTokensApi* | [**removeAuthTokenUsingDELETE1**](docs/AccessTokensApi.md#removeAuthTokenUsingDELETE1) | **DELETE** /access-tokens/{id} | Remove a access token
*ApiManagerPortal.AccessTokensApi* | [**retrieveAuthTokenChangeLogUsingGET1**](docs/AccessTokensApi.md#retrieveAuthTokenChangeLogUsingGET1) | **GET** /access-tokens/{id}/changelog | Retrive changelog per access token id
*ApiManagerPortal.AccessTokensApi* | [**retriveAuthTokenByCodeUsingGET1**](docs/AccessTokensApi.md#retriveAuthTokenByCodeUsingGET1) | **GET** /access-tokens/{code} | Find access token by code
*ApiManagerPortal.AccessTokensApi* | [**retriveAuthTokenUsingGET1**](docs/AccessTokensApi.md#retriveAuthTokenUsingGET1) | **GET** /access-tokens | Find access token list by filters
*ApiManagerPortal.AccessTokensApi* | [**saveAuthTokenUsingPOST1**](docs/AccessTokensApi.md#saveAuthTokenUsingPOST1) | **POST** /access-tokens | Create a new access token
*ApiManagerPortal.AccessTokensApi* | [**updateAuthTokenUsingPUT1**](docs/AccessTokensApi.md#updateAuthTokenUsingPUT1) | **PUT** /access-tokens/{id} | Update a access token
*ApiManagerPortal.AccessTokensApi* | [**validatePartialAccessTokenUsingPOST1**](docs/AccessTokensApi.md#validatePartialAccessTokenUsingPOST1) | **POST** /access-tokens/validate | Validate partial access token
*ApiManagerPortal.AppsApi* | [**countUsingGET11**](docs/AppsApi.md#countUsingGET11) | **GET** /apps/count | Retrieve App total
*ApiManagerPortal.AppsApi* | [**deleteAppTokenUsingDELETE1**](docs/AppsApi.md#deleteAppTokenUsingDELETE1) | **DELETE** /apps/{code} | Delete a app
*ApiManagerPortal.AppsApi* | [**getAppTokenByAppGalleryUsingGET1**](docs/AppsApi.md#getAppTokenByAppGalleryUsingGET1) | **GET** /apps/gallery | Return all apps
*ApiManagerPortal.AppsApi* | [**getAppTokenByFilterUsingGET1**](docs/AppsApi.md#getAppTokenByFilterUsingGET1) | **GET** /apps | Find app list by filters
*ApiManagerPortal.AppsApi* | [**getAppTokenByIdUsingGET1**](docs/AppsApi.md#getAppTokenByIdUsingGET1) | **GET** /apps/{code} | Find app by code
*ApiManagerPortal.AppsApi* | [**getAppTokenChangeLogUsingGET1**](docs/AppsApi.md#getAppTokenChangeLogUsingGET1) | **GET** /apps/{code}/changelog | Retrive changelog per app id
*ApiManagerPortal.AppsApi* | [**postAppTokenUsingPOST1**](docs/AppsApi.md#postAppTokenUsingPOST1) | **POST** /apps | Create a new app
*ApiManagerPortal.AppsApi* | [**putAppTokenUsingPUT1**](docs/AppsApi.md#putAppTokenUsingPUT1) | **PUT** /apps/{id} | Update a app
*ApiManagerPortal.AppsApi* | [**validatePartialAppUsingPOST1**](docs/AppsApi.md#validatePartialAppUsingPOST1) | **POST** /apps/validate | Validate partial app
*ApiManagerPortal.CallsApi* | [**retrieveCallByIdUsingGET1**](docs/CallsApi.md#retrieveCallByIdUsingGET1) | **GET** /calls/{id} | Retrive call by id
*ApiManagerPortal.CallsApi* | [**retrieveCallsWithFiltersUsingGET1**](docs/CallsApi.md#retrieveCallsWithFiltersUsingGET1) | **GET** /calls | Retrive calls with filters
*ApiManagerPortal.CallsApi* | [**retrieveTotalCallsByDateUsingGET1**](docs/CallsApi.md#retrieveTotalCallsByDateUsingGET1) | **GET** /calls/count/{date} | Retrive calls total by date
*ApiManagerPortal.DevelopersApi* | [**countUsingGET12**](docs/DevelopersApi.md#countUsingGET12) | **GET** /developers/count | Retrieve developers total
*ApiManagerPortal.DevelopersApi* | [**createOrUpdateDeveloper1**](docs/DevelopersApi.md#createOrUpdateDeveloper1) | **PUT** /developers/{login} | Create or update developer
*ApiManagerPortal.DevelopersApi* | [**removeUserAccountUsingDELETE1**](docs/DevelopersApi.md#removeUserAccountUsingDELETE1) | **DELETE** /developers/{login} | Delete developer
*ApiManagerPortal.DevelopersApi* | [**retieveUserAccountUsingGET1**](docs/DevelopersApi.md#retieveUserAccountUsingGET1) | **GET** /developers/{login} | Retrive developer per Login
*ApiManagerPortal.DevelopersApi* | [**retrieveAccountChangeLogUsingGET1**](docs/DevelopersApi.md#retrieveAccountChangeLogUsingGET1) | **GET** /developers/{username}/changelog | Retrive audit developer per username
*ApiManagerPortal.DevelopersApi* | [**retrieveUserAccountsUsingGET1**](docs/DevelopersApi.md#retrieveUserAccountsUsingGET1) | **GET** /developers | Retrive developers
*ApiManagerPortal.MetricsApi* | [**findHealthUsingGET1**](docs/MetricsApi.md#findHealthUsingGET1) | **GET** /metrics/health | Find Health
*ApiManagerPortal.MetricsApi* | [**findTopAccessTokensUsingGET1**](docs/MetricsApi.md#findTopAccessTokensUsingGET1) | **GET** /metrics/top-access-tokens/{howMany} | Find top access token
*ApiManagerPortal.MetricsApi* | [**findTopAppsUsingGET1**](docs/MetricsApi.md#findTopAppsUsingGET1) | **GET** /metrics/top-apps/{howMany} | Find top apps
*ApiManagerPortal.MetricsApi* | [**getAccessTokensByMonthUsingGET1**](docs/MetricsApi.md#getAccessTokensByMonthUsingGET1) | **GET** /metrics/access-tokens | Find access token consolited by month
*ApiManagerPortal.MetricsApi* | [**getAppsByMonthUsingGET1**](docs/MetricsApi.md#getAppsByMonthUsingGET1) | **GET** /metrics/apps | Find apps consolited by month
*ApiManagerPortal.MetricsApi* | [**getCacheLatencyUsingGET1**](docs/MetricsApi.md#getCacheLatencyUsingGET1) | **GET** /metrics/cache/latency | Find cache latency
*ApiManagerPortal.MetricsApi* | [**getCacheSizeUsingGET1**](docs/MetricsApi.md#getCacheSizeUsingGET1) | **GET** /metrics/cache/size | Retrive cache size
*ApiManagerPortal.MetricsApi* | [**getCacheUsingGET1**](docs/MetricsApi.md#getCacheUsingGET1) | **GET** /metrics/cache | Find cache
*ApiManagerPortal.MetricsApi* | [**getCallsByMonthUsingGET1**](docs/MetricsApi.md#getCallsByMonthUsingGET1) | **GET** /metrics/calls | Find calls by month
*ApiManagerPortal.MetricsApi* | [**getLatencyByMonthUsingGET1**](docs/MetricsApi.md#getLatencyByMonthUsingGET1) | **GET** /metrics/latency | Find latency by month
*ApiManagerPortal.MetricsApi* | [**getStatusErrorUsingGET1**](docs/MetricsApi.md#getStatusErrorUsingGET1) | **GET** /metrics/statusError | Retrive Status Error
*ApiManagerPortal.PlansApi* | [**clonePlanUsingPOST1**](docs/PlansApi.md#clonePlanUsingPOST1) | **POST** /plans/{id}/clone | Clone a plan
*ApiManagerPortal.PlansApi* | [**countUsingGET13**](docs/PlansApi.md#countUsingGET13) | **GET** /plans/count | Retrieve plan total
*ApiManagerPortal.PlansApi* | [**deletePlanUsingDELETE1**](docs/PlansApi.md#deletePlanUsingDELETE1) | **DELETE** /plans/{id} | Delete a plan
*ApiManagerPortal.PlansApi* | [**getPlanChangeLogUsingGET3**](docs/PlansApi.md#getPlanChangeLogUsingGET3) | **GET** /plans/{id}/changelog | Retrive changelog per plan id
*ApiManagerPortal.PlansApi* | [**getPlanDefaultByApiUsingGET1**](docs/PlansApi.md#getPlanDefaultByApiUsingGET1) | **GET** /plans/{id}/defaultPlan | Find default plan by api id
*ApiManagerPortal.PlansApi* | [**getPlanUsingGET2**](docs/PlansApi.md#getPlanUsingGET2) | **GET** /plans/{id} | Find plan by id
*ApiManagerPortal.PlansApi* | [**getPlanUsingGET3**](docs/PlansApi.md#getPlanUsingGET3) | **GET** /plans | Return all plan
*ApiManagerPortal.PlansApi* | [**postPlanUsingPOST1**](docs/PlansApi.md#postPlanUsingPOST1) | **POST** /plans | Create a new plan
*ApiManagerPortal.PlansApi* | [**putPlanUsingPUT1**](docs/PlansApi.md#putPlanUsingPUT1) | **PUT** /plans/{id} | Update a plan
*ApiManagerPortal.PlansApi* | [**validatePartialPlanUsingPOST1**](docs/PlansApi.md#validatePartialPlanUsingPOST1) | **POST** /plans/validate | Validate partial a plan


## Documentation for Models

 - [ApiManagerPortal.API](docs/API.md)
 - [ApiManagerPortal.APIComponentSimpleBean](docs/APIComponentSimpleBean.md)
 - [ApiManagerPortal.APICreateBean](docs/APICreateBean.md)
 - [ApiManagerPortal.APIResponse](docs/APIResponse.md)
 - [ApiManagerPortal.APISimpleBean](docs/APISimpleBean.md)
 - [ApiManagerPortal.APIUserBean](docs/APIUserBean.md)
 - [ApiManagerPortal.APP](docs/APP.md)
 - [ApiManagerPortal.APPResponse](docs/APPResponse.md)
 - [ApiManagerPortal.AccessToken](docs/AccessToken.md)
 - [ApiManagerPortal.AccessTokenResponse](docs/AccessTokenResponse.md)
 - [ApiManagerPortal.AppTokenSimpleBean](docs/AppTokenSimpleBean.md)
 - [ApiManagerPortal.AuthTokenSimpleBean](docs/AuthTokenSimpleBean.md)
 - [ApiManagerPortal.CacheMetric](docs/CacheMetric.md)
 - [ApiManagerPortal.CacheMetricItem](docs/CacheMetricItem.md)
 - [ApiManagerPortal.Call](docs/Call.md)
 - [ApiManagerPortal.CallResponse](docs/CallResponse.md)
 - [ApiManagerPortal.CallsMetric](docs/CallsMetric.md)
 - [ApiManagerPortal.ChangeLog](docs/ChangeLog.md)
 - [ApiManagerPortal.ChangeLogBean](docs/ChangeLogBean.md)
 - [ApiManagerPortal.DeploymentBean](docs/DeploymentBean.md)
 - [ApiManagerPortal.DeploymentScheduleBean](docs/DeploymentScheduleBean.md)
 - [ApiManagerPortal.DeploymentSimpleBean](docs/DeploymentSimpleBean.md)
 - [ApiManagerPortal.Developer](docs/Developer.md)
 - [ApiManagerPortal.EnvironmentSimpleBean](docs/EnvironmentSimpleBean.md)
 - [ApiManagerPortal.EvironmentUserBean](docs/EvironmentUserBean.md)
 - [ApiManagerPortal.InterceptorBean](docs/InterceptorBean.md)
 - [ApiManagerPortal.InterceptorReferenceBean](docs/InterceptorReferenceBean.md)
 - [ApiManagerPortal.LatencyMetric](docs/LatencyMetric.md)
 - [ApiManagerPortal.OperationBean](docs/OperationBean.md)
 - [ApiManagerPortal.OperationHealth](docs/OperationHealth.md)
 - [ApiManagerPortal.OperationMetric](docs/OperationMetric.md)
 - [ApiManagerPortal.OperationUrlBean](docs/OperationUrlBean.md)
 - [ApiManagerPortal.PlanResponse](docs/PlanResponse.md)
 - [ApiManagerPortal.PlanSimpleBean](docs/PlanSimpleBean.md)
 - [ApiManagerPortal.ResourceBean](docs/ResourceBean.md)
 - [ApiManagerPortal.ResponseEntity](docs/ResponseEntity.md)
 - [ApiManagerPortal.RevisionBean](docs/RevisionBean.md)
 - [ApiManagerPortal.RevisionSimpleBean](docs/RevisionSimpleBean.md)
 - [ApiManagerPortal.RoleBean](docs/RoleBean.md)
 - [ApiManagerPortal.RolePermissionBean](docs/RolePermissionBean.md)
 - [ApiManagerPortal.TeamBean](docs/TeamBean.md)
 - [ApiManagerPortal.TokensMetric](docs/TokensMetric.md)
 - [ApiManagerPortal.TopAccessToken](docs/TopAccessToken.md)
 - [ApiManagerPortal.TopApp](docs/TopApp.md)
 - [ApiManagerPortal.UserBean](docs/UserBean.md)


## Documentation for Authorization

 All endpoints do not require authorization.

