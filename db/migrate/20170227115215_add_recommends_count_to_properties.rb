class AddRecommendsCountToProperties < ActiveRecord::Migration
  def change
    add_column :properties, :recommends_count, :integer, null: false, default: 0
  end
end
