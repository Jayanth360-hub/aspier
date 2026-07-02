// Central content store for the ASPIER site

export const faculty = {
  core: [
    { id: 'suresh-kattera', name: 'Dr. Suresh Kattera', role: 'Director, PhD', img: 'Dr-Suresh-Kattera-.jpg', bio: 'Dr. Suresh Kattera is a world-renowned embryologist and pioneer in IVF, with decades of international clinical, research, and teaching experience across India, Singapore, and Australia. He leads ASPIER and personally mentors every cohort through embryo culture, micromanipulation, and biopsy technique.' },
    { id: 'dr-prajwal', name: 'Dr. Prajwal S', role: 'Associate Professor', img: 'dr-prajwal.jpg', bio: 'Dr. Prajwal S is an Associate Professor at ASPIER, guiding students through advanced clinical embryology coursework and laboratory rotations.' },
    { id: 'thanya-k', name: 'Thanya K', role: 'MSc. Genetics, University of Mysore (2008)', img: 'faculty-new.jpg', bio: 'Thanya K holds an MSc in Genetics from the University of Mysore and teaches pre-implantation genetic diagnosis and genetics modules at ASPIER.' },
    { id: 'aarthy-aiyappa', name: 'Aarthy Aiyappa', role: 'Bachelor of Arts, University of Mysore', img: 'faculty-5.jpg', bio: 'Aarthy Aiyappa supports academic coordination and student affairs at ASPIER.' },
    { id: 'vijay-dcunha', name: "Vijay D'Cunha", role: 'MA, MBA', img: 'faculty-7.jpg', bio: "Vijay D'Cunha brings administrative and management expertise to ASPIER's academic operations." },
    { id: 'aanchal-saini', name: 'Ms. Aanchal Saini', role: 'Lecturer', img: 'aanchal.jpg', bio: 'Ms. Aanchal Saini lectures on clinical embryology fundamentals and laboratory practice.' },
    { id: 'prathima', name: 'Ms. Prathima', role: 'Assistant Professor', img: 'prathima.jpg', bio: 'Ms. Prathima is an Assistant Professor focused on practical embryology training and student mentorship.' },
    { id: 'rajeev-sharma', name: 'Rajeev Sharma', role: 'Lecturer', img: 'Rajeev-SHarma.jpeg', bio: 'Rajeev Sharma lectures on andrology and reproductive laboratory techniques.' },
    { id: 'rajesh-kumar', name: 'Mr. Rajesh Kumar K R', role: 'Lecturer', img: 'rajesh-kumar-kr.jpg', bio: 'Mr. Rajesh Kumar K R supports laboratory instruction and hands-on training sessions.' },
  ],
  guest: [
    { id: 'kamini-rao', name: 'Dr. Kamini Rao', role: 'Guest Faculty', img: 'Dr-Kamini-Rao-.jpg', bio: 'Dr. Kamini Rao is a distinguished guest faculty member contributing clinical IVF expertise to the ASPIER curriculum.' },
    { id: 'bs-vishwanath', name: 'Prof. B. S. Vishwanath', role: 'Guest Faculty', img: 'prof-bs-vishwanath.jpg', bio: 'Prof. B. S. Vishwanath joins ASPIER as guest faculty, sharing academic and research insight with students.' },
    { id: 'ramachandra', name: 'Prof. Ramachandra', role: 'Guest Faculty', img: 'prof-ramachandra.jpg', bio: 'Prof. Ramachandra contributes specialised guest lectures to the ASPIER programme.' },
  ],
}

export const courses = [
  { id: 'msc', name: 'MSc in Clinical Embryology & Pre-Implantation Genetics', duration: '2 Years', img: 'course-1.png', href: '/msc-course', blurb: "The first and only programme globally that integrates Clinical Embryology with Pre-implantation Genetic Diagnosis (PGD/PGT)." },
  { id: 'cce', name: 'Certificate Course in Clinical Embryology', duration: '2 Weeks', img: 'course-2.jpg', href: '/courses', blurb: 'An intensive, hands-on introduction to gamete handling, fertilisation and embryo culture.' },
  { id: 'andrology', name: 'Certificate Course in Andrology', duration: '1 Week', img: 'course-3.jpg', href: '/courses', blurb: 'Focused training in semen analysis, sperm preparation and male-factor diagnostics.' },
  { id: 'vitrification', name: 'Vitrification Course', duration: '3 Days', img: 'course-4.jpg', href: '/courses', blurb: 'A concentrated, practical workshop in oocyte and embryo vitrification technique.' },
]

export const events = [
  { id: 'uom-conf-2024', title: 'Current Updates and Recent Advances in Assisted Reproductive Technology (ART)', date: 'November 16, 2024', venue: 'Vigyan Bhavan, University of Mysore, Mysore – Karnataka', img: 'UOM-Conf-2024-Gallery-9.jpeg', featured: true, body: 'ASPIER, in partnership with the University of Mysore, hosted a national conference bringing together leading clinicians and researchers to discuss recent advances in ART, embryology, and reproductive genetics.' },
  { id: 'world-ivf-day', title: 'ASPIER Wishes World IVF & Embryologist Day', date: 'July 25, 2024', venue: 'ASPIER, Mysuru', img: 'aspier-event-wishes.jpeg', body: 'Students and faculty marked World IVF & Embryologist Day with a campus celebration recognising the profession that makes parenthood possible for thousands of families.' },
  { id: 'intensive-hot', title: 'Intensive Hands-On Training Certificate Course', date: 'August 7, 2023', venue: 'ASPIER, Mysuru', img: 'Intensive-HOT-1.jpeg', body: 'A short, intensive hands-on training programme covering gamete handling, ICSI practice and embryo grading for working professionals.' },
  { id: 'webinar-programmes', title: 'Webinar Programmes', date: 'June 7, 2020', venue: 'Zoom', img: 'vlcsnap-2020-07-02-18h35m27s013.jpg', body: 'ASPIER hosted a series of online webinars connecting embryology students and professionals during the pandemic, covering clinical updates and Q&A sessions with faculty.' },
  { id: 'science-congress-107', title: '107th Indian Science Congress', date: 'January 3, 2020', venue: 'GKVK Campus, Bangalore', img: 'IMG-20200105-WA0062.jpg', body: 'ASPIER faculty and students participated in the 107th Indian Science Congress, presenting research and engaging with the wider scientific community.' },
]

export const galleryTabs = [
  {
    id: 'facilities',
    label: 'ASPIER Facilities',
    images: ['Lab.jpg', 'Lab-2.jpg', 'Classroom.jpg', 'Library.jpg', 'Embryology-Room-.jpg', 'Anrology-Lab.jpg', 'ICSI-Lab.jpg', 'Embryo-Biopsy-PGD-Workshop-.jpg'],
  },
  {
    id: 'graduation',
    label: 'Graduation',
    images: ['2016-Batch.jpg', '2017-Batch.jpg', '2018.jpg', '2019-Batch.jpg', '2020-Batch.jpg', '2021-Batch.jpg'],
  },
  {
    id: 'sports',
    label: 'Sports',
    images: ['Carrom-Board-.jpg', 'TableTennis.jpg', 'Pic-8.jpg', 'Pic-9.jpg'],
  },
  {
    id: 'science-congress',
    label: 'Indian Science Congress',
    images: ['IMG-20200105-WA0062.jpg', 'IMG-20200105-WA0002.jpg', 'IMG-20200105-WA0014.jpg', 'IMG-20200105-WA0015.jpg', 'IMG-20200105-WA0032.jpg', 'IMG-20200105-WA0033.jpg', 'IMG-20200105-WA0034.jpg', 'IMG-20200105-WA0036.jpg', 'IMG-20200105-WA0040.jpg', 'IMG-20200105-WA0043.jpg', 'IMG-20200105-WA0054.jpg', 'IMG-20200105-WA0055.jpg', 'IMG-20200105-WA0058.jpg', 'IMG-20200105-WA0060.jpg', 'IMG20200105102842-scaled.jpg', 'IMG20200105104650-scaled.jpg', 'IMG20200105104705-scaled.jpg'],
  },
  {
    id: 'festivals',
    label: 'Festivals',
    images: ['pongal-1.jpg', 'Pic-1-.jpg', 'Pic-2-.jpg', 'Pic-3-.jpg', 'Pic-4.jpg', 'Pic-5-.jpg', 'Pic-6-.jpg'],
  },
  {
    id: 'fertility-centre',
    label: 'Fertility Centre',
    images: ['CHA_1326-scaled.jpg', 'DSC_1411-scaled.jpg', 'IMG-20191214-WA0006.jpg', 'IMG-20191214-WA0007.jpg', 'IMG-20191214-WA0010.jpg', 'IMG-20191214-WA0011.jpg', 'IMG-20191214-WA0012.jpg', 'IMG-20191214-WA0013.jpg', 'IMG-20191214-WA0015.jpg'],
  },
]

export const navStructure = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'University of Mysore', href: '/university-of-mysore' },
      { label: 'ASPIER', href: '/aspier' },
      { label: 'About the Director', href: '/about-director' },
      { label: 'Facilities', href: '/facilities' },
      { label: 'Faculty', href: '/faculty' },
    ],
  },
  {
    label: 'Courses',
    children: [
      { label: 'MSc Masters Course', href: '/msc-course' },
      { label: 'Certification Courses', href: '/courses' },
    ],
  },
  { label: 'Events', href: '/events' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]
