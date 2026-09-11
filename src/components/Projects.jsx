import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ExternalLink, Github, Eye, Sparkles, ShoppingBag, ChevronDown, ChevronUp, Monitor, Image as ImageIcon, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';
import Reveal from './Reveal';

const Projects = ({ onOpenOrderModal }) => {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeModalTab, setActiveModalTab] = useState('overview'); // 'overview' | 'live'
  const [lightboxIndex, setLightboxIndex] = useState(null); // index into displayedProjects, null = closed

  const projects = [
    // ---------------- 12 E-COMMERCE STORES (12-eCommerce-Website repo) ----------------
    {
      id: 1,
      title: 'Electro Store – Tech & Gadgets E-Commerce',
      description: 'Modern electronics & tech gadgets online store featuring deal banners, product catalog, cart system, and responsive layout.',
      image: './Project/project_7.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Electronics'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/Electro-Bootstrap-1.0.0/Electro-Bootstrap-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/Electro-Bootstrap-1.0.0/Electro-Bootstrap-1.0.0',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 2,
      title: 'FoodMart – Organic Grocery Store',
      description: 'Fresh organic food & online grocery store website with category filtering, shopping cart, and clean responsive UI.',
      image: './Project/project_14.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Grocery'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/FoodMart-1.0.0/FoodMart-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/FoodMart-1.0.0/FoodMart-1.0.0',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 3,
      title: 'Sprylo – Fashion & Apparel E-Commerce',
      description: 'Trendy fashion and clothing e-commerce web platform featuring interactive collection sliders and modern aesthetics.',
      image: './Project/project_10.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Fashion'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/Sprylo-1.0.0/Sprylo-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/Sprylo-1.0.0/Sprylo-1.0.0',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 4,
      title: 'ColoShop – Urban Outfit & Apparel Store',
      description: 'Popular urban clothing and footwear e-commerce application with countdown timer deals and product reviews.',
      image: './Project/project_2.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Apparel'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/coloshop-master/coloshop-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/coloshop-master/coloshop-master',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 5,
      title: 'Eflyer – Online Discount Marketplace',
      description: 'Dynamic discount shopping marketplace for electronics, fashion, and accessories with fast mobile checkout.',
      image: './Project/project_11.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Deals'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/eflyer-master/eflyer-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/eflyer-master/eflyer-master',
      category: 'ecommerce',
      featured: false
    },
    {
      id: 6,
      title: 'EStore – Multi-Category Shopping Portal',
      description: 'Multi-category online shopping store featuring product catalog, search filters, and sleek modern layout.',
      image: './Project/project_7.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Shopping'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/estore-1.0.0/estore-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/estore-1.0.0/estore-1.0.0',
      category: 'ecommerce',
      featured: false
    },
    {
      id: 7,
      title: 'Kaira – Luxury Fashion & Boutique',
      description: 'High-end fashion boutique website with luxury collection showcases, minimal typography, and fast loading.',
      image: './Project/project_9.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Boutique'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/kaira-1.0.0/kaira-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/kaira-1.0.0/kaira-1.0.0',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 8,
      title: 'MultiShop – Mega Department Store',
      description: 'Large-scale department store layout with vendor categories, price range filters, and responsive cart system.',
      image: './Project/project_11.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Department'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/multishop-1.0.0/multishop-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/multishop-1.0.0/multishop-1.0.0',
      category: 'ecommerce',
      featured: false
    },
    {
      id: 9,
      title: 'Stylish – Designer Outfit Boutique',
      description: 'Designer apparel and outfit shopping platform engineered for fashion brands with interactive product views.',
      image: './Project/project_10.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Outfits'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/stylish-1.0.0/stylish-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/stylish-1.0.0/stylish-1.0.0',
      category: 'ecommerce',
      featured: false
    },
    {
      id: 10,
      title: 'Ultras – Sports Footwear E-Commerce',
      description: 'Sports footwear & athletic wear online store featuring product sliders, size filters, and modern UI components.',
      image: './Project/project_8.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Footwear'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/ultras-1.0.0/ultras-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/ultras-1.0.0/ultras-1.0.0',
      category: 'ecommerce',
      featured: true
    },
    {
      id: 11,
      title: 'Believe – Lifestyle & Accessories Store',
      description: 'Premium lifestyle store website with product grid presentation, wishlist features, and smooth navigation UI.',
      image: './Project/project_8.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Lifestyle'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/believe-master/believe-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/believe-master/believe-master',
      category: 'ecommerce',
      featured: false
    },
    {
      id: 12,
      title: 'Bloom – Floral & Gift Shop E-Commerce',
      description: 'Elegant flower & custom gift shopping website with high visual resolution and fluid cart management.',
      image: './Project/project_5.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Gifts'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/bloomtpl-1.0.0/bloomtpl-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/12-eCommerce-Website/tree/main/bloomtpl-1.0.0/bloomtpl-1.0.0',
      category: 'ecommerce',
      featured: false
    },

    // ---------------- 13 RESTAURANT & FOOD WEBSITES (13-restaurant-website repo) ----------------
    {
      id: 13,
      title: 'Restaurant Master – Gourmet Dining Portal',
      description: 'High-converting gourmet restaurant website featuring dynamic food menus, online table booking, and chef specials.',
      image: './Project/project_1.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Restaurant'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/Restaurant-master/Restaurant-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/Restaurant-master/Restaurant-master',
      category: 'restaurant',
      featured: true
    },
    {
      id: 14,
      title: 'Caviar – Luxury Fine Dining Experience',
      description: 'Ultra-luxurious restaurant web showcase with elegant dark aesthetics, wine menu showcases, and reservation booking.',
      image: './Project/project_15.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Luxury Dining'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/caviar-master/caviar-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/caviar-master/caviar-master',
      category: 'restaurant',
      featured: true
    },
    {
      id: 15,
      title: 'Eatery – Casual Bistro & Food Cafe',
      description: 'Modern casual dining eatery website built with interactive dish showcase, daily specials, and contact reservation UI.',
      image: './Project/project_4.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Cafe'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/eatery-master/eatery-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/eatery-master/eatery-master',
      category: 'restaurant',
      featured: false
    },
    {
      id: 16,
      title: 'Foodee – Premium Culinary Experience',
      description: 'Sleek culinary restaurant web application with smooth menu filtering, customer testimonials, and location booking.',
      image: './Project/project_3.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Culinary'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/foodee-master/foodee-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/foodee-master/foodee-master',
      category: 'restaurant',
      featured: false
    },
    {
      id: 17,
      title: 'FoodFun – Fast Food & Snacks Portal',
      description: 'Vibrant fast food & snack bar website designed for quick burger, pizza, and beverage ordering displays.',
      image: './Project/project_2.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Fast Food'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/foodfun-master/foodfun-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/foodfun-master/foodfun-master',
      category: 'restaurant',
      featured: true
    },
    {
      id: 18,
      title: 'Foody – Organic Healthy Food Cafe',
      description: 'Fresh organic food cafe & salad bar website featuring clean green branding, calories guide, and order callout.',
      image: './Project/project_5.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Organic Cafe'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/foody-master/foody-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/foody-master/foody-master',
      category: 'restaurant',
      featured: false
    },
    {
      id: 19,
      title: 'Grand Coffee – Bakery & Espresso Bar',
      description: 'Artisanal coffee house & fresh bakery website showcasing coffee menu items, pastry specials, and warm UI tones.',
      image: './Project/project_16.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Coffee Shop'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/grandcoffee-master/grandcoffee-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/grandcoffee-master/grandcoffee-master',
      category: 'restaurant',
      featured: true
    },
    {
      id: 20,
      title: 'Pato – Italian Restaurant & Pizzeria',
      description: 'Authentic Italian cuisine & woodfired pizza restaurant site built with rich hero slider, gallery, and menu book.',
      image: './Project/project_17.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Italian'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/pato-master/pato-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/pato-master/pato-master',
      category: 'restaurant',
      featured: true
    },
    {
      id: 21,
      title: 'Classic Restaurant & Diner',
      description: 'Classic diner and steakhouse web application with table booking form, chef signature dishes, and reviews.',
      image: './Project/project_19.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Classic Dining'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/restaurant-1.0.0/restaurant-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/restaurant-1.0.0/restaurant-1.0.0',
      category: 'restaurant',
      featured: false
    },
    {
      id: 22,
      title: 'Restaurantly – High-End Culinary Lounge',
      description: 'Premium fine dining restaurant template with dark luxurious styling, online reservation engine, and events page.',
      image: './Project/project_1.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Fine Dining'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/restaurantly-1.0.0/restaurantly-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/restaurantly-1.0.0/restaurantly-1.0.0',
      category: 'restaurant',
      featured: true
    },
    {
      id: 23,
      title: 'Restoran – Steakhouse & Burger House',
      description: 'Modern steakhouse & burger joint website featuring animated order cards, team section, and contact layout.',
      image: './Images/restoran_steakhouse_burger.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Steakhouse'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/restoran-1.0.0/restoran-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/restoran-1.0.0/restoran-1.0.0',
      category: 'restaurant',
      featured: false
    },
    {
      id: 24,
      title: 'Tasty – Food Delivery & Catering',
      description: 'Fast food delivery and event catering website with dish categories, pricing plans, and quick phone reservation.',
      image: './Project/project_14.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Delivery'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/tasty-master/tasty-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/tasty-master/tasty-master',
      category: 'restaurant',
      featured: false
    },
    {
      id: 25,
      title: 'The Grill House – Smokehouse & Bar',
      description: 'Authentic smokehouse & BBQ grill website built with interactive menu showcase, chef bios, and event booking.',
      image: './Project/project_18.png',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'BBQ Grill'],
      liveDemo: 'https://shafqat-ullah.github.io/13-restaurant-website/thegrill-master/thegrill-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/13-restaurant-website/tree/main/thegrill-master/thegrill-master',
      category: 'restaurant',
      featured: true
    },

    // ---------------- CLIENT, FITNESS & GYM PLATFORMS ----------------
    {
      id: 26,
      title: 'FlexGym – Fitness Club & Gym Web App',
      description: 'Modern fitness studio & gym management web application with membership pricing tiers, workout schedules, trainer profiles, and dark sleek UI.',
      image: './Project/project_3.png',
      tags: ['React', 'TailwindCSS', 'Gym & Fitness', 'UI/UX'],
      liveDemo: 'https://shafqat-ullah.github.io/12-eCommerce-Website/',
      github: 'https://github.com/Shafqat-Ullah',
      category: 'client',
      featured: true
    },
    {
      id: 27,
      title: 'UFO Burger Official Website',
      description: 'Custom-designed hosted brand website for UFO Burger featuring fast online product view, custom branding, and responsive layout.',
      image: './Project/project_4.png',
      tags: ['JavaScript', 'API', 'CSS3', 'HTML5'],
      liveDemo: 'https://ufoburgermcp.com/',
      github: 'https://github.com/Shafqat-Ullah/UFO-Burger',
      category: 'client',
      featured: false
    },
    {
      id: 28,
      title: 'Digital Dream Web (DDW) Portal',
      description: 'Official corporate website built for Digital Dream Web IT agency with client dashboard, live chat integration, and strong branding.',
      image: './Project/project_6.png',
      tags: ['React', 'Socket.io', 'MongoDB', 'Node.js'],
      liveDemo: 'https://shafqat-ullah.github.io/Digital-Dream-Web-DDW-/',
      github: 'https://github.com/Shafqat-Ullah/Digital-Dream-Web-DDW-',
      category: 'client',
      featured: true
    },
    {
      id: 29,
      title: 'Swiss Agency Digital Website',
      description: 'Ultra-clean corporate website built for a digital agency showcasing strategic consulting, web products, and minimalist typography layout.',
      image: './Project/project_13.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Agency'],
      liveDemo: 'https://shafqat-ullah.github.io/Swiss/',
      github: 'https://github.com/Shafqat-Ullah/Swiss',
      category: 'client',
      featured: true
    },
    {
      id: 30,
      title: 'Khan Gypsum Riyadh KSA Platform',
      description: 'Corporate client website developed for Saudi Arabia construction and interior finishing brand with service showcases.',
      image: './Project/project_3.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'KSA Client'],
      liveDemo: 'https://shafqat-ullah.github.io/KhanGypsumRiyadh/',
      github: 'https://github.com/Shafqat-Ullah/KhanGypsumRiyadh',
      category: 'client',
      featured: false
    },

    // ---------------- MODERN FRONTEND APPLICATIONS ----------------
    {
      id: 31,
      title: 'In-House Leaf – Plant Health AI App',
      description: 'AI-powered indoor plant disease detector and plant care portal built with responsive frontend and smart disease diagnosis dashboard.',
      image: './Project/project_11.png',
      tags: ['React', 'JavaScript', 'AI Engine', 'Tailwind'],
      liveDemo: 'https://shafqat-ullah.github.io/In-House-Leaf/',
      github: 'https://github.com/Shafqat-Ullah/In-House-Leaf',
      category: 'frontend',
      featured: true
    },
    {
      id: 32,
      title: 'Naturalist Cold Drink Showcase',
      description: 'A premium product showcase platform built for a beverage brand, with high resolution visual aesthetics and fluid animations.',
      image: './Project/project_5.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      liveDemo: 'https://shafqat-ullah.github.io/Naturlist/index.html',
      github: 'https://github.com/Shafqat-Ullah/Naturlist',
      category: 'frontend',
      featured: false
    },
    {
      id: 33,
      title: 'Spylt Milk Interactive Web Showcase',
      description: 'Interactive web platform enhanced with fluid GSAP animations, ScrollTrigger physics, and high visual aesthetics.',
      image: './Project/project_12.png',
      tags: ['JavaScript', 'GSAP', 'HTML5', 'CSS3'],
      liveDemo: 'https://shafqat-ullah.github.io/Spylt-Milk/',
      github: 'https://github.com/Shafqat-Ullah/Spylt-Milk',
      category: 'frontend',
      featured: true
    },
    {
      id: 34,
      title: 'Pollify MERN Stack Platform',
      description: 'Interactive real-time voting and polling web application built with MERN stack, user authentication, and live analytics.',
      image: './Project/project_7.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      liveDemo: 'https://shafqat-ullah.github.io/Pollify/',
      github: 'https://github.com/Shafqat-Ullah/Pollify',
      category: 'frontend',
      featured: true
    },

    // ---------------- 8 GYM & FITNESS WEBSITES (Gym-Website-s- repo) ----------------
    {
      id: 35,
      title: 'Fitness Bootstrap – Elite Fitness Gym',
      description: 'Modern dark-themed fitness gym website featuring workout schedule planners, trainer booking, and membership pricing cards.',
      image: './Images/gym_fitness_bootstrap.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Gym'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/Fitness-Bootstrap-1.0.0/Fitness-Bootstrap-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/Fitness-Bootstrap-1.0.0/Fitness-Bootstrap-1.0.0',
      category: 'gym',
      featured: true
    },
    {
      id: 36,
      title: 'Gym Master Pro – Bodybuilding & Strength Center',
      description: 'High-intensity bodybuilding & strength training web application with bold yellow accents, equipment gallery, and personal coaching.',
      image: './Images/gym_master_pro.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bodybuilding'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/gym-master/gym-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/gym-master/gym-master',
      category: 'gym',
      featured: true
    },
    {
      id: 37,
      title: 'Gym2 Fitness Club – Athletic Training Portal',
      description: 'Modern purple & electric blue fitness club website with live class schedules, trainer team bios, and membership signups.',
      image: './Images/gym2_fitness_club.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Fitness Club'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/gym2-master/gym2-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/gym2-master/gym2-master',
      category: 'gym',
      featured: true
    },
    {
      id: 38,
      title: 'Gymer Power & Strength – Heavy Lifting Facility',
      description: 'Fiery orange powerlifting gym portal featuring world-class equipment displays, membership tiers, and athlete testimonials.',
      image: './Images/gymer_power_strength.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Powerlifting'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/gymer-master/gymer-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/gymer-master/gymer-master',
      category: 'gym',
      featured: false
    },
    {
      id: 39,
      title: 'GymLife Fitness Hub – Cardio & Wellness Platform',
      description: 'Sleek dark blue & neon red gym website featuring an interactive workout calculator, program finder, and membership plans.',
      image: './Images/gymlife_fitness_hub.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Cardio & Wellness'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/gymlife-1.0.0/gymlife-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/gymlife-1.0.0/gymlife-1.0.0',
      category: 'gym',
      featured: true
    },
    {
      id: 40,
      title: 'TopGym Performance Center – Elite Athlete Academy',
      description: 'Metallic gold high-performance training website featuring VIP private coaching, sprinter programs, and recovery consultation.',
      image: './Images/topgym_performance.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Athlete Training'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/top-gym-master/top-gym-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/top-gym-master/top-gym-master',
      category: 'gym',
      featured: false
    },
    {
      id: 41,
      title: 'Workout Crossfit & Training – Forge Athletics',
      description: 'High-impact gritty Crossfit website with WOD calendar, tire flip training sessions, and coach profiles.',
      image: './Images/workout_crossfit_training.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Crossfit WOD'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/workout-master/workout-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/workout-master/workout-master',
      category: 'gym',
      featured: true
    },
    {
      id: 42,
      title: 'XGym Ultra Fitness – Body Transformation Portal',
      description: 'Neon red & cyan glassmorphic fitness web app with boxing flows, ultra strength training schedules, and pricing plans.',
      image: './Images/xgym_ultra_fitness.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Transformation'],
      liveDemo: 'https://shafqat-ullah.github.io/Gym-Website-s-/xgym-master/xgym-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Gym-Website-s-/tree/main/xgym-master/xgym-master',
      category: 'gym',
      featured: false
    },

    // ---------------- 5 SPORTS WEBSITES (Sports-Website-s- repo) ----------------
    {
      id: 43,
      title: 'Soccer Club – Football & Match League Portal',
      description: 'Premier Football Club & League portal featuring live scores, match schedules, player stats, and ticket booking engine.',
      image: './Images/soccer_football_club.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Football League'],
      liveDemo: 'https://shafqat-ullah.github.io/Sports-Website-s-/soccer-master/soccer-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Sports-Website-s-/tree/main/soccer-master/soccer-master',
      category: 'sports',
      featured: true
    },
    {
      id: 44,
      title: 'Specer Sports – Championship & Tournament Hub',
      description: 'Multi-sport tournament & championship platform with standings leaderboard, upcoming fixtures, and team news.',
      image: './Images/specer_tournament_hub.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Championships'],
      liveDemo: 'https://shafqat-ullah.github.io/Sports-Website-s-/specer-master/specer-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Sports-Website-s-/tree/main/specer-master/specer-master',
      category: 'sports',
      featured: true
    },
    {
      id: 45,
      title: 'Sports Coach Pro – Personal Athletics & Performance',
      description: 'Professional sports coaching and athletic training website with personal coaching sessions, video tutorials, and booking.',
      image: './Images/sports_coach_pro.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Athletic Coaching'],
      liveDemo: 'https://shafqat-ullah.github.io/Sports-Website-s-/sports-coach-1.0.0/sports-coach-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Sports-Website-s-/tree/main/sports-coach-1.0.0/sports-coach-1.0.0',
      category: 'sports',
      featured: true
    },
    {
      id: 46,
      title: 'SportsFit Club – Multi-Sport & Fitness Complex',
      description: 'Vibrant multi-sport fitness complex portal featuring indoor sports courts, swimming pool, and membership plans.',
      image: './Images/sportsfit_multisport.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Multi-Sport Complex'],
      liveDemo: 'https://shafqat-ullah.github.io/Sports-Website-s-/sportsfit-gh-pages/sportsfit-gh-pages/index.html',
      github: 'https://github.com/Shafqat-Ullah/Sports-Website-s-/tree/main/sportsfit-gh-pages/sportsfit-gh-pages',
      category: 'sports',
      featured: false
    },
    {
      id: 47,
      title: 'Sportz Arena – Live Matches & News Platform',
      description: 'Dynamic sports news and live match broadcast portal with match highlights, team rosters, and sports gear shop.',
      image: './Images/sportz_live_arena.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Live Sports Broadcast'],
      liveDemo: 'https://shafqat-ullah.github.io/Sports-Website-s-/sportz-gh-pages/sportz-gh-pages/index.html',
      github: 'https://github.com/Shafqat-Ullah/Sports-Website-s-/tree/main/sportz-gh-pages/sportz-gh-pages',
      category: 'sports',
      featured: false
    },

    // ---------------- 19 MEDICAL & HEALTHCARE WEBSITES (Medical-Website-s- repo) ----------------
    {
      id: 48,
      title: 'Chiropractic & Spine Therapy Center',
      description: 'Specialized chiropractic clinic website offering spine alignment, physical posture correction, and online appointment scheduling.',
      image: './Images/med_chiropractic.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Chiropractic'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/chiropractic-1.0.0/chiropractic-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/chiropractic-1.0.0/chiropractic-1.0.0',
      category: 'medical',
      featured: true
    },
    {
      id: 49,
      title: 'Clinic Care – General Health Clinic',
      description: 'Modern outpatient clinic web portal featuring specialist doctor directory, treatment services, and patient consultation booking.',
      image: './Images/med_clinic_care.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Health Clinic'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/Clinic-1.0.0/Clinic-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/Clinic-1.0.0/Clinic-1.0.0',
      category: 'medical',
      featured: false
    },
    {
      id: 50,
      title: 'Covido – Medical Prevention & Health Research',
      description: 'Public health awareness & medical research platform providing disease prevention guidelines, symptom trackers, and helpline links.',
      image: './Images/med_covido_prevention.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Public Health'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/covido-master/covido-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/covido-master/covido-master',
      category: 'medical',
      featured: false
    },
    {
      id: 51,
      title: 'Dental Pro – Dentistry & Orthodontic Care',
      description: 'Comprehensive dental clinic website with teeth whitening, dental implants, cosmetic dentistry showcase, and booking form.',
      image: './Images/med_dental_pro.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Dentistry'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/dental-pro-v.01/dental-pro-v.01/public/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/dental-pro-v.01/dental-pro-v.01',
      category: 'medical',
      featured: true
    },
    {
      id: 52,
      title: 'DrCare – Specialist Healthcare & Hospital',
      description: 'Full-featured hospital and medical center portal with doctor profiles, department listings, emergency care, and appointments.',
      image: './Images/med_drcare_specialist.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Hospital'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/drcare-master/drcare-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/drcare-master/drcare-master',
      category: 'medical',
      featured: true
    },
    {
      id: 53,
      title: 'DrPro – Telemedicine & Online Consultation',
      description: 'Digital health and telemedicine platform connecting patients with certified specialist doctors for virtual consultations.',
      image: './Images/med_drpro_telemedicine.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Telemedicine'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/drpro-master/drpro-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/drpro-master/drpro-master',
      category: 'medical',
      featured: false
    },
    {
      id: 54,
      title: 'Klinik Health – Hospital & Medical Complex',
      description: 'Sleek healthcare facility website showcasing ICU facilities, 24/7 emergency response, diagnostic lab, and doctor booking.',
      image: './Images/med_klinik_health.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Healthcare Complex'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/klinik-1.0.0/klinik-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/klinik-1.0.0/klinik-1.0.0',
      category: 'medical',
      featured: true
    },
    {
      id: 55,
      title: 'LiveDoc – Emergency Medical & Doctor Booking',
      description: 'Interactive emergency medical services and doctor appointment scheduling portal with department filters.',
      image: './Images/med_livedoc_emergency.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Emergency Care'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/live-doc-v1.0.0/live-doc-v1.0.0/public/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/live-doc-v1.0.0/live-doc-v1.0.0',
      category: 'medical',
      featured: false
    },
    {
      id: 56,
      title: 'MedCare – Clinical Services & Patient Portal',
      description: 'Patient-centric medical care website featuring health package calculators, lab report downloads, and specialist advice.',
      image: './Images/med_medcare_clinical.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Patient Care'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/medcare-master/medcare-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/medcare-master/medcare-master',
      category: 'medical',
      featured: true
    },
    {
      id: 57,
      title: 'Medi Plus – Medical Center & E-Pharmacy',
      description: 'Integrated medical center and pharmacy web application with online prescription uploads and medicine store.',
      image: './Images/med_mediplus_pharmacy.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Pharmacy'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/medi-master/medi-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/medi-master/medi-master',
      category: 'medical',
      featured: false
    },
    {
      id: 58,
      title: 'Medical Center – Multi-Specialty Hospital',
      description: 'State-of-the-art multi-specialty hospital website featuring cardiology, neurology, pediatrics, and surgery units.',
      image: './Images/med_medicalcenter_hospital.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Multi-Specialty'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/medicalcenter-master/medicalcenter-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/medicalcenter-master/medicalcenter-master',
      category: 'medical',
      featured: true
    },
    {
      id: 59,
      title: 'MediCio – Surgical & Medical Institute',
      description: 'Advanced surgical institute site featuring laparoscopic surgery programs, pre-op guides, and surgeon bios.',
      image: './Images/med_medicio_surgical.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Surgical Center'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/MediCio-1.0.0/MediCio-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/MediCio-1.0.0/MediCio-1.0.0',
      category: 'medical',
      featured: false
    },
    {
      id: 60,
      title: 'MediLab – Clinical Laboratory & Diagnostics',
      description: 'Diagnostic laboratory website featuring blood test booking, pathology packages, and online lab report delivery.',
      image: './Images/med_medilab_diagnostics.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Diagnostics Lab'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/MediLab-1.0.0/MediLab-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/MediLab-1.0.0/MediLab-1.0.0',
      category: 'medical',
      featured: true
    },
    {
      id: 61,
      title: 'Medinova – Healthcare & Wellness Institute',
      description: 'Holistic wellness and preventative healthcare institute offering health checkup packages and doctor appointments.',
      image: './Images/med_medinova_wellness.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Wellness Care'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/Medinova-1.0.0/Medinova-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/Medinova-1.0.0/Medinova-1.0.0',
      category: 'medical',
      featured: false
    },
    {
      id: 62,
      title: 'MediPlus Hospital – Emergency & Care Portal',
      description: 'Modern emergency hospital website featuring ambulance dispatch, OPD schedule, and department contacts.',
      image: './Images/med_mediplus_hospital.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Emergency Hospital'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/mediplus-master/mediplus-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/mediplus-master/mediplus-master',
      category: 'medical',
      featured: true
    },
    {
      id: 63,
      title: 'Medisen – Cardiology & Medical Care',
      description: 'Cardiology center website featuring heart health screenings, ECG tests, cardiac surgery consultation, and emergency hotline.',
      image: './Images/med_medisen_cardiology.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Cardiology'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/medisen-master/medisen-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/medisen-master/medisen-master',
      category: 'medical',
      featured: false
    },
    {
      id: 64,
      title: 'MedLife – Family Health & Wellness Care',
      description: 'Family practice clinic website offering pediatrics, maternity care, vaccinations, and family health plans.',
      image: './Images/med_medlife_family.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Family Medicine'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/medlife-master/medlife-master/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/medlife-master/medlife-master',
      category: 'medical',
      featured: true
    },
    {
      id: 65,
      title: 'MedWin Clinic – Premium Healthcare Services',
      description: 'Premium outpatient medical clinic with specialist doctors, health insurance support, and instant online booking.',
      image: './Images/med_medwin_clinic.jpg',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Healthcare Services'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/MedWin-1.0.0/MedWin-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/MedWin-1.0.0/MedWin-1.0.0',
      category: 'medical',
      featured: false
    },
    {
      id: 66,
      title: 'PhysioCare – Physical Therapy & Rehab',
      description: 'Rehabilitation and physical therapy center website featuring injury recovery, sports physiotherapy, and home care.',
      image: './Images/med_physiocare_therapy.jpg',
      tags: ['HTML5', 'Bootstrap', 'JavaScript', 'Physiotherapy'],
      liveDemo: 'https://shafqat-ullah.github.io/Medical-Website-s-/physicaltherapy-1.0.0/physicaltherapy-1.0.0/index.html',
      github: 'https://github.com/Shafqat-Ullah/Medical-Website-s-/tree/main/physicaltherapy-1.0.0/physicaltherapy-1.0.0',
      category: 'medical',
      featured: true
    }
  ];

  const handleFilterChange = (catId) => {
    setFilter(catId);
    setVisibleCount(3);
  };

  const openProjectModal = (proj) => {
    setSelectedProject(proj);
    setActiveModalTab('overview');
  };

  const ecommerceCount = projects.filter(p => p.category === 'ecommerce').length;
  const restaurantCount = projects.filter(p => p.category === 'restaurant').length;
  const gymCount = projects.filter(p => p.category === 'gym').length;
  const sportsCount = projects.filter(p => p.category === 'sports').length;
  const medicalCount = projects.filter(p => p.category === 'medical').length;
  const frontendCount = projects.filter(p => p.category === 'frontend').length;

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured'
      ? projects.filter(p => p.featured)
      : projects.filter(p => p.category === filter);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setLightboxIndex(null);
      }
      if (lightboxIndex !== null && e.key === 'ArrowLeft') {
        setLightboxIndex((i) => (i > 0 ? i - 1 : displayedProjects.length - 1));
      }
      if (lightboxIndex !== null && e.key === 'ArrowRight') {
        setLightboxIndex((i) => (i < displayedProjects.length - 1 ? i + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject, lightboxIndex, displayedProjects.length]);

  return (
    <section id="projects" className={`py-24 transition-colors duration-300 ${
      isDark ? 'bg-night-bg/80 border-t border-slate-800/80' : 'bg-slate-50 border-t border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic & Engaging Section Title */}
        <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Featured Projects & <span className="gradient-text">Web Solutions</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4"></div>
          <p className={`max-w-2xl mx-auto text-base sm:text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Explore our diverse showcase of Medical sites, E-Commerce stores, Restaurant systems, Gym platforms, Sports portals, and modern web applications.
          </p>
        </div>
        </Reveal>

        {/* Filter Category Tabs */}
        <div className="relative mb-12 max-w-full overflow-hidden px-1">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 sm:flex-wrap sm:justify-center sm:overflow-x-visible">
            {[
              { id: 'all', label: `🔥 All Projects (${projects.length})` },
              { id: 'medical', label: `🏥 Medical Sites (${medicalCount})` },
              { id: 'sports', label: `⚽ Sports (${sportsCount})` },
              { id: 'gym', label: `🏋️ Gym & Fitness (${gymCount})` },
              { id: 'ecommerce', label: `🛍️ E-Commerce Stores (${ecommerceCount})` },
              { id: 'restaurant', label: `🍔 Restaurant & Food (${restaurantCount})` },
              { id: 'frontend', label: `⚡ Modern Frontend (${frontendCount})` },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleFilterChange(item.id)}
                className={`shrink-0 px-4 py-2.5 sm:px-5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap ${
                  filter === item.id
                    ? 'bg-gradient-to-r from-primary to-secondary text-black shadow-lg shadow-primary/30 scale-105 ring-2 ring-primary/30'
                    : isDark
                      ? 'bg-slate-900/90 border border-slate-800 text-slate-300 hover:border-primary/50 hover:text-white'
                      : 'bg-white border border-slate-200 text-slate-700 hover:border-primary/50 shadow-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, projectIndex) => (
            <div
              key={project.id}
              className={`group rounded-3xl overflow-hidden border card-hover flex flex-col justify-between transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800/90 hover:border-primary/40' 
                  : 'bg-white border-slate-200 shadow-lg hover:border-primary/40'
              }`}
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(projectIndex)}
                    className="block w-full h-full cursor-zoom-in"
                    aria-label={`Enlarge image of ${project.title}`}
                  >
                    <img
                      src={getImagePath(project.image)}
                      alt={project.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none"></div>

                  <span className="absolute top-3 right-3 px-2.5 py-1.5 rounded-full bg-slate-950/60 text-white text-[10px] font-bold flex items-center gap-1 backdrop-blur-md border border-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <ZoomIn className="w-3.5 h-3.5" /> Zoom
                  </span>
                  
                  {/* Overlay Quick Preview Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => openProjectModal(project)}
                      className="px-4 py-2 rounded-full bg-primary/90 text-black font-bold text-xs flex items-center gap-2 backdrop-blur-md shadow-xl hover:bg-primary transition-all"
                    >
                      <Eye className="w-4 h-4" /> Quick Preview
                    </button>
                  </div>

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className={`text-sm mb-5 leading-relaxed line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`text-xs px-2.5 py-1 rounded-lg font-semibold ${
                          isDark ? 'bg-slate-800 text-primary-light border border-slate-700/60' : 'bg-primary/10 text-primary-dark font-bold'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`px-6 py-4 border-t flex items-center justify-between gap-3 ${
                isDark ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
              }`}>
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1.5 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>

                <button
                  onClick={() => onOpenOrderModal(project.title)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold text-xs transition-all flex items-center gap-1"
                  title="Order a similar website"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Order Similar
                </button>
              </div>

            </div>
          ))}
        </div>
        </Reveal>

        {/* Show More / Step-by-Step Pagination Button */}
        {filteredProjects.length > 3 && (
          <div className="mt-14 text-center flex flex-col items-center gap-3">
            <p className={`text-xs font-semibold tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Showing <span className="font-bold text-primary">{displayedProjects.length}</span> of <span className="font-bold">{filteredProjects.length}</span> Projects
            </p>

            <div className="flex items-center gap-3">
              {visibleCount < filteredProjects.length && (
                <button
                  onClick={() => setVisibleCount(prev => Math.min(prev + 3, filteredProjects.length))}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-black font-extrabold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 transition-all flex items-center gap-2"
                >
                  Show More Projects <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
              )}

              {visibleCount > 3 && (
                <button
                  onClick={() => setVisibleCount(3)}
                  className={`px-6 py-3.5 rounded-full border font-bold text-sm transition-all flex items-center gap-2 ${
                    isDark 
                      ? 'border-slate-700 text-slate-300 hover:bg-slate-800' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  Show Less <ChevronUp className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Project Details & Interactive Live Preview Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in" onClick={(e) => { if (e.target === e.currentTarget) setSelectedProject(null); }}>
          <div className={`relative w-full max-w-4xl rounded-3xl border overflow-hidden shadow-2xl flex flex-col max-h-[90vh] ${
            isDark ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            {/* Modal Header & Tabs */}
            <div className="p-4 sm:p-5 border-b border-slate-700/50 flex flex-wrap items-center justify-between gap-3 bg-slate-950/40">
              <div className="flex-1 min-w-0">
                <span className="block font-extrabold text-base sm:text-lg truncate">{selectedProject.title}</span>
              </div>

              {/* View Tabs */}
              <div className="flex rounded-full p-1 bg-slate-800/80 border border-slate-700 shrink-0">
                <button
                  onClick={() => setActiveModalTab('overview')}
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition ${
                    activeModalTab === 'overview' ? 'bg-primary text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" /> Overview
                </button>
                <button
                  onClick={() => setActiveModalTab('live')}
                  className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 transition ${
                    activeModalTab === 'live' ? 'bg-primary text-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" /> Live Preview
                </button>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="w-10 h-10 shrink-0 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary/90 active:scale-95 transition shadow-lg border border-black/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="flex-1 overflow-y-auto">
              {activeModalTab === 'overview' ? (
                <div>
                  <div className="h-64 sm:h-80 overflow-hidden relative">
                    <img
                      src={getImagePath(selectedProject.image)}
                      alt={selectedProject.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80';
                      }}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
                    <p className={`text-base mb-6 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                      {selectedProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-[550px] bg-slate-950 relative">
                  <iframe
                    src={selectedProject.liveDemo}
                    title={selectedProject.title}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-5 border-t border-slate-700/50 flex flex-wrap items-center justify-between gap-4 bg-slate-950/40">
              <div className="flex gap-3">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-primary text-black font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-primary/90"
                >
                  <ExternalLink className="w-4 h-4" /> Open In New Tab
                </a>
              </div>

              <button
                onClick={() => {
                  const title = selectedProject.title;
                  setSelectedProject(null);
                  onOpenOrderModal(title);
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-transform"
              >
                <ShoppingBag className="w-4 h-4" /> Order This Website
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Fullscreen Image Lightbox */}
      {lightboxIndex !== null && displayedProjects[lightboxIndex] && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 backdrop-blur-md animate-fade-in"
          onClick={(e) => { if (e.target === e.currentTarget) setLightboxIndex(null); }}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image preview"
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 flex items-center justify-center active:scale-95 transition"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={() => setLightboxIndex((i) => (i > 0 ? i - 1 : displayedProjects.length - 1))}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 flex items-center justify-center active:scale-95 transition"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((i) => (i < displayedProjects.length - 1 ? i + 1 : 0))}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/20 flex items-center justify-center active:scale-95 transition"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="w-full max-w-5xl px-4 sm:px-14">
            <img
              src={getImagePath(displayedProjects[lightboxIndex].image)}
              alt={displayedProjects[lightboxIndex].title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80';
              }}
              className="max-w-full max-h-[82vh] mx-auto rounded-2xl shadow-2xl object-contain"
            />
            <p className="text-center text-sm mt-4 font-semibold text-slate-200">
              {displayedProjects[lightboxIndex].title}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
