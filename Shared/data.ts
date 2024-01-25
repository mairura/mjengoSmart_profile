import { ReactNode } from "react";
import {
    FaHome,
    FaBuilding,
    FaSuitcase,
    FaMoneyBill,
    FaScroll,
    FaListAlt,
    FaChartBar,
    FaUsers,
    FaUserCheck,
    FaReceipt,
    FaDollarSign,
    FaList
} from "react-icons/fa";

import carousel1 from '../public/img/carousel1.png'
import carousel2 from "../public/img/carousel2.png";
import carousel3 from "../public/img/carousel3.png";
import carousel4 from "../public/img/carousel4.jpg";
import carousel5 from "../public/img/carousel5.png";
import carousel6 from "../public/img/carousel6.png";
import carousel7 from "../public/img/carousel7.png";
import carousel8 from "../public/img/carousel8.png";
import carousel9 from "../public/img/carousel9.png";
import { IconType } from "react-icons";

interface NavigationItem {
    name: string;
    href: string;
    icon: IconType;
    permission: string;
}


export const navigation: NavigationItem[] = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome,
        permission: "view-dashboard",
    },
    {
        name: "Projects",
        href: "/projects",
        icon: FaBuilding,
        permission: "view-projects",
    },
    {
        name: "Jobs",
        href: "/admin.jobs.index",
        icon: FaSuitcase,
        permission: "view-jobs",
    },
    {
        name: "Payments",
        href: "/payments.index",
        icon: FaMoneyBill, 
        // FaScroll,
        permission: "view-payments",
    },
    {
        name: "Requisitions",
        href: "#",
        icon: FaScroll,
        permission: "view-requisitions",
    },
    {
        name: "Products & Services",
        href: "/product_service_items.index",
        icon: FaListAlt,
        permission: "read-products",
    },
    {
        name: "Reports",
        href: "#",
        icon: FaChartBar,
        permission: "view-reports",
    },
    {
        name: "Users",
        href: "/admin.users.index",
        icon: FaUsers,
        permission: "view-users",
    },
    {
        name: "Approvals",
        href: "/admin.approvals.index",
        icon: FaList,
        permission: "view-users",
    },
    {
        name: "Roles",
        href: "/admin.roles.index",
        icon: FaUserCheck,
        permission: "view-roles",
    },
    {
        name: "General Ledger",
        href: "/generalledgers",
        icon: FaReceipt,
        permission: "view-general-ledgers",
    },
];

export const supplier_navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: FaHome,
        permission: "view-dashboard",
    },
    {
        name: "Requisitions",
        href: "/requisitions.purchase_orders",
        icon: FaScroll,
        permission: "view-requisitions",
    },
    {
        name: "Products & Services",
        href: "/supplier.product_service_items.index",
        icon: FaListAlt,
        permission: "read-service-provider-catalogue",
    },
];

export const non_admin_navigation = [
    {
        name: "Wallet",
        href: "/wallets.user.showByUser",
        icon: FaDollarSign,
        permission: "view-user-wallets",
    },
];

export const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
];

export const genders = ["MALE", "FEMALE", "NOT SPECIFIED"];

export const carousel = [
    {
        id: 1,
        heading: "Pay your construction workers & suppliers",
        image_path: carousel1,
    },
    {
        id: 2,
        heading: "Get a Job at a Construction sites",
        image_path: carousel2,
    },
    {
        id: 3,
        heading: "Get financing for your project",
        image_path: carousel3,
    },
    {
        id: 4,
        heading: "Monitor you Construction Project",
        image_path: carousel4,
    },
    {
        id: 5,
        heading: "Use Our project Cost Calculator to estimate the cost of Your Project",
        image_path: carousel5,
    },
    {
        id: 6,
        heading: "Monitor Delivery and Usage of Construction Materials at the comfort of your Desk",
        image_path: carousel6,
    },
    {
        id: 7,
        heading: "View how your project team is performing",
        image_path: carousel7,
    },
    {
        id: 8,
        heading: "Get Insurance cover for your construction",
        image_path: carousel8,
    },
    {
        id: 9,
        heading: "Pay for your Electricity, water, Airtime here",
        image_path: carousel8,
    },
];

export const services = [
    {
        id: 1,
        title: "Project Monitoring",
        icon: "",
        description:
            "Real time update on your project progress on mobile and web",
        link: "/service/project-monitoring",
        link_text:'Join Us for more'
    },
    {
        id: 2,
        title: "Stakeholders Performance",
        icon: "",
        description:
            "View the work profiles of your project team to ensure you have the best in the market",
        link: "/service/stakeholers-perfomance",
    },
    {
        id: 3,
        title: "Digital payments",
        icon: "",
        description:
            "Pay your construction workers & suppliers “on the go” ;in office, at home, when travelling e.t.c.",
        link: "service/digital-payments",
    },
    {
        id: 4,
        title: "Job Placement Module",
        icon: "",
        description:
            "Get a Job at a construction sites with ease",
        link: "/service/job-placement",
    },
    {
        id: 5,
        title: "Project Cost Calculator",
        icon: "",
        description:
            "Use our project Calculator to get an estimate cost for your construction project",
        link: "/service/cost-calculator",
    },
    {
        id: 6,
        title: "Supplier management",
        icon: "",
        description:
            "Monitor how materials get delivered and used at your construction site",
        link: "/service/supplier-management",
    },
];

export const countries = [
    { name: "Afghanistan", flag: "🇦🇫", code: "AF", dial_code: "+93" },
    { name: "Åland Islands", flag: "🇦🇽", code: "AX", dial_code: "+358" },
    { name: "Albania", flag: "🇦🇱", code: "AL", dial_code: "+355" },
    { name: "Algeria", flag: "🇩🇿", code: "DZ", dial_code: "+213" },
    { name: "American Samoa", flag: "🇦🇸", code: "AS", dial_code: "+1684" },
    { name: "Andorra", flag: "🇦🇩", code: "AD", dial_code: "+376" },
    { name: "Angola", flag: "🇦🇴", code: "AO", dial_code: "+244" },
    { name: "Anguilla", flag: "🇦🇮", code: "AI", dial_code: "+1264" },
    { name: "Antarctica", flag: "🇦🇶", code: "AQ", dial_code: "+672" },
    { name: "Antigua and Barbuda", flag: "🇦🇬", code: "AG", dial_code: "+1268" },
    { name: "Argentina", flag: "🇦🇷", code: "AR", dial_code: "+54" },
    { name: "Armenia", flag: "🇦🇲", code: "AM", dial_code: "+374" },
    { name: "Aruba", flag: "🇦🇼", code: "AW", dial_code: "+297" },
    { name: "Australia", flag: "🇦🇺", code: "AU", dial_code: "+61" },
    { name: "Austria", flag: "🇦🇹", code: "AT", dial_code: "+43" },
    { name: "Azerbaijan", flag: "🇦🇿", code: "AZ", dial_code: "+994" },
    { name: "Bahamas", flag: "🇧🇸", code: "BS", dial_code: "+1242" },
    { name: "Bahrain", flag: "🇧🇭", code: "BH", dial_code: "+973" },
    { name: "Bangladesh", flag: "🇧🇩", code: "BD", dial_code: "+880" },
    { name: "Barbados", flag: "🇧🇧", code: "BB", dial_code: "+1246" },
    { name: "Belarus", flag: "🇧🇾", code: "BY", dial_code: "+375" },
    { name: "Belgium", flag: "🇧🇪", code: "BE", dial_code: "+32" },
    { name: "Belize", flag: "🇧🇿", code: "BZ", dial_code: "+501" },
    { name: "Benin", flag: "🇧🇯", code: "BJ", dial_code: "+229" },
    { name: "Bermuda", flag: "🇧🇲", code: "BM", dial_code: "+1441" },
    { name: "Bhutan", flag: "🇧🇹", code: "BT", dial_code: "+975" },
    {
        name: "Bolivia, Plurinational State of bolivia",
        flag: "🇧🇴",
        code: "BO",
        dial_code: "+591",
    },
    {
        name: "Bosnia and Herzegovina",
        flag: "🇧🇦",
        code: "BA",
        dial_code: "+387",
    },
    { name: "Botswana", flag: "🇧🇼", code: "BW", dial_code: "+267" },
    { name: "Bouvet Island", flag: "🇧🇻", code: "BV", dial_code: "+47" },
    { name: "Brazil", flag: "🇧🇷", code: "BR", dial_code: "+55" },
    {
        name: "British Indian Ocean Territory",
        flag: "🇮🇴",
        code: "IO",
        dial_code: "+246",
    },
    { name: "Brunei Darussalam", flag: "🇧🇳", code: "BN", dial_code: "+673" },
    { name: "Bulgaria", flag: "🇧🇬", code: "BG", dial_code: "+359" },
    { name: "Burkina Faso", flag: "🇧🇫", code: "BF", dial_code: "+226" },
    { name: "Burundi", flag: "🇧🇮", code: "BI", dial_code: "+257" },
    { name: "Cambodia", flag: "🇰🇭", code: "KH", dial_code: "+855" },
    { name: "Cameroon", flag: "🇨🇲", code: "CM", dial_code: "+237" },
    { name: "Canada", flag: "🇨🇦", code: "CA", dial_code: "+1" },
    { name: "Cape Verde", flag: "🇨🇻", code: "CV", dial_code: "+238" },
    { name: "Cayman Islands", flag: "🇰🇾", code: "KY", dial_code: "+345" },
    {
        name: "Central African Republic",
        flag: "🇨🇫",
        code: "CF",
        dial_code: "+236",
    },
    { name: "Chad", flag: "🇹🇩", code: "TD", dial_code: "+235" },
    { name: "Chile", flag: "🇨🇱", code: "CL", dial_code: "+56" },
    { name: "China", flag: "🇨🇳", code: "CN", dial_code: "+86" },
    { name: "Christmas Island", flag: "🇨🇽", code: "CX", dial_code: "+61" },
    {
        name: "Cocos (Keeling) Islands",
        flag: "🇨🇨",
        code: "CC",
        dial_code: "+61",
    },
    { name: "Colombia", flag: "🇨🇴", code: "CO", dial_code: "+57" },
    { name: "Comoros", flag: "🇰🇲", code: "KM", dial_code: "+269" },
    { name: "Congo", flag: "🇨🇬", code: "CG", dial_code: "+242" },
    {
        name: "Congo, The Democratic Republic of the Congo",
        flag: "🇨🇩",
        code: "CD",
        dial_code: "+243",
    },
    { name: "Cook Islands", flag: "🇨🇰", code: "CK", dial_code: "+682" },
    { name: "Costa Rica", flag: "🇨🇷", code: "CR", dial_code: "+506" },
    { name: "Cote d'Ivoire", flag: "🇨🇮", code: "CI", dial_code: "+225" },
    { name: "Croatia", flag: "🇭🇷", code: "HR", dial_code: "+385" },
    { name: "Cuba", flag: "🇨🇺", code: "CU", dial_code: "+53" },
    { name: "Cyprus", flag: "🇨🇾", code: "CY", dial_code: "+357" },
    { name: "Czech Republic", flag: "🇨🇿", code: "CZ", dial_code: "+420" },
    { name: "Denmark", flag: "🇩🇰", code: "DK", dial_code: "+45" },
    { name: "Djibouti", flag: "🇩🇯", code: "DJ", dial_code: "+253" },
    { name: "Dominica", flag: "🇩🇲", code: "DM", dial_code: "+1767" },
    { name: "Dominican Republic", flag: "🇩🇴", code: "DO", dial_code: "+1849" },
    { name: "Ecuador", flag: "🇪🇨", code: "EC", dial_code: "+593" },
    { name: "Egypt", flag: "🇪🇬", code: "EG", dial_code: "+20" },
    { name: "El Salvador", flag: "🇸🇻", code: "SV", dial_code: "+503" },
    { name: "Equatorial Guinea", flag: "🇬🇶", code: "GQ", dial_code: "+240" },
    { name: "Eritrea", flag: "🇪🇷", code: "ER", dial_code: "+291" },
    { name: "Estonia", flag: "🇪🇪", code: "EE", dial_code: "+372" },
    { name: "Ethiopia", flag: "🇪🇹", code: "ET", dial_code: "+251" },
    {
        name: "Falkland Islands (Malvinas)",
        flag: "🇫🇰",
        code: "FK",
        dial_code: "+500",
    },
    { name: "Faroe Islands", flag: "🇫🇴", code: "FO", dial_code: "+298" },
    { name: "Fiji", flag: "🇫🇯", code: "FJ", dial_code: "+679" },
    { name: "Finland", flag: "🇫🇮", code: "FI", dial_code: "+358" },
    { name: "France", flag: "🇫🇷", code: "FR", dial_code: "+33" },
    { name: "French Guiana", flag: "🇬🇫", code: "GF", dial_code: "+594" },
    { name: "French Polynesia", flag: "🇵🇫", code: "PF", dial_code: "+689" },
    {
        name: "French Southern Territories",
        flag: "🇹🇫",
        code: "TF",
        dial_code: "+262",
    },
    { name: "Gabon", flag: "🇬🇦", code: "GA", dial_code: "+241" },
    { name: "Gambia", flag: "🇬🇲", code: "GM", dial_code: "+220" },
    { name: "Georgia", flag: "🇬🇪", code: "GE", dial_code: "+995" },
    { name: "Germany", flag: "🇩🇪", code: "DE", dial_code: "+49" },
    { name: "Ghana", flag: "🇬🇭", code: "GH", dial_code: "+233" },
    { name: "Gibraltar", flag: "🇬🇮", code: "GI", dial_code: "+350" },
    { name: "Greece", flag: "🇬🇷", code: "GR", dial_code: "+30" },
    { name: "Greenland", flag: "🇬🇱", code: "GL", dial_code: "+299" },
    { name: "Grenada", flag: "🇬🇩", code: "GD", dial_code: "+1473" },
    { name: "Guadeloupe", flag: "🇬🇵", code: "GP", dial_code: "+590" },
    { name: "Guam", flag: "🇬🇺", code: "GU", dial_code: "+1671" },
    { name: "Guatemala", flag: "🇬🇹", code: "GT", dial_code: "+502" },
    { name: "Guernsey", flag: "🇬🇬", code: "GG", dial_code: "+44" },
    { name: "Guinea", flag: "🇬🇳", code: "GN", dial_code: "+224" },
    { name: "Guinea-Bissau", flag: "🇬🇼", code: "GW", dial_code: "+245" },
    { name: "Guyana", flag: "🇬🇾", code: "GY", dial_code: "+592" },
    { name: "Haiti", flag: "🇭🇹", code: "HT", dial_code: "+509" },
    {
        name: "Heard Island and Mcdonald Islands",
        flag: "🇭🇲",
        code: "HM",
        dial_code: "+672",
    },
    {
        name: "Holy See (Vatican City State)",
        flag: "🇻🇦",
        code: "VA",
        dial_code: "+379",
    },
    { name: "Honduras", flag: "🇭🇳", code: "HN", dial_code: "+504" },
    { name: "Hong Kong", flag: "🇭🇰", code: "HK", dial_code: "+852" },
    { name: "Hungary", flag: "🇭🇺", code: "HU", dial_code: "+36" },
    { name: "Iceland", flag: "🇮🇸", code: "IS", dial_code: "+354" },
    { name: "India", flag: "🇮🇳", code: "IN", dial_code: "+91" },
    { name: "Indonesia", flag: "🇮🇩", code: "ID", dial_code: "+62" },
    {
        name: "Iran, Islamic Republic of Persian Gulf",
        flag: "🇮🇷",
        code: "IR",
        dial_code: "+98",
    },
    { name: "Iraq", flag: "🇮🇶", code: "IQ", dial_code: "+964" },
    { name: "Ireland", flag: "🇮🇪", code: "IE", dial_code: "+353" },
    { name: "Isle of Man", flag: "🇮🇲", code: "IM", dial_code: "+44" },
    { name: "Israel", flag: "🇮🇱", code: "IL", dial_code: "+972" },
    { name: "Italy", flag: "🇮🇹", code: "IT", dial_code: "+39" },
    { name: "Jamaica", flag: "🇯🇲", code: "JM", dial_code: "+1876" },
    { name: "Japan", flag: "🇯🇵", code: "JP", dial_code: "+81" },
    { name: "Jersey", flag: "🇯🇪", code: "JE", dial_code: "+44" },
    { name: "Jordan", flag: "🇯🇴", code: "JO", dial_code: "+962" },
    { name: "Kazakhstan", flag: "🇰🇿", code: "KZ", dial_code: "+7" },
    { name: "Kenya", flag: "🇰🇪", code: "KE", dial_code: "+254" },
    { name: "Kiribati", flag: "🇰🇮", code: "KI", dial_code: "+686" },
    {
        name: "Korea, Democratic People's Republic of Korea",
        flag: "🇰🇵",
        code: "KP",
        dial_code: "+850",
    },
    {
        name: "Korea, Republic of South Korea",
        flag: "🇰🇷",
        code: "KR",
        dial_code: "+82",
    },
    { name: "Kosovo", flag: "🇽🇰", code: "XK", dial_code: "+383" },
    { name: "Kuwait", flag: "🇰🇼", code: "KW", dial_code: "+965" },
    { name: "Kyrgyzstan", flag: "🇰🇬", code: "KG", dial_code: "+996" },
    { name: "Laos", flag: "🇱🇦", code: "LA", dial_code: "+856" },
    { name: "Latvia", flag: "🇱🇻", code: "LV", dial_code: "+371" },
    { name: "Lebanon", flag: "🇱🇧", code: "LB", dial_code: "+961" },
    { name: "Lesotho", flag: "🇱🇸", code: "LS", dial_code: "+266" },
    { name: "Liberia", flag: "🇱🇷", code: "LR", dial_code: "+231" },
    {
        name: "Libyan Arab Jamahiriya",
        flag: "🇱🇾",
        code: "LY",
        dial_code: "+218",
    },
    { name: "Liechtenstein", flag: "🇱🇮", code: "LI", dial_code: "+423" },
    { name: "Lithuania", flag: "🇱🇹", code: "LT", dial_code: "+370" },
    { name: "Luxembourg", flag: "🇱🇺", code: "LU", dial_code: "+352" },
    { name: "Macao", flag: "🇲🇴", code: "MO", dial_code: "+853" },
    { name: "Macedonia", flag: "🇲🇰", code: "MK", dial_code: "+389" },
    { name: "Madagascar", flag: "🇲🇬", code: "MG", dial_code: "+261" },
    { name: "Malawi", flag: "🇲🇼", code: "MW", dial_code: "+265" },
    { name: "Malaysia", flag: "🇲🇾", code: "MY", dial_code: "+60" },
    { name: "Maldives", flag: "🇲🇻", code: "MV", dial_code: "+960" },
    { name: "Mali", flag: "🇲🇱", code: "ML", dial_code: "+223" },
    { name: "Malta", flag: "🇲🇹", code: "MT", dial_code: "+356" },
    { name: "Marshall Islands", flag: "🇲🇭", code: "MH", dial_code: "+692" },
    { name: "Martinique", flag: "🇲🇶", code: "MQ", dial_code: "+596" },
    { name: "Mauritania", flag: "🇲🇷", code: "MR", dial_code: "+222" },
    { name: "Mauritius", flag: "🇲🇺", code: "MU", dial_code: "+230" },
    { name: "Mayotte", flag: "🇾🇹", code: "YT", dial_code: "+262" },
    { name: "Mexico", flag: "🇲🇽", code: "MX", dial_code: "+52" },
    {
        name: "Micronesia, Federated States of Micronesia",
        flag: "🇫🇲",
        code: "FM",
        dial_code: "+691",
    },
    { name: "Moldova", flag: "🇲🇩", code: "MD", dial_code: "+373" },
    { name: "Monaco", flag: "🇲🇨", code: "MC", dial_code: "+377" },
    { name: "Mongolia", flag: "🇲🇳", code: "MN", dial_code: "+976" },
    { name: "Montenegro", flag: "🇲🇪", code: "ME", dial_code: "+382" },
    { name: "Montserrat", flag: "🇲🇸", code: "MS", dial_code: "+1664" },
    { name: "Morocco", flag: "🇲🇦", code: "MA", dial_code: "+212" },
    { name: "Mozambique", flag: "🇲🇿", code: "MZ", dial_code: "+258" },
    { name: "Myanmar", flag: "🇲🇲", code: "MM", dial_code: "+95" },
    { name: "Namibia", flag: "🇳🇦", code: "NA", dial_code: "+264" },
    { name: "Nauru", flag: "🇳🇷", code: "NR", dial_code: "+674" },
    { name: "Nepal", flag: "🇳🇵", code: "NP", dial_code: "+977" },
    { name: "Netherlands", flag: "🇳🇱", code: "NL", dial_code: "+31" },
    { name: "Netherlands Antilles", flag: "", code: "AN", dial_code: "+599" },
    { name: "New Caledonia", flag: "🇳🇨", code: "NC", dial_code: "+687" },
    { name: "New Zealand", flag: "🇳🇿", code: "NZ", dial_code: "+64" },
    { name: "Nicaragua", flag: "🇳🇮", code: "NI", dial_code: "+505" },
    { name: "Niger", flag: "🇳🇪", code: "NE", dial_code: "+227" },
    { name: "Nigeria", flag: "🇳🇬", code: "NG", dial_code: "+234" },
    { name: "Niue", flag: "🇳🇺", code: "NU", dial_code: "+683" },
    { name: "Norfolk Island", flag: "🇳🇫", code: "NF", dial_code: "+672" },
    {
        name: "Northern Mariana Islands",
        flag: "🇲🇵",
        code: "MP",
        dial_code: "+1670",
    },
    { name: "Norway", flag: "🇳🇴", code: "NO", dial_code: "+47" },
    { name: "Oman", flag: "🇴🇲", code: "OM", dial_code: "+968" },
    { name: "Pakistan", flag: "🇵🇰", code: "PK", dial_code: "+92" },
    { name: "Palau", flag: "🇵🇼", code: "PW", dial_code: "+680" },
    {
        name: "Palestinian Territory, Occupied",
        flag: "🇵🇸",
        code: "PS",
        dial_code: "+970",
    },
    { name: "Panama", flag: "🇵🇦", code: "PA", dial_code: "+507" },
    { name: "Papua New Guinea", flag: "🇵🇬", code: "PG", dial_code: "+675" },
    { name: "Paraguay", flag: "🇵🇾", code: "PY", dial_code: "+595" },
    { name: "Peru", flag: "🇵🇪", code: "PE", dial_code: "+51" },
    { name: "Philippines", flag: "🇵🇭", code: "PH", dial_code: "+63" },
    { name: "Pitcairn", flag: "🇵🇳", code: "PN", dial_code: "+64" },
    { name: "Poland", flag: "🇵🇱", code: "PL", dial_code: "+48" },
    { name: "Portugal", flag: "🇵🇹", code: "PT", dial_code: "+351" },
    { name: "Puerto Rico", flag: "🇵🇷", code: "PR", dial_code: "+1939" },
    { name: "Qatar", flag: "🇶🇦", code: "QA", dial_code: "+974" },
    { name: "Romania", flag: "🇷🇴", code: "RO", dial_code: "+40" },
    { name: "Russia", flag: "🇷🇺", code: "RU", dial_code: "+7" },
    { name: "Rwanda", flag: "🇷🇼", code: "RW", dial_code: "+250" },
    { name: "Reunion", flag: "🇷🇪", code: "RE", dial_code: "+262" },
    { name: "Saint Barthelemy", flag: "🇧🇱", code: "BL", dial_code: "+590" },
    {
        name: "Saint Helena, Ascension and Tristan Da Cunha",
        flag: "🇸🇭",
        code: "SH",
        dial_code: "+290",
    },
    {
        name: "Saint Kitts and Nevis",
        flag: "🇰🇳",
        code: "KN",
        dial_code: "+1869",
    },
    { name: "Saint Lucia", flag: "🇱🇨", code: "LC", dial_code: "+1758" },
    { name: "Saint Martin", flag: "🇲🇫", code: "MF", dial_code: "+590" },
    {
        name: "Saint Pierre and Miquelon",
        flag: "🇵🇲",
        code: "PM",
        dial_code: "+508",
    },
    {
        name: "Saint Vincent and the Grenadines",
        flag: "🇻🇨",
        code: "VC",
        dial_code: "+1784",
    },
    { name: "Samoa", flag: "🇼🇸", code: "WS", dial_code: "+685" },
    { name: "San Marino", flag: "🇸🇲", code: "SM", dial_code: "+378" },
    {
        name: "Sao Tome and Principe",
        flag: "🇸🇹",
        code: "ST",
        dial_code: "+239",
    },
    { name: "Saudi Arabia", flag: "🇸🇦", code: "SA", dial_code: "+966" },
    { name: "Senegal", flag: "🇸🇳", code: "SN", dial_code: "+221" },
    { name: "Serbia", flag: "🇷🇸", code: "RS", dial_code: "+381" },
    { name: "Seychelles", flag: "🇸🇨", code: "SC", dial_code: "+248" },
    { name: "Sierra Leone", flag: "🇸🇱", code: "SL", dial_code: "+232" },
    { name: "Singapore", flag: "🇸🇬", code: "SG", dial_code: "+65" },
    { name: "Slovakia", flag: "🇸🇰", code: "SK", dial_code: "+421" },
    { name: "Slovenia", flag: "🇸🇮", code: "SI", dial_code: "+386" },
    { name: "Solomon Islands", flag: "🇸🇧", code: "SB", dial_code: "+677" },
    { name: "Somalia", flag: "🇸🇴", code: "SO", dial_code: "+252" },
    { name: "South Africa", flag: "🇿🇦", code: "ZA", dial_code: "+27" },
    { name: "South Sudan", flag: "🇸🇸", code: "SS", dial_code: "+211" },
    {
        name: "South Georgia and the South Sandwich Islands",
        flag: "🇬🇸",
        code: "GS",
        dial_code: "+500",
    },
    { name: "Spain", flag: "🇪🇸", code: "ES", dial_code: "+34" },
    { name: "Sri Lanka", flag: "🇱🇰", code: "LK", dial_code: "+94" },
    { name: "Sudan", flag: "🇸🇩", code: "SD", dial_code: "+249" },
    { name: "Suriname", flag: "🇸🇷", code: "SR", dial_code: "+597" },
    {
        name: "Svalbard and Jan Mayen",
        flag: "🇸🇯",
        code: "SJ",
        dial_code: "+47",
    },
    { name: "Eswatini", flag: "🇸🇿", code: "SZ", dial_code: "+268" },
    { name: "Sweden", flag: "🇸🇪", code: "SE", dial_code: "+46" },
    { name: "Switzerland", flag: "🇨🇭", code: "CH", dial_code: "+41" },
    { name: "Syrian Arab Republic", flag: "🇸🇾", code: "SY", dial_code: "+963" },
    { name: "Taiwan", flag: "🇹🇼", code: "TW", dial_code: "+886" },
    { name: "Tajikistan", flag: "🇹🇯", code: "TJ", dial_code: "+992" },
    {
        name: "Tanzania, United Republic of Tanzania",
        flag: "🇹🇿",
        code: "TZ",
        dial_code: "+255",
    },
    { name: "Thailand", flag: "🇹🇭", code: "TH", dial_code: "+66" },
    { name: "Timor-Leste", flag: "🇹🇱", code: "TL", dial_code: "+670" },
    { name: "Togo", flag: "🇹🇬", code: "TG", dial_code: "+228" },
    { name: "Tokelau", flag: "🇹🇰", code: "TK", dial_code: "+690" },
    { name: "Tonga", flag: "🇹🇴", code: "TO", dial_code: "+676" },
    { name: "Trinidad and Tobago", flag: "🇹🇹", code: "TT", dial_code: "+1868" },
    { name: "Tunisia", flag: "🇹🇳", code: "TN", dial_code: "+216" },
    { name: "Turkey", flag: "🇹🇷", code: "TR", dial_code: "+90" },
    { name: "Turkmenistan", flag: "🇹🇲", code: "TM", dial_code: "+993" },
    {
        name: "Turks and Caicos Islands",
        flag: "🇹🇨",
        code: "TC",
        dial_code: "+1649",
    },
    { name: "Tuvalu", flag: "🇹🇻", code: "TV", dial_code: "+688" },
    { name: "Uganda", flag: "🇺🇬", code: "UG", dial_code: "+256" },
    { name: "Ukraine", flag: "🇺🇦", code: "UA", dial_code: "+380" },
    { name: "United Arab Emirates", flag: "🇦🇪", code: "AE", dial_code: "+971" },
    { name: "United Kingdom", flag: "🇬🇧", code: "GB", dial_code: "+44" },
    { name: "United States", flag: "🇺🇸", code: "US", dial_code: "+1" },
    { name: "Uruguay", flag: "🇺🇾", code: "UY", dial_code: "+598" },
    { name: "Uzbekistan", flag: "🇺🇿", code: "UZ", dial_code: "+998" },
    { name: "Vanuatu", flag: "🇻🇺", code: "VU", dial_code: "+678" },
    {
        name: "Venezuela, Bolivarian Republic of Venezuela",
        flag: "🇻🇪",
        code: "VE",
        dial_code: "+58",
    },
    { name: "Vietnam", flag: "🇻🇳", code: "VN", dial_code: "+84" },
    {
        name: "Virgin Islands, British",
        flag: "🇻🇬",
        code: "VG",
        dial_code: "+1284",
    },
    {
        name: "Virgin Islands, U.S.",
        flag: "🇻🇮",
        code: "VI",
        dial_code: "+1340",
    },
    { name: "Wallis and Futuna", flag: "🇼🇫", code: "WF", dial_code: "+681" },
    { name: "Yemen", flag: "🇾🇪", code: "YE", dial_code: "+967" },
    { name: "Zambia", flag: "🇿🇲", code: "ZM", dial_code: "+260" },
    { name: "Zimbabwe", flag: "🇿🇼", code: "ZW", dial_code: "+263" },
];

export const currencies = [
    { cc: "AED", symbol: "\u062f.\u0625;", name: "UAE dirham" },
    { cc: "AFN", symbol: "Afs", name: "Afghan afghani" },
    { cc: "ALL", symbol: "L", name: "Albanian lek" },
    { cc: "AMD", symbol: "AMD", name: "Armenian dram" },
    { cc: "ANG", symbol: "NA\u0192", name: "Netherlands Antillean gulden" },
    { cc: "AOA", symbol: "Kz", name: "Angolan kwanza" },
    { cc: "ARS", symbol: "$", name: "Argentine peso" },
    { cc: "AUD", symbol: "$", name: "Australian dollar" },
    { cc: "AWG", symbol: "\u0192", name: "Aruban florin" },
    { cc: "AZN", symbol: "AZN", name: "Azerbaijani manat" },
    {
        cc: "BAM",
        symbol: "KM",
        name: "Bosnia and Herzegovina konvertibilna marka",
    },
    { cc: "BBD", symbol: "Bds$", name: "Barbadian dollar" },
    { cc: "BDT", symbol: "\u09f3", name: "Bangladeshi taka" },
    { cc: "BGN", symbol: "BGN", name: "Bulgarian lev" },
    { cc: "BHD", symbol: ".\u062f.\u0628", name: "Bahraini dinar" },
    { cc: "BIF", symbol: "FBu", name: "Burundi franc" },
    { cc: "BMD", symbol: "BD$", name: "Bermudian dollar" },
    { cc: "BND", symbol: "B$", name: "Brunei dollar" },
    { cc: "BOB", symbol: "Bs.", name: "Bolivian boliviano" },
    { cc: "BRL", symbol: "R$", name: "Brazilian real" },
    { cc: "BSD", symbol: "B$", name: "Bahamian dollar" },
    { cc: "BTN", symbol: "Nu.", name: "Bhutanese ngultrum" },
    { cc: "BWP", symbol: "P", name: "Botswana pula" },
    { cc: "BYR", symbol: "Br", name: "Belarusian ruble" },
    { cc: "BZD", symbol: "BZ$", name: "Belize dollar" },
    { cc: "CAD", symbol: "$", name: "Canadian dollar" },
    { cc: "CDF", symbol: "F", name: "Congolese franc" },
    { cc: "CHF", symbol: "Fr.", name: "Swiss franc" },
    { cc: "CLP", symbol: "$", name: "Chilean peso" },
    { cc: "CNY", symbol: "\u00a5", name: "Chinese/Yuan renminbi" },
    { cc: "COP", symbol: "Col$", name: "Colombian peso" },
    { cc: "CRC", symbol: "\u20a1", name: "Costa Rican colon" },
    { cc: "CUC", symbol: "$", name: "Cuban peso" },
    { cc: "CVE", symbol: "Esc", name: "Cape Verdean escudo" },
    { cc: "CZK", symbol: "K\u010d", name: "Czech koruna" },
    { cc: "DJF", symbol: "Fdj", name: "Djiboutian franc" },
    { cc: "DKK", symbol: "Kr", name: "Danish krone" },
    { cc: "DOP", symbol: "RD$", name: "Dominican peso" },
    { cc: "DZD", symbol: "\u062f.\u062c", name: "Algerian dinar" },
    { cc: "EEK", symbol: "KR", name: "Estonian kroon" },
    { cc: "EGP", symbol: "\u00a3", name: "Egyptian pound" },
    { cc: "ERN", symbol: "Nfa", name: "Eritrean nakfa" },
    { cc: "ETB", symbol: "Br", name: "Ethiopian birr" },
    { cc: "EUR", symbol: "\u20ac", name: "European Euro" },
    { cc: "FJD", symbol: "FJ$", name: "Fijian dollar" },
    { cc: "FKP", symbol: "\u00a3", name: "Falkland Islands pound" },
    { cc: "GBP", symbol: "\u00a3", name: "British pound" },
    { cc: "GEL", symbol: "GEL", name: "Georgian lari" },
    { cc: "GHS", symbol: "GH\u20b5", name: "Ghanaian cedi" },
    { cc: "GIP", symbol: "\u00a3", name: "Gibraltar pound" },
    { cc: "GMD", symbol: "D", name: "Gambian dalasi" },
    { cc: "GNF", symbol: "FG", name: "Guinean franc" },
    { cc: "GQE", symbol: "CFA", name: "Central African CFA franc" },
    { cc: "GTQ", symbol: "Q", name: "Guatemalan quetzal" },
    { cc: "GYD", symbol: "GY$", name: "Guyanese dollar" },
    { cc: "HKD", symbol: "HK$", name: "Hong Kong dollar" },
    { cc: "HNL", symbol: "L", name: "Honduran lempira" },
    { cc: "HRK", symbol: "kn", name: "Croatian kuna" },
    { cc: "HTG", symbol: "G", name: "Haitian gourde" },
    { cc: "HUF", symbol: "Ft", name: "Hungarian forint" },
    { cc: "IDR", symbol: "Rp", name: "Indonesian rupiah" },
    { cc: "ILS", symbol: "\u20aa", name: "Israeli new sheqel" },
    { cc: "INR", symbol: "\u20B9", name: "Indian rupee" },
    { cc: "IQD", symbol: "\u062f.\u0639", name: "Iraqi dinar" },
    { cc: "IRR", symbol: "IRR", name: "Iranian rial" },
    { cc: "ISK", symbol: "kr", name: "Icelandic kr\u00f3na" },
    { cc: "JMD", symbol: "J$", name: "Jamaican dollar" },
    { cc: "JOD", symbol: "JOD", name: "Jordanian dinar" },
    { cc: "JPY", symbol: "\u00a5", name: "Japanese yen" },
    { cc: "KES", symbol: "KSh", name: "Kenyan shilling" },
    { cc: "KGS", symbol: "\u0441\u043e\u043c", name: "Kyrgyzstani som" },
    { cc: "KHR", symbol: "\u17db", name: "Cambodian riel" },
    { cc: "KMF", symbol: "KMF", name: "Comorian franc" },
    { cc: "KPW", symbol: "W", name: "North Korean won" },
    { cc: "KRW", symbol: "W", name: "South Korean won" },
    { cc: "KWD", symbol: "KWD", name: "Kuwaiti dinar" },
    { cc: "KYD", symbol: "KY$", name: "Cayman Islands dollar" },
    { cc: "KZT", symbol: "T", name: "Kazakhstani tenge" },
    { cc: "LAK", symbol: "KN", name: "Lao kip" },
    { cc: "LBP", symbol: "\u00a3", name: "Lebanese lira" },
    { cc: "LKR", symbol: "Rs", name: "Sri Lankan rupee" },
    { cc: "LRD", symbol: "L$", name: "Liberian dollar" },
    { cc: "LSL", symbol: "M", name: "Lesotho loti" },
    { cc: "LTL", symbol: "Lt", name: "Lithuanian litas" },
    { cc: "LVL", symbol: "Ls", name: "Latvian lats" },
    { cc: "LYD", symbol: "LD", name: "Libyan dinar" },
    { cc: "MAD", symbol: "MAD", name: "Moroccan dirham" },
    { cc: "MDL", symbol: "MDL", name: "Moldovan leu" },
    { cc: "MGA", symbol: "FMG", name: "Malagasy ariary" },
    { cc: "MKD", symbol: "MKD", name: "Macedonian denar" },
    { cc: "MMK", symbol: "K", name: "Myanma kyat" },
    { cc: "MNT", symbol: "\u20ae", name: "Mongolian tugrik" },
    { cc: "MOP", symbol: "P", name: "Macanese pataca" },
    { cc: "MRO", symbol: "UM", name: "Mauritanian ouguiya" },
    { cc: "MUR", symbol: "Rs", name: "Mauritian rupee" },
    { cc: "MVR", symbol: "Rf", name: "Maldivian rufiyaa" },
    { cc: "MWK", symbol: "MK", name: "Malawian kwacha" },
    { cc: "MXN", symbol: "$", name: "Mexican peso" },
    { cc: "MYR", symbol: "RM", name: "Malaysian ringgit" },
    { cc: "MZM", symbol: "MTn", name: "Mozambican metical" },
    { cc: "NAD", symbol: "N$", name: "Namibian dollar" },
    { cc: "NGN", symbol: "\u20a6", name: "Nigerian naira" },
    { cc: "NIO", symbol: "C$", name: "Nicaraguan c\u00f3rdoba" },
    { cc: "NOK", symbol: "kr", name: "Norwegian krone" },
    { cc: "NPR", symbol: "NRs", name: "Nepalese rupee" },
    { cc: "NZD", symbol: "NZ$", name: "New Zealand dollar" },
    { cc: "OMR", symbol: "OMR", name: "Omani rial" },
    { cc: "PAB", symbol: "B./", name: "Panamanian balboa" },
    { cc: "PEN", symbol: "S/.", name: "Peruvian nuevo sol" },
    { cc: "PGK", symbol: "K", name: "Papua New Guinean kina" },
    { cc: "PHP", symbol: "\u20b1", name: "Philippine peso" },
    { cc: "PKR", symbol: "Rs.", name: "Pakistani rupee" },
    { cc: "PLN", symbol: "z\u0142", name: "Polish zloty" },
    { cc: "PYG", symbol: "\u20b2", name: "Paraguayan guarani" },
    { cc: "QAR", symbol: "QR", name: "Qatari riyal" },
    { cc: "RON", symbol: "L", name: "Romanian leu" },
    { cc: "RSD", symbol: "din.", name: "Serbian dinar" },
    { cc: "RUB", symbol: "R", name: "Russian ruble" },
    { cc: "SAR", symbol: "SR", name: "Saudi riyal" },
    { cc: "SBD", symbol: "SI$", name: "Solomon Islands dollar" },
    { cc: "SCR", symbol: "SR", name: "Seychellois rupee" },
    { cc: "SDG", symbol: "SDG", name: "Sudanese pound" },
    { cc: "SEK", symbol: "kr", name: "Swedish krona" },
    { cc: "SGD", symbol: "S$", name: "Singapore dollar" },
    { cc: "SHP", symbol: "\u00a3", name: "Saint Helena pound" },
    { cc: "SLL", symbol: "Le", name: "Sierra Leonean leone" },
    { cc: "SOS", symbol: "Sh.", name: "Somali shilling" },
    { cc: "SRD", symbol: "$", name: "Surinamese dollar" },
    { cc: "SYP", symbol: "LS", name: "Syrian pound" },
    { cc: "SZL", symbol: "E", name: "Swazi lilangeni" },
    { cc: "THB", symbol: "\u0e3f", name: "Thai baht" },
    { cc: "TJS", symbol: "TJS", name: "Tajikistani somoni" },
    { cc: "TMT", symbol: "m", name: "Turkmen manat" },
    { cc: "TND", symbol: "DT", name: "Tunisian dinar" },
    { cc: "TRY", symbol: "TRY", name: "Turkish new lira" },
    { cc: "TTD", symbol: "TT$", name: "Trinidad and Tobago dollar" },
    { cc: "TWD", symbol: "NT$", name: "New Taiwan dollar" },
    { cc: "TZS", symbol: "TZS", name: "Tanzanian shilling" },
    { cc: "UAH", symbol: "UAH", name: "Ukrainian hryvnia" },
    { cc: "UGX", symbol: "USh", name: "Ugandan shilling" },
    { cc: "USD", symbol: "US$", name: "United States dollar" },
    { cc: "UYU", symbol: "$U", name: "Uruguayan peso" },
    { cc: "UZS", symbol: "UZS", name: "Uzbekistani som" },
    { cc: "VEB", symbol: "Bs", name: "Venezuelan bolivar" },
    { cc: "VND", symbol: "\u20ab", name: "Vietnamese dong" },
    { cc: "VUV", symbol: "VT", name: "Vanuatu vatu" },
    { cc: "WST", symbol: "WS$", name: "Samoan tala" },
    { cc: "XAF", symbol: "CFA", name: "Central African CFA franc" },
    { cc: "XCD", symbol: "EC$", name: "East Caribbean dollar" },
    { cc: "XDR", symbol: "SDR", name: "Special Drawing Rights" },
    { cc: "XOF", symbol: "CFA", name: "West African CFA franc" },
    { cc: "XPF", symbol: "F", name: "CFP franc" },
    { cc: "YER", symbol: "YER", name: "Yemeni rial" },
    { cc: "ZAR", symbol: "R", name: "South African rand" },
    { cc: "ZMK", symbol: "ZK", name: "Zambian kwacha" },
    { cc: "ZWR", symbol: "Z$", name: "Zimbabwean dollar" },
];

export const country_currencies = [
    {
        country: "Afghanistan",
        currency_code: "AFN",
    },
    {
        country: "Albania",
        currency_code: "ALL",
    },
    {
        country: "Algeria",
        currency_code: "DZD",
    },
    {
        country: "American Samoa",
        currency_code: "USD",
    },
    {
        country: "Andorra",
        currency_code: "EUR",
    },
    {
        country: "Angola",
        currency_code: "AOA",
    },
    {
        country: "Anguilla",
        currency_code: "XCD",
    },
    {
        country: "Antarctica",
        currency_code: "XCD",
    },
    {
        country: "Antigua and Barbuda",
        currency_code: "XCD",
    },
    {
        country: "Argentina",
        currency_code: "ARS",
    },
    {
        country: "Armenia",
        currency_code: "AMD",
    },
    {
        country: "Aruba",
        currency_code: "AWG",
    },
    {
        country: "Australia",
        currency_code: "AUD",
    },
    {
        country: "Austria",
        currency_code: "EUR",
    },
    {
        country: "Azerbaijan",
        currency_code: "AZN",
    },
    {
        country: "Bahamas",
        currency_code: "BSD",
    },
    {
        country: "Bahrain",
        currency_code: "BHD",
    },
    {
        country: "Bangladesh",
        currency_code: "BDT",
    },
    {
        country: "Barbados",
        currency_code: "BBD",
    },
    {
        country: "Belarus",
        currency_code: "BYR",
    },
    {
        country: "Belgium",
        currency_code: "EUR",
    },
    {
        country: "Belize",
        currency_code: "BZD",
    },
    {
        country: "Benin",
        currency_code: "XOF",
    },
    {
        country: "Bermuda",
        currency_code: "BMD",
    },
    {
        country: "Bhutan",
        currency_code: "BTN",
    },
    {
        country: "Bolivia",
        currency_code: "BOB",
    },
    {
        country: "Bosnia and Herzegovina",
        currency_code: "BAM",
    },
    {
        country: "Botswana",
        currency_code: "BWP",
    },
    {
        country: "Bouvet Island",
        currency_code: "NOK",
    },
    {
        country: "Brazil",
        currency_code: "BRL",
    },
    {
        country: "British Indian Ocean Territory",
        currency_code: "USD",
    },
    {
        country: "Brunei",
        currency_code: "BND",
    },
    {
        country: "Bulgaria",
        currency_code: "BGN",
    },
    {
        country: "Burkina Faso",
        currency_code: "XOF",
    },
    {
        country: "Burundi",
        currency_code: "BIF",
    },
    {
        country: "Cambodia",
        currency_code: "KHR",
    },
    {
        country: "Cameroon",
        currency_code: "XAF",
    },
    {
        country: "Canada",
        currency_code: "CAD",
    },
    {
        country: "Cape Verde",
        currency_code: "CVE",
    },
    {
        country: "Cayman Islands",
        currency_code: "KYD",
    },
    {
        country: "Central African Republic",
        currency_code: "XAF",
    },
    {
        country: "Chad",
        currency_code: "XAF",
    },
    {
        country: "Chile",
        currency_code: "CLP",
    },
    {
        country: "China",
        currency_code: "CNY",
    },
    {
        country: "Christmas Island",
        currency_code: "AUD",
    },
    {
        country: "Cocos (Keeling) Islands",
        currency_code: "AUD",
    },
    {
        country: "Colombia",
        currency_code: "COP",
    },
    {
        country: "Comoros",
        currency_code: "KMF",
    },
    {
        country: "Congo",
        currency_code: "XAF",
    },
    {
        country: "Cook Islands",
        currency_code: "NZD",
    },
    {
        country: "Costa Rica",
        currency_code: "CRC",
    },
    {
        country: "Croatia",
        currency_code: "HRK",
    },
    {
        country: "Cuba",
        currency_code: "CUP",
    },
    {
        country: "Cyprus",
        currency_code: "EUR",
    },
    {
        country: "Czech Republic",
        currency_code: "CZK",
    },
    {
        country: "Denmark",
        currency_code: "DKK",
    },
    {
        country: "Djibouti",
        currency_code: "DJF",
    },
    {
        country: "Dominica",
        currency_code: "XCD",
    },
    {
        country: "Dominican Republic",
        currency_code: "DOP",
    },
    {
        country: "East Timor",
        currency_code: "USD",
    },
    {
        country: "Ecuador",
        currency_code: "ECS",
    },
    {
        country: "Egypt",
        currency_code: "EGP",
    },
    {
        country: "El Salvador",
        currency_code: "SVC",
    },
    {
        country: "England",
        currency_code: "GBP",
    },
    {
        country: "Equatorial Guinea",
        currency_code: "XAF",
    },
    {
        country: "Eritrea",
        currency_code: "ERN",
    },
    {
        country: "Estonia",
        currency_code: "EUR",
    },
    {
        country: "Ethiopia",
        currency_code: "ETB",
    },
    {
        country: "Falkland Islands",
        currency_code: "FKP",
    },
    {
        country: "Faroe Islands",
        currency_code: "DKK",
    },
    {
        country: "Fiji Islands",
        currency_code: "FJD",
    },
    {
        country: "Finland",
        currency_code: "EUR",
    },
    {
        country: "France",
        currency_code: "EUR",
    },
    {
        country: "French Guiana",
        currency_code: "EUR",
    },
    {
        country: "French Polynesia",
        currency_code: "XPF",
    },
    {
        country: "French Southern territories",
        currency_code: "EUR",
    },
    {
        country: "Gabon",
        currency_code: "XAF",
    },
    {
        country: "Gambia",
        currency_code: "GMD",
    },
    {
        country: "Georgia",
        currency_code: "GEL",
    },
    {
        country: "Germany",
        currency_code: "EUR",
    },
    {
        country: "Ghana",
        currency_code: "GHS",
    },
    {
        country: "Gibraltar",
        currency_code: "GIP",
    },
    {
        country: "Greece",
        currency_code: "EUR",
    },
    {
        country: "Greenland",
        currency_code: "DKK",
    },
    {
        country: "Grenada",
        currency_code: "XCD",
    },
    {
        country: "Guadeloupe",
        currency_code: "EUR",
    },
    {
        country: "Guam",
        currency_code: "USD",
    },
    {
        country: "Guatemala",
        currency_code: "QTQ",
    },
    {
        country: "Guinea",
        currency_code: "GNF",
    },
    {
        country: "Guinea-Bissau",
        currency_code: "CFA",
    },
    {
        country: "Guyana",
        currency_code: "GYD",
    },
    {
        country: "Haiti",
        currency_code: "HTG",
    },
    {
        country: "Heard Island and McDonald Islands",
        currency_code: "AUD",
    },
    {
        country: "Holy See (Vatican City State)",
        currency_code: "EUR",
    },
    {
        country: "Honduras",
        currency_code: "HNL",
    },
    {
        country: "Hong Kong",
        currency_code: "HKD",
    },
    {
        country: "Hungary",
        currency_code: "HUF",
    },
    {
        country: "Iceland",
        currency_code: "ISK",
    },
    {
        country: "India",
        currency_code: "INR",
    },
    {
        country: "Indonesia",
        currency_code: "IDR",
    },
    {
        country: "Iran",
        currency_code: "IRR",
    },
    {
        country: "Iraq",
        currency_code: "IQD",
    },
    {
        country: "Ireland",
        currency_code: "EUR",
    },
    {
        country: "Israel",
        currency_code: "ILS",
    },
    {
        country: "Italy",
        currency_code: "EUR",
    },
    {
        country: "Ivory Coast",
        currency_code: "XOF",
    },
    {
        country: "Jamaica",
        currency_code: "JMD",
    },
    {
        country: "Japan",
        currency_code: "JPY",
    },
    {
        country: "Jordan",
        currency_code: "JOD",
    },
    {
        country: "Kazakhstan",
        currency_code: "KZT",
    },
    {
        country: "Kenya",
        currency_code: "KES",
    },
    {
        country: "Kiribati",
        currency_code: "AUD",
    },
    {
        country: "Kuwait",
        currency_code: "KWD",
    },
    {
        country: "Kyrgyzstan",
        currency_code: "KGS",
    },
    {
        country: "Laos",
        currency_code: "LAK",
    },
    {
        country: "Latvia",
        currency_code: "LVL",
    },
    {
        country: "Lebanon",
        currency_code: "LBP",
    },
    {
        country: "Lesotho",
        currency_code: "LSL",
    },
    {
        country: "Liberia",
        currency_code: "LRD",
    },
    {
        country: "Libyan Arab Jamahiriya",
        currency_code: "LYD",
    },
    {
        country: "Liechtenstein",
        currency_code: "CHF",
    },
    {
        country: "Lithuania",
        currency_code: "LTL",
    },
    {
        country: "Luxembourg",
        currency_code: "EUR",
    },
    {
        country: "Macao",
        currency_code: "MOP",
    },
    {
        country: "North Macedonia",
        currency_code: "MKD",
    },
    {
        country: "Madagascar",
        currency_code: "MGF",
    },
    {
        country: "Malawi",
        currency_code: "MWK",
    },
    {
        country: "Malaysia",
        currency_code: "MYR",
    },
    {
        country: "Maldives",
        currency_code: "MVR",
    },
    {
        country: "Mali",
        currency_code: "XOF",
    },
    {
        country: "Malta",
        currency_code: "EUR",
    },
    {
        country: "Marshall Islands",
        currency_code: "USD",
    },
    {
        country: "Martinique",
        currency_code: "EUR",
    },
    {
        country: "Mauritania",
        currency_code: "MRO",
    },
    {
        country: "Mauritius",
        currency_code: "MUR",
    },
    {
        country: "Mayotte",
        currency_code: "EUR",
    },
    {
        country: "Mexico",
        currency_code: "MXN",
    },
    {
        country: "Micronesia, Federated States of",
        currency_code: "USD",
    },
    {
        country: "Moldova",
        currency_code: "MDL",
    },
    {
        country: "Monaco",
        currency_code: "EUR",
    },
    {
        country: "Mongolia",
        currency_code: "MNT",
    },
    {
        country: "Montserrat",
        currency_code: "XCD",
    },
    {
        country: "Morocco",
        currency_code: "MAD",
    },
    {
        country: "Mozambique",
        currency_code: "MZN",
    },
    {
        country: "Myanmar",
        currency_code: "MMR",
    },
    {
        country: "Namibia",
        currency_code: "NAD",
    },
    {
        country: "Nauru",
        currency_code: "AUD",
    },
    {
        country: "Nepal",
        currency_code: "NPR",
    },
    {
        country: "Netherlands",
        currency_code: "EUR",
    },
    {
        country: "Netherlands Antilles",
        currency_code: "ANG",
    },
    {
        country: "New Caledonia",
        currency_code: "XPF",
    },
    {
        country: "New Zealand",
        currency_code: "NZD",
    },
    {
        country: "Nicaragua",
        currency_code: "NIO",
    },
    {
        country: "Niger",
        currency_code: "XOF",
    },
    {
        country: "Nigeria",
        currency_code: "NGN",
    },
    {
        country: "Niue",
        currency_code: "NZD",
    },
    {
        country: "Norfolk Island",
        currency_code: "AUD",
    },
    {
        country: "North Korea",
        currency_code: "KPW",
    },
    {
        country: "Northern Ireland",
        currency_code: "GBP",
    },
    {
        country: "Northern Mariana Islands",
        currency_code: "USD",
    },
    {
        country: "Norway",
        currency_code: "NOK",
    },
    {
        country: "Oman",
        currency_code: "OMR",
    },
    {
        country: "Pakistan",
        currency_code: "PKR",
    },
    {
        country: "Palau",
        currency_code: "USD",
    },
    {
        country: "Palestine",
        currency_code: null,
    },
    {
        country: "Panama",
        currency_code: "PAB",
    },
    {
        country: "Papua New Guinea",
        currency_code: "PGK",
    },
    {
        country: "Paraguay",
        currency_code: "PYG",
    },
    {
        country: "Peru",
        currency_code: "PEN",
    },
    {
        country: "Philippines",
        currency_code: "PHP",
    },
    {
        country: "Pitcairn",
        currency_code: "NZD",
    },
    {
        country: "Poland",
        currency_code: "PLN",
    },
    {
        country: "Portugal",
        currency_code: "EUR",
    },
    {
        country: "Puerto Rico",
        currency_code: "USD",
    },
    {
        country: "Qatar",
        currency_code: "QAR",
    },
    {
        country: "Reunion",
        currency_code: "EUR",
    },
    {
        country: "Romania",
        currency_code: "RON",
    },
    {
        country: "Russian Federation",
        currency_code: "RUB",
    },
    {
        country: "Rwanda",
        currency_code: "RWF",
    },
    {
        country: "Saint Helena",
        currency_code: "SHP",
    },
    {
        country: "Saint Kitts and Nevis",
        currency_code: "XCD",
    },
    {
        country: "Saint Lucia",
        currency_code: "XCD",
    },
    {
        country: "Saint Pierre and Miquelon",
        currency_code: "EUR",
    },
    {
        country: "Saint Vincent and the Grenadines",
        currency_code: "XCD",
    },
    {
        country: "Samoa",
        currency_code: "WST",
    },
    {
        country: "San Marino",
        currency_code: "EUR",
    },
    {
        country: "Sao Tome and Principe",
        currency_code: "STD",
    },
    {
        country: "Saudi Arabia",
        currency_code: "SAR",
    },
    {
        country: "Scotland",
        currency_code: "GBP",
    },
    {
        country: "Senegal",
        currency_code: "XOF",
    },
    {
        country: "Serbia",
        currency_code: "RSD",
    },
    {
        country: "Seychelles",
        currency_code: "SCR",
    },
    {
        country: "Sierra Leone",
        currency_code: "SLL",
    },
    {
        country: "Singapore",
        currency_code: "SGD",
    },
    {
        country: "Slovakia",
        currency_code: "EUR",
    },
    {
        country: "Slovenia",
        currency_code: "EUR",
    },
    {
        country: "Solomon Islands",
        currency_code: "SBD",
    },
    {
        country: "Somalia",
        currency_code: "SOS",
    },
    {
        country: "South Africa",
        currency_code: "ZAR",
    },
    {
        country: "South Georgia and the South Sandwich Islands",
        currency_code: "GBP",
    },
    {
        country: "South Korea",
        currency_code: "KRW",
    },
    {
        country: "South Sudan",
        currency_code: "SSP",
    },
    {
        country: "Spain",
        currency_code: "EUR",
    },
    {
        country: "Sri Lanka",
        currency_code: "LKR",
    },
    {
        country: "Sudan",
        currency_code: "SDG",
    },
    {
        country: "Suriname",
        currency_code: "SRD",
    },
    {
        country: "Svalbard and Jan Mayen",
        currency_code: "NOK",
    },
    {
        country: "Swaziland",
        currency_code: "SZL",
    },
    {
        country: "Sweden",
        currency_code: "SEK",
    },
    {
        country: "Switzerland",
        currency_code: "CHF",
    },
    {
        country: "Syria",
        currency_code: "SYP",
    },
    {
        country: "Tajikistan",
        currency_code: "TJS",
    },
    {
        country: "Tanzania",
        currency_code: "TZS",
    },
    {
        country: "Thailand",
        currency_code: "THB",
    },
    {
        country: "The Democratic Republic of Congo",
        currency_code: "CDF",
    },
    {
        country: "Togo",
        currency_code: "XOF",
    },
    {
        country: "Tokelau",
        currency_code: "NZD",
    },
    {
        country: "Tonga",
        currency_code: "TOP",
    },
    {
        country: "Trinidad and Tobago",
        currency_code: "TTD",
    },
    {
        country: "Tunisia",
        currency_code: "TND",
    },
    {
        country: "Turkey",
        currency_code: "TRY",
    },
    {
        country: "Turkmenistan",
        currency_code: "TMT",
    },
    {
        country: "Turks and Caicos Islands",
        currency_code: "USD",
    },
    {
        country: "Tuvalu",
        currency_code: "AUD",
    },
    {
        country: "Uganda",
        currency_code: "UGX",
    },
    {
        country: "Ukraine",
        currency_code: "UAH",
    },
    {
        country: "United Arab Emirates",
        currency_code: "AED",
    },
    {
        country: "United Kingdom",
        currency_code: "GBP",
    },
    {
        country: "United States",
        currency_code: "USD",
    },
    {
        country: "United States Minor Outlying Islands",
        currency_code: "USD",
    },
    {
        country: "Uruguay",
        currency_code: "UYU",
    },
    {
        country: "Uzbekistan",
        currency_code: "UZS",
    },
    {
        country: "Vanuatu",
        currency_code: "VUV",
    },
    {
        country: "Venezuela",
        currency_code: "VEF",
    },
    {
        country: "Vietnam",
        currency_code: "VND",
    },
    {
        country: "Virgin Islands, British",
        currency_code: "USD",
    },
    {
        country: "Virgin Islands, U.S.",
        currency_code: "USD",
    },
    {
        country: "Wales",
        currency_code: "GBP",
    },
    {
        country: "Wallis and Futuna",
        currency_code: "XPF",
    },
    {
        country: "Western Sahara",
        currency_code: "MAD",
    },
    {
        country: "Yemen",
        currency_code: "YER",
    },
    {
        country: "Zambia",
        currency_code: "ZMW",
    },
    {
        country: "Zimbabwe",
        currency_code: "ZWD",
    },
];
