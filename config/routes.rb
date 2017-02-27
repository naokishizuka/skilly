Rails.application.routes.draw do
  devise_for :users
  resource :current_user, only: [:show]
  resources :users, only: [:show] do
    scope module: 'users' do
      resources :properties, only: [:index, :create, :destroy]
    end
  end
end
