import React from 'react';
import styles from './amenities.css';
// import { CategoryRow, AmenityRow } from './amenitiesModalRows';
import Modal from './amenitiesModal';

const Amenities = () => (
  <>
    <div>
      amenities
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
