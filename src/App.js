import Modal, { useModal } from "./common/components/modal";
import Survey, { MODAL_ID } from "./components/survey";
import logo from "./logo.svg";
import "./App.css";

/* 'get site control' script set in public html */
// <script type="text/javascript" async src="//l.getsitecontrol.com/8w8qx1gw.js"></script>

/* or use with hook */
// useScript('//l.getsitecontrol.com/8w8qx1gw.js')

function App() {
  const { opened, onOpen, onClose } = useModal(MODAL_ID);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          style={{
            color: "#ffffff",
            fontSize: "40px",
            textDecoration: "underline",
          }}
          onClick={onOpen}
        >
          Open Own Modal{" "}
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href=" " className="App-link">
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href=" " className="App-link">
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href=" " className="App-link">
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href=" " className="App-link">
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href=" " className="App-link">
          Learn React
        </a>
      </header>

      <Modal
        className="modal"
        modalId={MODAL_ID}
        opened={opened}
        onClose={onClose}
      >
        <Survey onClose={onClose} />
      </Modal>
    </div>
  );
}

export default App;
