class CreateLessonStatistics < ActiveRecord::Migration[7.0]
  def change
    create_table :lesson_statistics do |t|
      t.references :user, null: false, foreign_key: true
      t.references :lesson, null: false, foreign_key: true
      t.integer :chances
      t.integer :status

      t.timestamps
    end
  end
end
