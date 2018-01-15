import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  render() {
    return (
      <main className="loading">
        <div id="wrapper">
          <div id="bg"></div>
          <div id="main">

            <header id="header">
              <h1>Joshua Sadler</h1>
              <p> Coder * Gamer * Robot</p>
              <nav>
                <ul>

                  <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                  <li><a href="#" className="icon fa-linkedin"><span className="label">Linkedin</span></a></li>
                  <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
