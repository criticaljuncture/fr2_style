class StaticPagesController < ApplicationController
  def show
    if params[:local_only] == "1"
      render params[:id], layout: 'local_styles_only'
    else
      render params[:id]
    end
  end
end
