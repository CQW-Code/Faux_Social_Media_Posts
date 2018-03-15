class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.string :avatar
      t.string :title
      t.string :comment
      t.date :date

      t.timestamps
    end
  end
end
