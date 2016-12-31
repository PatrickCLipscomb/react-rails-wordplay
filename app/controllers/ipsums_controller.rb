class IpsumsController < ApplicationController
  def index
    @ipsums = Ipsum.all
  end
  def create
    @ipsum = Ipsum.new
    @ipsum.update(theme: params[:ipsum][:theme], motto: params[:ipsum][:motto], image: params[:ipsum][:image], color: params[:ipsum][:color], accent: params[:ipsum][:accent], phrases: params[:ipsum][:phrases])
    respond_to do |format|
      format.json {render json: @ipsum}
    end
  end
  private
  def ipsum_params
    params.require(:ipsum).permit(:theme, :motto, :phrases[], :color, :accent, :image)
  end
end
