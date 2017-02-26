class CreateRecommends < ActiveRecord::Migration
  def change
    create_table :recommends do |t|
      t.integer :user_id, null: false
      t.integer :property_id, null: false

      t.timestamps null: false
    end
  end
end
