Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  # Refresh Controller
  post 'refresh', to: 'refresh#create'

  # Signin Controller
  post 'signin', to: 'signin#create'
  delete 'sigin', to: 'signin#create'

  # Signup Controller
  post 'signup', to: 'signup#create'
end
