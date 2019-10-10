const buildMessage = () => {

  // set bindings to form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // create object with form values
  let msg = {
    name: name,
    email: email,
    message: message
  };

  // push message to array
  messages.push(msg);

  // clear form input
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  console.log(messages);

}
