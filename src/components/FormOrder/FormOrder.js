import React, { Component } from "react";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./FormOrder.scss";

const initialState = {
  name: "",
  type: "pizza",
  pizza: {
    no_of_slices: 1,
    diameter: 8,
    preparation_time: "00:20:00",
  },
  soup: {
    spiciness_scale: 1,
    preparation_time: "00:10:00",
  },
  sandwich: { slices_of_bread: 1, preparation_time: "00:05:00" },
};

class FormOrder extends Component {
  state = {
    name: "",
    type: "pizza",
    pizza: {
      no_of_slices: 1,
      diameter: 8,
      preparation_time: "00:20:00",
    },
    soup: {
      spiciness_scale: 1,
      preparation_time: "00:10:00",
    },
    sandwich: { slices_of_bread: 1, preparation_time: "00:05:00" },
  };

  handleChangeName = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleChangeDish = (e) => {
    const { value } = e.currentTarget;
    this.setState({ type: value });
  };

  handleChangeOptions = (e) => {
    const { name, value } = e.currentTarget;
    const { type } = this.state;

    this.setState((prevState) => ({
      [type]: { ...prevState[type], [name]: Number(value) },
    }));
  };

  createNotification = (type) => {
    switch (type) {
      case "info":
        NotificationManager.info("All fields should be required");
        break;
      case "success":
        NotificationManager.success("Thank you for your order");
        break;
      case "warning":
        NotificationManager.warning(
          "you can choose from 1 to 8",
          "Please choose correct quantity of slices",
          3000
        );
        break;
      case "error":
        NotificationManager.error(
          "Sorry, something went wrong, please try again later"
        );
        break;
      default:
        return;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, preparation_time, type } = this.state;

    const credentials = {
      name,
      preparation_time,
      type,
      ...this.state[type],
    };

    if (name === "") {
      this.createNotification("info");
      return;
    }

    if (
      this.state.pizza.no_of_slices > 8 ||
      this.state.sandwich.no_of_slices > 8
    ) {
      this.createNotification("warning");
      return;
    }

    try {
      await axios.post(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        credentials
      );
      this.createNotification("success");
      setTimeout(() => {
        this.props.onClose();
      }, 1000);
    } catch (error) {
      this.createNotification("error");
      setTimeout(() => {
        this.props.onClose();
      }, 1000);
    }
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ ...initialState });
  };

  render() {
    const {
      name,
      type,
      pizza: { no_of_slices, diameter },
      soup: { spiciness_scale },
      sandwich: { slices_of_bread },
    } = this.state;

    return (
      <>
        <form className="form_order">
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              value={name}
              name="name"
              onChange={this.handleChangeName}
            />
          </label>
          <label className="label">
            Dish type:
            <select className="input" onChange={this.handleChangeDish}>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="sandwich">sandwich</option>
            </select>
          </label>
          {type === "pizza" && (
            <>
              <label className="label">
                Slices
                <input
                  className="input"
                  type="number"
                  value={no_of_slices}
                  name="no_of_slices"
                  onChange={this.handleChangeOptions}
                  min="1"
                  max="8"
                  step="1"
                />
              </label>
              <p className="label">Diameter:</p>
              <div className="diametr">
                <label>
                  <input
                    type="radio"
                    value="8"
                    name="diameter"
                    checked={diameter === 8}
                    onChange={this.handleChangeOptions}
                  />
                  8
                </label>
                <label>
                  <input
                    type="radio"
                    value="16"
                    name="diameter"
                    checked={diameter === 16}
                    onChange={this.handleChangeOptions}
                  />{" "}
                  16
                </label>
                <label>
                  <input
                    type="radio"
                    value="26"
                    name="diameter"
                    checked={diameter === 26}
                    onChange={this.handleChangeOptions}
                  />{" "}
                  26
                </label>

                <label>
                  <input
                    type="radio"
                    value="30"
                    name="diameter"
                    checked={diameter === 30}
                    onChange={this.handleChangeOptions}
                  />
                  30
                </label>
                <label>
                  <input
                    type="radio"
                    value="38"
                    name="diameter"
                    checked={diameter === 38}
                    onChange={this.handleChangeOptions}
                  />{" "}
                  38
                </label>
              </div>
              <p className="label">
                Preparation time: {this.state.pizza.preparation_time}
              </p>
            </>
          )}

          {type === "soup" && (
            <>
              <label className="label">
                <p>Spiciness scale: {spiciness_scale}</p> 1
                <input
                  type="range"
                  min="1"
                  max="10"
                  name="spiciness_scale"
                  value={spiciness_scale}
                  onChange={this.handleChangeOptions}
                  className="input_range"
                />
                10
              </label>
              <p className="label">
                Preparation time: {this.state.soup.preparation_time}
              </p>
            </>
          )}

          {type === "sandwich" && (
            <>
              <label className="label">
                Slices
                <input
                  className="input"
                  type="number"
                  value={slices_of_bread}
                  name="slices_of_bread"
                  onChange={this.handleChangeOptions}
                  min="1"
                  max="8"
                  step="1"
                />
              </label>
              <p className="label">
                Preparation time: {this.state.sandwich.preparation_time}
              </p>
            </>
          )}

          <button
            className="btn_submit"
            type="submit"
            onClick={this.handleSubmit}
          >
            Make an order
          </button>
        </form>
        <NotificationContainer />
      </>
    );
  }
}

export default FormOrder;
