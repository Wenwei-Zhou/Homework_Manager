import Sidebar from "../Sidebar.jsx";
import "./Course.css";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import {
  BookOpen,
  CircleAlert,
  CheckCircle2,
  Clock,
  Plus,
  Trash2,
  Calendar,
  Target,
} from "lucide-react";
import taskList from "../Data/Tasks.js";

function Course() {
  const [activeTab, setActiveTab] = useState("courses");
  const [courses, setCourses] = useState([
    { id: 1, name: "English", progress: 65, hours: 24, color: "blue" },
    { id: 2, name: "Math", progress: 40, hours: 18, color: "green" },
    { id: 3, name: "Physics", progress: 80, hours: 32, color: "purple" },
    { id: 4, name: "Programming", progress: 75, hours: 22, color: "orange" },
    { id: 5, name: "Chemical", progress: 67, hours: 77, color: "yellow" },
  ]);

  const [tasks, setTasks] = useState(taskList);

  const [newTask, setNewTask] = useState({
    title: "",
    course: "",
    dueDate: "",
    priority: "medium",
  });
  const [showAddTask, setShowAddTask] = useState(false);

  const toggleTaskComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const addTask = () => {
    if (newTask.title && newTask.course && newTask.dueDate) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          ...newTask,
          completed: false,
        },
      ]);
      setNewTask({ title: "", course: "", dueDate: "", priority: "medium" });
      setShowAddTask(false);
    }
  };

  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalStudyHours = courses.reduce((sum, c) => sum + c.hours, 0);
  const avgProgress = Math.round(
    courses.reduce((sum, c) => sum + c.progress, 0) / courses.length
  );
  return (
    <Grid container spacing={2} sx={{display:"flex", alignItems:"center"}}>
      <Grid size={3}>
        <Sidebar />
      </Grid>
      <Grid size={9}>
        <div className="study-management">
          <div className="container">
            <div className="left-section">
              {/* Tabs */}
              <div className="tabs">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`tab ${
                    activeTab === "courses" ? "tab-active" : ""
                  }`}
                >
                  <BookOpen className="tab-icon" />
                  Course
                </button>
                <button
                  onClick={() => setActiveTab("tasks")}
                  className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
                >
                  <Calendar className="tab-icon" />
                  Task
                </button>
              </div>

              {/* Content */}
              <div className="content-area">
                {activeTab === "courses" && (
                  <div className="courses-grid">
                    {courses.map((course) => (
                      <div key={course.id} className="course-card">
                        <div
                          className={`course-icon course-icon-${course.color}`}
                        >
                          <BookOpen className="icon" />
                        </div>
                        <h3 className="course-title">{course.name}</h3>
                        <div className="course-hours">
                          <Clock className="small-icon" />
                          {course.hours} hours
                        </div>
                        <div className="progress-section">
                          <div className="progress-header">
                            <span className="progress-label">Progress</span>
                            <span className="progress-value">
                              {course.progress}%
                            </span>
                          </div>
                          <div className="progress-bar">
                            <div
                              className={`progress-fill progress-fill-${course.color}`}
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "tasks" && (
                  <div className="tasks-container">
                    <div className="tasks-header">
                      <h2 className="tasks-title">Tasks</h2>
                      <button
                        onClick={() => setShowAddTask(!showAddTask)}
                        className="add-task-btn"
                      >
                        <Plus className="btn-icon" />
                        Add tasks
                      </button>
                    </div>

                    {showAddTask && (
                      <div className="add-task-form">
                        <input
                          type="text"
                          placeholder="Task Title"
                          value={newTask.title}
                          onChange={(e) =>
                            setNewTask({ ...newTask, title: e.target.value })
                          }
                          className="form-input"
                        />
                        <select
                          value={newTask.course}
                          onChange={(e) =>
                            setNewTask({ ...newTask, course: e.target.value })
                          }
                          className="form-input"
                        >
                          <option value="">Select Course</option>
                          {courses.map((c) => (
                            <option key={c.id} value={c.name}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                        <div className="form-row">
                          <input
                            type="date"
                            value={newTask.dueDate}
                            onChange={(e) =>
                              setNewTask({
                                ...newTask,
                                dueDate: e.target.value,
                              })
                            }
                            className="form-input form-input-flex"
                          />
                          <select
                            value={newTask.priority}
                            onChange={(e) =>
                              setNewTask({
                                ...newTask,
                                priority: e.target.value,
                              })
                            }
                            className="form-input"
                          >
                            <option value="low">low</option>
                            <option value="medium">medium</option>
                            <option value="high">high</option>
                          </select>
                        </div>
                        <div className="form-actions">
                          <button
                            onClick={addTask}
                            className="form-btn form-btn-primary"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => setShowAddTask(false)}
                            className="form-btn form-btn-secondary"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="tasks-list">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className={`task-item ${
                            task.completed ? "task-completed" : ""
                          }`}
                        >
                          <div className="task-content">
                            <button
                              onClick={() => toggleTaskComplete(task.id)}
                              className="task-checkbox"
                            >
                              {!task.completed ? (
                                <CircleAlert />
                              ) : (
                                <CheckCircle2 className="checkbox-checked" />
                              )}
                            </button>
                            <div className="task-details">
                              <h3
                                className={`task-title ${
                                  task.completed ? "task-title-completed" : ""
                                }`}
                              >
                                {task.title}
                              </h3>
                              <div className="task-meta">
                                <span className="task-course">
                                  {task.course}
                                </span>
                                <span className="task-separator">•</span>
                                <span className="task-date">
                                  {task.dueDate}
                                </span>
                                <span
                                  className={`task-priority task-priority-${task.priority}`}
                                >
                                  {task.priority === "high"
                                    ? "high"
                                    : task.priority === "medium"
                                    ? "mdeium"
                                    : "low"}
                                  -level
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() => deleteTask(task.id)}
                              className="task-delete"
                            >
                              <Trash2 className="delete-icon" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="right-section">
              {/* Stats Cards */}
              <div className="stats-grid">
                {/* Header */}
                <div className="header">
                  <h1 className="title">Study management system</h1>
                  <p className="subtitle">
                    Check your learning progress and manage course tasks
                  </p>
                </div>

                <div className="stat-card stat-card-blue">
                  <div className="stat-content">
                    <div>
                      <p className="stat-label">Learning time</p>
                      <p className="stat-value">{totalStudyHours}h</p>
                    </div>
                    <Clock className="stat-icon" />
                  </div>
                </div>

                <div className="stat-card stat-card-green">
                  <div className="stat-content">
                    <div>
                      <p className="stat-label">Completed Tasks</p>
                      <p className="stat-value">
                        {completedTasks}/{tasks.length}
                      </p>
                    </div>
                    <CheckCircle2 className="stat-icon" />
                  </div>
                </div>

                <div className="stat-card stat-card-purple">
                  <div className="stat-content">
                    <div>
                      <p className="stat-label">Average Progress</p>
                      <p className="stat-value">{avgProgress}%</p>
                    </div>
                    <Target className="stat-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Course;
