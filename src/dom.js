import $ from 'jquery'
import ajax from './ajax'

const makeNewElement = () =>
  $('<div>I\'m an element</div>')

$('#add-div').on('click', (evt) => {
  $('#container').append(makeNewElement())
})

// With an AJAX request!
$('#make-request').on('click', (evt) => {
  ajax('/some/endpoint.json')
    .then(() => {
      $('#container').append(makeNewElement())
    })
})
