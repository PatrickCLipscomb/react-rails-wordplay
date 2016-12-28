class AddAccentToIpsums < ActiveRecord::Migration[5.0]
  def change
    add_column :ipsums, :accent, :string
  end
end
