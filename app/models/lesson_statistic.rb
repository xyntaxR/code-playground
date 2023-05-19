class LessonStatistic < ApplicationRecord
  belongs_to :user
  belongs_to :lesson

  validates :user_id, :lesson_id, :chances, :status, presence:true
end
