export const webAttacksQuiz = [
  {
    question: "SQL Injection nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
      { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "2", option: "C", answer: "DNS sorgularını yönlendirerek kullanıcıları yanıltan bir saldırı türüdür." },
      { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
    ],
    correctAnswerIndex: 0,
  },
  {
    question: "Cross-Site Scripting (XSS) hangi tür bir güvenlik açığıdır?",
    options: [
      { id: "0", option: "A", answer: "SQL Injection" },
      { id: "1", option: "B", answer: "Session Hijacking" },
      { id: "2", option: "C", answer: "DNS Spoofing" },
      { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
    ],
    correctAnswerIndex: 3,
  },
  
];


export const networkAttacksQuiz = [
  {
    question: "Man-in-the-Middle (MitM) saldırısı hangisini ele geçirir?",
      options: [
        { id: "0", option: "A", answer: "Bir kullanıcının oturumunu" },
        { id: "1", option: "B", answer: "Veritabanını" },
        { id: "2", option: "C", answer: "Verileri" },
        { id: "3", option: "D", answer: "Ana sunucuyu" },
      ],
      correctAnswerIndex: 2,
  },
  
];


// Mobil Attacks Quiz
export const mobilAttacksQuiz = [
  {
    question: "Mobil uygulama saldırılarında en sık karşılaşılan güvenlik açığı nedir?",
    options: [
      { id: "0", option: "A", answer: "Yazılım güncellemelerini yapmama" },
      { id: "1", option: "B", answer: "API zayıflıkları" },
      { id: "2", option: "C", answer: "Mobil cihazın fiziksel güvenliği" },
      { id: "3", option: "D", answer: "SSL/TLS kullanımı" },
    ],
    correctAnswerIndex: 1,
  },
 
];

// Kriptoloji Quiz
export const kriptolojiQuiz = [
  {
    question: "Kriptoloji nedir?",
    options: [
      { id: "0", option: "A", answer: "Mobil cihazların güvenliği" },
      { id: "1", option: "B", answer: "Şifreleme bilimi" },
      { id: "2", option: "C", answer: "Veritabanı güvenliği" },
      { id: "3", option: "D", answer: "Ağ güvenliği" },
    ],
    correctAnswerIndex: 1,
  },

];

// Pentest Quiz
export const pentestQuiz = [
  {
    question: "Pentesting nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir sistem veya ağdaki güvenlik zayıflıklarını tespit etmek ve bu zayıflıkları sömürmek amacıyla yapılan kontrollü bir saldırı sürecidir." },
    ],
    correctAnswerIndex: 0,
  },
 
];

// Burp Suite Quiz
export const burpSuiteQuiz = [
  {
    question: "Burp Suite nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir sızma testi aracıdır." },
      { id: "1", option: "B", answer: "Bir kripto analiz aracıdır." },
      { id: "2", option: "C", answer: "Bir veritabanı yönetim aracıdır." },
      { id: "3", option: "D", answer: "Bir ağ analiz aracıdır." },
    ],
    correctAnswerIndex: 0,
  },
  
];