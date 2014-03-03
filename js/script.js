
$(function() {

  // register
  $('#registerForm').submit(function(e) {
    e.preventDefault();

    // get input values
    var username = $('#username').val();
    var password = $('#password').val();

    // create user
    var user = {
      _id: 'org.couchdb.user:' + username,
      name: username,
      roles: [],
      type: 'user',
      password: password
    };

    // make PUT request to CouchDB
    $.ajax({
      url: 'http://54.217.169.179:5984/_users/org.couchdb.user:' + username,
      type: 'PUT',
      data: JSON.stringify(user),
      contentType: 'application/json; charset=utf-8',
      xhrFields: {
        withCredentials: true
      }
    })
    .done(function(data) {
      console.log('done');
      console.log(data);
    })
    .fail(function(error) {
      console.log('fail');
      console.log(error);
    })

  });

  // login
  $('#loginForm').submit(function(e) {
    e.preventDefault();

    // get input values
    var username = $('#username').val();
    var password = $('#password').val();

    // make auth request to CouchDB
    $.ajax({
      url: 'http://54.217.169.179:5984/_session',
      type: 'POST',
      data: {
        name: username,
        password: password
      },
      xhrFields: {
        withCredentials: true
      }
    })
    .done(function(data) {
      console.log('done');
      console.log(data);
    })
    .fail(function(error) {
      console.log('fail');
      console.log(error);
    })

  });

  // insert documents
  $('#docsForm').submit(function(e) {
    e.preventDefault();

    // get content
    var content = $('#content').val();

    // create document in CouchDB
    $.ajax({
      url: 'http://54.217.169.179:5984/docs',
      type: 'POST',
      data: JSON.stringify({
        content: content
      }),
      contentType: 'application/json; charset=utf-8',
      xhrFields: {
        withCredentials: true
      }
    })
    .done(function(data) {
      console.log('done');
      console.log(data);
    })
    .fail(function(error) {
      console.log('fail');
      console.log(error);
    })

  });

  // logout
  $('#logout').click(function() {

    $.ajax({
      url: 'http://54.217.169.179:5984/_session',
      type: 'DELETE',
      xhrFields: {
        withCredentials: true
      }
    })
    .done(function(data) {
      console.log('done');
      console.log(data);
    })
    .fail(function(error) {
      console.log('fail');
      console.log(error);
    })

  });

  // get current session
  $('#session').click(function() {

    $.ajax({
      url: 'http://54.217.169.179:5984/_session',
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
    })
    .done(function(data) {
      console.log('done');
      console.log(data);
    })
    .fail(function(error) {
      console.log('fail');
      console.log(error);
    })

  });

});
