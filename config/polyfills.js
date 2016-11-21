/* eslint-disable */

const { jsdom } = require('jsdom')

const exposedProperties =
  [ 'window'
  , 'navigator'
  , 'document'
  , 'history'
  ]

global.document = jsdom('', { url: 'http://example.com' })

global.window = document.defaultView

Object
  .keys(document.defaultView)
  .forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property)
      global[property] = document.defaultView[property]
    }
  })

global.navigator =
  { userAgent: 'node.js'
  }

window.localStorage = window.sessionStorage =
  { getItem: function (key) { return this[key] }
  , setItem: function (key, value) { this[key] = value }
  , removeItem: function (key) { delete this[key] }
  }
