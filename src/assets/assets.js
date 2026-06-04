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
  left_arrow,
  right_arrow,
  header_img,
  brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  project_img_5,
  project_img_6,
  profile_img_1,
  profile_img_2,
  profile_img_3,
}

export const categories = ["All", "Villa", "Apartment", "Penthouse"]

export const projectsData = [
  {
    title: "Skyline Haven",
    price: "$250,000",
    priceVal: 250000,
    location: "Lahore",
    image: project_img_1,
    category: "Apartment",
    beds: 3,
    baths: 2,
    sqft: 1850,
    description:
      "A luxury apartment offering breathtaking skyline views, modern amenities, and spacious open-plan living in the heart of Lahore's most vibrant district.",
    amenities: [
      "Panoramic Skyline Views",
      "24/7 Security & Concierge",
      "Infinity Pool Access",
      "Private Balcony",
      "Smart Home Integration",
    ],
  },
  {
    title: "Vista Verde",
    price: "$380,000",
    priceVal: 380000,
    location: "Islamabad",
    image: project_img_2,
    category: "Villa",
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    description:
      "Tucked away in the serene hills of Islamabad, this modern villa combines eco-friendly features with exquisite premium finishes and open panoramas.",
    amenities: [
      "Solar Energy Systems",
      "Landscaped Gardens",
      "Private Wine Cellar",
      "Gourmet Chef's Kitchen",
      "Heated Spa Pool",
    ],
  },
  {
    title: "Serenity Suites",
    price: "$185,000",
    priceVal: 185000,
    location: "Karachi",
    image: project_img_3,
    category: "Apartment",
    beds: 2,
    baths: 2,
    sqft: 1200,
    description:
      "Experience modern metropolitan living at its finest with high-tech suites designed for convenience, executive comfort, and urban style in Karachi.",
    amenities: [
      "Fully Equipped Gym",
      "Rooftop Garden Lounge",
      "Co-working Space",
      "High-Speed EV Chargers",
      "Pet-Friendly Play Area",
    ],
  },
  {
    title: "Central Square",
    price: "$420,000",
    priceVal: 420000,
    location: "Lahore",
    image: project_img_4,
    category: "Penthouse",
    beds: 3,
    baths: 3,
    sqft: 2400,
    description:
      "A premium penthouse at the city center featuring double-height ceilings, top-tier luxury furnishings, and sweeping 360-degree metropolitan views.",
    amenities: [
      "Private Elevator Access",
      "Wrap-around Terrace",
      "Personal Home Theater",
      "Outdoor BBQ Station",
      "Exclusive Club Membership",
    ],
  },
  {
    title: "Golden Gate Villa",
    price: "$550,000",
    priceVal: 550000,
    location: "Islamabad",
    image: project_img_5,
    category: "Villa",
    beds: 5,
    baths: 5,
    sqft: 4500,
    description:
      "An elegant, expansive villa in Islamabad featuring premium structural designs, hand-crafted marble interiors, and state-of-the-art security.",
    amenities: [
      "Bay View Terraces",
      "Infinity Swimming Pool",
      "Home Automation",
      "Private Guest House",
      "3-Car Garage",
    ],
  },
  {
    title: "Aura Penthouses",
    price: "$610,000",
    priceVal: 610000,
    location: "Karachi",
    image: project_img_6,
    category: "Penthouse",
    beds: 4,
    baths: 4.5,
    sqft: 3800,
    description:
      "Ultimate high-rise luxury in Karachi featuring floor-to-ceiling glass windows, customized designer furnishings, and private wellness facilities tailored to elite tastes.",
    amenities: [
      "Private Rooftop Pool",
      "Personal Wellness Spa & Sauna",
      "Climate Controlled Cellar",
      "24/7 Butler Service",
      "Executive Office Suite",
    ],
  },
]

export const testimonialsData = [
  {
    name: "Donald Jackman",
    title: "Marketing Manager",
    image: profile_img_1,
    alt: "Portrait of Donald Jackman",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "Richard Nelson",
    title: "UI/UX Designer",
    image: profile_img_2,
    alt: "Portrait of Richard Nelson",
    rating: 4,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
  {
    name: "James Washington",
    title: "Co-Founder",
    image: profile_img_3,
    alt: "Portrait of James Washington",
    rating: 5,
    text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched.",
  },
]