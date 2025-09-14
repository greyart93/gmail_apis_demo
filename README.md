-> goto console.cloud.google.com
-> login with google account e.g: abc@gmai.com
-> create new project -> name: gmail-api-demo
-> open this proj

-> go to APIS & services
-> go to OAuth consent screen
-> choose external
-> fill app name, email: abc@gmail.com ,dev contact, leave scopes, leave opt info

-> go to credentials 
-> click on create credentials
-> click on oAuth client ID
-> select 'Web app'
-> fill redirect uri: https://developers.google.com.oauthplayground
-> click on create -> get client ID and client Secret -> ok

-> In OAuth 2.0 Client Ids section -> find ur app name and click on it
-> get client ID and client Secret   -- (1)

-> in new tab go to https://developers.google.com.oauthplayground
-> in step 1 section fill authorize API input: https://mail.google.com
-> click on setting icon -> click check on 'use your own Auth credentials' 
-> fill client id and secret by copy & paste from (1)
-> click on authorize button it will open authorize/ login page of google

->  login with the same email u filled in the email here 'abc@gmail.com' is used for both in google console form and here also
-> next it will show app is not verified click on more info on that page then there will link saying still to go that page 
-> next it will open the step 2 section    (don't worry about the error on right-side)
-> click on exchange code for tokens btn   (error is fixed)
-> get refresh token and access token      ( will use it in code)


-> download this repo goto this link: https://github.com/greyart93/gmail_apis_demo/archive/refs/heads/main.zip
-> open vs code
-> select this folder and open it
-> open terminal with ctrl + ~
-> type: npm i 
-> type: touch .env
-> in .env file put ur credentials as:
CLIENT_ID = '1234567899-sometexthere2numalso.apps.googleusercontent.com'
CLIENT_SECRET = 'PLACE-HolDERONly-PUTURoNe'
REDIRECT_URI = 'https://developers.google.com/oauthplayground' // copy this one same for all for this demo
REFRESH_TOKEN = '0//PlaCeHoDlErHeRe-AlSo-WheNY0uPusHURCReD-AlwAYszPuT-tHeMiNDoTeNvFilEAndAddItInDoTgiTIgnoReFilE'

-> change the emails array in app.js to ur emails which u want to sent emails to 
-> type: node app.js (runs the code)
-> check the mail inbox should see the mail in there
