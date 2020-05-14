import React from 'react';
import styles from './Amenities.css';
import Modal from './AmenitiesModal';

const Amenities = () => (
  <>
    <div className={styles.amentitesTitleStyling}>
      Amenities
    </div>
    <Modal>
      {({ modal, openModal, closeModal }) => (
        <>
          <button
            type="button"
            onClick={openModal}
          >
            Show all ## Amenities
          </button>
          { modal(
            <>
              <div>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.modalCloseButton}
                >
                  X
                </button>
              </div>
              <span>here </span>
            </>,
          ) }
        </>
      )}
    </Modal>
    <div>
      bottom divider here
    </div>
  </>
);

export default Amenities;
