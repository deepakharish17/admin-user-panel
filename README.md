# 🚀 HR Analytics & Management System

A Full-Stack Role-Based HR Management Platform built using React, Node.js, Express, and MongoDB.

This project simulates a real-world HR SaaS system with Admin and User access control, job management, issue tracking, and analytics dashboard.

---

## 📌 Project Overview

The HR Analytics System allows organizations to:

- Manage employees
- Post job openings
- Share company announcements
- Handle employee issues
- Analyze workforce data
- Control access based on roles (Admin/User)

This is a production-style application built with proper backend structure and frontend UI/UX design.

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- React Toastify
- Chart.js (Data Visualization)
- CSS (Custom Styling + Dark Mode)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API Architecture

---

## 🔐 Role-Based Access System

### 👨‍💼 Admin Features
- Add / Update / Delete Employees
- Post / Update / Delete Jobs
- Add / Update / Delete Company News
- View All Employee Issues
- Accept / Resolve Issues
- View Analytics Dashboard
- View Charts (Bar & Pie Graph)
- Access Admin Panel

### 👨‍💻 User Features
- View Job Openings
- View Company News
- Submit Issues
- Update / Delete Own Issues (until accepted)
- Track Issue Status (Pending / Accepted)
- View Graph Data

---

## 📊 Analytics & Dashboard

- Department-wise Salary Chart
- Employee Salary Bar Graph
- Pie Chart Representation
- Dark Mode UI
- Average Salary Calculation
- Highest Salary Detection

---

## 💼 Job Management Module

- Admin can:
  - Post Job Positions
  - Set Interview Date & Time
  - Update Jobs
  - Delete Jobs

- Users can:
  - View Jobs
  - View Interview Schedule

---

## 📰 News & Announcement Module

- Admin can:
  - Add News
  - Update News
  - Delete News

- Users can:
  - View Company Announcements

---

## ⚠ Issue Tracking System

- Users can:
  - Submit Issues
  - Update Issues
  - Delete Issues (before accepted)

- Admin can:
  - View All Issues
  - Accept Issues
  - Change Issue Status

Issue Status Indicators:
- 🟡 Pending
- 🟢 Accepted

---

## 🌙 UI Enhancements

- Split-Screen Animated Login Page
- Loading Spinner
- Show/Hide Password
- Dark Mode Toggle
- Responsive Layout
- Modern Card UI Design

---

## 📂 Project Structure

backend/
├── models/
├── routes/
├── server.js

---

## 🚀 How to Run the Project

### Backend
```bash
cd backend
npm install
node server.js

---

## 🚀 How to Run the Project

### Backend
```bash
cd backend
npm install
node server.js
frontend/
├── components/
├── pages/
├── App.js

