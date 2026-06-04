import logo from './logo.svg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.png'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const categories = ["All", "Villa", "Apartment", "Penthouse"];

export const projectsData = [
    {
      title: "Margalla Heights",
      price: "Rs. 3.5 Crore",
      priceVal: 35000000,
      location: "F-11, Islamabad",
      image: project_img_1,
      category: "Apartment",
      beds: 3,
      baths: 2,
      sqft: 1850,
      description: "A luxury apartment offering breathtaking Margalla Hills views, modern amenities, and spacious open-plan living in the heart of Islamabad.",
      amenities: ["Margalla View Balcony", "24/7 Security & Concierge", "Infinity Pool Access", "High-speed Elevators", "Smart Home Integration"]
    },
    {
      title: "Royal Oasis Villa",
      price: "Rs. 7.5 Crore",
      priceVal: 75000000,
      location: "DHA Phase 6, Lahore",
      image: project_img_2,
      category: "Villa",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      description: "Tucked away in the prestigious DHA Phase 6 Lahore, this modern villa combines contemporary architectural features with exquisite premium finishes.",
      amenities: ["Solar Energy Systems", "Landscaped Lawn", "Private Basement Lounge", "Gourmet Chef's Kitchen", "Heated Spa Pool"]
    },
    {
      title: "Clifton Vista Apartments",
      price: "Rs. 1.8 Crore",
      priceVal: 18000000,
      location: "Clifton, Karachi",
      image: project_img_3,
      category: "Apartment",
      beds: 2,
      baths: 2,
      sqft: 1200,
      description: "Experience modern metropolitan coastal living with premium high-tech suites designed for ultimate comfort and sea breeze views.",
      amenities: ["Fully Equipped Gym", "Rooftop Garden Lounge", "Co-working Space", "Secure Basement Parking", "Standby Generator"]
    },
    {
      title: "Gulberg Residency",
      price: "Rs. 2.9 Crore",
      priceVal: 29000000,
      location: "Gulberg III, Lahore",
      image: project_img_4,
      category: "Penthouse",
      beds: 3,
      baths: 3,
      sqft: 2400,
      description: "A premium penthouse at Lahore's central business district with double-height ceilings, top-tier luxury design, and sweeping views of the city skyline.",
      amenities: ["Private Elevator Access", "Wrap-around Terrace", "Personal Home Theater", "Outdoor Rooftop BBQ Area", "Exclusive Lounge Membership"]
    },
    {
      title: "Bahria Meadows",
      price: "Rs. 9.5 Crore",
      priceVal: 95000000,
      location: "Bahria Town, Islamabad",
      image: project_img_5,
      category: "Villa",
      beds: 5,
      baths: 5,
      sqft: 4500,
      description: "An elegant, expansive villa in Bahria Town featuring premium structural designs, hand-crafted marble interiors, and state-of-the-art surveillance.",
      amenities: ["Golf Course Views", "Infinity Swimming Pool", "CCTV Surveillance", "Private Guest House", "4-Car Covered Garage"]
    },
    {
      title: "Creek Panorama",
      price: "Rs. 12 Crore",
      priceVal: 120000000,
      location: "DHA Phase 8, Karachi",
      image: project_img_6,
      category: "Penthouse",
      beds: 4,
      baths: 4.5,
      sqft: 3800,
      description: "Ultimate waterfront high-rise luxury featuring floor-to-ceiling glass windows overlooking the Arabian Sea, customized designer finishes, and premium club access.",
      amenities: ["Arabian Sea Views", "Personal Wellness Spa & Sauna", "Climate Controlled Cellar", "24/7 Security Patrol", "Executive Office Room"]
    },
];

export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];