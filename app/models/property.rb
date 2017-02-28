class Property < ActiveRecord::Base
  belongs_to :user
  belongs_to :skill
  has_many :recommends
  has_many :recommenders, through: :recommends, source: :recommender

  validates :user_id, uniqueness: { scope: [:skill_id] }
end
