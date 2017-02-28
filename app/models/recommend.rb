class Recommend < ActiveRecord::Base
  belongs_to :recommender, class_name: :User, foreign_key: :user_id
  belongs_to :property, counter_cache: true
  validates :user_id, uniqueness: { scope: [:property_id] }
  validate :cant_recommend_my_property

  private

  def cant_recommend_my_property
    if recommender == property.user
      errors.add(:base, '自分のプロパティを推薦することはできません')
    end
  end
end
