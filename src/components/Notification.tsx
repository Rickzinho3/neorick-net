import React from "react";
import { FaDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; 

type NotificationProps = {
    visible: boolean;
    onClose: () => void;
}

const Notification = ({ visible, onClose }: NotificationProps) => {
    return (
        <div className={`notification-root ${visible ? "show" : ""}`}>
            <div className="notification-content">
                <div className="notification-title">
                    <FaDownload />
                    <h1>Downloading file</h1>
                </div>
                <div className="notification-message">
                    <p>Agradeço pela preferência.</p>
                </div>
            </div>

            <div className="notification-button">
                <button onClick={onClose}>
                    <IoMdClose />
                </button>
            </div>
        </div>
    );
}

export default Notification;
