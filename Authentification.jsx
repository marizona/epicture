var url = 'https://api.imgur.com/oauth2/authorize?client_id=942e9d6c8e5bcbb&response_type=token'

var regex = /[?&]([^=#]+)=([^&#]*)/g,
  params = {},
  match;
while (match = regex.exec(url)) {
  params[match[1]] = match[2];
}
console.log(params)