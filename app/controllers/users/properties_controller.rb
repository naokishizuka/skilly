class Users::PropertiesController < ApplicationController
  before_action :set_user

  def index
    @properties = @user.properties.order(recommends_count: :desc).includes(:recommenders, :skill)
    respond_to do |format|
      format.html
      format.json { render json: @properties.to_json(include: [:skill, :user, :recommenders]) }
    end
  end

  def create
    if skill = Skill.find_by(name: params[:name])
      @user.skills << skill
    else
      @user.skills.create(name: params[:name])
    end
    render nothing: true, status: 200
  end

  def destroy
    @user.properties.find(params[:id]).destroy
    render nothing: true, status: 200
  end

  private

  def set_user
    @user = User.find(params[:user_id])
  end
end