class LocationsController < ApplicationController
  respond_to :json
  def new

  end
  def index
    respond_with Location.all
  end

  def welcome
    render :index
  end

  def login_with_google_plus

  redirect_to "https://accounts.google.com/o/oauth2/auth?"+
   "scope=email%20profile"+
   "&state=security_token%3D138r5719ru3e1%26url%3Dhttps://oa2cb.example.com/myHome"+
   "&redirect_uri=http://localhost:3000/google_reponse&"+
   "&response_type=code&"+
   "&client_id=1079336273978-d3gk9vja3f4lmodcqf93kad2gg9ojt96.apps.googleusercontent.com"+
   "&approval_prompt=force"

  end
end
