FactoryBot.define do
  factory :user do
    username { "MyString" }
    password_digest { "MyString" }
    level { 1 }
    score { 1 }
  end
end
