class DashboardController < ApplicationController
    def index
        if session[:user_id]
            redirect_to '/lessons'
        end
    end

    def leaderboards
        if session[:user_id]
            @user = User.find(session[:user_id])
        end
        @users = User.all.order("score DESC")
    end
end
