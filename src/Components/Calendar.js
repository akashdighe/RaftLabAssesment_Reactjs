import React from 'react';
import './HomePage.css'; // You can create a CSS file for styling

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    // Get the current month and year
    const currentMonthYear = this.state.currentDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });

    // Calculate the start and end dates of the current week
    const startOfWeek = new Date(this.state.currentDate);
    startOfWeek.setDate(this.state.currentDate.getDate() - this.state.currentDate.getDay());
    const endOfWeek = new Date(this.state.currentDate);
    endOfWeek.setDate(this.state.currentDate.getDate() + (6 - this.state.currentDate.getDay()));

    // Create an array of days in the current week
    const daysInWeek = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      daysInWeek.push(date);
    }

    return (
      <div className="calendar">
        <h6>{currentMonthYear}</h6>
        <div className="week-days">
          {daysInWeek.map((day, index) => (
            <div key={index} className="day">
              <strong>{day.toLocaleDateString(undefined, { weekday: 'short' })}</strong>
              <div className={`date ${day.getDate() === this.state.currentDate.getDate() ? 'today' : ''}`}>
                {day.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calendar;
