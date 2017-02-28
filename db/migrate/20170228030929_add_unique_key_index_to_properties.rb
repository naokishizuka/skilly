class AddUniqueKeyIndexToProperties < ActiveRecord::Migration
  def change
    add_index :properties, [:skill_id, :user_id], unique: true
  end
end
