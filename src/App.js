// import logo from './logo.svg';
// import './App.css';
import * as script from './assets/js/script.js'
import * as locale from './assets/js/localeManager.js'
let config = require('./config.json') 


function Header(props){
  return (
    <section id="header">
      <h2 id="header_date">{script.date()}</h2>
      <h1 id="header_greet">{script.greet()}</h1>
    </section>
  );
}


function App() {
  return (
    <div>
      <main id="container" class="fade">
        <section id="search">
          <input name="keywords" type="text" id="keywords" size="50" spellcheck="false" autofocus="true" onkeydown="handleKeyPress(event)"></input>
        </section>

        <Header />

        <section id="apps">
            <h3>{locale.get('mainCategories', 'applications')}</h3>
            <div id="apps_loop">
                
            </div>
        </section>


        <section id="links">
            <h3>{locale.get('mainCategories', 'bookmarks')}</h3>
            <div id="links_loop">
                
            </div>
        </section>
        

      </main>
    </div>

    
  );
}

export default App;
