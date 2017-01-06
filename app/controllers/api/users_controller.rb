class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(@user)
      render :show
    else
      render json: @user.errors, response: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end