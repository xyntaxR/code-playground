Rails.application.routes.draw do
  root 'dashboard#index'

  get 'leaderboards', to: 'dashboard#leaderboards'
  resources :dashboard
  
  get 'signup', to: 'users#new' 
  resources :users

  get 'signin', to: 'sessions#new'
  get 'signout', to: 'sessions#signout'
  resources :sessions
  
  resources :statistics
  
  patch 'update_stats/:id', to: 'lessons#update_stats'
  resources :lessons
end
