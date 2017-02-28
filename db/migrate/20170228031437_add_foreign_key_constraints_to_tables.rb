class AddForeignKeyConstraintsToTables < ActiveRecord::Migration
  def change
    add_foreign_key :properties, :users
    add_foreign_key :properties, :skills
    add_foreign_key :recommends, :properties
    add_foreign_key :recommends, :users
  end
end
