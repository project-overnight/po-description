import React from 'react';
import styles from './Amenities.css';
import AmenitiesModal from './AmenitiesModal';
import SortedAmenitiesList from './SortedAmenitiesList';

const Amenities = () => (
  <>
    <div className={styles.amentitesTitleStyling}>
      Amenities
    </div>
    <div>4 things go here </div>
    <AmenitiesModal>
      {({ modal, openModal, closeModal }) => (
        <>
          <div className={styles.amenitiesModalSpacingDiv}>
            <button
              type="button"
              onClick={openModal}
            >
              Show all ## Amenities
            </button>
          </div>
          { modal(
            <>
              <div className={styles.modalCloseButtonSpacingDiv}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.modalCloseButton}
                >
                  X
                </button>
              </div>
              <span className={styles.ammenitiesModalTitle}>Ammenities</span>
              <SortedAmenitiesList />
            </>,
          ) }
        </>
      )}
    </AmenitiesModal>
  </>
);

export default Amenities;
