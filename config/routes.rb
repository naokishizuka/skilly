Rails.application.routes.draw do
  devise_for :users
  resource :current_user, only: [:show]
  resource :recommend, only: [:destroy]
  resources :users, only: [:show] do
    scope module: 'users' do
      resources :properties, only: [:index, :create, :destroy] do
        scope module: 'properties' do
          resources :recommends, only: [:create]
          resource :recommend, only: [:destroy]
        end
      end
    end
  end
end
