import Grid from '@mui/material/Grid'
import Sidebar from '../Sidebar.jsx'
import schedules from '../Data/Schedule.js'
import React, { useState } from 'react';
import { Clock, Plus, X, Edit2, Save } from 'lucide-react';
import './Timetable.css';

export default function Timetable() {
    const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const [schedule, setSchedule] = useState(schedules);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ day: '', time: '' });
  const [newClass, setNewClass] = useState({ subject: '', color: 'blue', duration: 1 });

  const colors = [
    { name: 'blue', value: 'blue' },
    { name: 'green', value: 'green' },
    { name: 'purple', value: 'purple' },
    { name: 'orange', value: 'orange' },
    { name: 'pink', value: 'pink' },
    { name: 'red', value: 'red' },
    { name: 'cyan', value: 'cyan' },
    { name: 'yellow', value: 'yellow' },
  ];

  const handleAddClass = (day, time) => {
    setSelectedSlot({ day, time });
    setShowAddModal(true);
  };

  const saveClass = () => {
    if (newClass.subject) {
      const key = `${selectedSlot.day}-${selectedSlot.time}`;
      setSchedule({ ...schedule, [key]: newClass });
      setShowAddModal(false);
      setNewClass({ subject: '', color: 'blue', duration: 1 });
    }
  };

  const removeClass = (day, time) => {
    const key = `${day}-${time}`;
    const newSchedule = { ...schedule };
    delete newSchedule[key];
    setSchedule(newSchedule);
  };

  const isSlotOccupied = (day, time) => {
    const key = `${day}-${time}`;
    return schedule[key];
  };

  const isSlotInDuration = (day, timeIndex) => {
    for (let i = 0; i < timeIndex; i++) {
      const prevTime = timeSlots[i];
      const prevClass = schedule[`${day}-${prevTime}`];
      if (prevClass) {
        const endIndex = i + prevClass.duration;
        if (timeIndex < endIndex) {
          return true;
        }
      }
    }
    return false;
  };
    return (
        <Grid container spacing={2} sx={{display:"flex", alignItems:"center"}}>
            <Grid size={3}>
                <Sidebar />
            </Grid>
            <Grid size={9}>
                
    <div className="timetable-container">
      <div className="timetable-wrapper">
        {/* Header */}
        <div className="timetable-header">
          <h1 className="timetable-title">
            <Clock className="title-icon" />
            Time Table
          </h1>
        </div>

        {/* Timetable */}
        <div className="timetable-card">
          <div className="table-wrapper">
            <table className="timetable">
              <thead>
                <tr className="table-header-row">
                  <th className="time-header">Time</th>
                  {days.map(day => (
                    <th key={day} className="day-header">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, timeIndex) => (
                  <tr key={time} className="table-row">
                    <td className="time-cell">
                      {time}
                    </td>
                    {days.map(day => {
                      const classData = isSlotOccupied(day, time);
                      const inDuration = isSlotInDuration(day, timeIndex);
                      
                      if (inDuration) {
                        return null;
                      }

                      return (
                        <td
                          key={`${day}-${time}`}
                          className="schedule-cell"
                        >
                          {classData ? (
                            <div
                              className={`class-block class-${classData.color}`}
                              style={{ 
                                height: `${classData.duration * 80 + (classData.duration - 1) * 8}px` 
                              }}
                            >
                              <div className="class-content">
                                <div className="class-subject">{classData.subject}</div>
                                <div className="class-duration">{classData.duration}Hours</div>
                              </div>
                              <button
                                onClick={() => removeClass(day, time)}
                                className="delete-class-btn"
                              >
                                <X className="delete-icon" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAddClass(day, time)}
                              className="add-class-btn"
                            >
                              <Plus className="add-icon" />
                            </button>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Class Modal */}
        {showAddModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add Course</h2>
              <p className="modal-time">
                {selectedSlot.day} {selectedSlot.time}
              </p>

              <div className="modal-form">
                <div className="form-group">
                  <label className="form-label">Course Name</label>
                  <input
                    type="text"
                    value={newClass.subject}
                    onChange={(e) => setNewClass({ ...newClass, subject: e.target.value })}
                    placeholder="Enter course name"
                    className="modal-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Course Times</label>
                  <select
                    value={newClass.duration}
                    onChange={(e) => setNewClass({ ...newClass, duration: parseInt(e.target.value) })}
                    className="modal-input"
                  >
                    <option value="1">1h</option>
                    <option value="2">2h</option>
                    <option value="3">3h</option>
                    <option value="4">4h</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select color</label>
                  <div className="color-grid">
                    {colors.map(color => (
                      <button
                        key={color.value}
                        onClick={() => setNewClass({ ...newClass, color: color.value })}
                        className={`color-btn color-${color.value} ${
                          newClass.color === color.value ? 'color-selected' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <button
                  onClick={saveClass}
                  className="modal-btn modal-btn-primary"
                >
                  <Save className="btn-icon" />
                  Save
                </button>
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    setNewClass({ subject: '', color: 'blue', duration: 1 });
                  }}
                  className="modal-btn modal-btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        {/* <div className="legend-card">
          <h3 className="legend-title">使用说明</h3>
          <ul className="legend-list">
            <li className="legend-item">
              <Plus className="legend-icon legend-icon-blue" />
              点击空白格子添加课程
            </li>
            <li className="legend-item">
              <X className="legend-icon legend-icon-red" />
              悬停在课程上点击 X 删除课程
            </li>
            <li className="legend-item">
              <Clock className="legend-icon legend-icon-gray" />
              可设置课程持续时长（1-4小时）
            </li>
          </ul>
        </div> */}
      </div>
    </div>
            </Grid>
        </Grid>
    )
}