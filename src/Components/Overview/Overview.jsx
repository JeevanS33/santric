import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPlus,
  faUsers,
  faChartLine,
  faTrophy,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import "../Overview/Overview.css";

function Overview() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2024");

  const years = ["2024", "2023", "2022", "2021", "2020"];

  const data = {
    2024: {
      numberOfStudents: {
        contentName: "Number Of Students",
        contentNumber: 18067,
        contentPercentage: "+37.88%",
        contentIcon: faUsers,
      },
      averageAttendance: {
        contentName: "Average Attendance",
        contentNumber: "94%",
        contentPercentage: "-12%",
        contentIcon: faChartLine,
      },
      overallPerformance: {
        contentName: "Overall Performance",
        contentNumber: "87%",
        contentPercentage: "+10.88%",
        contentIcon: faTrophy,
      },
      teacherStudentRatio: {
        contentName: "Teacher-Student Ratio",
        contentNumber: "1:25",
        contentPercentage: "+12%",
        contentIcon: faChalkboardTeacher,
      },
    },
    2023: {
      numberOfStudents: {
        contentName: "Number Of Students",
        contentNumber: 16000,
        contentPercentage: "+25.00%",
        contentIcon: faUsers,
      },
      averageAttendance: {
        contentName: "Average Attendance",
        contentNumber: "96%",
        contentPercentage: "-8%",
        contentIcon: faChartLine,
      },
      overallPerformance: {
        contentName: "Overall Performance",
        contentNumber: "80%",
        contentPercentage: "-5%",
        contentIcon: faTrophy,
      },
      teacherStudentRatio: {
        contentName: "Teacher-Student Ratio",
        contentNumber: "1:30",
        contentPercentage: "-4%",
        contentIcon: faChalkboardTeacher,
      },
    },
    2022: {
      numberOfStudents: {
        contentName: "Number Of Students",
        contentNumber: 15000,
        contentPercentage: "+20.00%",
        contentIcon: faUsers,
      },
      averageAttendance: {
        contentName: "Average Attendance",
        contentNumber: "95%",
        contentPercentage: "-10%",
        contentIcon: faChartLine,
      },
      overallPerformance: {
        contentName: "Overall Performance",
        contentNumber: "75%",
        contentPercentage: "-5%",
        contentIcon: faTrophy,
      },
      teacherStudentRatio: {
        contentName: "Teacher-Student Ratio",
        contentNumber: "1:28",
        contentPercentage: "+2%",
        contentIcon: faChalkboardTeacher,
      },
    },
    2021: {
      numberOfStudents: {
        contentName: "Number Of Students",
        contentNumber: 14000,
        contentPercentage: "+15.00%",
        contentIcon: faUsers,
      },
      averageAttendance: {
        contentName: "Average Attendance",
        contentNumber: "93%",
        contentPercentage: "-5%",
        contentIcon: faChartLine,
      },
      overallPerformance: {
        contentName: "Overall Performance",
        contentNumber: "70%",
        contentPercentage: "-3%",
        contentIcon: faTrophy,
      },
      teacherStudentRatio: {
        contentName: "Teacher-Student Ratio",
        contentNumber: "1:27",
        contentPercentage: "+1%",
        contentIcon: faChalkboardTeacher,
      },
    },
    2020: {
      numberOfStudents: {
        contentName: "Number Of Students",
        contentNumber: 13000,
        contentPercentage: "+10.00%",
        contentIcon: faUsers,
      },
      averageAttendance: {
        contentName: "Average Attendance",
        contentNumber: "92%",
        contentPercentage: "0%",
        contentIcon: faChartLine,
      },
      overallPerformance: {
        contentName: "Overall Performance",
        contentNumber: "68%",
        contentPercentage: "-2%",
        contentIcon: faTrophy,
      },
      teacherStudentRatio: {
        contentName: "Teacher-Student Ratio",
        contentNumber: "1:26",
        contentPercentage: "-2%",
        contentIcon: faChalkboardTeacher,
      },
    },
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setDropdownOpen(false);
  };

  const currentData = data[selectedYear] || data[2024];
  const isNegative = (percentage) => {
    return percentage.startsWith("-");
  };

  return (
    <>
      <div className="overview-top">
        <h2>Overview</h2>
        <div className="year">
          <p onClick={handleDropdownClick}>
            <span>Show: </span>
            {selectedYear}
            <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          </p>
          {dropdownOpen && (
            <ul className="dropdown-list">
              {years.map((year, index) => (
                <li
                  key={index}
                  onClick={() => handleYearSelect(year)}
                  className="dropdown-item"
                >
                  {year}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="report">
          <button className="generate-report-btn">
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            Generate Report
          </button>
        </div>
      </div>
      <div className="overview">
        {Object.values(currentData).map((dataItem, index) => (
          <div className="overview-card" key={index}>
            <div className="card-content">
              <div className="card-content-left">
                <FontAwesomeIcon
                  icon={dataItem.contentIcon}
                  className="student-icon"
                />
              </div>
              <div className="card-content-mid">
                <h3>{dataItem.contentName}</h3>
                <h2>{dataItem.contentNumber}</h2>
                <p>
                  Compare from last{" "}
                  {index === 0
                    ? "year"
                    : index === 1
                    ? "month"
                    : index === 2
                    ? "semester"
                    : "year"}
                </p>
              </div>
              <div className="card-content-right">
                <span
                  className={`badge ${
                    isNegative(dataItem.contentPercentage)
                      ? "negative"
                      : "positive"
                  }`}
                >
                  {dataItem.contentPercentage}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Overview;
