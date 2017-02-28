class Users::SkillsController < ApplicationController
  def search
    user = User.find(params[:user_id])
    if params[:keyword].present?
      @skills = Skill.where('name like ?', "%#{params[:keyword]}%").where.not(id: user.skills.ids)
    else
      @skills = Skill.none
    end
    respond_to do |format|
      format.json { render json: @skills.pluck(:name) }
    end
  end
end