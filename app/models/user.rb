class User < ApplicationRecord
    has_many :challenge_statistics, dependent: :destroy
    has_many :lesson_statistics, dependent: :destroy
    
    has_secure_password
    validates :username, presence:true, uniqueness: {case_sensitive: false}, length: {in: 4..15}
    validates :password, presence:true, length: {in: 6..12}
    validates :level, :score, presence:true
end
