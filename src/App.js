import React, { Component } from "react";
import FormOrder from "./components/FormOrder";
import Modal from "./components/Modal";

class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        {!showModal && (
          <button className="btn_open" type="button" onClick={this.toggleModal}>
            open the menu
          </button>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <FormOrder onClose={this.toggleModal} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
