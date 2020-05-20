Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  # Refresh Controller
  post 'refresh', 'refresh#create'

  # Signin Controller
  post 'signin', 'signin#create'
  delete 'sigin', 'signin#create'

  # Signup Controller
  post 'signup', 'signup#create'
end
