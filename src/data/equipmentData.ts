import { Equipment, Category } from '../types';
export const categories: Category[] = [{
  id: 'earthmoving',
  name: 'Earthmoving Equipment',
  subcategories: ['Excavator', 'Backhoe Loader (JCB)', 'Skid Steer Loader (Bobcat)', 'Bulldozer', 'Wheel Loader', 'Motor Grader', 'Mini-Excavator']
}, {
  id: 'concrete',
  name: 'Concrete Equipment',
  subcategories: ['Concrete Mixer', 'Concrete Vibrator', 'Concrete Cutter', 'Concrete Trowel', 'Concrete Pump', 'Bar Bending Machine', 'Bar Cutting Machine', 'Concrete Bucket', 'Concrete Screed']
}, {
  id: 'compaction',
  name: 'Compaction Equipment',
  subcategories: ['Plate Compactor', 'Jumping Jack', 'Road Roller']
}, {
  id: 'drilling',
  name: 'Drilling / Breaking Equipment',
  subcategories: ['Electric Drill', 'Hammer Drill', 'Rotary Hammer', 'Core Drilling Machine', 'Demolition Hammer', 'Jackhammer', 'Concrete Breaker', 'Pile-Chipping Machine']
}, {
  id: 'material-handling',
  name: 'Material Handling Equipment',
  subcategories: ['Forklift', 'Telehandler', 'Crane', 'Hoist', 'Chain Block', 'Pallet Jack']
}, {
  id: 'cutting',
  name: 'Cutting & Grinding Equipment',
  subcategories: ['Angle Grinder', 'Metal Cutter', 'Tile Cutter', 'Circular Saw', 'Table Saw', 'Wood Cutter', 'Cut-off Machine']
}, {
  id: 'power-tools',
  name: 'Power Tools',
  subcategories: ['Impact Driver', 'Screw Gun', 'Heat Gun', 'Jigsaw', 'Polisher', 'Nail Gun', 'Air Compressor']
}, {
  id: 'scaffolding',
  name: 'Scaffolding & Access Equipment',
  subcategories: ['Scaffolding Sets', 'Aluminium Scaffolding', 'Ladders', 'Mobile Scaffold Tower', 'Formwork Panels', 'Props', 'GI Pipes']
}, {
  id: 'generators',
  name: 'Generators & Power Supply',
  subcategories: ['Diesel Generator', 'Portable Generator', 'Lighting Tower', 'Extension Cables']
}, {
  id: 'survey',
  name: 'Survey & Measurement Equipment',
  subcategories: ['Total Station', 'Theodolite', 'Auto Level', 'Laser Level', 'Measuring Wheel']
}, {
  id: 'vehicles',
  name: 'Construction Vehicles',
  subcategories: ['Tipper Truck', 'Water Bowser', 'Fuel Bowser', 'Flatbed Truck', 'Tractor', 'Trailer']
}, {
  id: 'landscaping',
  name: 'Landscaping & Gardening Tools',
  subcategories: ['Brush Cutter', 'Hedge Trimmer', 'Earth Auger', 'Chainsaw', 'Lawn Mower']
}, {
  id: 'safety',
  name: 'Safety & Support Items',
  subcategories: ['Safety Harness', 'Safety Nets', 'Barriers', 'Traffic Cones']
}, {
  id: 'welding',
  name: 'Welding & Fabrication Tools',
  subcategories: ['Welding Machine', 'Inverter Welder', 'Gas Cutting Set', 'Welding Generator']
}, {
  id: 'plumbing',
  name: 'Plumbing & Civil Support Tools',
  subcategories: ['Water Pump', 'Vibrating Screed', 'Rebar Threading Machine', 'Pipe Cutter', 'Pipe Threading Machine']
}];
export const equipment: Equipment[] = [
// Earthmoving Equipment
{
  id: '1',
  name: 'Excavator',
  category: 'Earthmoving Equipment',
  description: 'Heavy-duty excavator for digging and earthmoving',
  dailyRate: 15000,
  image: 'https://cdn.prod.website-files.com/62c6f13bbe81d33c1c02c93f/64aed4b744418662b05d0f30_AR163.jpg',
  availability: 'Available'
}, {
  id: '2',
  name: 'Backhoe Loader (JCB)',
  category: 'Earthmoving Equipment',
  description: 'Versatile loader and excavator combination',
  dailyRate: 12000,
  image: 'https://images.tractorjunction.com/Infrajunction-prod/jcb_3dx_backhoe_loader1686911730_2b5e36e8a3.jpg',
  availability: 'Available'
}, {
  id: '3',
  name: 'Skid Steer Loader (Bobcat)',
  category: 'Earthmoving Equipment',
  description: 'Compact loader for tight spaces',
  dailyRate: 8000,
  image: 'https://images.tractorjunction.com/Infrajunction-prod/cat_216b31707988569_7c45f16f57.webp',
  availability: 'Limited Stock'
}, {
  id: '4',
  name: 'Bulldozer',
  category: 'Earthmoving Equipment',
  description: 'Powerful dozer for land clearing',
  dailyRate: 18000,
  image: 'https://images.tractorjunction.com/Infrajunction-prod/bull_hd100_1_27db3e73ca.png',
  availability: 'Available'
}, {
  id: '5',
  name: 'Mini-Excavator',
  category: 'Earthmoving Equipment',
  description: 'Compact excavator for small projects',
  dailyRate: 6000,
  image: 'https://images.tractorjunction.com/Infrajunction-prod/shobhagya_ssex1_3_mini_1_4591cede31.png',
  availability: 'Available'
},
// Concrete Equipment
{
  id: '6',
  name: 'Concrete Mixer',
  category: 'Concrete Equipment',
  description: 'Industrial concrete mixer',
  dailyRate: 2500,
  image: 'https://5.imimg.com/data5/DV/PJ/MY-602421/portable-concrete-mixer-1000x1000.jpg',
  availability: 'Available'
}, {
  id: '7',
  name: 'Concrete Vibrator',
  category: 'Concrete Equipment',
  description: 'Poker vibrator for concrete compaction',
  dailyRate: 800,
  image: 'https://5.imimg.com/data5/YC/SH/MY-4219701/concrete-vibrator-1000x1000.jpg',
  availability: 'Available'
}, {
  id: '8',
  name: 'Concrete Cutter',
  category: 'Concrete Equipment',
  description: 'Heavy-duty concrete cutting machine',
  dailyRate: 3500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447617030/LP/ZP/PW/3846082/road-cutting-machines-500x500.jpg',
  availability: 'Available'
}, {
  id: '9',
  name: 'Bar Bending Machine',
  category: 'Concrete Equipment',
  description: 'Automatic rebar bending machine',
  dailyRate: 2000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/359454243/KD/ZQ/SR/142002646/ss-bar-bending-machine-500x500.jpg',
  availability: 'Limited Stock'
},
// Compaction Equipment
{
  id: '10',
  name: 'Plate Compactor',
  category: 'Compaction Equipment',
  description: 'Vibratory plate compactor',
  dailyRate: 1500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2021/6/UH/SJ/NG/62517345/fpc-90-plate-compactor-500x500.jpg',
  availability: 'Available'
}, {
  id: '11',
  name: 'Road Roller',
  category: 'Compaction Equipment',
  description: 'Vibratory road roller',
  dailyRate: 10000,
  image: 'https://5.imimg.com/data5/TK/TM/CR/SELLER-66219286/6118e-rollers-500x500.jpg',
  availability: 'Available'
},
// Drilling / Breaking Equipment
{
  id: '12',
  name: 'Jackhammer',
  category: 'Drilling / Breaking Equipment',
  description: 'Pneumatic jackhammer for breaking',
  dailyRate: 1200,
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/307915075/XP/CJ/WK/62665141/vi-power-gold-jh50-jack-hammer-500x500.jpeg',
  availability: 'Available'
}, {
  id: '13',
  name: 'Core Drilling Machine',
  category: 'Drilling / Breaking Equipment',
  description: 'Diamond core drilling machine',
  dailyRate: 4500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/RQ/HB/KE/145681394/core-drilling-machine-500x500.jpg',
  availability: 'Available'
}, {
  id: '14',
  name: 'Demolition Hammer',
  category: 'Drilling / Breaking Equipment',
  description: 'Electric demolition hammer',
  dailyRate: 1800,
  image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/SX/MH/IJ/83357719/bosch-demolition-hammer-500x500.jpg',
  availability: 'Limited Stock'
},
// Material Handling Equipment
{
  id: '15',
  name: 'Forklift',
  category: 'Material Handling Equipment',
  description: '3-ton capacity forklift',
  dailyRate: 5000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/VS/NB/FD/91208255/toyota-forklift-500x500-1000x1000-500x500.jpg',
  availability: 'Available'
}, {
  id: '16',
  name: 'Mobile Crane',
  category: 'Material Handling Equipment',
  description: '20-ton mobile crane',
  dailyRate: 25000,
  image: 'https://4.imimg.com/data4/RR/CA/MY-10764699/e-mobile-floor-crane-250x250.png',
  availability: 'Available'
}, {
  id: '17',
  name: 'Material Hoist',
  category: 'Material Handling Equipment',
  description: 'Construction material hoist',
  dailyRate: 3500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/519131286/NF/EY/IY/4905263/passenger-cum-material-hoist-rack-pinion-hoist-500x500.jpeg',
  availability: 'Available'
},
// Cutting & Grinding Equipment
{
  id: '18',
  name: 'Angle Grinder',
  category: 'Cutting & Grinding Equipment',
  description: '9-inch angle grinder',
  dailyRate: 500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/469620484/AB/RJ/ZM/161183780/71ncq2fophl-sl1500-500x500.jpg',
  availability: 'Available'
}, {
  id: '19',
  name: 'Circular Saw',
  category: 'Cutting & Grinding Equipment',
  description: 'Heavy-duty circular saw',
  dailyRate: 800,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/3/494745519/ID/NK/YC/8420807/circular-saw-500x500.png',
  availability: 'Available'
}, {
  id: '20',
  name: 'Tile Cutter',
  category: 'Cutting & Grinding Equipment',
  description: 'Electric tile cutting machine',
  dailyRate: 1200,
  image: 'https://5.imimg.com/data5/AP/VT/MY-3131766/heavy-duty-manual-tile-cutter-4-feet-500x500.jpg',
  availability: 'Available'
},
// Power Tools
{
  id: '21',
  name: 'Impact Driver',
  category: 'Power Tools',
  description: 'Cordless impact driver set',
  dailyRate: 600,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447525436/UT/AZ/WZ/161183780/41mjejoayml-500x500.jpg',
  availability: 'Available'
}, {
  id: '22',
  name: 'Air Compressor',
  category: 'Power Tools',
  description: '50L air compressor with tools',
  dailyRate: 1500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/8/532734884/VG/IM/ZI/7898669/air-compressor-500x500.jpg',
  availability: 'Available'
},
// Scaffolding & Access Equipment
{
  id: '23',
  name: 'Aluminium Scaffolding',
  category: 'Scaffolding & Access Equipment',
  description: 'Mobile aluminium scaffolding tower',
  dailyRate: 2500,
  image: 'https://5.imimg.com/data5/ANDROID/Default/2023/1/HT/CX/ZU/3723875/product-jpeg-500x500.jpg',
  availability: 'Available'
}, {
  id: '24',
  name: 'Extension Ladder',
  category: 'Scaffolding & Access Equipment',
  description: '20-foot extension ladder',
  dailyRate: 400,
  image: 'https://5.imimg.com/data5/QG/IJ/XJ/SELLER-5766984/aluminum-extension-ladder-500x500.jpeg',
  availability: 'Available'
},
// Generators & Power Supply
{
  id: '25',
  name: 'Diesel Generator 25kVA',
  category: 'Generators & Power Supply',
  description: 'Silent diesel generator',
  dailyRate: 4000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/314784052/XF/ZI/VN/2785675/double-cylinder-diesel-generator-500x500.jpg',
  availability: 'Available'
}, {
  id: '26',
  name: 'Lighting Tower',
  category: 'Generators & Power Supply',
  description: 'Mobile lighting tower',
  dailyRate: 3000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/411353199/OW/BF/DK/140316/doosan-lt-500x500.png',
  availability: 'Limited Stock'
},
// Survey & Measurement Equipment
{
  id: '27',
  name: 'Total Station',
  category: 'Survey & Measurement Equipment',
  description: 'Electronic total station',
  dailyRate: 3500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/420565567/ZF/ZR/BY/83357719/total-station-500x500.jpg',
  availability: 'Available'
}, {
  id: '28',
  name: 'Laser Level',
  category: 'Survey & Measurement Equipment',
  description: 'Rotary laser level',
  dailyRate: 1200,
  image: 'https://5.imimg.com/data5/ANDROID/Default/2024/7/437621415/MM/OO/HL/665644/product-jpeg-500x500.jpg',
  availability: 'Available'
},
// Construction Vehicles
{
  id: '29',
  name: 'Tipper Truck',
  category: 'Construction Vehicles',
  description: '10-ton tipper truck',
  dailyRate: 8000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/6/515467828/GF/WF/SA/234800668/tata-1918-k-3225-ultra-truck-500x500.jpeg',
  availability: 'Available'
}, {
  id: '30',
  name: 'Water Bowser',
  category: 'Construction Vehicles',
  description: '5000L water tanker',
  dailyRate: 3500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/7/528917984/HQ/TD/NF/12816527/fire-fighting-truck-water-bowser-500x500.jpg',
  availability: 'Available'
},
// Welding & Fabrication Tools
{
  id: '31',
  name: 'Welding Machine',
  category: 'Welding & Fabrication Tools',
  description: 'Arc welding machine 400A',
  dailyRate: 1500,
  image: 'https://5.imimg.com/data5/SELLER/Default/2023/11/364116907/ZZ/ZQ/CB/3989099/71dpr1pigfl-ac-uf1000-1000-ql80-500x500.jpg',
  availability: 'Available'
}, {
  id: '32',
  name: 'Gas Cutting Set',
  category: 'Welding & Fabrication Tools',
  description: 'Oxy-acetylene cutting set',
  dailyRate: 1200,
  image: 'https://5.imimg.com/data5/SELLER/Default/2025/9/542652747/US/ME/HW/161183780/oxy-acetylene-gas-cutting-sets-500x500.jpg',
  availability: 'Available'
},
// Plumbing & Civil Support Tools
{
  id: '33',
  name: 'Submersible Water Pump',
  category: 'Plumbing & Civil Support Tools',
  description: '3HP submersible pump',
  dailyRate: 1000,
  image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/448618911/BJ/WW/TB/16539295/submersible-sump-pumps-500x500.jpeg',
  availability: 'Available'
}, {
  id: '34',
  name: 'Pipe Threading Machine',
  category: 'Plumbing & Civil Support Tools',
  description: 'Electric pipe threading machine',
  dailyRate: 1800,
  image: 'https://5.imimg.com/data5/WX/XM/MY-1955727/pipe-threading-machine-500x500.jpg',
  availability: 'Available'
}];