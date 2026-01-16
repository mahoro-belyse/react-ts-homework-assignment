import { useState } from "react";
import { type ProfileCardProps } from "../types/declaration";
import "./ProfileCard.css";

function ProfileCard({ name, age, isStudent }: ProfileCardProps) {
  const [studentStatus, setStudentStatus] = useState<boolean>(isStudent);

  function toggleStatus() {
    setStudentStatus(!studentStatus);
  }

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2 className="profile-name">Name: {name}</h2>S
        <p className="profile-age">Age: {age}</p>
      </div>
      <div className="profile-info">
        <p className="status-label">Student status:</p>
        <p className={`status ${studentStatus ? "student" : "not-student"}`}>
          {studentStatus ? "✓ Student" : "✗ Not a Student"}
        </p>
      </div>
      <button className="toggle-button" onClick={toggleStatus}>
        Student Status
      </button>
    </div>
  );
}

export default ProfileCard;
