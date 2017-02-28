class Skill < ActiveRecord::Base
  has_many :properties
  has_many :users, through: :properties
  validates :name, uniqueness: true
end
