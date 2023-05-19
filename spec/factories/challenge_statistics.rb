FactoryBot.define do
  factory :challenge_statistic do
    user { nil }
    challenge { nil }
    status { 1 }
    answer_input { "MyString" }
  end
end
