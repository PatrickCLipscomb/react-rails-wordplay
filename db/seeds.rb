# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Ipsum.all.each { |ip| ip.destroy }

Ipsum.create!(theme: "TrumpSum", phrases: ["Donald Trump", "little hands", "Wall Street", "dump", "Manhattan", "lorem", "hairpiece", "The Apprentice", "build the wall", "Make America Great Again", "Ivanka", "diet coke", "ban", "spray-can orange", "rich", "eeeyuuuuge", "lawyers", "Trump Steaks", "taco bowl", "pizza with a fork", "small loan", "million dollars", "liquidate", "you\'re fired", "winning", "Crooked Hillary", "beautiful", "apocalyptic", "tremendous", "Lyin\' Ted", "Little Marco"], motto: 'Build your own wall of filler text', color: 'rgb(255,83,60)', accent: 'rgb(252, 236, 190)', image: '');

Ipsum.create!(theme: 'YeezIpsum', phrases: ["Kanye West", "Yeezus", "the life of Pablo", "create art", "dark twisted fantasy", "my beautiful", "Kardashians", "Kim", "watch the throne", "emotional over fonts", "Wicked is my story", "fur pillows", "hobo couture", "leatherpants", "mic drop", "king", "lamborgini mercy", "bank-rupt", "motorcycle", "Imma let you finish"], motto: 'The Ipsum of a Generation', color: 'rgb(252,55,104)', accent: 'rgb(255, 252, 77)', image: '');

Ipsum.create!(theme: 'Bi-Winning-Ipsum', phrases: ["Charlie Sheen", "winning", "I am on a drug called Charlie Sheen", "rock star from Mars", "rolling out Magic", "bro", "sober", "dying is for fools", "I\'m not dangerous insane", "boom", "two donuts and a Rockstar", "Vatican assassin warlocks", "seven gram rocks", "party", "partying", "drinking", "breakfast", "heavy drinking", "bi-winning", "duh", "I\'m still alive", "breakfast martini"], motto: 'Boom. Winning Ipsum. Duh!', color: 'rgb(44,72,151)', accent: 'rgb(243, 206, 178)', image: '');
