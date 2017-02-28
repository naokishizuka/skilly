class AddUniqueKeyIndexToRecommends < ActiveRecord::Migration
  def change
    add_index :recommends, [:user_id, :property_id], unique: true
  end
end
