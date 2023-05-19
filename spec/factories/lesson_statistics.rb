FactoryBot.define do
  factory :lesson_statistic do
    user { nil }
    lesson { nil }
    chances { 1 }
    status { 1 }
  end
end
