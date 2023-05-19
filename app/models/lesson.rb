class Lesson < ApplicationRecord
    has_many :challenges
    has_many :lesson_statistics
    
    validates :title, :content, :code, presence:true
end
