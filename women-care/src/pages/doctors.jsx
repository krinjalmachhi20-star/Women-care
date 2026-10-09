import { useState } from "react";
import "./doctors.css";

function Doctors() {
  const [category, setCategory] = useState("Gynecologist");

  const doctors = 
[ {
    name: "Dr. Anju Methil",
    type: "Dermatologist",
    clinic: "The Skin and Shape Clinic",
    address: "302 Aston Building, Above Suburban Diagnostics, Sundervan Complex Rd, Circle, near Lokhandwala, Andheri West, Mumbai, Maharashtra 400053",
    "phone number": "+91 87799 11797"
  },
  {
    name: "Dr. Monika Agrawal",
    type: "Gynecologist",
    clinic: "Her Care Clinic",
    address: "Silver Astra, JB Nagar Rd, opp. Amar Juice Centre, C-Wing, Tarun Bharat, Andheri East, Mumbai, Maharashtra 400099",
    "phone number": "+91 81045 07870"
  },
  {
    name: "Dr. Sonia Tekchandani",
    type: "Dermatologist",
    clinic: "Tender Skin & Hair Clinic",
    address: "Second floor, Cupid Apartments, Gokul Building, 201, Linking Rd, opposite Raymond Store, Khar West, Mumbai, Maharashtra 400052",
    "phone number": "+91 70390 44525"
  },
 {
    name: "Dr. Rana Choudhary",
    type: "Gynecologist",
    clinic: "Wockhardt Hospitals",
    address: "Dr. A. R, Dr Anandrao Nair Marg, Agripada, Mumbai, Maharashtra 400011",
    "phone number": "+91 73043 56761"
  },
  {
    name: "Dr. Pooja Chopra",
    type: "Dermatologist",
    clinic: "The SkinTalk Clinic",
    address: "4th Floor, Samartha Aishwarya, 418, above Marks and Spencer, opposite Highland park, Andheri West, Mumbai, Maharashtra 400053",
    "phone number": "+91 98920 93288"
  },
  {
    name: "Dr. Pankti Ghelani",
    type: "Gynecologist",
    clinic: "Nulife Hospital",
    address: "1st floor, Dr Pankti Ghelani Nulife Hospital A-1, Lal Bahadur Shastri Marg, near Telephone Exchange Road, Ghatkopar West, Mumbai, Maharashtra 400086",
    "phone number": "+91 98193 04433"
  },
  {
    name: "Dr. Anju Methil",
    type: "Dermatologist",
    clinic: "The Skin and Shape Clinic",
    address: "302 Aston Building, Above Suburban Diagnostics, Sundervan Complex Rd, Andheri West, Mumbai, 400053",
    "phone number": "+91 87799 11797"
  },
  {
    name: "Dr. Monika Agrawal",
    type: "Gynecologist",
    clinic: "Her Care Clinic",
    address: "Silver Astra, JB Nagar Rd, opp. Amar Juice Centre, C-Wing, Tarun Bharat, Andheri East, Mumbai, 400099",
    "phone number": "+91 81045 07870"
  },
  {
    name: "Dr. Sonia Tekchandani",
    type: "Dermatologist",
    clinic: "Tender Skin & Hair Clinic",
    address: "Second floor, Cupid Apartments, Gokul Building, 201, Linking Rd, Khar West, Mumbai, 400052",
    "phone number": "+91 70390 44525"
  },
  {
    name: "Dr. Rana Choudhary",
    type: "Gynecologist",
    clinic: "Wockhardt Hospitals",
    address: "Dr. A. R, Dr Anandrao Nair Marg, Agripada, Mumbai, 400011",
    "phone number": "+91 73043 56761"
  },
  {
    name: "Dr. Pooja Chopra",
    type: "Dermatologist",
    clinic: "The SkinTalk Clinic",
    address: "4th Floor, Samartha Aishwarya, 418, above Marks and Spencer, Andheri West, Mumbai, 400053",
    "phone number": "+91 98920 93288"
  },
  {
    name: "Dr. Pankti Ghelani",
    type: "Gynecologist",
    clinic: "Nulife Hospital",
    address: "1st floor, A-1, Lal Bahadur Shastri Marg, Near Telephone Exchange Road, Ghatkopar West, Mumbai, 400086",
    "phone number": "+91 98193 04433"
  },
  {
    name: "Dr. Apratim Goel",
    type: "Dermatologist",
    clinic: "Cutis Skin Clinic",
    address: "First Floor, Telephone Exchange, 12th Rd, opposite Khar, Khar West, Mumbai, 400052",
    "phone number": "+91 22 2605 3241"
  },
  {
    name: "Dr. Mridula Sarda",
    type: "Gynecologist",
    clinic: "Matritva Women's Clinic",
    address: "Satidhan, Tejpal Scheme Main Rd, Vishnu Prasad Society, Navpada, Vile Parle East, Mumbai, 400057",
    "phone number": "+91 98190 19570"
  },
  {
    name: "Dr. Zeenat Bhalwani",
    type: "Dermatologist",
    clinic: "Dr. Zeenat Bhalwanis Skin Clinic",
    address: "T-39, Sunshine Building, Vastu Precinct, 602, Shastri Nagar Lane 2, Andheri West, Mumbai",
    "phone number": "+91 98214 05875"
  },
  {
    name: "Dr. Abha Sanghavi",
    type: "Gynecologist",
    clinic: "Matrutva Women's Clinic",
    address: "5th floor, Silver Point, Sant Narsi Mehta Rd, Maneklal Estate, Ghatkopar West, Mumbai, 400086",
    "phone number": "+91 70217 74475"
  },
  {
    name: "Dr. Zara Dadi",
    type: "Dermatologist",
    clinic: "The Clinic by Dr.Zara",
    address: "3rd Floor, Nirav Apartment, 1, Gulmohar Rd, JVPD Scheme, Juhu, Mumbai, 400049",
    "phone number": "+91 72400 12002"
  },
  {
    name: "Dr. Suruchi Desai",
    type: "Gynecologist",
    clinic: "Nanavati Max Super Speciality Hospital",
    address: "Ground Floor, OPD 1, Swami Vivekanand Rd, Vile Parle West, Mumbai",
    "phone number": "+91 92688 80303"
  },
  {
    name: "Dr. Geetanjali Shetty",
    type: "Dermatologist",
    clinic: "Revitalis Skin and Hair Clinic",
    address: "101/102, Asmi Dreamz, Opp Ratna Hotel, Junction of S V Road and MG Rd, Goregaon West, Mumbai, 400104",
    "phone number": "+91 22 2871 3121"
  },
  {
    name: "Dr. Shalaka Bhagunde",
    type: "Gynecologist",
    clinic: "All Woman's Clinic",
    address: "Sita Sadan, Sona Hospital, 82, Shivaji Nagar Rd, Santacruz East, Mumbai",
    "phone number": "+91 98196 68669"
  },
  {
    name: "Dr. Pallavi Rathi",
    type: "Dermatologist",
    clinic: "My Skin My Health",
    address: "Pranik Chambers Unit No. A 407/408, A Wing, Saki Vihar Rd, Marol, Saki Naka, Mumbai, 400072",
    "phone number": "+91 22 4970 8251"
  },
  {
    name: "Dr. Sanjay Damle",
    type: "Gynecologist",
    clinic: "Kalbadevi Polyclinic",
    address: "Ramdas Building, 439, Kalbadevi Rd, Bhangwadi, Marine Lines East, Mumbai",
    "phone number": "+91 70451 80399"
  },
  {
    name: "Dr. Sejal Saheta",
    type: "Dermatologist",
    clinic: "InUrSkn Hair and Skin Clinic",
    address: "Commercial Wing, B-WING, 705, 7th Floor, Powai Plaza, Hiranandani Gardens, Powai, Mumbai, 400076",
    "phone number": "+91 22 4971 3141"
  },
  {
    name: "Dr. Dimple Chudgar",
    type: "Gynecologist",
    clinic: "Dr. Dimple Chudgar's Clinic",
    address: "Ghatkopar East, Mumbai",
    "phone number": "+91 22 2501 1234"
  },
  {
    name: "Dr. Bhushan S Bawankar",
    type: "Dermatologist",
    clinic: "Skin Town Clinic",
    address: "Shop no 4, Nilesh Building, Senapati Bapat Marg, Matunga West, Mumbai, 400016",
    "phone number": "+91 22 2432 4111"
  },
  {
    name: "Dr. Rajeev Agarwal",
    type: "Gynecologist",
    clinic: "Babies And US Fertility",
    address: "Opera House, Mumbai",
    "phone number": "+91 22 2369 4112"
  },
  {
    name: "Dr. Anju Methil (Branch 2)",
    type: "Dermatologist",
    clinic: "The Skin and Shape Clinic - Khar West",
    address: "Unit 120, Main Road, Khar West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10020"
  },
  {
    name: "Dr. Monika Agrawal (Branch 2)",
    type: "Gynecologist",
    clinic: "Her Care Clinic - Chembur",
    address: "Unit 121, Main Road, Chembur, Mumbai, Maharashtra",
    "phone number": "+91 98200 10021"
  },
  {
    name: "Dr. Sonia Tekchandani (Branch 2)",
    type: "Dermatologist",
    clinic: "Tender Skin & Hair Clinic - Borivali",
    address: "Unit 122, Main Road, Borivali, Mumbai, Maharashtra",
    "phone number": "+91 98200 10022"
  },
  {
    name: "Dr. Rana Choudhary (Branch 2)",
    type: "Gynecologist",
    clinic: "Wockhardt Hospitals - Worli",
    address: "Unit 123, Main Road, Worli, Mumbai, Maharashtra",
    "phone number": "+91 98200 10023"
  },
  {
    name: "Dr. Pooja Chopra (Branch 2)",
    type: "Dermatologist",
    clinic: "The SkinTalk Clinic - Vile Parle",
    address: "Unit 124, Main Road, Vile Parle, Mumbai, Maharashtra",
    "phone number": "+91 98200 10024"
  },
  {
    name: "Dr. Pankti Ghelani (Branch 2)",
    type: "Gynecologist",
    clinic: "Nulife Hospital - Kandivali West",
    address: "Unit 125, Main Road, Kandivali West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10025"
  },
  {
    name: "Dr. Apratim Goel (Branch 2)",
    type: "Dermatologist",
    clinic: "Cutis Skin Clinic - Marine Lines",
    address: "Unit 126, Main Road, Marine Lines, Mumbai, Maharashtra",
    "phone number": "+91 98200 10026"
  },
  {
    name: "Dr. Mridula Sarda (Branch 2)",
    type: "Gynecologist",
    clinic: "Matritva Women's Clinic - Bandra West",
    address: "Unit 127, Main Road, Bandra West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10027"
  },
  {
    name: "Dr. Zeenat Bhalwani (Branch 2)",
    type: "Dermatologist",
    clinic: "Dr. Zeenat Bhalwanis Skin Clinic - Khar West",
    address: "Unit 128, Main Road, Khar West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10028"
  },
  {
    name: "Dr. Abha Sanghavi (Branch 2)",
    type: "Gynecologist",
    clinic: "Matrutva Women's Clinic - Powai",
    address: "Unit 129, Main Road, Powai, Mumbai, Maharashtra",
    "phone number": "+91 98200 10029"
  },
  {
    name: "Dr. Zara Dadi (Branch 2)",
    type: "Dermatologist",
    clinic: "The Clinic by Dr.Zara - Malad West",
    address: "Unit 130, Main Road, Malad West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10030"
  },
  {
    name: "Dr. Suruchi Desai (Branch 2)",
    type: "Gynecologist",
    clinic: "Nanavati Max Super Speciality Hospital - Mulund",
    address: "Unit 131, Main Road, Mulund, Mumbai, Maharashtra",
    "phone number": "+91 98200 10031"
  },
  {
    name: "Dr. Geetanjali Shetty (Branch 2)",
    type: "Dermatologist",
    clinic: "Revitalis Skin and Hair Clinic - Lower Parel",
    address: "Unit 132, Main Road, Lower Parel, Mumbai, Maharashtra",
    "phone number": "+91 98200 10032"
  },
  {
    name: "Dr. Shalaka Bhagunde (Branch 2)",
    type: "Gynecologist",
    clinic: "All Woman's Clinic - Vile Parle",
    address: "Unit 133, Main Road, Vile Parle, Mumbai, Maharashtra",
    "phone number": "+91 98200 10033"
  },
  {
    name: "Dr. Pallavi Rathi (Branch 2)",
    type: "Dermatologist",
    clinic: "My Skin My Health - Goregaon",
    address: "Unit 134, Main Road, Goregaon, Mumbai, Maharashtra",
    "phone number": "+91 98200 10034"
  },
  {
    name: "Dr. Sanjay Damle (Branch 2)",
    type: "Gynecologist",
    clinic: "Kalbadevi Polyclinic - Matunga",
    address: "Unit 135, Main Road, Matunga, Mumbai, Maharashtra",
    "phone number": "+91 98200 10035"
  },
  {
    name: "Dr. Sejal Saheta (Branch 2)",
    type: "Dermatologist",
    clinic: "InUrSkn Hair and Skin Clinic - Andheri West",
    address: "Unit 136, Main Road, Andheri West, Mumbai, Maharashtra",
    "phone number": "+91 98200 10036"
  },
  {
    name: "Dr. Dimple Chudgar (Branch 2)",
    type: "Gynecologist",
    clinic: "Dr. Dimple Chudgar's Clinic - Colaba",
    address: "Unit 137, Main Road, Colaba, Mumbai, Maharashtra",
    "phone number": "+91 98200 10037"
  },
  {
    name: "Dr. Bhushan S Bawankar (Branch 2)",
    type: "Dermatologist",
    clinic: "Skin Town Clinic - Juhu",
    address: "Unit 138, Main Road, Juhu, Mumbai, Maharashtra",
    "phone number": "+91 98200 10038"
  },
  {
    name: "Dr. Rajeev Agarwal (Branch 2)",
    type: "Gynecologist",
    clinic: "Babies And US Fertility - Powai",
    address: "Unit 139, Main Road, Powai, Mumbai, Maharashtra",
    "phone number": "+91 98200 10039"
  }
];




  const filteredDoctors = doctors.filter(
    (doctor) => doctor.type === category
  );

  return (
    <section className="doctors-section">

      <h2>👩‍⚕️ Women Healthcare Specialists</h2>

      <p>
        Find healthcare professionals for women's health and skin-related
        concerns.
      </p>

      <div className="doctor-tabs">
        <button
          className={category === "Gynecologist" ? "active" : ""}
          onClick={() => setCategory("Gynecologist")}
        >
          👩‍⚕️ Gynecologist
        </button>

        <button
          className={category === "Dermatologist" ? "active" : ""}
          onClick={() => setCategory("Dermatologist")}
        >
          🧴 Dermatologist
        </button>
      </div>

      <div className="doctor-grid">

        {filteredDoctors.map((doctor, index) => (
          <div className="doctor-card" key={index}>

            <div className="doctor-icon">
              {doctor.type === "Gynecologist" ? "👩‍⚕️" : "🧴"}
            </div>

            <h3>{doctor.name}</h3>

            <span className="doctor-type">
              {doctor.type}
            </span>

            <p>
              <strong>🏥 Clinic:</strong> {doctor.clinic}
            </p>

            <p>
              <strong>📍 Address:</strong> {doctor.address}
            </p>

            <p>
              <strong>📞 Phone:</strong> {doctor.phone}
            </p>

            <a
              href={`tel:${doctor.phone}`}
              className="call-button"
            >
              📞 Call
            </a>

          </div>
        ))}

      </div>

      <div className="doctor-note">
        ⚠️ Contact details and clinic timings can change. Verify the
        information before visiting.
      </div>

    </section>
  );
}

export default Doctors;