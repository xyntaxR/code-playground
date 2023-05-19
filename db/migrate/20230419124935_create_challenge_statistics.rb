class CreateChallengeStatistics < ActiveRecord::Migration[7.0]
  def change
    create_table :challenge_statistics do |t|
      t.references :user, null: false, foreign_key: true
      t.references :challenge, null: false, foreign_key: true
      t.integer :status
      t.string :answer_input

      t.timestamps
    end
  end
end
