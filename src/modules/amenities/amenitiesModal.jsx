/* eslint-disable react/prop-types */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './amenitiesModal.css';


// Modal using reactDom.portal
class AmenitiesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // here we create an element to render the modal to;
    this.el = document.createElement('div');

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.makeModal = this.makeModal.bind(this);
    this.handleOutsideMouseClick = this.handleOutsideMouseClick.bind(this);
    this.backgroundRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideMouseClick);
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideMouseClick);
    document.body.removeChild(this.el);
  }

  handleOutsideMouseClick(e) {
    const { open } = this.state;
    if (!open) {
      return;
    }
    const root = this.backgroundRef.current;
    if (root.contains(e.target)) {
      return;
    }
    this.closeModal();
  }

  closeModal() {
    const { open } = this.state;
    if (!open) {
      return;
    }
    this.setState({ open: false });
  }

  openModal(e) {
    const { open } = this.state;
    if (open) {
      return;
    }
    // this prevents event bubbling closing the modal immediatly.
    if (e && e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation();
    }
    this.setState({ open: true });
  }

  makeModal(children) {
    const { open } = this.state;
    if (!open) {
      return null;
    }
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      <div className={styles.modalOverlay}>
        <div ref={this.backgroundRef} className={styles.modalBody}>
          <div className={styles.modalStyling}>
            {children}
          </div>
        </div>
      </div>,
      // A DOM element
      this.el,
    );
  }

  render() {
    const { children } = this.props;
    return children({
      modal: this.makeModal,
      openModal: this.openModal,
      closeModal: this.closeModal,
    });
  }
}

export default AmenitiesModal;
