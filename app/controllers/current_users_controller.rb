class CurrentUsersController < ApplicationController
  def show
    respond_to do |format|
      format.html
      format.json { render json: current_user }
    end
  end
end