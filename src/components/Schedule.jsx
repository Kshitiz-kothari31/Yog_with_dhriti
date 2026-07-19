import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Schedule.css';

const scheduleData = {
  studio: [
    { time: '07:00 AM', mon: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement to energize your morning.' }, wed: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement to energize your morning.' }, fri: { name: 'Sunrise Flow', duration: '45 min', teacher: 'Liam', about: 'Wake up your body and mind with this gentle yet invigorating sunrise flow.' } },
    { time: '10:00 AM', tue: { name: 'Meditation', duration: '30 min', teacher: 'Sarah', about: 'Find your center and quiet your mind with guided meditation techniques.' }, thu: { name: 'Pranayama', duration: '30 min', teacher: 'Sarah', about: 'Learn powerful breathing exercises to balance your nervous system.' }, sat: { name: 'Hatha Basis', duration: '90 min', teacher: 'Elena', about: 'A grounding practice focusing on alignment, holding postures, and deep breathing.' }, sun: { name: 'Hatha Basis', duration: '90 min', teacher: 'Elena', about: 'A grounding practice focusing on alignment, holding postures, and deep breathing.' } },
    { time: '06:00 PM', mon: { name: 'Yin & Sound', duration: '75 min', teacher: 'David', about: 'Deep tissue stretching accompanied by healing sound bowl vibrations.' }, tue: { name: 'Power Vinyasa', duration: '60 min', teacher: 'Maya', about: 'A vigorous fitness-based approach to vinyasa style yoga.' }, wed: { name: 'Restorative', duration: '75 min', teacher: 'David', about: 'Deeply relaxing postures using props to support the physical body.' }, thu: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement.' } },
  ],
  online: [
    { time: '08:00 AM', mon: { name: 'Morning Flow', duration: '45 min', teacher: 'Zoom', about: 'Online morning yoga session.' }, wed: { name: 'Morning Flow', duration: '45 min', teacher: 'Zoom', about: 'Online morning yoga session.' } },
    { time: '05:00 PM', tue: { name: 'Desk Stretch', duration: '30 min', teacher: 'Zoom', about: 'Quick mobility exercises perfect for a mid-workday break.' }, thu: { name: 'Desk Stretch', duration: '30 min', teacher: 'Zoom', about: 'Quick mobility exercises perfect for a mid-workday break.' } },
  ]
};

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('studio');
  const [selectedClass, setSelectedClass] = useState(null);

  const currentSchedule = scheduleData[activeTab];

  return (
    <section className="schedule-section">
      <div className="schedule-header">
        <div>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.5rem' }}>Weekly Schedule</h2>
          <p className="schedule-subtitle">Find a time that fits your rhythm.</p>
        </div>
        
        <div className="schedule-toggle">
          <button 
            className={`toggle-btn ${activeTab === 'studio' ? 'active' : ''}`}
            onClick={() => setActiveTab('studio')}
          >
            Studio
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'online' ? 'active' : ''}`}
            onClick={() => setActiveTab('online')}
          >
            Online
          </button>
        </div>
      </div>

      <div className="schedule-grid">
        <div className="schedule-row header-row">
          <div className="time-col">TIME</div>
          {days.map(day => <div key={day} className="day-col">{day}</div>)}
        </div>

        {currentSchedule.map((row, idx) => (
          <div key={idx} className="schedule-row">
            <div className="time-col">{row.time}</div>
            {days.map(day => {
              const classInfo = row[day.toLowerCase()];
              return (
                <div key={day} className="class-cell">
                  {classInfo && (
                    <div 
                      className={`class-block animate-fade-in teacher-${classInfo.teacher.toLowerCase()}`}
                      onClick={() => setSelectedClass({ ...classInfo, day, time: row.time })}
                    >
                      <h4>{classInfo.name}</h4>
                      <span>{classInfo.duration} &bull; {classInfo.teacher}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedClass && createPortal(
        <div className="schedule-modal-overlay" onClick={() => setSelectedClass(null)}>
          <div className="schedule-modal-content animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button className="schedule-modal-close" onClick={() => setSelectedClass(null)}>&times;</button>
            <div className={`modal-header teacher-${selectedClass.teacher.toLowerCase()}`}>
              <h3>{selectedClass.name}</h3>
              <p>{selectedClass.day.toUpperCase()} at {selectedClass.time}</p>
            </div>
            <div className="modal-body">
              <p className="modal-about">{selectedClass.about}</p>
              <div className="modal-details">
                <p><strong>Duration:</strong> {selectedClass.duration}</p>
                <p><strong>Teacher:</strong> {selectedClass.teacher}</p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Schedule;
