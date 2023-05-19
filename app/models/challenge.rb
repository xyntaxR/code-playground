class Challenge < ApplicationRecord
  has_many :challenge_statistics
  belongs_to :lesson
  
  validates :content, :lesson_id, presence:true
end
