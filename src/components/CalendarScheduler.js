"use client";

import { useState, useEffect } from "react";

export default function CalendarScheduler() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: "", email: "", whatsapp: "", desc: "" });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Generate calendar days for current month view
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const days = [];
  // Add empty spaces for previous month's padding
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }
  // Add actual days
  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(year, month, i));
  }

  // Handle month switching
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedTime(null);
  };

  // Mock time slots for available days
  const timeSlots = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM", "04:30 PM"];

  // Helper check: is a day available? (Mon-Fri and in the future / present)
  const isDayAvailable = (date) => {
    if (!date) return false;
    const day = date.getDay();
    const today = new Date();
    today.setHours(0,0,0,0);
    return day !== 0 && day !== 6 && date >= today;
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) {
      setFormError("Name and Email are required to confirm booking.");
      return;
    }
    
    setIsSubmitting(true);
    setFormError("");

    try {
      const response = await fetch("/api/send-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: bookingForm.name,
          email: bookingForm.email,
          whatsapp: bookingForm.whatsapp,
          date: selectedDate.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' }),
          time: selectedTime,
          description: bookingForm.desc,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to book slot.");
      }

      setIsBooked(true);
    } catch (err) {
      console.error(err);
      setFormError(err.message || "An unexpected error occurred while booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glass-card" style={{ padding: "2rem", background: "var(--bg-secondary)", border: "1px solid var(--border-light)" }}>
      <div className="glass-card-content">
        {!isBooked ? (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-primary)" }}>15-Min Introductory Call</h3>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button onClick={prevMonth} className="btn-secondary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>&larr;</button>
                <button onClick={nextMonth} className="btn-secondary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem" }}>&rarr;</button>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
              Selected Month: <strong>{monthNames[month]} {year}</strong> (Available slots on Weekdays).
            </p>

            <div className="grid-2" style={{ gap: "2rem" }}>
              {/* Calendar Grid Container */}
              <div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.35rem", textAlign: "center", marginBottom: "0.5rem" }}>
                  {daysOfWeek.map((day) => (
                    <span key={day} style={{ fontSize: "0.75rem", fontWeight: "600", color: "var(--text-muted)", fontFamily: "var(--font-display)" }}>
                      {day}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.35rem" }}>
                  {days.map((date, idx) => {
                    if (!date) return <div key={`empty-${idx}`} />;
                    
                    const isAvailable = isDayAvailable(date);
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    
                    return (
                      <button
                        key={idx}
                        disabled={!isAvailable}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime(null);
                        }}
                        style={{
                          aspectRatio: "1",
                          border: isSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                          borderRadius: "8px",
                          background: isSelected 
                            ? "rgba(5, 150, 105, 0.08)" 
                            : isAvailable ? "var(--bg-secondary)" : "var(--bg-tertiary)",
                          color: isSelected 
                            ? "var(--accent-primary)" 
                            : isAvailable ? "var(--text-primary)" : "var(--text-muted)",
                          fontWeight: isSelected || isAvailable ? "600" : "400",
                          fontSize: "0.85rem",
                          cursor: isAvailable ? "pointer" : "not-allowed",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          transition: "all var(--transition-fast)"
                        }}
                        className="calendar-day-btn"
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots & Booking Column */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                {selectedDate ? (
                  <div>
                    <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "1rem" }}>
                      Select Time for {selectedDate.toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: 'numeric' })}
                    </h4>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {timeSlots.map((time) => {
                        const isTimeSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            style={{
                              padding: "0.75rem",
                              borderRadius: "8px",
                              border: isTimeSelected ? "2px solid var(--accent-primary)" : "1px solid var(--border-light)",
                              background: isTimeSelected ? "rgba(5, 150, 105, 0.05)" : "var(--bg-secondary)",
                              color: isTimeSelected ? "var(--accent-primary)" : "var(--text-secondary)",
                              fontWeight: isTimeSelected ? "600" : "500",
                              cursor: "pointer",
                              textAlign: "center",
                              transition: "all var(--transition-fast)"
                            }}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>

                    {selectedTime && (
                      <form onSubmit={handleBookingSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-light)", paddingTop: "1.25rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Your Name</label>
                          <input 
                            type="text" 
                            required
                            placeholder="Enter name"
                            value={bookingForm.name} 
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                            style={{ padding: "0.6rem 0.8rem", borderRadius: "6px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.9rem", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Work Email</label>
                          <input 
                            type="email" 
                            required
                            placeholder="Enter email"
                            value={bookingForm.email} 
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                            style={{ padding: "0.6rem 0.8rem", borderRadius: "6px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.9rem", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>WhatsApp Number (Optional)</label>
                          <input 
                            type="tel" 
                            placeholder="e.g. +1 234 567 8900"
                            value={bookingForm.whatsapp} 
                            onChange={(e) => setBookingForm({...bookingForm, whatsapp: e.target.value})}
                            style={{ padding: "0.6rem 0.8rem", borderRadius: "6px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.9rem", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                          />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                          <label style={{ fontSize: "0.8rem", fontWeight: "600", color: "var(--text-secondary)" }}>Project Notes (Optional)</label>
                          <textarea 
                            rows="2"
                            placeholder="Details about your system goals..."
                            value={bookingForm.desc} 
                            onChange={(e) => setBookingForm({...bookingForm, desc: e.target.value})}
                            style={{ padding: "0.6rem 0.8rem", borderRadius: "6px", border: "1px solid var(--border-light)", outline: "none", fontSize: "0.9rem", resize: "none", fontFamily: "var(--font-body)", background: "var(--bg-primary)", color: "var(--text-primary)" }}
                          />
                        </div>
                        {formError && <span style={{ color: "red", fontSize: "0.8rem" }}>{formError}</span>}
                        <button 
                          type="submit" 
                          className="btn-primary" 
                          disabled={isSubmitting}
                          style={{ 
                            width: "100%", 
                            marginTop: "0.5rem", 
                            opacity: isSubmitting ? 0.6 : 1, 
                            cursor: isSubmitting ? "not-allowed" : "pointer" 
                          }}
                        >
                          {isSubmitting ? "Confirming Slot..." : "Confirm Booking Slot"}
                        </button>
                      </form>
                    )}
                  </div>
                ) : (
                  <div style={{ 
                    flexGrow: 1, 
                    display: "flex", 
                    flexDirection: "column", 
                    justifyContent: "center", 
                    alignItems: "center", 
                    textAlign: "center",
                    border: "2px dashed var(--border-light)",
                    borderRadius: "12px",
                    padding: "2rem"
                  }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "1rem" }}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", fontWeight: "500" }}>
                      Select a date on the calendar to view available 15-minute call slots.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <div className="planner-success-screen">
            <div className="success-icon-circle" style={{ background: "rgba(16, 185, 129, 0.1)", animation: "none" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            
            <h3 className="success-title">Slot Confirmed!</h3>
            <p className="success-desc">
              Your 15-min introductory call is locked.
            </p>
            
            <div className="success-data-box" style={{ maxWidth: "350px" }}>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: 0 }}>
                📅 <strong>Date:</strong> {selectedDate.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.25rem", marginBottom: 0 }}>
                ⏰ <strong>Time:</strong> {selectedTime} (EST)
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "0.25rem", marginBottom: 0 }}>
                👤 <strong>Host:</strong> Debayan (Zero Theorys)
              </p>
            </div>

            <div className="success-warning-box" style={{ maxWidth: "350px" }}>
              <span style={{ fontSize: "1rem", marginTop: "-1px" }}>ℹ️</span>
              <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", margin: 0, lineHeight: "1.4" }}>
                As this is an automated confirmation email, please check your <strong>Spam or Junk folder</strong> if it does not appear in your inbox within a few minutes.
              </p>
            </div>

            <button onClick={() => {
              setIsBooked(false);
              setSelectedDate(null);
              setSelectedTime(null);
              setBookingForm({ name: "", email: "", whatsapp: "", desc: "" });
            }} className="btn-secondary">
              Book Another Meeting
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
