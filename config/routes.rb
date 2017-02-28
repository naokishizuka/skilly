Rails.application.routes.draw do
  devise_for :users
  resources :skills, only: [:show]
  resource :current_user, only: [:show]
  resources :users, only: [:show] do
    scope module: 'users' do
      resources :skills, only: [] do
       collection{ get 'search' }
      end
      resources :properties, only: [:index, :create, :destroy] do
        scope module: 'properties' do
          resources :recommends, only: [:create]
          resource :recommend, only: [:destroy]
        end
      end
    end
  end
end
