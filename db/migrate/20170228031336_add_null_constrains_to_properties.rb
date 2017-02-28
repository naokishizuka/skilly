class AddNullConstrainsToProperties < ActiveRecord::Migration
  def change
    change_column :properties, :user_id, :integer, null: false
    change_column :properties, :skill_id, :integer, null: false
  end
end
