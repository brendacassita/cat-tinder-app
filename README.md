# Cat Tinder


# create RAILS app
## RAILS (using postgresl db)
```

$ rails _6.1.4.7_ new project-name -d postgresql --api
$ cd project-name
$ git add .
$ git commit -m 'init'
$ rails db:create (creates db)
$ rails s -p 3001 - open in browser
```

- add gems/third party libraries
Things you may want to add:

* Faker => fake, but real looking data

* pry-rails => helps debug

* devise-token-auth => auth on backend


- add to gemfile 
 -  devise_token_auth setup (backend)

```ruby
gem 'devise_token_auth'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem "pry-rails"
  gem "faker", :git => "https://github.com/stympy/faker.git", :branch => "master"
end
```
```
bundle
```
- create devise model
```
 rails g devise_token_auth:install User api/auth
```




- add extends in model - user.rb
```ruby
 extend Devise::Models
 ```
 

- add trackable 
```
rails g migration add_trackable_to_users
```
 ```ruby
 class AddTrackableToUsers < ActiveRecord::Migration[6.0]
  def change
      ## Trackable
      add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
  end
end
```
```
rails db:migrate
```
 
 # create REACT app
## REACT


```
yarn create react-app client
cd client
```


- add 3rd party libraries in Client
```
yarn add axios
yarn add react-router-dom@6
yarn add react-bootstrap bootstrap@5.1.3
```

- add PROXY to package.json:
```javascript
 "proxy": "http://localhost:3001",
```

### folder structure
```
$ mkdir src/providers
$ mkdir src/hooks
$ mkdir src/components
$ mkdir src/components/auth
$ mkdir src/components/shared
```
### React router basic setup
- add routes to index.js
- index js wrap with BrowserRouter
- create navbar



```javascript
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <h3>
    Page not found return
    <Link to="/"> Home</Link>
  </h3>
)

export default NoMatch;
```

- navbar
```javascript
import { Link } from "react-router-dom"

const NavBar = () =>{
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}
export default NavBar
```

-app.js
```javascript
import logo from './logo.svg';
import './App.css';
import Navbar from './components/shared/NavBar';
import { Routes, Route} from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NoMatch from './components/shared/NoMatch';

function App() {
  return (
    <div>
      <Navbar />
      <>
       <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/register' element={<Register />}/>
         <Route path='*' element={<NoMatch />}/>
       </Routes>
      </>
    </div>
  );
}

export default App;
```

-index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

### Auth setup (using a provider)
```
$ yarn add devise-axios
```
```javascript
import { initMiddleware } from 'devise-axios';

initMiddleware();
```