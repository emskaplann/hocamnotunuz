Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :profs, except: [:new, :edit, :delete]
    resources :prof_reviews, only: [:create, :update, :destroy, :show]
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show, :destroy]
  end

  
end