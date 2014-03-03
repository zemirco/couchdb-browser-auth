
`npm install` and then `grunt` to start a local server.

## CouchDB config

```js
[httpd]
enable_cors = true

[cors]
credentials = true
origins = http://localhost:3000

[couch_httpd_auth]
require_valid_user = false
```

## CouchDB view

You need a view in your database with `validate_doc_update` key.

```js
{
  "_id": "_design/anything",
  "validate_doc_update":
  "function(newDoc, oldDoc, userCtx, secObj) {
    if(!userCtx.name) {
      throw({forbidden: 'Please login.'})
    }
  }"
}
```
