/**
 * Production-grade Wedding Invitation Configuration & Content Store
 * Exact Data extracted from the physical Wedding Card:
 * - Bride: Rakhi (राखी)
 * - Groom: Ranjit (रंजीत)
 * - Wedding Date: 11 December 2026 (शुक्रवार / Friday)
 * - Host / प्रेषक: Shri Arun Prasad (श्री अरूण प्रसाद)
 * - Residence / Venue: Gram-Sultanpur, Post-Jagai, Thana-Aungari, Dist-Nalanda
 * - Contacts: 9204723233, 9835193378
 */

export const WEDDING_DATA = {
  meta: {
    title: "Wedding Invitation | Rakhi & Ranjit (राखी संग रंजीत)",
    description: "Join us for the auspicious wedding celebration of Rakhi & Ranjit on 11 December 2026 at Sultanpur, Nalanda, Bihar. 🌸",
    ogImage: "/assets/images/couple_combined.jpg",
    favicon: "/assets/images/heart-3r-logo.webp",
  },

  couple: {
    bride: {
      firstName: "Rakhi",
      hindiFirstName: "राखी",
      fullName: "Rakhi Kumari",
      hindiFullName: "राखी कुमारी",
      profession: "Bride (वधू)",
      professionIcon: "/assets/images/laptopgirl.webp",
      photo: "/assets/images/rakhi_bride.jpg",
      lineage: "सुपुत्री: श्री अरूण प्रसाद",
      familyDisplay: "( सुपुत्री: श्री अरूण प्रसाद एवं परिवार )",
      address: {
        title: "Bride's Residence / प्रेषक स्थल",
        icon: "/assets/images/bride.webp",
        display: "ग्राम-सुलतानपुर, पोस्ट-जगाई, थाना-औंगारी, जिला-नालन्दा, बिहार",
        mapUrl: "https://goo.gl/maps/ruBhFB4t5oMRGQD3A?g_st=awb",
      },
      contact: {
        role: "श्री अरूण प्रसाद (प्रेषक)",
        number: "9204723233",
      },
    },
    groom: {
      firstName: "Ranjit",
      hindiFirstName: "रंजीत",
      fullName: "Ranjit Kumar",
      hindiFullName: "रंजीत कुमार",
      profession: "Groom (वर)",
      professionIcon: "/assets/images/laptopboy.webp",
      photo: "/assets/images/ranjit_groom.jpg",
      lineage: "सुपुत्र: संग रंजीत",
      familyDisplay: "( राखी संग रंजीत )",
      address: {
        title: "Groom's Family",
        icon: "/assets/images/groom.webp",
        display: "शुभ विवाह • 11 दिसम्बर 2026 (शुक्रवार)",
        mapUrl: "https://maps.google.com/?q=Nalanda+Bihar",
      },
      contact: {
        role: "संपर्क सूत्र",
        number: "9835193378",
      },
    },
    couplePhoto: "/assets/images/couple_combined.jpg",
    monogram: "/assets/images/rr_seal.png",
    ganeshaEmblem: "/assets/images/ganesh-gold.webp",
    quote: "“हल्दी है चन्दन है रिश्तों का बंधन है मेले मौसी की शादी में आप सभी का अभिनंदन है.....”",
    emotionalQuote: "“मेरी घर की राजदुलारी, आज दुजे के द्वार चली ।\nकल तक थी मेरी घर की शोभा, आज पिया के साथ चली ॥”",
  },

  blessings: {
    ganeshTitle: "!! श्री गणेशाय नमः !!",
    sanskritShloka: "मंगलम् भगवान विष्णुः, मंगलम् गरुड़ध्वजः ।\nमंगलम् पुण्डरीकाक्षः, मंगलाय तनोहरिः ॥",
    eldersBlessingTitle: "WITH THE HEAVENLY BLESSINGS OF OUR ELDERS",
    eldersBlessingNote: "हल्दी है चन्दन है रिश्तों का बंधन है, मेले मौसी की शादी में आप सभी का अभिनंदन है... 🌸",
  },

  weddingDate: {
    targetIso: "2026-12-11T19:00:00+05:30",
    displayDate: "11 DECEMBER 2026",
    hindiDisplayDate: "11 दिसम्बर 2026 (शुक्रवार)",
    day: "11",
    month: "DECEMBER",
    hindiMonth: "दिसम्बर",
    year: "2026",
    dayOfWeek: "Friday",
    hindiDayOfWeek: "शुक्रवार",
    tithi: "मार्गशीर्ष शुक्ल पक्ष द्वितीया",
    city: "SULTANPUR",
    state: "NALANDA, BIHAR",
    locationDisplay: "ग्राम-सुलतानपुर, नालन्दा (बिहार)",
  },

  festivities: [
    {
      id: "day-1",
      dayBadge: "DAY 1 • 09/12/2026 (बुधवार)",
      tithi: "मार्गशीर्ष शुक्ल पक्ष प्रतिपदा",
      title: "शुभ लगन चुमावन, मटकोर एवं दालधोय",
      englishTitle: "Lagan Chumawan, Matkor & Daldhoy",
      image: "/assets/images/tilak_lagan.webp",
      venueBadge: "समस्त वैवाहिक कार्यक्रम हमारे निवास स्थान ग्राम-सुलतानपुर में",
      venueBadgeIcon: "/assets/images/house.webp",
      badgeClass: "bg-[#f4ebe1] text-burgundy border-[#e0cebe]",
      tagline: "“मांगलिक लगन चुमावन, मटकोर एवं दालधोय की पावन रस्में” 🌺📜",
      dateDisplay: "बुधवार, 09 दिसम्बर 2026",
      timingDisplay: "दिन एवं संध्या काल",
      isHighlight: false,
    },
    {
      id: "day-2",
      dayBadge: "DAY 2 • 10/12/2026 (गुरूवार)",
      tithi: "मार्गशीर्ष शुक्ल पक्ष प्रतिपदा",
      title: "मण्डपाच्छादन, हल्दी कलश, वंशरोपन एवं देवपूजा",
      englishTitle: "Mandapachhadan, Haldi Kalash & Devpuja",
      bannerImage: "/assets/images/haldiceremnoy.webp",
      venueBadge: "समस्त वैवाहिक कार्यक्रम हमारे निवास स्थान ग्राम-सुलतानपुर में",
      venueBadgeIcon: "/assets/images/turmeric.webp",
      badgeClass: "bg-[#fff8d6] text-[#7a5500] border-[#f3db78]",
      tagline: "“उबटन-हल्दी की पावन सुगंध, कुलदेवता पूजन एवं मण्डपाच्छादन” ✨",
      dateDisplay: "गुरूवार, 10 दिसम्बर 2026",
      timingDisplay: "प्रातः 11 बजे से",
      isHighlight: false,
    },
    {
      id: "day-3",
      dayBadge: "DAY 3 • 11/12/2026 (शुक्रवार) • मुख्य विवाह",
      tithi: "मार्गशीर्ष शुक्ल पक्ष द्वितीया",
      title: "शुभ विवाह, बारात आगमन एवं प्रीतिभोज",
      englishTitle: "Shubh Vivah, Baraat & Preetibhoj",
      image: "/assets/images/wedding_sitting_couple.webp",
      venueBadge: "विवाह एवं प्रीतिभोज स्थल: निज निवास स्थान, ग्राम-सुलतानपुर",
      venueBadgeIcon: "/assets/images/banquet.webp",
      badgeClass: "bg-[#fdf0d5] text-burgundy-deep border-gold-bright",
      tagline: "“घृतढारी, बारात आगमन, पावन सात फेरे एवं स्नेह प्रीतिभोज” 🔥🌹",
      dateDisplay: "शुक्रवार, 11 दिसम्बर 2026",
      timingDisplay: "शुभ विवाह एवं प्रीतिभोज संध्या 7 बजे से आपके आगमन तक",
      isHighlight: true,
      timeline: [
        { label: "घृतढारी (Ghritdhari)", icon: "/assets/images/baraat.webp" },
        { label: "बारात आगमन (Baraat)", icon: "/assets/images/ring.webp" },
        { label: "जयमाला एवं फेरे (Pheras)", icon: "/assets/images/fire.webp" },
        { label: "प्रीतिभोज (Dinner 7 PM)", icon: "/assets/images/dinner.webp" },
        { label: "विदाई (Vidai Ceremony)", icon: "/assets/images/namaste.webp" },
      ],
    },
  ],

  venue: {
    title: "विवाह एवं प्रीतिभोज स्थल: निज निवास",
    englishTitle: "Our Residence: Gram Sultanpur",
    subtitle: "ग्राम-सुलतानपुर, पोस्ट-जगाई, थाना-औंगारी, जिला-नालन्दा (बिहार)",
    bannerImage: "/assets/images/luxury-banquet.webp",
    description: "समस्त वैवाहिक कार्यक्रम हमारे निवास स्थान ग्राम-सुलतानपुर से सम्पन्न होगी। आप सभी सपरिवार सादर आमंत्रित हैं।",
    address: "ग्राम-सुलतानपुर, पोस्ट-जगाई, थाना-औंगारी, जिला-नालन्दा, बिहार - 801301",
    directionsUrl: "https://maps.google.com/?q=Sultanpur+Jagai+Aungari+Nalanda+Bihar",
    mapEmbedUrl: "https://maps.google.com/maps?q=Sultanpur%20Nalanda%20Bihar&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  host: {
    title: "प्रेषक :-",
    name: "श्री अरूण प्रसाद",
    address: "ग्राम-सुलतानपुर, पोस्ट-जगाई, थाना-औंगारी, जिला-नालन्दा",
    phoneNumbers: [
      { label: "Mob", number: "9204723233" },
      { label: "Mob", number: "9835193378" },
    ],
    cardCredit: "शुभ मंगलम् शादी कार्ड, कमरुद्दीनगंज, बिहार शरीफ",
  },

  musicTracks: {
    1: {
      name: "Mangalam Bhagwan Vishnu",
      src: "/assets/music/Vakratunda Mahakaya_64kbps.mp3",
    },
    2: {
      name: "Tainu Leke / Wedding Beats",
      src: "/assets/music/tainu-leke-salaam-e-ishq_64kbps.mp3",
    },
    3: {
      name: "Dil Shagna Da / Shehnai",
      src: "/assets/music/dil_shagna_da_64kbps.mp3",
    },
  },

  sectionZones: {
    blessingsSection: 1,
    heroSection: 2,
    saveTheDateSection: 2,
    eventsSection: 2,
    venueSection: 2,
    countdownSection: 3,
    guestWishesSection: 3,
    thankYouSection: 3,
  },
};
