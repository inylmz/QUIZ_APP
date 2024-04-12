import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const BlueCardScreen = () => {
  const [terms, setTerms] = useState([
    { id: 1, title: 'SIEM (Security Information and Event Management)', description: 'SIEM, güvenlik bilgisi ve olay yönetimi sağlayan bir sistemdir.' },
    { id: 2, title: 'SOAR (Security Orchestration, Automation, and Response)', description: 'SOAR, güvenlik olaylarına yanıt vermek için otomasyon ve yanıtlandırma süreçlerini birleştiren bir yaklaşımdır.' },
    { id: 3, title: 'Incident Response Plan', description: 'Bir organizasyonun güvenlik olaylarına hızlı ve etkili bir şekilde yanıt vermek için hazırladığı belge veya süreçlerdir.' },
    { id: 4, title: 'Threat Intelligence', description: 'Threat Intelligence, güvenlik tehditlerini izlemek, anlamak ve bunlara karşı korunmak için kullanılan bilgileri içeren bir süreçtir.' },
    { id: 5, title: 'Vulnerability Management', description: 'Organizasyonların sistemlerindeki zayıflıkları tespit etmek, değerlendirmek ve düzeltmek için kullanılan süreçlerdir.' },
    { id: 6, title: 'Security Operations Center (SOC)', description: 'SOC, bir organizasyonun güvenlik olaylarını izlemek, tespit etmek, yanıtlamak ve raporlamak için kurduğu merkezi birimdir.' },
    { id: 8, title: 'Security Awareness Training', description: 'Bir organizasyonun çalışanlarını güvenlik konularında eğitmek ve farkındalıklarını artırmak için düzenlediği eğitim programlarıdır.' },
    { id: 9, title: 'Endpoint Security', description: 'Endpoint Security, bilgisayar ağlarında kullanılan cihazların güvenliğini sağlamak için kullanılan önlemler ve teknolojilerdir.' },
    { id: 10, title: 'Network Segmentation', description: 'Network Segmentation, bir ağın bölünmüş veya segmente edilmiş bölgelere ayrılması ve bu bölgeler arasında erişim kontrolleri uygulanmasıdır.' },
    { id: 11, title: 'User and Entity Behavior Analytics (UEBA)', description: 'User and Entity Behavior Analytics (UEBA), kullanıcı ve varlık davranışlarını izleyen, analiz eden ve anormal davranışları tespit eden bir güvenlik teknolojisidir.' },
    { id: 12, title: 'Identity and Access Management (IAM)', description: 'Identity and Access Management (IAM), bir organizasyonun kullanıcıların kimliklerini doğrulaması, erişim haklarını yönetmesi ve denetlemesi için kullanılan süreçler ve teknolojilerdir.' },
    { id: 13, title: 'Security Incident and Event Management (SIEM)', description: 'Security Incident and Event Management (SIEM), güvenlik olaylarını izlemek, analiz etmek ve yanıtlamak için kullanılan bir sistemdir.' },
    { id: 14, title: 'Cloud Security', description: 'Cloud Security, bulut bilişim ortamlarında veri güvenliğini sağlamak için kullanılan süreçler, politikalar ve teknolojilerdir.' },
    { id: 15, title: 'Secure Coding Practices', description: 'Secure Coding Practices, yazılım geliştirme sürecinde güvenlik açıklarını azaltmak için kullanılan kodlama teknikleri ve standartlarıdır.' },
    { id: 16, title: 'Cyber Threat Hunting', description: 'Cyber Threat Hunting, ağlarda veya sistemlerde gizli tehditleri tespit etmek ve bunlara karşı proaktif bir şekilde hareket etmek için kullanılan bir güvenlik operasyonudur.' },
    { id: 17, title: 'Data Loss Prevention (DLP)', description: 'Data Loss Prevention (DLP), hassas verilerin izlenmesi, kontrol edilmesi ve korunması için kullanılan bir güvenlik teknolojisidir.' },
    { id: 18, title: 'Security Risk Assessment', description: 'Security Risk Assessment, bir organizasyonun güvenlik risklerini belirlemek, analiz etmek ve bu risklere karşı önlemler almak için yapılan bir süreçtir.' },
    { id: 19, title: 'Security Policy and Compliance', description: 'Security Policy and Compliance, güvenlik politikalarının oluşturulması, uygulanması ve uyumluluğunun sağlanması için kullanılan süreçlerdir.' },
  ]);

  const [selectedTerm, setSelectedTerm] = useState(null);

  const windowWidth = Dimensions.get('window').width;

  const renderCards = () => {
    const cardWidth = windowWidth / 2 - 20; // İki kartın genişliği

    return terms.map((term) => (
      <TouchableOpacity
        key={term.id}
        style={[styles.card, { width: cardWidth }]}
        onPress={() => setSelectedTerm(term)}
      >
        <Text style={styles.title}>{term.title}</Text>
        {selectedTerm?.id === term.id && (
          <Text style={styles.description}>{term.description}</Text>
        )}
      </TouchableOpacity>
    ));
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
    backgroundColor: 'blue', // Mavi renk
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

export default BlueCardScreen;
