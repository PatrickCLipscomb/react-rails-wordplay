#  Ego Ipsum

Don't bother with broken Latin babble when you can get filler text inspired by some of the best purveyors of spew out there in the game right now. Or maybe you don't care to stroke anyone's ego but your own?  Lets make this about YOU. Check out the create your own Ipsum functionality and see what you can create...

Find *Ego Ipsum* live on Heroku.  
```
https://railswordplay.herokuapp.com/
```

## Technologies Used

* **Application**: *Ruby on Rails 5, ReactJS*<br>
* **Testing**: *Rspec, Capybara*<br>
* **Database**: *Postgres, ActiveRecord*

Installation
------------

Install *Ego Ipsum* by cloning the repository.  
```
$ git clone https://github.com/PatrickCLipscomb/react-rails-wordplay
```

Check to make sure ruby and rails are installed on your machine.  
```
$ ruby -v
$ rails -v
```
If they are not installed, please follow instructions [here](http://guides.rubyonrails.org/getting_started.html#installing-rails) to install ruby on rails.

Install required gems:
```
$ bundle install
```

Run Postgres:
```
$ postgres
```

Navigate to project file and setup database:
```
$ rake db: setup
```

Start the Rails webserver:
```
$ rails server
```

Navigate to `localhost:3000` in your browser of choice.

License
-------
_This software is licensed under the MIT license._<br>
Copyright (c) 2016 **Patrick Lipscomb**
