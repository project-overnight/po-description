import React from 'react';
import styles from './Amenities.css';
import AmenitiesModal from './AmenitiesModal';
import SortedAmenitiesList from './SortedAmenitiesList';
import useListing from '../utilities/useListing';


const Amenities = () => {
  const { amenitiesNumber } = useListing();
  return (
    <>
      <div className={styles.amenititesTitleStyling}>
        Amenities
      </div>
      <div>4 things go here </div>
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
