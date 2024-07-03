import React from 'react';
import styles from './interest.module.css';

const Interests = ({ usuario }) => {
  const colors = ['#ff9561', '#00669b', '#ffc9ac', '#002c5c', '#002c5c', '#ff9561'];


  return (
    <div className={styles.interestscontainer}>
      <h2 className={styles.tittleinterest}>Intereses</h2>
      <div className={styles.interests}>
        {usuario.intereses.map((interes, index) => {
         
          return (
            <div
              className={styles.interest}
              key={index}
              style={{
                backgroundColor: colors[index % colors.length]
              }}
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

