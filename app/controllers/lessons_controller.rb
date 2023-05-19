class LessonsController < ApplicationController
    before_action :require_user
    layout 'lesson', only: [:show, :update_stats]

    def index
        @user = User.find(session[:user_id])
    end

    def show
        @user = User.find(session[:user_id])

        if @user.level < params[:id].to_i 
            redirect_to '/lessons'
        end
        
        @level = params[:id]
        @lesson = Lesson.find(params[:id])
        @challenges = Challenge.joins(:challenge_statistics).where(lesson_id: params[:id], challenge_statistics: { user_id: session[:user_id] }).select("*")
        @lesson_stat = LessonStatistic.find_by(user_id: session[:user_id], lesson_id: params[:id])        
    end 
    
    def update_stats
        lesson_stat = LessonStatistic.find_by(user_id: session[:user_id], lesson_id: params[:id])
        challenge_stat = ChallengeStatistic.find_by(user_id: session[:user_id], challenge_id: params[:challenge_id])

        if params[:test_result] == "Correct!"
            # count the cleared challenges in the level
            check_progress = ChallengeStatistic.joins(:challenge).where(user_id: session[:user_id], status: 1, challenges: { lesson_id:  params[:id] }).select("*").count
            # unlocks the next level when all the challenges are cleared
            if check_progress == 2
                user = User.find(session[:user_id])
                raise_level = user.level + 1
                user.update_column(:level, raise_level)
                lesson_stat.update_column(:status, 1)
            end
            # update user score
            if lesson_stat.chances > 0 && challenge_stat.status == 0;
                user = User.find(session[:user_id])
                new_score = user.score + 10
                user.update_column(:score, new_score)
                if new_score % 50 == 0
                    flash[:message] = true;
                else
                    flash[:message] = false;
                end
            end 
            # update challenge progress   
            challenge_stat.update_columns(answer_input: params[:answer_input], status: 1)
        else
            challenge_stat.update_column(:answer_input, params[:answer_input])
        end    
        # update user chances per level
        if lesson_stat.chances > 0 
            new_chance_count = lesson_stat.chances - 1
            lesson_stat.update_column(:chances, new_chance_count)
        end
        # fetch the necessary data that will be display in the partial view
        @level = params[:id]
        @lesson = Lesson.find(params[:id])
        @challenges = Challenge.joins(:challenge_statistics).where(lesson_id: params[:id], challenge_statistics: { user_id: session[:user_id] }).select("*")
        @lesson_stat = LessonStatistic.find_by(user_id: session[:user_id], lesson_id: params[:id])

        respond_to do |format|
            format.js
        end
        # redirect_to "/lessons/#{params[:id]}"
    end
    
    # def new 

    # end

    # def create
    #     lesson = Lesson.new(lesson_params)
    #     if lesson.save 
    #         flash[:success] = "Lesson added!"
    #     else
    #         flash[:danger] = lesson.errors.full_messages
    #     end
    #     redirect_to '/lessons/new'
    # end

    # def edit 
    #     @lesson = Lesson.find(params[:id])
    # end

    # def update 
    #     lesson = Lesson.find(params[:id])

    #     if lesson.update(lesson_params) 
    #         flash[:success] = "Lesson updated!"
    #     else
    #         flash[:danger] = lesson.errors.full_messages
    #     end
    #     redirect_to edit_lesson_path(params[:id])
    # end

    def require_user
        if session[:user_id].nil?
            redirect_to '/'
        end
    end

    private
    def lesson_params
        params.require(:lesson).permit(:title, :content, :code)
    end
end
