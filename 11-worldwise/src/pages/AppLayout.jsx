import React from 'react';
import Sidebar from '../components/Sidebar';
import styles from './AppLayout.module.css'
import Map from '../components/Map';

function AppLayout(props) {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;