class CreateChallenges < ActiveRecord::Migration[7.0]
  def change
    create_table :challenges do |t|
      t.text :content
      t.references :lesson, null: false, foreign_key: true

      t.timestamps
    end
  end
end
