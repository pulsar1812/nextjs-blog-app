import ReactDOM from 'react-dom';

import styles from './Notification.module.css';

export default function Notification({ title, message, status }) {
  let statusStyles = '';

  if (status === 'success') {
    statusStyles = styles.success;
  }

  if (status === 'error') {
    statusStyles = styles.error;
  }

  const cssStyles = `${styles.notification} ${statusStyles}`;

  return ReactDOM.createPortal(
    <div className={cssStyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}
