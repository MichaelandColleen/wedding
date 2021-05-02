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

  if (data.secret.code === "thedudeabides" || data.secret.code === name[0]) {
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


UserRegisterSerializer(data = { 'email': 'test@test.com', 'password': 'tetete', 'password_confirmation': 'tetete' }):
email = CharField(max_length = 300, required = True)
password = CharField(required = True)
password_confirmation = CharField(required = True, write_only = True) user
UserSerializer(data = { 'email': 'test@test.com', 'password': 'tetete' }):
id = IntegerField(label = 'ID', read_only = True)
email = EmailField(max_length = 255, validators = [<UniqueValidator(queryset = User.objects.all()) >])
password = CharField(max_length = 128, min_length = 5, write_only = True)

UserRegisterSerializer(data = { 'email': 'lol@lol', 'password': 'lol', 'password_confirmation': 'lol' }):
email = CharField(max_length = 300, required = True)
password = CharField(required = True)
password_confirmation = CharField(required = True, write_only = True) user
UserSerializer(data = { 'email': 'lol@lol', 'password': 'lol' }):
id = IntegerField(label = 'ID', read_only = True)
email = EmailField(max_length = 255, validators = [<UniqueValidator(queryset = User.objects.all()) >])
password = CharField(max_length = 128, min_length = 5, write_only = True)
Bad Request: /sign-up
