Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # Signup Controller
      get 'signup/create'

      resources :posts
    end
  end
end
