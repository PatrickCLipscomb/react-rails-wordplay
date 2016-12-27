class IpsumsController < ApplicationController
  def index
    @ipsums = Ipsum.all
  end
end
