const button = document.querySelector('.button');
const notificationsContainer = document.querySelector('.notifications-container');

console.log(notificationsContainer);

button.addEventListener('click', createNotifications);

function createNotifications() {
    const notification = document.createElement('div');
    notification.classList.add('notification-style');
    notification.innerText = "Number Copied";
    notificationsContainer.appendChild(notification);
    setTimeout(()=>{
        notification.remove();
    },2000)
}