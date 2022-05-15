// import logo from './logo.svg';
// import './App.css';
import * as script from './assets/js/script.js'
import * as locale from './assets/js/localeManager.js'
import * as appFactory from './components/application.js'
import * as bookmarkFactory from './components/bookmarks.js'
import * as config from './assets/js/configManager.js'
import { Icon } from '@iconify/react';


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
                {appFactory.buildApps()}
            </div>
        </section>


        <section id="links">
            <h3>{locale.get('mainCategories', 'bookmarks')}</h3>
            <div id="links_loop">
                {bookmarkFactory.buildBookmarks()}
            </div>
        </section>
        

      </main>

      <div id="modal_init">
        <a class="btn" href="#modal">
            <Icon className="icon" icon="mdi-xbox-controller-menu"/>
        </a>
      </div>
    </div>

    
  );
}

export default App;
