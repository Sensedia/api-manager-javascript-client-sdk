# ApiManagerPortal.InterceptorBean

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** |  | [optional] 
**executionPoint** | **String** |  | [optional] 
**id** | **Number** |  | [optional] 
**idTemp** | **Number** |  | [optional] 
**operation** | [**APIComponentSimpleBean**](APIComponentSimpleBean.md) |  | [optional] 
**parent** | [**InterceptorReferenceBean**](InterceptorReferenceBean.md) |  | [optional] 
**parentType** | **String** |  | [optional] 
**planId** | **Number** |  | [optional] 
**position** | **Number** |  | [optional] 
**resource** | [**APIComponentSimpleBean**](APIComponentSimpleBean.md) |  | [optional] 
**revision** | [**APIComponentSimpleBean**](APIComponentSimpleBean.md) |  | [optional] 
**status** | **String** |  | [optional] 
**type** | **String** |  | [optional] 


<a name="ExecutionPointEnum"></a>
## Enum: ExecutionPointEnum


* `FIRST` (value: `"FIRST"`)

* `SECOND` (value: `"SECOND"`)

* `ANY` (value: `"ANY"`)




<a name="ParentTypeEnum"></a>
## Enum: ParentTypeEnum


* `REVISION` (value: `"REVISION"`)

* `RESOURCE` (value: `"RESOURCE"`)

* `OPERATION` (value: `"OPERATION"`)

* `PLAN` (value: `"PLAN"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `CHANGED_VALUE` (value: `"CHANGED_VALUE"`)

* `REFERENCE` (value: `"REFERENCE"`)

* `REMOVED` (value: `"REMOVED"`)




