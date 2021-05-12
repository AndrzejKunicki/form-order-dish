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

// setTimer = (timeLeft) => {
//   let timer = setInterval(() => {
//     let timeLeft = this.state.timeLeft - 1;
//     if (timeLeft === 0) {
//       clearInterval(timer);
//     }
//     this.setState({ timeLeft });
//   }, 1000);
//   return this.setState({ timeLeft, timer });
// };

// const mapStateToProps = (state) => ({
//   contacts: contactsSelectors.getAllcontacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (name, number) =>
//     dispatch(contactsOperations.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// <>
//   <form onSubmit={null}>
//     <label>
//       name
//       <input
//         type="text"
//         value={name}
//         name="name"
//         onChange={this.handleChangeName}
//       />
//     </label>
//     <label>
//       Dish type :
//       <select onChange={this.handleChangeDish}>
//         <option value="pizza">pizza</option>
//         <option value="soup">soup</option>
//         <option value="sandwich">sandwich</option>
//       </select>
//     </label>
//     {type === "pizza" && (
//       <>
//         <label>
//           slices
//           <input
//             type="number"
//             value={no_of_slices}
//             name="no_of_slices"
//             onChange={this.handleChangeOptions}
//             min="1"
//             max="8"
//             step="1"
//           />
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="8"
//             name="diameter"
//             checked={diameter === 8}
//             onChange={this.handleChangeOptions}
//           />{" "}
//           8
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="16"
//             name="diameter"
//             checked={diameter === 16}
//             onChange={this.handleChangeOptions}
//           />{" "}
//           16
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="26"
//             name="diameter"
//             checked={diameter === 26}
//             onChange={this.handleChangeOptions}
//           />{" "}
//           26
//         </label>

//         <label>
//           <input
//             type="radio"
//             value="30"
//             name="diameter"
//             checked={diameter === 30}
//             onChange={this.handleChangeOptions}
//           />
//           30
//         </label>
//         <label>
//           <input
//             type="radio"
//             value="38"
//             name="diameter"
//             checked={diameter === 38}
//             onChange={this.handleChangeOptions}
//           />{" "}
//           38
//         </label>
//         <p>Preparation time: {this.state.pizza.preparation_time}</p>
//       </>
//     )}

//     {type === "soup" && (
//       <>
//         <label>
//           1{" "}
//           <input
//             type="range"
//             min="1"
//             max="10"
//             name="spiciness_scale"
//             value={spiciness_scale}
//             onChange={this.handleChangeOptions}
//           />
//           10
//         </label>
//         <p>{spiciness_scale}</p>
//         <p>Preparation time: {this.state.soup.preparation_time}</p>
//       </>
//     )}

//     {type === "sandwich" && (
//       <>
//         <label>
//           slices
//           <input
//             type="number"
//             value={slices_of_bread}
//             name="slices_of_bread"
//             onChange={this.handleChangeOptions}
//             min="1"
//             max="8"
//             step="1"
//           />
//         </label>
//         <p>Preparation time: {this.state.sandwich.preparation_time}</p>
//       </>
//     )}

//     <button type="submit" onClick={this.handleSubmit}>
//       Make an order
//     </button>
//   </form>
//   <NotificationContainer />
// </>
