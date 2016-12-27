class AddPhrasesToIpsum < ActiveRecord::Migration[5.0]
  def change
    add_column :ipsums, :phrases, :string, array: true
  end
end
