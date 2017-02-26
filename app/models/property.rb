class Property < ActiveRecord::Base
  belongs_to :user
  belongs_to :skill
  has_many :recommends
  has_many :recommenders, through: :recommends, source: :recommender
end
