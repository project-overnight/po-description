import React from 'react';
import styles from './amenities.css';
import AmenitiesModal from './amenitiesModal';
import SortedAmenitiesList from './SortedAmenitiesList';
import useListing from '../utilities/useListing';


const Amenities = () => {
  const { amenitiesNumber, amenitiesHilites } = useListing();
  return (
    <>
      <div className={styles.amenititesTitleStyling}>
        Amenities
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.displayColumnDiv}>
          <div className={styles.displayCell}>
            {amenitiesHilites[0]}
          </div>
          <div className={styles.displayCell}>
            {amenitiesHilites[1]}
          </div>
        </div>
        <div className={styles.displayColumnDiv}>
          <div className={styles.displayCell}>
            {amenitiesHilites[2]}
          </div>
          <div className={styles.displayCell}>
            {amenitiesHilites[3]}
          </div>
        </div>
      </div>
      <AmenitiesModal>
        {({ modal, openModal, closeModal }) => (
          <>
            <div className={styles.amenitiesModalSpacingDiv}>
              <button
                className={styles.amenitiesModalOpenButton}
                type="button"
                onClick={openModal}
              >
                {`Show all ${amenitiesNumber} Amenities`}
              </button>
            </div>
            { modal(
              <>
                <div className={styles.modalCloseButtonSpacingDiv}>
                  <button
                    className={styles.modalCloseButton}
                    type="button"
                    tabIndex={0}
                    onClick={closeModal}
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
};

export default Amenities;
