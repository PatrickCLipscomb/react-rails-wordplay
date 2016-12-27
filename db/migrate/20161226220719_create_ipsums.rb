class CreateIpsums < ActiveRecord::Migration[5.0]
  def change
    create_table :ipsums do |t|
      t.string :theme
      t.string :motto
      t.string :color
      t.string :image
    end
  end
end
