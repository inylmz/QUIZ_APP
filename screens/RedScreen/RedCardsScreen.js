import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const RedCardsScreen = () => {
  const [terms, setTerms] = useState([
    { id: 1, title: 'SQL Injection', description: 'SQL Injection, bir web uygulamasına yapılan saldırı türüdür.', category: 'web'},
    { id: 2, title: 'Cross-Site Scripting (XSS)', description: 'XSS, bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır.', category: 'web' },
    { id: 3, title: 'Phishing', description: 'Phishing, kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür.' },
    { id: 4, title: 'Brute Force Attack', description: 'Brute Force Attack, deneme-yanılma yöntemiyle şifre kırma saldırısıdır.', category: 'web' },
    { id: 5, title: 'Man-in-the-Middle (MitM)', description: 'MitM, iletişim kanalı üzerinde yer alan bir köprüden geçerek verileri ele geçirme saldırısıdır.', category: 'network' },
    { id: 6, title: 'Denial of Service (DoS)', description: 'DoS, bir servisin normal çalışmasını engellemek için aşırı trafik veya istek gönderme saldırısıdır.', category: 'network' },
    { id: 7, title: 'Social Engineering', description: 'Social Engineering, insanları manipüle ederek bilgi veya erişim elde etmeye çalışan bir saldırı türüdür.' },
    { id: 8, title: 'Session Hijacking', description: 'Session Hijacking, bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır.', category: 'web' },
    { id: 9, title: 'Malware', description: 'Malware, kötü amaçlı yazılım olarak bilinir ve bilgisayar sistemlerine zarar vermek için tasarlanmıştır.' },
    { id: 10, title: 'Spyware', description: 'Spyware, kullanıcıların bilgisayarlarını izlemek ve bilgi çalmak için kullanılan bir tür kötü amaçlı yazılımdır.' },
    { id: 11, title: 'Session Fixation', description: 'Session Fixation, bir kullanıcının oturumunu ele geçirme saldırısıdır ve kullanıcının oturum kimliğini değiştirmeye çalışır.' },
    { id: 12, title: 'Clickjacking', description: 'Clickjacking, kullanıcıların bilgisi olmadan istemeden tıklamalarını sağlayan ve kötü amaçlı bir işlem gerçekleştiren bir saldırı türüdür.' },
    { id: 13, title: 'DNS Spoofing', description: 'DNS Spoofing, DNS sorgularını yönlendirerek kullanıcıları yanıltan bir saldırı türüdür.' },
    { id: 14, title: 'Ransomware', description: 'Ransomware, bilgisayar sistemlerini kilitleyerek fidye talep eden kötü amaçlı yazılım türüdür.' },
    { id: 15, title: 'Zero-Day Exploit', description: 'Zero-Day Exploit, henüz düzeltilmemiş bir güvenlik açığından faydalanarak saldırı gerçekleştiren bir saldırı türüdür.' },
    { id: 16, title: 'Data Breach', description: 'Data Breach, hassas verilerin yetkisiz kişilerce ele geçirilmesi durumudur ve genellikle büyük veri ihlalleriyle ilişkilidir.' },
    { id: 17, title: 'Backdoor', description: 'Backdoor, bir sistemdeki güvenlik önlemlerini atlayarak yetkisiz erişim sağlayan bir arka kapıdır.' },
    { id: 18, title: 'Rootkit', description: 'Rootkit, bilgisayar sistemlerine gizlice yerleşen ve sistemde geniş erişim yetkileri sağlayan kötü amaçlı bir yazılım türüdür.' },
    { id: 19, title: 'Pharming', description: 'Pharming, kullanıcıları yanıltarak doğru web sitesine ulaştıklarını düşündükleri bir saldırıda, yanlış bir web sitesine yönlendiren bir saldırı türüdür.' },
    { id: 20, title: 'Spoofing', description: 'Spoofing, kimlik veya veri sahtekarlığı yaparak gerçek bir varlık gibi görünmeye çalışan bir saldırı türüdür.' },
    // Daha fazla terim eklenebilir
  ]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const renderCards = () => {
    const cardWidth = windowWidth / 2 - 20; // İki kartın genişliği

    return terms.map((term) => (
      <TouchableOpacity
        key={term.id}
        style={[styles.card, { width: cardWidth, backgroundColor: getCategoryColor(term.category) }]}
        onPress={() => setSelectedTerm(term)}
      >
        <Text style={styles.title}>{term.title}</Text>
        {selectedTerm?.id === term.id && (
          <Text style={styles.description}>{term.description}</Text>
        )}
      </TouchableOpacity>
    ));
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'web':
        return 'purple';
      case 'network':
        return 'green';
      // Diğer kategoriler için renkleri burada belirleyebilirsiniz
      default:
        return 'red'; // Varsayılan renk
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.cardContainer}>{renderCards()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    aspectRatio: 1,
    backgroundColor: 'red',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  description: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default RedCardsScreen;