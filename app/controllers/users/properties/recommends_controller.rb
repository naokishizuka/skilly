class Users::Properties::RecommendsController < ApplicationController
  before_action :set_property

  def create
    @property.recommenders << current_user
    render nothing: true, status: 200
  end

  def destroy
    current_user.recommends.find_by(property_id: @property.id).destroy
    render nothing: true, status: 200
  end

  private

  def set_property
    user = User.find(params[:user_id])
    @property = user.properties.find(params[:property_id])
  end
end