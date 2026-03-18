import type {
  Advantage,
  ContactChannel,
  NavItem,
  Post,
  Project,
  ProcessStep,
  Service,
  ShowcaseItem,
  Stat,
  TrustItem,
} from "@/types";

export const companyName = "SAMGEODEZIST MCHJ";
export const siteUrl = "https://samgeodezist.uz";
export const companyEmail = "www.olim-urokov@mail.ru";
export const companyAddress = "Samarqand shahar Spitamen Shoh ko'chasi 169-uy";
export const workingHours = "Dushanba - Shanba, 09:00 - 18:00";

export const navigation: NavItem[] = [
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "Bizning ishlar", href: "#bizning-ishlar" },
  { label: "Postlar", href: "#postlar" },
  { label: "Biz haqimizda", href: "/biz-haqimizda" },
  { label: "Aloqa", href: "#aloqa" },
];

export const phoneNumbers = ["+998 97 919 11 83", "+998 91 550 02 91"];

export const services: Service[] = [
  {
    slug: "topografiya",
    title: "Topografiya",
    description:
      "Hududning aniq topografik planini tayyorlab, qurilish va loyihalash jarayonlari uchun ishonchli asos yaratamiz.",
    icon: "map",
    metric: "Topoplan",
    outcome: "Loyiha uchun tayyor asos",
    image: "/images/service-topografiya.svg",
    detailTitle: "Topografik plan va hudud tahlili",
    detailDescription:
      "Topografiya xizmati hudud relyefi, mavjud inshootlar va kommunikatsiyalarni aniqlab, loyiha ishlari uchun zarur texnik asosni tayyorlashga xizmat qiladi.",
    bullets: [
      "Hudud relyefi va belgilarini o'lchash",
      "Kommunikatsiyalar va obyektlarni plan asosida ko'rsatish",
      "Qurilish va loyihalashga mos topografik material tayyorlash",
    ],
  },
  {
    slug: "geodeziya",
    title: "Geodeziya",
    description:
      "Yer uchastkalari, bino va inshootlar bo'yicha o'lchov ishlari zamonaviy geodezik usullar bilan bajariladi.",
    icon: "target",
    metric: "Aniq o'lchov",
    outcome: "Maydon va koordinata nazorati",
    image: "/images/service-geodeziya.svg",
    detailTitle: "Yer va obyektlar bo'yicha aniq geodezik ishlar",
    detailDescription:
      "Geodeziya xizmatlari yer uchastkalari, bino va inshootlar bo'yicha koordinata, o'lchov va nazorat ishlarini bajarishga qaratilgan.",
    bullets: [
      "Yer uchastkasi chegaralari va nuqtalarini aniqlash",
      "Qurilish uchun geodezik belgilash ishlarini bajarish",
      "Maydon bo'yicha nazorat va qayta tekshiruvlarni tashkil qilish",
    ],
  },
  {
    slug: "geologiya",
    title: "Geologiya",
    description:
      "Hududning geologik holatini baholab, loyiha va qurilish uchun zarur dastlabki ma'lumotlarni taqdim etamiz.",
    icon: "layers",
    metric: "Tahlil",
    outcome: "Qurilish uchun dastlabki xulosa",
    image: "/images/service-geologiya.svg",
    detailTitle: "Hududning geologik holatini baholash",
    detailDescription:
      "Geologiya yo'nalishi qurilishdan oldin hududning tabiiy holatini o'rganish va texnik qarorlar uchun ma'lumot tayyorlashga yordam beradi.",
    bullets: [
      "Hudud bo'yicha geologik ma'lumotlarni yig'ish",
      "Qurilish ehtiyojlari uchun dastlabki xulosalar tayyorlash",
      "Loyihalash bosqichiga mos texnik tavsiyalar berish",
    ],
  },
  {
    slug: "marksheyderiya",
    title: "Marksheyderiya",
    description:
      "Muhandislik va yer osti ishlari uchun nazorat, koordinata aniqlash va o'lchov xizmatlarini olib boramiz.",
    icon: "mountain",
    metric: "Nazorat",
    outcome: "Jarayon bo'yicha texnik kuzatuv",
    image: "/images/service-marksheyderiya.svg",
    detailTitle: "Muhandislik va yer osti ishlari uchun nazorat",
    detailDescription:
      "Marksheyderiya xizmati texnik jarayonlarni kuzatish, joylashuvni aniqlash va muhandislik ishlarida doimiy nazoratni ta'minlaydi.",
    bullets: [
      "Texnik jarayonlarda koordinata aniqligi nazorati",
      "Muhandislik ishlarini o'lchov asosida kuzatish",
      "Maydondagi o'zgarishlarni qayd etish va tekshirish",
    ],
  },
  {
    slug: "loyihalash",
    title: "Loyihalash",
    description:
      "Obyekt va yer maydonlari bo'yicha texnik hujjatlar hamda loyiha yechimlarini tartibli shaklda tayyorlaymiz.",
    icon: "draft",
    metric: "Hujjatlar",
    outcome: "Topshirishga tayyor loyiha yechimi",
    image: "/images/service-loyihalash.svg",
    detailTitle: "Texnik hujjatlar va loyiha yechimlari",
    detailDescription:
      "Loyihalash xizmatlari mijoz uchun hujjatlarning tartibli tayyorlanishi va amaliy loyiha yechimlarini shakllantirishni o'z ichiga oladi.",
    bullets: [
      "Loyiha uchun texnik hujjatlarni tayyorlash",
      "Yer va obyektga mos yechimlarni shakllantirish",
      "Topshirishga tayyor tartibli loyiha materiallarini berish",
    ],
  },
];

export const advantages: Advantage[] = [
  {
    title: "Tajribali mutaxassislar",
    description:
      "Amaliy tajribaga ega jamoa har bir obyektga texnik yondashuv bilan ishlaydi.",
  },
  {
    title: "Zamonaviy uskunalar",
    description:
      "Aniq natija olish uchun professional o'lchov uskunalari va raqamli metodlardan foydalanamiz.",
  },
  {
    title: "Aniqlik va ishonchlilik",
    description:
      "Har bir o'lchov va hujjat texnik talablar asosida tekshirilgan holda topshiriladi.",
  },
  {
    title: "Tezkor xizmat",
    description:
      "Buyurtmalarni vaqtida qabul qilib, belgilangan muddatlarda natija taqdim etamiz.",
  },
  {
    title: "Shahar bo'ylab xizmat",
    description:
      "Samarqand bo'ylab turli hajmdagi yer va qurilish obyektlarida xizmat ko'rsatamiz.",
  },
  {
    title: "Qulay buyurtma jarayoni",
    description:
      "Mijoz uchun sodda aloqa va aniq bosqichlar asosida buyurtmani tez rasmiylashtirish mumkin.",
  },
];

export const stats: Stat[] = [
  {
    value: "1000+",
    label: "Bajarilgan obyektlar",
    description: "Turli hajmdagi yer va qurilish obyektlari bo'yicha bajarilgan amaliy ishlar.",
  },
  {
    value: "10+",
    label: "Xizmat yo'nalishlari",
    description: "Geodeziya, topografiya va muhandislik yo'nalishlari bo'yicha ko'p turdagi xizmatlar.",
  },
  {
    value: "24/7",
    label: "Murojaat qabul qilish",
    description: "Buyurtmalarni qabul qilish va tezkor qayta aloqa jarayoni yo'lga qo'yilgan.",
  },
  {
    value: "Aniq",
    label: "Texnik natija",
    description: "Har bir o'lchov va hujjat texnik talablarga tayangan holda tayyorlanadi.",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "Total Station",
    description: "Maydon olchovlari yuqori aniqlikdagi total station uskunalari bilan bajariladi.",
  },
  {
    title: "Elektron taxeometr",
    description: "Elektron taxeometr yordamida nuqtalar, masofalar va balandliklar aniq qayd qilinadi.",
  },
  {
    title: "Tezkor chiqish",
    description: "Buyurtma bo'yicha joyiga chiqib, dalada va ofisda tezkor ish tashkil qilinadi.",
  },
];

export const projects: Project[] = [
  {
    title: "Yer uchastkasini o'lchash",
    description:
      "Kadastr va qurilish jarayonlari uchun yer maydonining chegaralari va o'lchamlarini aniqlash.",
    tag: "Geodeziya",
    result: "Chegaralar aniqlandi va maydon koordinatalari tayyorlandi.",
    deliverable: "Koordinata ma'lumotlari va texnik o'lchov natijalari",
    status: "Topshirilgan",
    image: "/images/project-land.svg",
  },
  {
    title: "Uy-joy loyihasi uchun topografik ish",
    description:
      "Loyihalashdan oldin relyef va mavjud kommunikatsiyalar bo'yicha topografik plan tayyorlash.",
    tag: "Topografiya",
    result: "Loyiha ishlari uchun tayyor topografik asos shakllantirildi.",
    deliverable: "Topografik plan va obyekt bo'yicha asosiy belgilar",
    status: "Loyiha bosqichi",
    image: "/images/project-topo.svg",
  },
  {
    title: "Qurilish maydonida geodezik nazorat",
    description:
      "Qurilish bosqichida o'lchovlar, o'qlarni ko'chirish va geodezik nazorat ishlarini yuritish.",
    tag: "Nazorat",
    result: "Qurilish jarayonida aniqlik va joylashuv nazorati ta'minlandi.",
    deliverable: "Nazorat o'lchovlari va maydon bo'yicha texnik belgilash",
    status: "Davom etmoqda",
    image: "/images/project-control.svg",
  },
];

export const showcaseItems: ShowcaseItem[] = [
  {
    title: "Bizning ishlar 01",
    description: "Maydondagi amaliy geodeziya va topografiya jarayonidan lavha.",
    image: "/images/works/work-1.jpg",
  },
  {
    title: "Bizning ishlar 02",
    description: "Obyekt bo'yicha bajarilgan texnik ishlarning ko'rinishi.",
    image: "/images/works/work-2.jpg",
  },
  {
    title: "Bizning ishlar 03",
    description: "Daladagi olchov va nazorat ishlari jarayonidan namuna.",
    image: "/images/works/work-3.jpg",
  },
  {
    title: "Bizning ishlar 04",
    description: "Mutaxassislar tomonidan olib borilgan amaliy ishlar lavhasi.",
    image: "/images/works/work-4.jpg",
  },
  {
    title: "Bizning ishlar 05",
    description: "Topografiya va geodeziya bo'yicha bajarilgan ish ko'rinishi.",
    image: "/images/works/work-5.jpg",
  },
  {
    title: "Bizning ishlar 06",
    description: "Joyida bajarilgan texnik o'lchov va hujjatlashtirish jarayoni.",
    image: "/images/works/work-6.jpg",
  },
];

export const posts: Post[] = [
  {
    title: "Topografik syomka ishlari qanday bajariladi",
    description: "Topografik syomka jarayonidagi bosqichlar, maydon ishlari va yakuniy hujjatlar haqida qisqacha.",
    date: "18.03.2026",
    href: "/biz-haqimizda",
  },
  {
    title: "Total station va elektron taxeometr afzalliklari",
    description: "Zamonaviy uskunalar yordamida geodezik olchovlarda qanday aniqlik olinishi haqida.",
    date: "18.03.2026",
    href: "/biz-haqimizda",
  },
  {
    title: "Buyurtma berishdan topshirishgacha bo'lgan jarayon",
    description: "Mijoz so'rovi qabul qilingandan keyin obyekt bo'yicha ish qanday tashkil qilinishi haqida.",
    date: "18.03.2026",
    href: "/biz-haqimizda",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "So'rovni qabul qilamiz",
    description: "Mijozning obyekt manzili, xizmat turi va vazifasi bo'yicha dastlabki ma'lumot olinadi.",
  },
  {
    step: "02",
    title: "Obyektni tahlil qilamiz",
    description: "Hudud, ish hajmi va kerakli o'lchov turi aniqlanib, ish reja va muddatlari belgilanadi.",
  },
  {
    step: "03",
    title: "Maydonda ish bajariladi",
    description: "Mutaxassislar joyiga chiqib geodezik o'lchov, topografik yoki nazorat ishlarini bajaradi.",
  },
  {
    step: "04",
    title: "Natijani topshiramiz",
    description: "Tayyor hujjatlar, planlar va texnik ma'lumotlar mijozga kelishilgan muddatda taqdim etiladi.",
  },
];

export const contactChannels: ContactChannel[] = [
  { label: "Telefon 1", value: "+998 97 919 11 83", href: "tel:+998979191183" },
  { label: "Telefon 2", value: "+998 91 550 02 91", href: "tel:+998915500291" },
  { label: "Email", value: companyEmail, href: `mailto:${companyEmail}` },
  { label: "Manzil", value: companyAddress },
  { label: "Ish vaqti", value: workingHours },
];

export const telegramLink = "https://t.me/samgeodezist";
