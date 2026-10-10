import { useEffect, useState } from "react";
import "./reminder.css";

function Reminders() {

  const [reminders, setReminders] = useState([]);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [filter, setFilter] = useState("All");


  // LOAD REMINDERS

  useEffect(() => {
    const savedReminders = localStorage.getItem("healthReminders");

    if (savedReminders) {
      setReminders(JSON.parse(savedReminders));
    }
  }, []);


  // SAVE REMINDERS

  useEffect(() => {
    localStorage.setItem(
      "healthReminders",
      JSON.stringify(reminders)
    );
  }, [reminders]);


  // ADD REMINDER

  const addReminder = () => {

    if (!text || !date || !time || !type) {
      alert("Please fill all fields.");
      return;
    }

    const newReminder = {
      id: Date.now(),
      text: text,
      date: date,
      time: time,
      type: type
    };

    setReminders([...reminders, newReminder]);

    setText("");
    setDate("");
    setTime("");
    setType("");
  };


  // DELETE REMINDER

  const deleteReminder = (id) => {

    const updatedReminders = reminders.filter(
      (reminder) => reminder.id !== id
    );

    setReminders(updatedReminders);
  };


  // FILTER

  const filteredReminders =
    filter === "All"
      ? reminders
      : reminders.filter(
          (reminder) => reminder.type === filter
        );


  return (

    <div className="reminder-page">


      {/* HEADER */}

      <section className="reminder-header">

        <div>

          <h1>🌸 Health Reminder</h1>

          <p>
            Keep track of your important health activities
            and appointments.
          </p>

        </div>

        <div className="header-icon">
          🩺
        </div>

      </section>


      {/* STATISTICS */}

      <section className="reminder-stats">

        <div className="stat-card">
          <h2>{reminders.length}</h2>
          <p>Total Reminders</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              reminders.filter(
                (item) => item.type === "Medicine"
              ).length
            }
          </h2>
          <p>Medicine</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              reminders.filter(
                (item) => item.type === "Appointment"
              ).length
            }
          </h2>
          <p>Appointments</p>
        </div>

        <div className="stat-card">
          <h2>
            {
              reminders.filter(
                (item) => item.type === "Check-up"
              ).length
            }
          </h2>
          <p>Check-ups</p>
        </div>

      </section>


      {/* ADD REMINDER */}

      <section className="reminder-form">

        <h2>➕ Add New Reminder</h2>

        <div className="form-grid">

          <div className="input-group">

            <label>Reminder</label>

            <input
              type="text"
              placeholder="e.g. Doctor appointment"
              value={text}
              onChange={(e) =>
                setText(e.target.value)
              }
            />

          </div>


          <div className="input-group">

            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />

          </div>


          <div className="input-group">

            <label>Time</label>

            <input
              type="time"
              value={time}
              onChange={(e) =>
                setTime(e.target.value)
              }
            />

          </div>


          <div className="input-group">

            <label>Type</label>

            <select
              value={type}
              onChange={(e) =>
                setType(e.target.value)
              }
            >

              <option value="">
                Select Type
              </option>

              <option value="Medicine">
                💊 Medicine
              </option>

              <option value="Appointment">
                🩺 Appointment
              </option>

              <option value="Check-up">
                🏥 Check-up
              </option>

              <option value="Other">
                📌 Other
              </option>

            </select>

          </div>

        </div>


        <button
          className="add-button"
          onClick={addReminder}
        >
          Add Reminder
        </button>

      </section>


      {/* FILTER */}

      <section className="filter-section">

        <h2>📋 My Reminders</h2>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
        >

          <option value="All">All Reminders</option>
          <option value="Medicine">Medicine</option>
          <option value="Appointment">Appointment</option>
          <option value="Check-up">Check-up</option>
          <option value="Other">Other</option>

        </select>

      </section>


      {/* REMINDER CARDS */}

      <section className="reminder-list">

        {filteredReminders.length === 0 ? (

          <div className="empty-state">

            <div>📅</div>

            <h3>No reminders yet</h3>

            <p>
              Add your first health reminder above.
            </p>

          </div>

        ) : (

          filteredReminders.map(
            (reminder) => (

              <div
                className="reminder-card"
                key={reminder.id}
              >

                <div className="reminder-icon">

                  {reminder.type === "Medicine"
                    ? "💊"
                    : reminder.type === "Appointment"
                    ? "🩺"
                    : reminder.type === "Check-up"
                    ? "🏥"
                    : "📌"}

                </div>


                <div className="reminder-details">

                  <h3>
                    {reminder.text}
                  </h3>

                  <p>
                    📅 {reminder.date}
                  </p>

                  <p>
                    ⏰ {reminder.time}
                  </p>

                  <span className="reminder-type">
                    {reminder.type}
                  </span>

                </div>


                <button
                  className="delete-button"
                  onClick={() =>
                    deleteReminder(reminder.id)
                  }
                >
                  🗑️
                </button>

              </div>

            )
          )

        )}

      </section>


      {/* FOOTER TIP */}

      <section className="reminder-tip">

        <h3>💡 Healthy Reminder Tip</h3>

        <p>
          Keeping important health activities organized
          can make it easier to remember appointments,
          check-ups and other personal health tasks.
        </p>

      </section>


    </div>

  );

}

export default Reminders;