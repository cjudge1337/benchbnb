class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render '/api/users/show'
    else
      render json: @user.errors, response: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      sign_out
      render 'api/users/show'
    else
      render json: {}, response: 404
    end
  end

end
