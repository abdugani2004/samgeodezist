import type {
  Advantage,
  ContactChannel,
  NavItem,
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
export const companyAddress = "Samarqand shahar Spitamenshoh 165-uy";
export const workingHours = "Dushanba - Shanba, 09:00 - 18:00";

export const navigation: NavItem[] = [
  { label: "Xizmatlar", href: "#xizmatlar" },
  { label: "Biz haqimizda", href: "#biz-haqimizda" },
  { label: "Afzalliklar", href: "#afzalliklar" },
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
    value: "150+",
    label: "Bajarilgan obyektlar",
    description: "Turli hajmdagi yer va qurilish obyektlari bo'yicha amaliy ishlar.",
  },
  {
    value: "24/7",
    label: "Murojaat qabul qilish",
    description: "Buyurtmalarni qabul qilish va tezkor qayta aloqa jarayoni yo'lga qo'yilgan.",
  },
  {
    value: "5",
    label: "Asosiy xizmat yo'nalishi",
    description: "Geodeziya, topografiya, geologiya, marksheyderiya va loyihalash.",
  },
  {
    value: "Aniq",
    label: "Texnik natija",
    description: "Har bir o'lchov va hujjat texnik talablarga tayangan holda tayyorlanadi.",
  },
];

export const trustItems: TrustItem[] = [
  {
    title: "Professional uskunalar",
    description: "O'lchov ishlari zamonaviy geodezik asboblar va raqamli yondashuv bilan bajariladi.",
  },
  {
    title: "Texnik hujjatlash",
    description: "Natijalar tartibli, topshirishga tayyor va keyingi loyiha jarayonlari uchun qulay shaklda beriladi.",
  },
  {
    title: "Qurilish va kadastrga mos",
    description: "Xizmatlar yer uchastkasi, bino, inshoot va qurilish maydoni ehtiyojlariga moslashtiriladi.",
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
    title: "Total station bilan maydon o'lchovi",
    description: "Mutaxassislar obyektga chiqib geodeziya asboblari yordamida o'lchov va belgilash ishlarini bajaradi.",
    image: "/images/showcase-field.svg",
  },
  {
    title: "Topografik plan va chizma tayyorlash",
    description: "Ofis va texnik jarayonda topografik plan, hujjat va koordinata materiallari tartibli tayyorlanadi.",
    image: "/images/showcase-plan.svg",
  },
  {
    title: "Geodezik nazorat va monitoring",
    description: "Qurilish maydonida geodezik tekshiruv, aniqlik nazorati va bosqichma-bosqich monitoring olib boriladi.",
    image: "/images/showcase-control.svg",
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
