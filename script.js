import { h, render } from 'https://esm.sh/preact';
  import htm from 'https://esm.sh/htm';

  // Initialize htm with Preact
  const html = htm.bind(h);

  function App () {
    //let tg = window.Telegram.WebApp;
    //{tg.initDataUnsafe.user.username}
    return (<>
      <h1>Здоров, !</h1>
    </>)
  }

  render(html`<${App}/>`, document.body);
