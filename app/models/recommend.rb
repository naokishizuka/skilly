class Recommend < ActiveRecord::Base
  belongs_to :recommender, class_name: :User, foreign_key: :user_id
  belongs_to :property, counter_cache: true
end
