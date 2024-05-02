import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const RedCardsScreen = () => {
  const [terms, setTerms] = useState([
    { id: 1, title: 'Web Saldırıları', category: 'web', items: [
        { id: 1, title: 'SQL Injection', description: 'SQL Injection, bir web uygulamasına yapılan saldırı türüdür.' },
        { id: 2, title: 'Cross-Site Scripting (XSS)', description: 'XSS, bir web uygulamasında kullanıcı tarafından enjekte edilen kodun çalıştırılmasına izin veren bir güvenlik açığıdır.' },
        { id: 3, title: 'Phishing', description: 'Phishing, kullanıcıları yanıltarak hassas bilgilerini elde etmeye çalışan bir saldırı türüdür.' },
        { id: 4, title: 'Brute Force Attack', description: 'Brute Force Attack, deneme-yanılma yöntemiyle şifre kırma saldırısıdır.' },
        { id: 8, title: 'Session Hijacking', description: 'Session Hijacking, bir kullanıcının oturumunu ele geçirme ve yetkisiz erişim sağlama saldırısıdır.' },
      ]
    },
    { id: 2, title: 'Mobil Saldırılar', category: 'mobile', items: [
        { id: 1, title: 'Mobile Malware', description: 'Mobile Malware, mobil cihazlara zarar vermek için tasarlanmış kötü amaçlı yazılımdır.' },
        { id: 2, title: 'Bluetooth Hacking', description: 'Bluetooth Hacking, Bluetooth bağlantılarını ele geçirme ve kullanıcı verilerini çalma saldırısıdır.' },
        // Diğer mobil saldırılarına ait soruları buraya ekleyin
      ]
    },
    { id: 3, title: 'Network Saldırıları', category: 'network', items: [
        { id: 1, title: 'ARP Spoofing', description: 'ARP Spoofing, ağdaki cihazların iletişimini yönlendirerek veri paketlerini ele geçirme saldırısıdır.' },
        { id: 2, title: 'DNS Poisoning', description: 'DNS Poisoning, DNS sorgularını yönlendirerek kullanıcıları yanıltma ve kötü amaçlı siteye yönlendirme saldırısıdır.' },
        // Diğer network saldırılarına ait soruları buraya ekleyin
      ]
    },
    { id: 4, title: 'Kriptoloji', category: 'cryptography', items: [
        { id: 1, title: 'Symmetric Encryption', description: 'Symmetric Encryption, aynı anahtarın kullanıldığı şifreleme yöntemidir.' },
        { id: 2, title: 'Asymmetric Encryption', description: 'Asymmetric Encryption, farklı anahtarların kullanıldığı şifreleme yöntemidir.' },
        // Diğer kriptolojiye ait soruları buraya ekleyin
      ]
    },
    { id: 5, title: 'Pentest', category: 'pentest', items: [
        { id: 1, title: 'External Pentest', description: 'External Pentest, dışarıdan bir saldırgan gibi ağa ve uygulamalara test yapma sürecidir.' },
        { id: 2, title: 'Internal Pentest', description: 'Internal Pentest, ağ içinden bir saldırgan gibi iç ağa ve sistemlere test yapma sürecidir.' },
        // Diğer pentest'e ait soruları buraya ekleyin
      ]
    },
    { id: 6, title: 'Burp Suite', category: 'burpSuite', items: [
        { id: 1, title: 'Burp Proxy', description: 'Burp Proxy, HTTP ve HTTPS trafiğini izlemek, değiştirmek ve engellemek için kullanılan bir araçtır.' },
        { id: 2, title: 'Burp Scanner', description: 'Burp Scanner, otomatik güvenlik taraması yaparak web uygulamalarında bulunan güvenlik açıklarını tespit eder.' },
        // Diğer Burp Suite araçlarına ait soruları buraya ekleyin
      ]
    },
  ]);

  const [selectedTerm, setSelectedTerm] = useState(null);

  const renderCategoryCards = () => {
    return terms.map((category) => (
      <View key={category.id}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <View style={styles.cardContainer}>
          {renderCards(category.items, category.id)}
        </View>
      </View>
    ));
  };
  
  const renderCards = (items, categoryId) => {
    return items.map((term) => (
      <TouchableOpacity
        key={term.id}
        style={[styles.card, { backgroundColor: getCategoryColor(term.category) }]}
        onPress={() => handleCardPress(term.id, categoryId)}
      >
        <Text style={styles.title}>{term.title}</Text>
        {selectedTerm?.id === term.id && selectedTerm?.categoryId === categoryId && (
          <Text style={styles.description}>{term.description}</Text>
        )}
      </TouchableOpacity>
    ));
  };
  
  const handleCardPress = (termId, categoryId) => {
    setSelectedTerm({ id: termId, categoryId: categoryId });
  };
  

  const getCategoryColor = (category) => {
    switch (category) {
      case 'web':
        return 'purple';
      case 'network':
        return 'green';
      case 'cryptography':
        return 'blue';
      case 'pentest':
        return 'orange';
      case 'burpSuite':
        return 'pink';
      default:
        return 'gray'; // Diğer kategoriler için varsayılan renk
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      {renderCategoryCards()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    aspectRatio: 1,
    width: Dimensions.get('window').width / 2 - 20,
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
