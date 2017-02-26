class Recommend < ActiveRecord::Base
  belongs_to :recommender, class_name: :User, foreign_key: :user_id
  belongs_to :property
end
