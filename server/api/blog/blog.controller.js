/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/blogs              ->  index
 * POST    /api/blogs              ->  create
 * GET     /api/blogs/:id          ->  show
 * PUT     /api/blogs/:id          ->  update
 * DELETE  /api/blogs/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Blog from './blog.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  console.log("Entity:" + entity)
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Blogs
export function index(req, res) {
    /*res.status(200).send({testEntries: [{title: "First Entry", content:"Hurray!"},
    {title: "Update", content:"Getting better at this :D"},
    {title: "Away", content:"Heading out for a trip"},
    {title: "Testing Special Characters", content:"line1\nline2\nline3\n"}]});
    console.log("responded");*/
    
  /*return Blog.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res)); */
    
    return Blog.find().sort({_id:-1}).limit(3).exec( function(err, blogEntries) {
        console.log("blogEntries: " + blogEntries);
        res.status(200).send({testEntries: blogEntries})
    });
    /*.exec()
    .then(entity => {
        console.log("Entity: " + typeof entity)
      res.status(200).send(entity);
    })
    .catch(handleError(res));*/
}

// Gets a single Blog from the DB
// Gets a list of Blogs
export function singleEntry(req, res) {
    /*res.status(200).send({testEntries: [{title: "First Entry", content:"Hurray!"},
    {title: "Update", content:"Getting better at this :D"},
    {title: "Away", content:"Heading out for a trip"},
    {title: "Testing Special Characters", content:"line1\nline2\nline3\n"}]});
    console.log("responded");*/
    
  /*return Blog.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res)); */
    
    return Blog.findOne({_id: req.body.id}).exec( function(err, blogEntry) {
      console.log("ID:", req.id);
        console.log("SINGLE ENTRY: " + blogEntry);
        res.status(200).send({singleEntry: blogEntry})
    });
    /*.exec()
    .then(entity => {
        console.log("Entity: " + typeof entity)
      res.status(200).send(entity);
    })
    .catch(handleError(res));*/
}

// Creates a new Blog in the DB
export function create(req, res) {
  return Blog.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Blog in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Blog.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Blog from the DB
export function destroy(req, res) {
  return Blog.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
