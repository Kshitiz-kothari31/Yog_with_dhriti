import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Video } from 'lucide-react';
import './Schedule.css';

const scheduleData = {
  studio: [
    { time: '07:00 AM', mon: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement to energize your morning.', spots: 5 }, wed: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement to energize your morning.', spots: 3 }, fri: { name: 'Sunrise Flow', duration: '45 min', teacher: 'Liam', about: 'Wake up your body and mind with this gentle yet invigorating sunrise flow.', spots: 8 } },
    { time: '10:00 AM', tue: { name: 'Meditation', duration: '30 min', teacher: 'Sarah', about: 'Find your center and quiet your mind with guided meditation techniques.', spots: 12 }, thu: { name: 'Pranayama', duration: '30 min', teacher: 'Sarah', about: 'Learn powerful breathing exercises to balance your nervous system.', spots: 2 }, sat: { name: 'Hatha Basis', duration: '90 min', teacher: 'Elena', about: 'A grounding practice focusing on alignment, holding postures, and deep breathing.', spots: 5 }, sun: { name: 'Hatha Basis', duration: '90 min', teacher: 'Elena', about: 'A grounding practice focusing on alignment, holding postures, and deep breathing.', spots: 3 } },
    { time: '06:00 PM', mon: { name: 'Yin & Sound', duration: '75 min', teacher: 'David', about: 'Deep tissue stretching accompanied by healing sound bowl vibrations.', spots: 1 }, tue: { name: 'Power Vinyasa', duration: '60 min', teacher: 'Maya', about: 'A vigorous fitness-based approach to vinyasa style yoga.', spots: 5 }, wed: { name: 'Restorative', duration: '75 min', teacher: 'David', about: 'Deeply relaxing postures using props to support the physical body.', spots: 4 }, thu: { name: 'Vinyasa Flow', duration: '60 min', teacher: 'Maya', about: 'A dynamic sequence linking breath with movement.', spots: 8 } },
  ],
  online: [
    { time: '08:00 AM', mon: { name: 'Morning Flow', duration: '45 min', teacher: 'Zoom', about: 'Online morning yoga session.', spots: 100 }, wed: { name: 'Morning Flow', duration: '45 min', teacher: 'Zoom', about: 'Online morning yoga session.', spots: 100 } },
    { time: '05:00 PM', tue: { name: 'Desk Stretch', duration: '30 min', teacher: 'Zoom', about: 'Quick mobility exercises perfect for a mid-workday break.', spots: 100 }, thu: { name: 'Desk Stretch', duration: '30 min', teacher: 'Zoom', about: 'Quick mobility exercises perfect for a mid-workday break.', spots: 100 } },
  ]
};

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const Schedule = () => {
  const [activeTab, setActiveTab] = useState('studio');
  const [selectedClass, setSelectedClass] = useState(null);
  const [bookingPrompt, setBookingPrompt] = useState(null);
  const [userNameInput, setUserNameInput] = useState('');
  const navigate = useNavigate();

  const currentSchedule = scheduleData[activeTab];

  const handleBookSlotClick = (e, classDetails) => {
    e.stopPropagation();
    setBookingPrompt(classDetails);
    setUserNameInput('');
  };

  const confirmBooking = () => {
    if (userNameInput && userNameInput.trim() !== '') {
      const message = `*New Booking Request*%0A%0A*Name:* ${userNameInput.trim()}%0A*Class:* ${bookingPrompt.name}%0A*Day/Time:* ${bookingPrompt.day.toUpperCase()} at ${bookingPrompt.time}%0A*Teacher:* ${bookingPrompt.teacher}`;
      const whatsappUrl = `https://wa.me/919412318526?text=${message}`;
      window.open(whatsappUrl, '_blank');
      setBookingPrompt(null);
    }
  };

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
                      <div className="class-grid-footer">
                        <span className={classInfo.spots <= 3 ? 'spots-low' : 'spots-normal'}>
                          {classInfo.spots} spots {classInfo.spots <= 3 ? 'left!' : 'available'}
                        </span>
                        <button className="btn-book-green-small" onClick={(e) => handleBookSlotClick(e, { ...classInfo, day, time: row.time })}>Book Slot</button>
                      </div>
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
              
              {selectedClass.teacher === 'Zoom' && (
                <div className="modal-badge online-badge">
                  <Video size={14} /> Online (Zoom)
                </div>
              )}

              <div className="modal-details">
                <p><strong>Duration:</strong> {selectedClass.duration}</p>
                <p><strong>Teacher:</strong> {selectedClass.teacher !== 'Zoom' ? selectedClass.teacher : 'Virtual'}</p>
              </div>

              <div className="modal-footer-actions">
                <span className={selectedClass.spots <= 3 ? 'spots-low-large' : 'spots-available'}>
                  {selectedClass.spots} spots {selectedClass.spots <= 3 ? 'left!' : 'available'}
                </span>
                <button 
                  className="btn-book-green" 
                  onClick={(e) => handleBookSlotClick(e, selectedClass)}
                >
                  Book Slot
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {bookingPrompt && createPortal(
        <div className="schedule-modal-overlay" onClick={() => setBookingPrompt(null)}>
          <div className="name-prompt-modal animate-pop-in" onClick={(e) => e.stopPropagation()}>
            <button className="schedule-modal-close" onClick={() => setBookingPrompt(null)}>&times;</button>
            <h3 className="prompt-title">Almost there!</h3>
            <p className="prompt-subtitle">
              Booking <strong>{bookingPrompt.name}</strong> on {bookingPrompt.day.toUpperCase()} at {bookingPrompt.time}
            </p>
            <input 
              type="text" 
              value={userNameInput} 
              onChange={(e) => setUserNameInput(e.target.value)} 
              placeholder="Enter your full name"
              className="name-prompt-input"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') confirmBooking();
              }}
            />
            <button className="btn-primary prompt-confirm-btn" onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Schedule;
