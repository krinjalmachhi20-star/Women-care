import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./doctors.css";

const doctorsData = [
  {
    name: "Dr. Monika Agrawal",
    type: "Gynecologist",
    gender: "female",
    clinic: "Her Care Clinic",
    address: "Silver Astra, JB Nagar Rd, opp. Amar Juice Centre, C-Wing, Tarun Bharat, Andheri East, Mumbai, Maharashtra 400099",
    phone: "+91 81045 07870"
  },
  {
    name: "Dr. Rana Choudhary",
    type: "Gynecologist",
    gender: "male",
    clinic: "Wockhardt Hospitals",
    address: "Dr. A. R, Dr Anandrao Nair Marg, Agripada, Mumbai, Maharashtra 400011",
    phone: "+91 73043 56761"
  },
  {
    name: "Dr. Pankti Ghelani",
    type: "Gynecologist",
    gender: "female",
    clinic: "Nulife Hospital",
    address: "1st floor, Dr Pankti Ghelani Nulife Hospital A-1, Lal Bahadur Shastri Marg, near Telephone Exchange Road, Ghatkopar West, Mumbai, Maharashtra 400086",
    phone: "+91 98193 04433"
  },
  {
    name: "Dr. Sanjay Damle",
    type: "Gynecologist",
    gender: "male",
    clinic: "Kalbadevi Polyclinic",
    address: "Ramdas Building, 439, Kalbadevi Rd, Bhangwadi, Marine Lines East, Mumbai, Maharashtra 400002",
    phone: "+91 70451 80399"
  },
  {
    name: "Dr. Mridula Sarda",
    type: "Gynecologist",
    gender: "female",
    clinic: "Matritva Women's Clinic",
    address: "Satidhan, Tejpal Scheme Main Rd, Vishnu Prasad Society, Navpada, Vile Parle East, Mumbai, Maharashtra 400057",
    phone: "+91 98190 19570"
  },
  {
    name: "Dr. Abha Sanghavi",
    type: "Gynecologist",
    gender: "female",
    clinic: "Matrutva Women's Clinic",
    address: "5th floor, Silver Point, Sant Narsi Mehta Rd, Maneklal Estate, Ghatkopar West, Mumbai, Maharashtra 400086",
    phone: "+91 70217 74475"
  },
  {
    name: "Dr. Suruchi Desai",
    type: "Gynecologist",
    gender: "female",
    clinic: "Nanavati Max Super Speciality Hospital",
    address: "Ground Floor, OPD 1, Swami Vivekanand Rd, Vile Parle West, Mumbai, Maharashtra 400056",
    phone: "+91 92688 80303"
  },
  {
    name: "Dr. Shalaka Bhagunde",
    type: "Gynecologist",
    gender: "female",
    clinic: "All Woman's Clinic",
    address: "Sita Sadan, Sona Hospital, 82, Shivaji Nagar Rd, Santacruz East, Mumbai, Maharashtra 400055",
    phone: "+91 98196 68669"
  },
  {
    name: "Dr. Rajeev Agarwal",
    type: "Gynecologist",
    gender: "male",
    clinic: "Babies And US Fertility - Powai",
    address: "Unit 139, Main Road, Powai, Mumbai, Maharashtra 400076",
    phone: "+91 98200 10039"
  },
  {
    name: "Dr. Anju Methil",
    type: "Dermatologist",
    gender: "female",
    clinic: "The Skin and Shape Clinic",
    address: "302 Aston Building, Above Suburban Diagnostics, Sundervan Complex Rd, Circle, near Lokhandwala, Andheri West, Mumbai, Maharashtra 400053",
    phone: "+91 87799 11797"
  },
  {
    name: "Dr. Sonia Tekchandani",
    type: "Dermatologist",
    gender: "female",
    clinic: "Tender Skin & Hair Clinic",
    address: "Second floor, Cupid Apartments, Gokul Building, 201, Linking Rd, opposite Raymond Store, Khar West, Mumbai, Maharashtra 400052",
    phone: "+91 70390 44525"
  },
  {
    name: "Dr. Pooja Chopra",
    type: "Dermatologist",
    gender: "female",
    clinic: "The SkinTalk Clinic",
    address: "4th Floor, Samartha Aishwarya, 418, above Marks and Spencer, opposite Highland park, Andheri West, Mumbai, Maharashtra 400053",
    phone: "+91 98920 93288"
  },
  {
    name: "Dr. Apratim Goel",
    type: "Dermatologist",
    gender: "female",
    clinic: "Cutis Skin Clinic",
    address: "First Floor, Telephone Exchange, 12th Rd, opposite Khar, Khar West, Mumbai, Maharashtra 400052",
    phone: "+91 22 2605 3241"
  },
  {
    name: "Dr. Zeenat Bhalwani",
    type: "Dermatologist",
    gender: "female",
    clinic: "Dr. Zeenat Bhalwanis Skin Clinic",
    address: "T-39, Sunshine Building, Vastu Precinct, 602, Shastri Nagar Lane 2, Andheri West, Mumbai, Maharashtra 400053",
    phone: "+91 98214 05875"
  },
  {
    name: "Dr. Zara Dadi",
    type: "Dermatologist",
    gender: "female",
    clinic: "The Clinic by Dr. Zara",
    address: "3rd Floor, Nirav Apartment, 1, Gulmohar Rd, JVPD Scheme, Juhu, Mumbai, Maharashtra 400049",
    phone: "+91 72400 12002"
  },
  {
    name: "Dr. Geetanjali Shetty",
    type: "Dermatologist",
    gender: "female",
    clinic: "Revitalis Skin and Hair Clinic",
    address: "101/102, Asmi Dreamz, Opp Ratna Hotel, Junction of S V Road and MG Rd, Goregaon West, Mumbai, Maharashtra 400104",
    phone: "+91 22 2871 3121"
  },
  {
    name: "Dr. Pallavi Rathi",
    type: "Dermatologist",
    gender: "female",
    clinic: "My Skin My Health",
    address: "Pranik Chambers Unit No. A 407/408, A Wing, Saki Vihar Rd, Marol, Saki Naka, Mumbai, Maharashtra 400072",
    phone: "+91 22 4970 8251"
  }
];

function Doctors() {
  const [user, setUser] = useState(null);
  const [specialty, setSpecialty] = useState("Gynecologist");
  const [searchName, setSearchName] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("womenCareUser");
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (savedUser && loggedIn === "true") {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSpecialty =
      specialty === "All" || doc.type.toLowerCase() === specialty.toLowerCase();

    const matchesName =
      searchName.trim() === "" ||
      doc.name.toLowerCase().includes(searchName.trim().toLowerCase());

    const matchesLocation =
      searchLocation.trim() === "" ||
      doc.address.toLowerCase().includes(searchLocation.trim().toLowerCase()) ||
      doc.clinic.toLowerCase().includes(searchLocation.trim().toLowerCase());

    return matchesSpecialty && matchesName && matchesLocation;
  });

  const getHeadingTitle = () => {
    if (specialty === "Gynecologist") return "Find a Gynecologist";
    if (specialty === "Dermatologist") return "Find a Dermatologist";
    return "Find a Doctor";
  };

  const getHeadingSubtitle = () => {
    if (specialty === "Gynecologist") {
      return "Search and connect with experienced gynecologists near you for better women's health.";
    }
    if (specialty === "Dermatologist") {
      return "Search and connect with certified dermatologists and skin specialists near you.";
    }
    return "Search and connect with experienced healthcare specialists near you for better women's health.";
  };

  const getResultsCountText = () => {
    const count = filteredDoctors.length;
    let label = "doctors";
    if (specialty === "Gynecologist") label = count === 1 ? "gynecologist" : "gynecologists";
    else if (specialty === "Dermatologist") label = count === 1 ? "dermatologist" : "dermatologists";
    return `Showing ${count} ${label}`;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleResetFilters = () => {
    setSearchName("");
    setSearchLocation("");
    setSpecialty("Gynecologist");
  };

  return (
    <div className="doctors-page">
      
      <nav className="navbar">
        <Link to="/home">
          <h2>Women Care</h2>
        </Link>
        <div className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/health_Info">Health Information</Link>
          <Link to="/reminder">Reminders</Link>
          <Link to="/doctors" className="active-nav-link">Doctors Directory</Link>
          <Link to="/prescription">Prescription Simplifier</Link>
          <Link to="/registration">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        {user && (
          <div className="welcome-user">
            Welcome, {user.name} 🌸
          </div>
        )}
      </nav>

      <main className="doctors-container">
        
        <section className="doctors-hero">
          <div className="doctors-hero-text">
            <h1>{getHeadingTitle()}</h1>
            <p>{getHeadingSubtitle()}</p>
          </div>
          <div className="doctors-hero-visual">
            <img
              src="/images/doctor_header.jpg"
              alt="Healthcare Specialist Illustration"
              className="doctors-hero-img"
            />
          </div>
        </section>

        <section className="search-card">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            
            <div className="form-group">
              <label htmlFor="search-name">Search Doctor Name</label>
              <div className="input-wrapper">
                <span className="input-icon">🔍</span>
                <input
                  id="search-name"
                  type="text"
                  placeholder="e.g. Dr. Monika Agrawal"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="search-location">Location</label>
              <div className="input-wrapper">
                <span className="input-icon">📍</span>
                <input
                  id="search-location"
                  type="text"
                  placeholder="e.g. Mumbai, Andheri"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="search-specialty">Specialty</label>
              <div className="input-wrapper select-wrapper">
                <span className="input-icon">🩺</span>
                <select
                  id="search-specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                >
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="All">All Specialties</option>
                </select>
                <span className="select-chevron">⌄</span>
              </div>
            </div>

            <div className="form-group-btn">
              <button type="submit" className="search-submit-btn">
                <span>🔍</span> Search
              </button>
            </div>
          </form>
        </section>

        <div className="results-meta">
          <p className="results-count-text">{getResultsCountText()}</p>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="doctors-grid">
            {filteredDoctors.map((doc, index) => (
              <div className="doctor-card" key={index}>
                <div className="doctor-avatar-container">
                  <img
                    src={
                      doc.gender === "male"
                        ? "/images/doctor_avatar_male.jpg"
                        : "/images/doctor_avatar.jpg"
                    }
                    alt={doc.name}
                    className="doctor-avatar"
                  />
                </div>

                <div className="doctor-info">
                  <h3 className="doctor-name">{doc.name}</h3>

                  <div className="specialty-pill-wrap">
                    <span className="specialty-pill">{doc.type}</span>
                  </div>

                  <div className="doctor-meta-item">
                    <span className="meta-icon">🏢</span>
                    <p>
                      <strong>Clinic:</strong> {doc.clinic}
                    </p>
                  </div>

                  <div className="doctor-meta-item">
                    <span className="meta-icon">📍</span>
                    <p>
                      <strong>Address:</strong> {doc.address}
                    </p>
                  </div>

                  <div className="doctor-action-row">
                    <a href={`tel:${doc.phone}`} className="call-clinic-btn">
                      <span>📞</span> Call clinic
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-results-card">
            <div className="empty-icon">🔍</div>
            <h3>No doctors found</h3>
            <p>
              We couldn't find any specialist matching your current filters. Try searching with a different name, location, or specialty.
            </p>
            <button onClick={handleResetFilters} className="reset-filter-btn">
              Reset Filters
            </button>
          </div>
        )}

        <div className="directory-note">
          <span className="note-icon">⚠️</span>
          <p>
            Contact details, OPD timings, and clinic consultation schedules may vary. 
            We recommend calling the clinic beforehand to confirm appointment availability.
          </p>
        </div>
      </main>

      <footer className="directory-footer">
        <p>Women Care © 2026. Dedicated to women's healthcare and awareness.</p>
      </footer>
    </div>
  );
}

export default Doctors;
