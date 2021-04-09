import { getFormFields } from './get-form-fields.js'
import { secretInvited } from '../data/secret-invited.js'

$('.secret-bridal-party').hide()
$('.modal-form').on('submit', ((event) => {
  event.preventDefault()
  console.log(event.target)
  const data = getFormFields(event.target)
  console.log(data)
  const name = secretInvited.filter(invite => invite === data.secret.code)
  console.log(name)

  if (data.secret.code === "pumpkinmuffin" || data.secret.code === name[0] ) {
    console.log("it worked")
    $('.secret-bridal-party').show()
    $('#bridal-modal').modal('hide')
    $('#secret-modal').hide()
    $('.bridal-party').css('background-color', '#fdf0d5')

  } else {
    $('.modal-form').trigger("reset")
    $('.modal-body').append('<p>Please try again</p>')

  }
}))
