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
      $('.likes-count').text(data.likes)
    })
  })
  $('#btn-delete').on('click', function (e) {
    e.preventDefault()
    let remove = confirm('Are you sure you want to delete this image?')
    if (remove) {
      let imgId = $(this).data('id')
      $.ajax({
        url: `/images/${imgId}`,
        type: 'DELETE'
      }).done((result) => {
        if (result) {
          $(this).removeClass('btn-danger').addClass('btn-success')
          $(this).find('i').removeClass('fa-times').addClass('fa-check')
          $(this).append('<span> Deleted!</span>')
        }
      })
    }
  })
  // $('#btn-delete').on('click', (event) => {
  //   event.preventDefault()
  //   let $this = $(this),
  //     // remove = confirm('Are you sure you want to delete this image?')
  //     remove = false
  //   var a = $(this).data('id')
  //   console.log($this)
  //   console.log(this)
  //   console.log(a)

  //   if (remove) {
  //     let imgId = $(this).data('id')
  //     console.log($(this))
  //     console.log(this)
  //     console.log(imgId)
  //     return
  //     $.ajax({
  //       url: `/images/${imgId}`,
  //       type: 'DELETE'
  //     }).done((result) => {
  //       if (result) {
  //         $this.removeClass('btn-danger').addClass('btn-success')
  //         $this.find('i').removeClass('fa-times').addClass('fa-check')
  //         $this.append('<span> Deleted!</span>')
  //       }
  //     })
  //   }
  // })
})