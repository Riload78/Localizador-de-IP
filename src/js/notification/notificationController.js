import { buildNotification } from "./notificationView.js";

export const notificationController = (notificationWrapper) => {
    console.log(notificationWrapper);

    const showNotification = (message, type) => {
        const newNotification = buildNotification(message, type)
        notificationWrapper.innerHTML = newNotification
    }

    return {
        showNotification
    }


}