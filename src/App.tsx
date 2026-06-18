import { motion } from "framer-motion";

type Category = "academic" | "professional" | "social";

type Certificate = {
  title: string;
  description: string;
  category: Category;
  imageUrl: string;
  sourceUrl: string;
};

const student = {
  name: "Курков Владислав",
  institution: "ГБОУПО города Севастополя «Севастопольский торгово-экономический техникум»",
  group: "ИСП 9-2",
  birthDate: "31.01.2007",
  additional: "Онлайн-курсы (платформа Stepik)",
};

const certificates: Certificate[] = [
  {
    title: "Сертификат об обучении",
    description: "Учебная деятельность",
    category: "academic",
    imageUrl: "https://i.ibb.co/6Rc0w6Y3/2-5213220162739652048.png",
    sourceUrl: "https://ibb.co/xSKqLVhp",
  },
  {
    title: "Сертификат Stepik",
    description: "Дополнительное образование · онлайн-курс",
    category: "academic",
    imageUrl: "https://i.ibb.co/6J4xzsfY/stepik-certificate-1111-05a5876.png",
    sourceUrl: "https://ibb.co/R4CmfHV2",
  },
  {
    title: "Сертификат Stepik",
    description: "Дополнительное образование · онлайн-курс",
    category: "academic",
    imageUrl: "https://i.ibb.co/7xyvNgnn/stepik-certificate-188355-da53b91.png",
    sourceUrl: "https://ibb.co/RptMsrMx",
  },
  {
    title: "Сертификат Stepik",
    description: "Профессиональный модуль · освоение ПК",
    category: "professional",
    imageUrl: "https://i.ibb.co/M5pCxqmL/stepik-certificate-214271-5798bf6.png",
    sourceUrl: "https://ibb.co/4wNWgs88",
  },
  {
    title: "Сертификат Stepik",
    description: "Профессиональный модуль · освоение ПК",
    category: "professional",
    imageUrl: "https://i.ibb.co/gMQXfqX5/stepik-certificate-63054-64d442d.png",
    sourceUrl: "https://ibb.co/3YWC9tnH",
  },
  {
    title: "Диплом участника «Диктант Победы 2024»",
    description: "Социальная активность · культурно-массовое мероприятие",
    category: "social",
    imageUrl: "https://i.ibb.co/PZrYpLP7/2024.jpg",
    sourceUrl: "https://ibb.co/bg63h0CS",
  },
];

const sections: {
  id: string;
  category: Category;
  number: string;
  title: string;
  note: string;
}[] = [
  {
    id: "academic",
    category: "academic",
    number: "4.3.3",
    title: "Учебные достижения",
    note: "Наградные документы за участие в учебной деятельности, а также документы, подтверждающие освоение учебных дисциплин и дополнительного образования.",
  },
  {
    id: "professional",
    category: "professional",
    number: "4.3.4",
    title: "Освоение профессиональных компетенций",
    note: "Документы, подтверждающие выполнение заданий по учебной и производственной практике и освоение видов профессиональной деятельности.",
  },
  {
    id: "social",
    category: "social",
    number: "4.3.6",
    title: "Социальная активность",
    note: "Участие в общественной жизни, творческих конкурсах, смотрах, выставках и трудовых акциях.",
  },
];

const profileFields = [
  { label: "ФИО", value: student.name },
  { label: "Дата рождения", value: student.birthDate },
  { label: "Место обучения", value: student.institution },
  { label: "Учебная группа", value: student.group },
  { label: "Дополнительное образование", value: student.additional },
];

function CertificateGallery({ items }: { items: Certificate[] }) {
  if (items.length === 0) {
    return <p className="text-zinc-500">Материалы в данном разделе пока не добавлены.</p>;
  }

  return (
    <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
      {items.map((certificate, index) => (
        <motion.a
          key={certificate.sourceUrl}
          href={certificate.sourceUrl}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          whileHover={{ y: -4 }}
          className="group mb-6 inline-block w-full break-inside-avoid"
        >
          <div className="border border-zinc-800 bg-zinc-900/60 p-2 transition group-hover:border-zinc-600">
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>
          <p className="mt-2 truncate text-sm font-medium text-zinc-200">{certificate.title}</p>
          <p className="truncate text-xs text-zinc-500">{certificate.description}</p>
        </motion.a>
      ))}
    </div>
  );
}

export default function App() {
  const byCategory = (category: Category) =>
    certificates.filter((certificate) => certificate.category === category);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Титульный лист */}
      <section className="relative flex min-h-[82vh] items-end overflow-hidden">
        <img
          src="/images/hero-certificates.jpg"
          alt="Фон портфолио"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm tracking-[0.24em] text-zinc-300"
          >
            ПОРТФОЛИО ОБУЧАЮЩЕГОСЯ
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
          >
            {student.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-4 max-w-xl text-zinc-200"
          >
            {student.institution}
          </motion.p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-16">
        {/* Визитная карточка студента */}
        <section id="profile" className="scroll-mt-6">
          <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {profileFields.map((field) => (
              <div key={field.label} className="border-b border-zinc-800/80 pb-3">
                <dt className="text-xs uppercase tracking-wider text-zinc-500">{field.label}</dt>
                <dd className="mt-1 text-sm text-zinc-200">{field.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Разделы с документами */}
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="mt-14 scroll-mt-6">
            <h2 className="text-lg font-medium tracking-tight">{section.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">{section.note}</p>
            <CertificateGallery items={byCategory(section.category)} />
          </section>
        ))}
      </div>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto w-full max-w-6xl px-6 py-8 text-xs text-zinc-500 md:px-10">
          Портфолио обучающегося · {student.name} · {student.institution}
        </div>
      </footer>
    </div>
  );
}
