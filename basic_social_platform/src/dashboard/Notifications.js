import React from 'react'
import moment from 'moment'

const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content notifications-card">
          <h5>Notifications</h5>
          <ul className="online-users">
            { notifications && notifications.map(notification =>{
              return (
                <li key={notification.id}>
                  <span className="light-green-text"> {notification.user} </span>
                  <span> {notification.content} </span>
                  <div className="note-date grey-text">
                    {moment(notification.time.toDate()).fromNow()}
                  </div>
                </li>
              )})}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
