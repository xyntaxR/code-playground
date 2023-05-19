class SessionsController < ApplicationController
    def new
        if session[:user_id]
            redirect_to '/lessons'
        end
    end

    def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            redirect_to '/lessons'
        else 
            flash[:danger] = ['Invalid username/password combination']
            redirect_to '/signin'
        end
    end

    def signout
        session[:user_id] = nil
        redirect_to '/'
    end    
end
