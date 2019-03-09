$(function () {
  $('#post-comment').hide()
  $('#btn-comment').on('click', function (e) {
    e.preventDefault()
    $('#post-comment').show()
  })
  $('#btn-like').on('click', function (e) {
    e.preventDefault()
    let imgId = $(this).data('id')
    $.post('/images/' + imgId + '/like').done(function (data) {
      console.log(data, 'data')
      $('.likes-count').text(data.likes)
    })
  })
})