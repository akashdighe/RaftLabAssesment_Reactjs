import React from 'react';
import './HomePage.css';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: new Date(),
    };
  }

  render() {
    const currentMonthYear = this.state.currentDate.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
    });

    const startOfWeek = new Date(this.state.currentDate);
    startOfWeek.setDate(this.state.currentDate.getDate() - this.state.currentDate.getDay());
    const endOfWeek = new Date(this.state.currentDate);
    endOfWeek.setDate(this.state.currentDate.getDate() + (6 - this.state.currentDate.getDay()));

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
