/**
 * Interactive Demo Page Component
 * Working dashboard with dummy Kenyan school data
 * Persistent CTA banner
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CChartLine, CChartBar, CChartDoughnut } from '@coreui/react-chartjs';
import { CCard, CCardBody, CCardHeader, CRow, CCol, CButton, CTable, CTableHead, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react';
import { students, schoolInfo, classes, kpiData, schoolPerformanceTrend, gradeDistribution, attendanceHeatmap, topStudents, bottomStudents, getSubjectAverages, currentTerm, schoolAverage } from '../../data/dummyData';

const DemoDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedClass, setSelectedClass] = useState(classes[0].id);

  const handleStartTrial = () => {
    navigate('/demo');
  };

  return (
    <div className="demo-page">
      {/* Persistent CTA Banner */}
      <div className="demo-cta-banner">
        <div className="demo-cta-banner__content">
          <span className="demo-cta-banner__icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </span>
          <span className="demo-cta-banner__text">
            This is a demo. Sign up for your school.
          </span>
          <button className="btn btn--primary" onClick={handleStartTrial}>
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Demo Header */}
      <header className="demo-header">
        <div className="demo-header__left">
          <div className="demo-header__logo">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="var(--ta-primary)" />
              <path d="M20 8L20 20M20 20L12 15M20 20L28 15M20 20L12 25M20 20L28 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="3" fill="var(--ta-accent)" />
            </svg>
          </div>
          <div className="demo-header__school">
            <span className="demo-header__school-name">{schoolInfo.name}</span>
            <span className="demo-header__school-location">{schoolInfo.county}, Kenya</span>
          </div>
        </div>
        <div className="demo-header__right">
          <span className="demo-header__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Demo Mode
          </span>
        </div>
      </header>

      {/* Demo Tabs */}
      <nav className="demo-tabs" role="tablist">
        {['overview', 'classes', 'students', 'attendance', 'predictions'].map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`demo-tab ${activeTab === tab ? 'is-active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      {/* Demo Content */}
      <main className="demo-content">
        {activeTab === 'overview' && (
          <div className="demo-overview">
            {/* KPI Cards */}
            <section className="demo-kpi-section" aria-label="Key Performance Indicators">
              <div className="demo-kpi-grid">
                <div className="demo-kpi-card">
                  <div className="demo-kpi-label">Total Students</div>
                  <div className="demo-kpi-value">{kpiData.totalStudents.value}</div>
                  <div className="demo-kpi-change demo-kpi-change--positive">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    +{kpiData.totalStudents.change}% {kpiData.totalStudents.changeLabel}
                  </div>
                  <div className="demo-kpi-sparkline">
                    <svg viewBox="0 0 100 30" className="demo-kpi-sparkline-svg">
                      <path d={`M0 25 L16 22 L33 20 L50 18 L66 15 L83 10 L100 5`} stroke="var(--ta-success)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                <div className="demo-kpi-card">
                  <div className="demo-kpi-label">Avg Grade This Term</div>
                  <div className="demo-kpi-value">{kpiData.avgGrade.value}</div>
                  <div className="demo-kpi-change demo-kpi-change--positive">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    +{kpiData.avgGrade.change}% {kpiData.avgGrade.changeLabel}
                  </div>
                  <div className="demo-kpi-sparkline">
                    <svg viewBox="0 0 100 30" className="demo-kpi-sparkline-svg">
                      <path d={`M0 20 L16 18 L33 16 L50 14 L66 12 L83 10 L100 8`} stroke="var(--ta-primary)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                <div className="demo-kpi-card">
                  <div className="demo-kpi-label">Attendance Rate This Week</div>
                  <div className="demo-kpi-value">{kpiData.attendanceRate.value}</div>
                  <div className="demo-kpi-change demo-kpi-change--negative">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {kpiData.attendanceRate.change}% {kpiData.attendanceRate.changeLabel}
                  </div>
                  <div className="demo-kpi-sparkline">
                    <svg viewBox="0 0 100 30" className="demo-kpi-sparkline-svg">
                      <path d={`M0 5 L16 6 L33 5 L50 7 L66 6 L83 8 L100 7`} stroke="var(--ta-warning)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                <div className="demo-kpi-card">
                  <div className="demo-kpi-label">Students At Risk</div>
                  <div className="demo-kpi-value">{kpiData.atRiskCount.value}</div>
                  <div className="demo-kpi-change demo-kpi-change--positive">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    -{kpiData.atRiskCount.change} {kpiData.atRiskCount.changeLabel}
                  </div>
                  <div className="demo-kpi-sparkline">
                    <svg viewBox="0 0 100 30" className="demo-kpi-sparkline-svg">
                      <path d={`M0 25 L16 22 L33 18 L50 15 L66 12 L83 8 L100 5`} stroke="var(--ta-danger)" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Charts */}
            <section className="demo-charts-section">
              <div className="demo-chart-card">
                <div className="demo-chart-header">
                  <h3 className="demo-chart-title">School Performance Trend</h3>
                  <span className="demo-chart-subtitle">Term by term average</span>
                </div>
                <div className="demo-chart-body">
                  <CChartLine
                    data={{
                      labels: schoolPerformanceTrend.map(t => t.term),
                      datasets: [{
                        label: 'Average Grade %',
                        backgroundColor: 'rgba(26, 95, 122, 0.1)',
                        borderColor: 'var(--ta-primary)',
                        pointBackgroundColor: 'var(--ta-primary)',
                        pointBorderColor: 'white',
                        pointBorderWidth: 2,
                        borderWidth: 2,
                        data: schoolPerformanceTrend.map(t => t.average),
                        fill: true,
                      }],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          backgroundColor: '#1a2634',
                          titleColor: 'white',
                          bodyColor: 'white',
                        },
                      },
                      scales: {
                        x: {
                          ticks: { color: '#6b7280', font: { size: 11 } },
                          grid: { color: 'rgba(0,0,0,0.05)' },
                        },
                        y: {
                          min: 60,
                          max: 85,
                          ticks: { color: '#6b7280', font: { size: 11 }, callback: (v) => `${v}%` },
                          grid: { color: 'rgba(0,0,0,0.05)' },
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="demo-chart-card">
                <div className="demo-chart-header">
                  <h3 className="demo-chart-title">Grade Distribution</h3>
                  <span className="demo-chart-subtitle">Current term</span>
                </div>
                <div className="demo-chart-body demo-chart-body--small">
                  <CChartDoughnut
                    data={{
                      labels: gradeDistribution.map(g => g.grade),
                      datasets: [{
                        data: gradeDistribution.map(g => g.count),
                        backgroundColor: gradeDistribution.map(g => g.color),
                        borderWidth: 0,
                      }],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: 'right',
                          labels: { font: { size: 11 }, padding: 12, color: '#374151' },
                        },
                      },
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Activity Feed */}
            <section className="demo-activity-section">
              <h3 className="demo-section-title">Recent Activity</h3>
              <div className="demo-activity-list">
                {[
                  { action: 'logged in', user: 'Grace Wanjiku', time: '2 minutes ago' },
                  { action: 'updated Biology grades for Form 4A', user: 'Peter Otieno', time: '15 minutes ago' },
                  { action: 'submitted attendance for Form 3A', user: 'Sarah Kimani', time: '1 hour ago' },
                  { action: 'generated term report for Form 2', user: 'James Mwangi', time: '2 hours ago' },
                  { action: 'added comment on student performance', user: 'Mary Njoroge', time: '3 hours ago' },
                ].map((item, i) => (
                  <div key={i} className="demo-activity-item">
                    <div className="demo-activity-avatar">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--ta-primary)">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-5 4-8 8-8s8 3 8 8" />
                      </svg>
                    </div>
                    <div className="demo-activity-content">
                      <span className="demo-activity-user">{item.user}</span>
                      <span className="demo-activity-action">{item.action}</span>
                    </div>
                    <span className="demo-activity-time">{item.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'classes' && (
          <div className="demo-classes">
            <div className="demo-classes-controls">
              <label htmlFor="class-select" className="demo-select-label">Select Class:</label>
              <select
                id="class-select"
                className="demo-select"
                value={selectedClass}
                onChange={(e) => setSelectedClass(Number(e.target.value))}
              >
                {classes.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="demo-classes-grid">
              <div className="demo-chart-card">
                <div className="demo-chart-header">
                  <h3 className="demo-chart-title">Class vs School Average</h3>
                </div>
                <div className="demo-chart-body">
                  <CChartBar
                    data={{
                      labels: ['Class Average', 'School Average'],
                      datasets: [{
                        label: 'Average Grade %',
                        backgroundColor: ['var(--ta-primary)', 'var(--ta-light)'],
                        borderColor: ['var(--ta-primary)', 'var(--ta-light)'],
                        borderWidth: 1,
                        data: [
                          getSubjectAverages(selectedClass).reduce((s, subj) => s + subj.average, 0) / getSubjectAverages(selectedClass).length,
                          schoolAverage,
                        ],
                      }],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: { legend: { display: false } },
                      scales: {
                        y: { min: 50, max: 90, ticks: { callback: (v) => `${v}%`, color: '#6b7280', font: { size: 11 } } },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="demo-chart-card">
                <div className="demo-chart-header">
                  <h3 className="demo-chart-title">Subject Breakdown</h3>
                </div>
                <div className="demo-chart-body">
                  <CChartBar
                    data={{
                      labels: getSubjectAverages(selectedClass).map(s => s.subject),
                      datasets: [{
                        label: 'Average',
                        backgroundColor: 'var(--ta-primary)',
                        borderColor: 'var(--ta-primary)',
                        data: getSubjectAverages(selectedClass).map(s => s.average),
                      }],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      indexAxis: 'y',
                      plugins: { legend: { display: false } },
                      scales: {
                        x: { ticks: { callback: (v) => `${v}%`, color: '#6b7280', font: { size: 11 } } },
                        y: { ticks: { font: { size: 11 } } },
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="demo-table-card">
              <div className="demo-table-header">
                <h3 className="demo-table-title">Top 5 Students - {classes.find(c => c.id === selectedClass)?.name}</h3>
              </div>
              <CTable hover className="demo-table">
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>#</CTableHeaderCell>
                    <CTableHeaderCell>Student</CTableHeaderCell>
                    <CTableHeaderCell>Admission No</CTableHeaderCell>
                    <CTableHeaderCell>Average</CTableHeaderCell>
                    <CTableHeaderCell>Attendance</CTableHeaderCell>
                    <CTableHeaderCell>Trend</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {topStudents
                    .filter(s => s.class === selectedClass)
                    .map((student, i) => (
                      <CTableRow key={student.id}>
                        <CTableDataCell>{i + 1}</CTableDataCell>
                        <CTableDataCell>
                          <div className="demo-student-cell">
                            <div className="demo-student-avatar">{student.firstName[0]}{student.lastName[0]}</div>
                            <div className="demo-student-info">
                              <span className="demo-student-name">{student.fullName}</span>
                              <span className="demo-student-gender">{student.gender}</span>
                            </div>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>{student.admissionNumber}</CTableDataCell>
                        <CTableDataCell>
                          <span className="demo-grade-badge demo-grade-badge--good">{student.currentAverage}%</span>
                        </CTableDataCell>
                        <CTableDataCell>{student.attendance}%</CTableDataCell>
                        <CTableDataCell>
                          <span className={`demo-trend-icon demo-trend-icon--${student.trend}`}>
                            {student.trend === 'up' && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ta-success)" strokeWidth="2">
                                <polyline points="18 15 12 9 6 15" />
                              </svg>
                            )}
                            {student.trend === 'down' && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ta-danger)" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9" />
                              </svg>
                            )}
                            {student.trend === 'stable' && (
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ta-light)" strokeWidth="2">
                                <line x1="5" y1="12" x2="19" y2="12" />
                              </svg>
                            )}
                          </span>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                </CTableBody>
              </CTable>
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="demo-students">
            <div className="demo-students-controls">
              <input
                type="search"
                className="demo-search"
                placeholder="Search by name or admission number..."
                aria-label="Search students"
              />
            </div>

            <div className="demo-students-grid">
              {topStudents.slice(0, 8).map((student) => (
                <div key={student.id} className="demo-student-card">
                  <div className="demo-student-card-header">
                    <div className="demo-student-card-avatar">
                      {student.firstName[0]}{student.lastName[0]}
                    </div>
                    <div className="demo-student-card-info">
                      <span className="demo-student-card-name">{student.fullName}</span>
                      <span className="demo-student-card-class">{student.classBg}</span>
                    </div>
                  </div>
                  <div className="demo-student-card-metrics">
                    <div className="demo-student-card-metric">
                      <span className="demo-student-card-metric-value">{student.currentAverage}%</span>
                      <span className="demo-student-card-metric-label">Grade</span>
                    </div>
                    <div className="demo-student-card-metric">
                      <span className="demo-student-card-metric-value">{student.attendance}%</span>
                      <span className="demo-student-card-metric-label">Attendance</span>
                    </div>
                    <div className="demo-student-card-metric">
                      <span className={`demo-student-card-trend demo-student-card-trend--${student.trend}`}>
                        {student.trend === 'up' && '+'}
                        {student.trend === 'down' && '-'}
                        {student.trend === 'stable' && '~'}
                      </span>
                      <span className="demo-student-card-metric-label">Trend</span>
                    </div>
                  </div>
                  <div className="demo-student-card-footer">
                    <span className={`demo-prediction-badge demo-prediction-badge--${student.predictedGrade >= 70 ? 'good' : student.predictedGrade >= 50 ? 'fair' : 'at-risk'}`}>
                      Predicted: {student.predictedGradeLabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="demo-students-note">Showing 8 of {students.length} students. Full data available in authenticated dashboard.</p>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="demo-attendance">
            <div className="demo-attendance-heatmap">
              <h3 className="demo-section-title">Attendance Heatmap - Last 12 Weeks</h3>
              <div className="demo-heatmap-grid">
                {attendanceHeatmap.map((week, weekIndex) => (
                  <div key={weekIndex} className="demo-heatmap-week">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`demo-heatmap-day demo-heatmap-day--${day.status}`}
                        title={`${day.date.toDateString()}: ${day.rate}% attendance`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="demo-heatmap-legend">
                <div className="demo-heatmap-legend-item">
                  <span className="demo-heatmap-legend-dot demo-heatmap-legend-dot--present" />
                  <span>Good (85%+)</span>
                </div>
                <div className="demo-heatmap-legend-item">
                  <span className="demo-heatmap-legend-dot demo-heatmap-legend-dot--partial" />
                  <span>Partial (60-84%)</span>
                </div>
                <div className="demo-heatmap-legend-item">
                  <span className="demo-heatmap-legend-dot demo-heatmap-legend-dot--absent" />
                  <span>Low (&lt;60%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'predictions' && (
          <div className="demo-predictions">
            <div className="demo-predictions-info">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ta-primary)" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Predicted grades are estimates based on current performance and historical trends. They are not final results.</span>
            </div>

            <div className="demo-predictions-grid">
              {topStudents.slice(0, 10).map((student) => (
                <div key={student.id} className="demo-prediction-card">
                  <div className="demo-prediction-header">
                    <span className="demo-prediction-name">{student.fullName}</span>
                    <span className="demo-prediction-class">{student.classBg}</span>
                  </div>
                  <div className="demo-prediction-body">
                    <div className="demo-prediction-row">
                      <span>Current Average</span>
                      <strong>{student.currentAverage}%</strong>
                    </div>
                    <div className="demo-prediction-row">
                      <span>Predicted Grade</span>
                      <strong>
                        <span className={`demo-prediction-badge demo-prediction-badge--${student.predictedGrade >= 70 ? 'good' : student.predictedGrade >= 50 ? 'fair' : student.predictedGrade >= 40 ? 'warning' : 'at-risk'}`}>
                          {student.predictedGradeLabel}
                        </span>
                      </strong>
                    </div>
                    <div className="demo-prediction-row">
                      <span>Trajectory</span>
                      <span className={`demo-trend-icon demo-trend-icon--${student.trend}`}>
                        {student.trend === 'up' && 'Improving'}
                        {student.trend === 'down' && 'Declining'}
                        {student.trend === 'stable' && 'Stable'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Demo Footer */}
      <footer className="demo-footer">
        <span>This is a public demo with dummy data.</span>
        <span>Timothy Academy Dashboard - Real-time school performance tracking</span>
      </footer>
    </div>
  );
};

export default DemoDashboard;
