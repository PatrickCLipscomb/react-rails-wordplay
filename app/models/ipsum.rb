class Ipsum < ActiveRecord::Base
  validates :theme, :presence => true
  validates :motto, :presence => true
  validates :phrases, :presence => true
end
