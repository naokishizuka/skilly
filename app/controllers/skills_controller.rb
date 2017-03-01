class SkillsController < ApplicationController
  def show
    @skill = Skill.find(params[:id])
    @properties = @skill.properties.includes(:user)
  end
end