import React from 'react';
import styles from './Amenities.css';
import AmenitiesModal from './AmenitiesModal';
import SortedAmenitiesList from './SortedAmenitiesList';

const Amenities = () => (
  <>
    <div className={styles.amentitesTitleStyling}>
      Amenities
    </div>
    <AmenitiesModal>
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
                <span className={styles.ammenitiesModalTitle}>Ammenities</span>
              </div>
              <SortedAmenitiesList />
            </>,
          ) }
        </>
      )}
    </AmenitiesModal>
    <div>
      bottom divider here
    </div>
  </>
);

export default Amenities;
