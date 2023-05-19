class ChallengeStatistic < ApplicationRecord
  belongs_to :user
  belongs_to :challenge

  validates :user_id, :challenge_id, :status, presence:true 
end
