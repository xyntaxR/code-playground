class UsersController < ApplicationController
    layout 'user', only: [:show]

    def new
        if session[:user_id]
            redirect_to '/lessons'
        end
    end

    def show
        @user = User.find(session[:user_id])
        @badges = Badge.all
    end

    def create
        user = User.new(user_params)
        if user.save
            user = User.last 
            session[:user_id] = user.id
            # create user statistics 
            (1..30).each do |i|
                ChallengeStatistic.create(user_id: user.id, challenge_id: i, status: 0, answer_input: "")
            end
            (1..10).each do |j|
                LessonStatistic.create(user_id: user.id, lesson_id: j, status: 0, chances: 3)
            end

            redirect_to '/lessons'
        else
            flash[:danger] = user.errors.full_messages
            redirect_to '/signup'
        end
    end
    
    private
        def user_params
            params.require(:user).permit(:username, :password, :password_confirmation, :level, :score)
        end
end
