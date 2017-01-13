require 'rails_helper'

describe Ipsum do
  it { should validate_presence_of :theme }
  it { should validate_presence_of :motto }
  it { should validate_presence_of :phrases }
end
