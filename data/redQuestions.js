export default [
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
  {
    question: "Phishing nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
      { id: "1", option: "B", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
    ],
    correctAnswerIndex: 1,
  },
  {
      question: "Brute Force Attack nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
        { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
        { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      ],
      correctAnswerIndex: 2,
    },
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
    {
      question: "DoS saldırısı nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
        { id: "1", option: "B", answer: "Bir servisin normal çalışmasını engellemek için aşırı trafik veya istek gönderme saldırısıdır." },
        { id: "2", option: "C", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Social Engineering nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
        { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "2", option: "C", answer: "İnsanları manipüle ederek bilgi veya erişim elde etmeye çalışan bir saldırı türüdür." },
        { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Session Hijacking nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
        { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
        { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Malware nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "1", option: "B", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
        { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
        { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Spyware nedir?",
      options: [
        { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "2", option: "C", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
        { id: "3", option: "D", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Session Fixation nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "1", option: "B", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme saldırısıdır ve kullanıcının oturum kimliğini değiştirmeye çalışır." },
        { id: "3", option: "D", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "Clickjacking nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "1", option: "B", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "2", option: "C", answer: "Kullanıcıların bilgisi olmadan istemeden tıklamalarını sağlayan ve kötü amaçlı bir işlem gerçekleştiren bir saldırı türüdür." },
        { id: "3", option: "D", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
      ],
      correctAnswerIndex: 2,
    },
    {
      question: "DNS Spoofing nedir?",
      options: [
        { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "1", option: "B", answer: "DNS sorgularını yönlendirerek kullanıcıları yanıltan bir saldırı türüdür." },
        { id: "2", option: "C", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "3", option: "D", answer: "Bir servisin normal çalışmasını engellemek için aşırı trafik veya istek gönderme saldırısıdır." },
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Ransomware nedir?",
      options: [
        { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "1", option: "B", answer: "Bilgisayar sistemlerini kilitleyerek fidye talep eden kötü amaçlı yazılım türüdür." },
        { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme saldırısıdır ve kullanıcının oturum kimliğini değiştirmeye çalışır." },
        { id: "3", option: "D", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
      ],
      correctAnswerIndex: 1,
    },
    {
      question: "Zero-Day Exploit nedir?",
      options: [
        { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
        { id: "1", option: "B", answer: "Henüz düzeltilmemiş bir güvenlik açığından faydalanarak saldırı gerçekleştiren bir saldırı türüdür." },
        { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
        { id: "3", option: "D", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
      ],
      correctAnswerIndex: 1,
    },
    {
    question: "Brute Force Attack nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
      { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
      { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
    ],
    correctAnswerIndex: 2,
  },
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
  {
    question: "DoS saldırısı nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
      { id: "1", option: "B", answer: "Bir servisin normal çalışmasını engellemek için aşırı trafik veya istek gönderme saldırısıdır." },
      { id: "2", option: "C", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Social Engineering nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
      { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "2", option: "C", answer: "İnsanları manipüle ederek bilgi veya erişim elde etmeye çalışan bir saldırı türüdür." },
      { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Session Hijacking nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
      { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
      { id: "3", option: "D", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Malware nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "1", option: "B", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
      { id: "2", option: "C", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
      { id: "3", option: "D", answer: "Bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır." },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Spyware nedir?",
    options: [
      { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "1", option: "B", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "2", option: "C", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
      { id: "3", option: "D", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Session Fixation nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "1", option: "B", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme saldırısıdır ve kullanıcının oturum kimliğini değiştirmeye çalışır." },
      { id: "3", option: "D", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "Clickjacking nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "1", option: "B", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "2", option: "C", answer: "Kullanıcıların bilgisi olmadan istemeden tıklamalarını sağlayan ve kötü amaçlı bir işlem gerçekleştiren bir saldırı türüdür." },
      { id: "3", option: "D", answer: "Bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır." },
    ],
    correctAnswerIndex: 2,
  },
  {
    question: "DNS Spoofing nedir?",
    options: [
      { id: "0", option: "A", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "1", option: "B", answer: "DNS sorgularını yönlendirerek kullanıcıları yanıltan bir saldırı türüdür." },
      { id: "2", option: "C", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "3", option: "D", answer: "Bir servisin normal çalışmasını engellemek için aşırı trafik veya istek gönderme saldırısıdır." },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Ransomware nedir?",
    options: [
      { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "1", option: "B", answer: "Bilgisayar sistemlerini kilitleyerek fidye talep eden kötü amaçlı yazılım türüdür." },
      { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme saldırısıdır ve kullanıcının oturum kimliğini değiştirmeye çalışır." },
      { id: "3", option: "D", answer: "Deneme-yanılma yöntemiyle şifre kırma saldırısıdır." },
    ],
    correctAnswerIndex: 1,
  },
  {
    question: "Zero-Day Exploit nedir?",
    options: [
      { id: "0", option: "A", answer: "Kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür." },
      { id: "1", option: "B", answer: "Henüz düzeltilmemiş bir güvenlik açığından faydalanarak saldırı gerçekleştiren bir saldırı türüdür." },
      { id: "2", option: "C", answer: "Bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır." },
      { id: "3", option: "D", answer: "Kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır." },
    ],
    correctAnswerIndex: 1,
  }
];
