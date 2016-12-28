class ChangePhrasesOnIpsums < ActiveRecord::Migration[5.0]
  def change
    remove_column :ipsums, :phrases, :string, array: true
    add_column :ipsums, :phrases, :string, array: true, default: []
  end
end
