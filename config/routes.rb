Fr2Style::Application.routes.draw do
  mount Stylin::Engine => '/styleguides' if Rails.env.development?

  resources :static_pages, only: :show
end
