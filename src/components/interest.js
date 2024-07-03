import React from 'react';
import styles from './interest.module.css';

const Interests = ({ usuario }) => {
  const colors = ['#ff9561', '#00669b', '#ffc9ac', '#002c5c', '#ffc9ac', '#00669b'];


  return (
    <div className={styles.interestscontainer}>
      <h2 className={styles.tittleinterest}>Intereses</h2>
      <div className={styles.interests}>
        { usuario.intereses && usuario.intereses.map((interes, index) => {
         
          return (
            <div
              className={styles.interest}
              key={index}
              style={{
                backgroundColor: colors[index % colors.length]
              }}
              data-testid="interest"
            >
              {interes}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Interests;

