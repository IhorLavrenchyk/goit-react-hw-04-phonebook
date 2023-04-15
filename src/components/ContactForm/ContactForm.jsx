import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
    // console.log(name, value);

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form__label} htmlFor={this.nameInputId}>
          Name
          <input
            value={this.state.name}
            className={css.form__input}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id={this.nameInputId}
            placeholder="Olesia Sidolaka"
          />
        </label>
        <label className={css.form__label} htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            value={this.state.number}
            className={css.form__input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="906-02-02"
          />
        </label>
        <button className={css.input__button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
