import { SiTicktick } from "react-icons/si";
import { VscError } from "react-icons/vsc";
import styles from "./Modal.module.css";

function NotificationModal({ modalType, message }: { modalType: string; message: string; }) {

  return (
    <div className={styles.notificationModal} >
      {
        modalType === "success"
        ? <SiTicktick size={38} color="lightgreen" />
        : <VscError size={38} color="red" />
      }
      <p>{message}</p>
    </div>
  )
}

export default NotificationModal;