// referral.js 

// Full hospital data for each area
const hospitalData = {
    "kukatpally": [
        { name: "Advanced Endocrine & Diabetes Hospital & Research Center", address: "KPHB, Hyderabad" },
        { name: "Dr. Mohan’s Diabetes Specialities Centre", address: "Sivam Complex, Plot No.C/16, K.P.H.B Colony, Hyderabad – 500072", phone: "7825888680" },
        { name: "Idea Clinics", address: "KPHB, Hyderabad" },
        { name: "Sugar.Fit Diabetes Centre for Excellence", address: "KPHB, Hyderabad" },
        { name: "Hale Clinic", address: "KPHB, Hyderabad" },
        { name: "Dr. Shalini's Diabetes, Thyroid & Endocrine Super Specialty Centre", address: "KPHB, Hyderabad" },
        { name: "Dr. Chanukya's Endocrinology & Diabetes Centre", address: "KPHB, Hyderabad" },
        { name: "Sree Manju Hospitals", address: "KPHB, Hyderabad" },
        { name: "Immense Diabetes Clinic", address: "KPHB, Hyderabad" }
    ],
    "secunderabad": [
        { name: "Dr. Mohan’s Diabetes Specialities Centre", address: "First Floor, Flat No. A 15 & 16, Sardar Patel Road, Shivaji Nagar, East Marredpally, Secunderabad, Telangana 500003", phone: "7825888684" },
        { name: "Endoright Diabetes, Thyroid, Hormones Superspeciality Centre", address: "Karkhana, Secunderabad" },
        { name: "KIMS - Krishna Institute of Medical Sciences", address: "Secunderabad, Hyderabad" },
        { name: "Sunshine Hospitals", address: "Secunderabad, Hyderabad" },
        { name: "Renova Hospitals", address: "Secunderabad, Hyderabad" },
        { name: "Parvathi Hospital", address: "Secunderabad, Hyderabad" }
    ],
    "banjara-hills": [
        { name: "Apollo Sugar Clinics", address: "No. 8-2-682/3/A & 3/B/G1B, Mayfair Gardens, Road no. 12, Banjara Hills, Hyderabad - 500034" },
        { name: "Hyderabad Multi Speciality & Diabetes Centre", address: "Banjara Hills, Hyderabad" },
        { name: "Sugar.fit Diabetes Centres for Excellence", address: "Banjara Hills, Hyderabad" },
        { name: "Dr. Naseem's Diabetes Thyroid & Endocrine Superspeciality Clinic", address: "Banjara Hills, Hyderabad" }
    ],
    "jubilee-hills": [
        { name: "Dr. Mohan’s Diabetes Specialities Centre", address: "Door No:8-2-293/82/A/265-J/301, Road Number 10, Jubilee Hills, Hyderabad-500033", phone: "7825888678" },
        { name: "Apollo Hospitals", address: "Jubilee Hills, Hyderabad" },
        { name: "Apollo Sugar Clinic", address: "Jubilee Hills, Hyderabad" },
        { name: "Sunshine Hospitals", address: "Gachibowli, Hyderabad" },
        { name: "Magna Centres for Obesity, Diabetes & Endocrinology", address: "Film Nagar, Hyderabad" },
        { name: "Dr. Naveen Reddy Hospital", address: "Moti Nagar, Hyderabad" }
    ],
    "miyapur": [
        { name: "Apollo Sugar Clinics", address: "H No 1-116/SVH/101 & 102, First Floor, SVH Plaza, Miyapur, Hyderabad - 500049" },
        { name: "AED Hospital for Endocrinology", address: "Miyapur, Hyderabad" },
        { name: "Dr. Sivasankar Nunna", address: "Miyapur, Hyderabad" },
        { name: "Dr. Srujith C H", address: "Miyapur, Hyderabad" },
        { name: "Dr. Kolla Viswateja", address: "Miyapur, Hyderabad" },
        { name: "Dr. Nitin Tamminedi", address: "Miyapur, Hyderabad" },
        { name: "Dr. Sivani Payneni", address: "Miyapur, Hyderabad" },
        { name: "Dr. Mirza Aziz Baig", address: "Miyapur, Hyderabad" },
        { name: "Dr. Shoba Srinivasulu Kuruva", address: "Miyapur, Hyderabad" },
        { name: "Dr. K Sreedhar", address: "Miyapur, Hyderabad" }
    ],
    "ameerpet": [
        { name: "Aster Prime Hospital", address: "Ameerpet, Hyderabad" },
        { name: "Renova Neelima Hospitals", address: "Sanath Nagar, Hyderabad" }
    ],
    "hitech-city": [
        { name: "Idea Clinics", address: "Madhapur, Hyderabad" },
        { name: "Arete Hospitals", address: "Gachibowli, Hyderabad" },
        { name: "Apollo Medical Centre", address: "Kondapur, Hyderabad" },
        { name: "Sunshine Hospitals", address: "Gachibowli, Hyderabad" },
        { name: "Medicover Hospitals", address: "Hitech City, Hyderabad" },
        { name: "CARE Hospitals", address: "Hitech City, Hyderabad" }
    ],
    "mehdipatnam": [
        { name: "Apollo Sugar Clinic", address: "Tolichowki, Hyderabad" },
        { name: "Majestic Hospital", address: "Tolichowki, Hyderabad" },
        { name: "Mythri Hospital", address: "Gudimalkapur, Hyderabad" },
        { name: "Esani Diabetes and Multispeciality Centre", address: "Tolichowki, Hyderabad" },
        { name: "Shine Speciality Clinics", address: "Tolichowki, Hyderabad" },
        { name: "Dr. Naseem's Diabetes Thyroid & Endocrine Superspeciality Clinic", address: "Mehdipatnam, Hyderabad" }
    ],
    "lb-nagar": [
        { name: "Kamineni Hospital", address: "LB Nagar, Hyderabad" },
        { name: "Aditya Endocrine and Diabetes Clinic", address: "Dilsukhnagar, Hyderabad" },
        { name: "Sai Sreedatta Clinic", address: "Dilsukhnagar, Hyderabad" }
    ],
    "begumpet": [
        { name: "Yashoda Hospitals", address: "Somajiguda, Hyderabad" },
        { name: "Sahays Diabetic Clinic & Research Centre", address: "Begumpet, Hyderabad" },
        { name: "Aster Prime Hospital", address: "Begumpet, Hyderabad" },
        { name: "Swapna Health Care", address: "Begumpet, Hyderabad" },
        { name: "Columbus Hospital - Institute of Psychiatry and Deaddiction", address: "Begumpet, Hyderabad" }
    ],
    "manikonda": [
        { name: "Apollo Sugar Clinics", address: "Manikonda, Hyderabad" },
        { name: "Dr. Rakesh's Endocrine & Diabetes", address: "Manikonda, Hyderabad" },
        { name: "Rex Super Speciality Hospital", address: "Manikonda, Hyderabad" },
        { name: "Star Hospitals", address: "Manikonda, Hyderabad" },
        { name: "EndoMedics", address: "Manikonda, Hyderabad" }
    ],
    "as-rao-nagar": [
        { name: "Idea Clinics", address: "AS Rao Nagar, Hyderabad" },
        { name: "Snehitha Diabetic Clinic", address: "AS Rao Nagar, Hyderabad" },
        { name: "Kshipra Clinic And Diabetes Care", address: "AS Rao Nagar, Hyderabad" },
        { name: "Eeshaa Clinic", address: "AS Rao Nagar, Hyderabad" },
        { name: "Santoshima Diabetic Specialty Clinic", address: "ECIL, Hyderabad" },
        { name: "Family Care Clinic", address: "Moula Ali, Hyderabad" },
        { name: "Srinivasa Diabetes Center", address: "Sainikpuri, Hyderabad" }
    ],
    "chanda-nagar": [
        { name: "Apollo Sugar Clinics", address: "Chanda Nagar, Hyderabad" }
    ]
};

// Update hospital list based on selected area
function updateHospitalsList() {
    const area = document.getElementById("area-select").value;
    const hospitalList = document.getElementById("hospital-list");
    hospitalList.innerHTML = "";

    if (area && hospitalData[area]) {
        hospitalData[area].forEach(hospital => {
            const listItem = document.createElement("li");
            let html = `<strong>${hospital.name}</strong><br>${hospital.address}`;
            if (hospital.phone) {
                html += `<br>Phone: ${hospital.phone}`;
            }
            if (hospital.website) {
                html += `<br>Website: <a href="${hospital.website}" target="_blank">${hospital.website}</a>`;
            }
            listItem.innerHTML = html;
            hospitalList.appendChild(listItem);
        });
    } else {
        hospitalList.innerHTML = "<li>No hospitals found for this location.</li>";
    }
}

// Set fixed space to prevent layout jump
window.addEventListener("DOMContentLoaded", () => {
    const hospitalList = document.getElementById("hospital-list");
    hospitalList.style.minHeight = "350px"; // Adjust height as needed
});

// Attach dropdown change listener
document.getElementById("area-select").addEventListener("change", updateHospitalsList);
