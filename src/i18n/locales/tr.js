import { brand, contact, store } from '../../lib/siteConfig';

/**
 * Türkçe içerik.
 *
 * İÇERİK KURALI: özellik ve güvenlik iddialarının tamamı Google Play
 * listelemesindeki açıklamadan veya ekran görüntülerinin kendisinden
 * türetilmiştir. Doğrulanamayan yeni iddia (ödül, kullanıcı sayısı, üstünlük
 * ifadeleri) EKLENMEZ.
 *
 * HUKUKİ METİNLER: standart uygulamaya göre hazırlanmış TASLAKLARDIR ve
 * yayına almadan önce hukuk danışmanı incelemesi gerekir. Özellikle
 * "hiç kişisel veri toplanmıyor" ifadesi, uygulamada analitik/çökme raporlama
 * SDK'sı bulunmadığı varsayımına dayanır — Play "Veri güvenliği" beyanınızla
 * birebir tutarlı olmalıdır.
 */

const address = contact.addressLines.join(', ');

const tr = {
  code: 'tr',
  htmlLang: 'tr',
  label: 'Türkçe',
  shortLabel: 'TR',
  dir: 'ltr',

  nav: {
    ariaLabel: 'Ana menü',
    mobileAriaLabel: 'Mobil menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    items: [
      { label: 'Oyunlar', href: '#oyunlar' },
      { label: 'SSS', href: '#neden-illugon' },
      { label: 'İndir', href: '#indir' },
    ],
    action: { label: 'Uygulamayı Al', href: '#indir' },
  },

  common: {
    skipToContent: 'İçeriğe geç',
    homeAriaLabel: `${brand.name} ana sayfa`,
    languageSwitcherLabel: 'Dil',
    switchToOther: 'English',
    backToHome: 'Ana sayfaya dön',
    storeBadgeLabel: 'Google Play’den indirin',
    lastUpdated: 'Son güncelleme',
  },

  home: {
    title: `${brand.name} — Çocuklar için şekil, renk ve sayı oyunları`,
    description:
      `${brand.name}, 2-5 yaş çocuklar için şekil, renk, sayı ve mantık oyunları sunar. ` +
      '%100 reklamsız, internet gerekmez. Google Play’de Öğretmen Onaylı.',

    hero: {
      headline: { accent: 'Oynayarak Öğrenin', rest: `${brand.name} ile` },
      subtext:
        'Şekiller, renkler, sayılar ve mantık oyunları tek uygulamada. 2-5 yaş için hazırlandı, %100 reklamsız ve internet olmadan çalışır.',
      tags: ['Şekiller', 'Renkler', 'Sayılar', 'Mantık'],
    },

    teacherApproved: {
      headline: { accent: 'Öğretmen Onaylı', rest: 'bir Google Play uygulaması' },
      body: `${brand.name}, Google Play’in Öğretmen Onaylı programı kapsamında öğretmenler ve çocuk gelişimi uzmanları tarafından değerlendirildi.`,
      badgeAlt: 'Google Play Öğretmen Onaylı rozeti',
      linkLabel: 'Play listelemesinde gör',
    },

    features: {
      oyunlar: {
        headline: { accent: 'Şekil ve Rengi', rest: 'Balonlarda Eşleştir' },
        body: 'Daire, kare, üçgen gibi temel geometrik şekilleri ve gökkuşağının renklerini tanır. Doğru balonu bulmak için iki özelliği birlikte takip etmesi gerekir.',
        bullets: [
          'Temel geometrik şekilleri tanıma',
          'Gökkuşağının tüm renkleri',
          'Şekil ve rengi aynı anda takip etme',
        ],
      },
      sayilar: {
        headline: { accent: "1'den 10'a", rest: 'Saymayı Öğrenin' },
        body: 'Tahtadaki şekilleri sayar ve doğru sayı kartını seçer. Net talimatlar sayesinde çocuk kendi hızında ilerler.',
        bullets: [
          'Nesne sayma ve sayı tanıma',
          'Görsel algı ve konsantrasyon',
          'Kendi hızında öğrenme',
        ],
      },
      'eksik-tamamla': {
        headline: { accent: 'Eksik Parçayı', rest: 'Yerine Koy' },
        body: 'Sepetlerdeki eksik parçaları sürükleyip yerine bırakır. Bu etkinlikler el-göz koordinasyonunu ve ince motor becerilerini güçlendirir.',
        bullets: [
          'Sürükle ve bırak etkinlikleri',
          'El-göz koordinasyonu',
          'Küçük eller için basit kontroller',
        ],
      },
      'yanlis-renk': {
        headline: { accent: 'Yanlış Rengi', rest: 'Kartlarda Yakala' },
        body: 'Çilek siyah, yarasa pembe olduğunda çocuk bunu fark eder. Nesnelerin gerçek renkleriyle eşleştirmek görsel algıyı ve hafızayı çalıştırır.',
        bullets: [
          'Nesne-renk ilişkisi kurma',
          'Görsel hafıza ve dikkat',
          'Hayvan, meyve ve nesne kartları',
        ],
      },
      sirala: {
        headline: { accent: 'Renk ve Şekle', rest: 'Göre Sırala' },
        body: 'Çift girişli tablo oyunu, çocuğa iki özelliğe göre birlikte düşünmeyi öğretir: hem “kırmızı” hem “kare” olanı bulmak gerekir.',
        bullets: [
          'Çift girişli tablo (mantık matrisi)',
          'İki özelliğe göre problem çözme',
          'Eleştirel düşünmenin ilk adımı',
        ],
      },
    },

    download: {
      headline: `${brand.name}'u bugün indirin`,
      subtext:
        '%100 reklamsız, Wi-Fi gerekmez ve küçüklerin bağımsız oynayabilmesi için tasarlandı.',
    },


    video: {
      headline: { accent: 'Nasıl Oynanır?', rest: 'Kısa bir bakış' },
      subtext: 'Illugon\u2019un renkli dünyasına göz atın \u2014 oyunlardan bir kaç sahne.',
      iframeTitle: 'Illugon tanıtım videosu',
    },
    faq: {
      sectionId: 'neden-illugon',
      headline: { accent: 'Neden', rest: `${brand.name}?` },
      lead: 'Ebeveynlerin en çok sorduğu sorular ve yanıtları.',
      items: [
        {
          q: 'Uygulama gerçekten reklamsız mı?',
          a: 'Evet, %100 reklamsız. Açılır pencere, banner veya video reklamı yoktur. İndirme ücretsiz, uygulama içi satın alma da bulunmuyor.',
        },
        {
          q: 'İnternet bağlantısı gerekli mi?',
          a: 'Hayır. Tüm oyunlar cihaza yüklenir ve çevrimdışı çalışır. Wi-Fi veya mobil veri gerekmez.',
        },
        {
          q: 'Hangi yaş grubuna uygun?',
          a: '2-5 yaş arası çocuklar için tasarlandı. Okuma gerektirmez; sesli yönlendirmeler ve basit kontroller küçük çocukların bağımsız oynamasını sağlar.',
        },
        {
          q: 'Çocuğumun verisi toplanıyor mu?',
          a: 'Hayır. Uygulama hesap açmayı gerektirmez ve kişisel veri toplamaz. Oyun ilerlemesi yalnızca cihazda kalır.',
        },
        {
          q: '"Öğretmen Onaylı" ne anlama geliyor?',
          a: 'Google Play\u2019in Öğretmen Onaylı programı kapsamında; uygulama öğretmenler ve çocuk gelişimi uzmanları tarafından eğitim kalitesi, yaş uygunluğu ve tasarım açısından değerlendirildi.',
        },
        {
          q: 'Hangi becerileri geliştirir?',
          a: 'Temel geometrik şekiller, renkler, 1-10 arası sayma, mantık/sınıflandırma, örüntü tamamlama, el-göz koordinasyonu ve görsel hafıza.',
        },
      ],
    },
  },

  screenshots: {
    1: {
      caption: 'Rengi ve şekli bulun',
      alt: 'Gökyüzünde kare, yuvarlak ve yıldız biçiminde renkli balonlar; kız karakter konuşma balonunda aranan şekil ve rengi gösteriyor.',
    },
    2: {
      caption: "1'den 10'a kadar say",
      alt: 'Sınıf tahtasında üçgen ve yıldız çizimleri, altında 8, 9, 7, 4 sayı kartları; kız karakter doğru sayıyı soruyor.',
    },
    3: {
      caption: 'Şimdi eksikleri tamamla',
      alt: 'Mutfak sahnesinde sepetlere yerleştirilmiş renkli biberler ve tamamlanması gereken eksik parçalar.',
    },
    4: {
      caption: 'Yanlış rengi bulun',
      alt: 'Çilek, yarasa ve penguen kartları; biri yanlış renkte boyanmış, laboratuvar önlüklü kız karakter yanında duruyor.',
    },
    5: {
      caption: 'Renk ve şekle göre sırala',
      alt: 'Bahçede abaküs benzeri raf; şekiller ve renklere göre sıralanacak bloklar ve yardımcı kız karakter.',
    },
  },

  footer: {
    tagline:
      'Okul öncesi çocuklar için şekil, renk, sayı ve mantık oyunları. Reklamsız ve çevrimdışı.',
    columns: [
      {
        title: 'Ürün',
        links: [
          { label: 'Oyunlar', href: '#oyunlar', hash: true },
          { label: 'SSS', href: '#neden-illugon', hash: true },
          { label: 'İndir', href: 'https://play.google.com/store/apps/details?id=com.ilugon.shapes.colors.toddler.games', external: true },
        ],
      },
      {
        title: 'Ebeveynler',
        links: [
          { label: 'Öğretmen Onaylı', href: '#ogretmen-onayli', hash: true },
          { label: 'Google Play sayfası', href: store.url, external: true },
          { label: 'İletişim', page: 'contact' },
        ],
      },
      {
        title: 'Yasal',
        links: [
          { label: 'Gizlilik Politikası', page: 'privacy' },
          { label: 'Kullanım Koşulları', page: 'terms' },
          { label: 'KVKK Aydınlatma Metni', page: 'kvkk' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} ${brand.name}. Tüm hakları saklıdır.`,
  },

  contact: {
    title: `İletişim — ${brand.name}`,
    description: `${brand.name} ile iletişime geçin: e-posta, telefon ve posta adresi.`,
    heading: { accent: 'Bize Yazın', rest: 'sorularınızı yanıtlayalım' },
    lead: 'Uygulamayla ilgili soru, öneri veya gizlilik talepleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz. E-postalara genellikle iş günü içinde yanıt veriyoruz.',
    cards: [
      { label: 'E-posta', value: contact.email, href: contact.emailHref, color: 'ember-orange' },
      { label: 'Telefon', value: contact.phone, href: contact.phoneHref, color: 'verdant-green' },
      { label: 'Adres', value: contact.addressLines.join('\n'), color: 'sky-blue' },
    ],
    privacyNote:
      'Gizlilik veya veri koruma talepleriniz için e-posta konusuna “Gizlilik” yazmanız süreci hızlandırır.',
  },

  notFound: {
    title: `Sayfa bulunamadı — ${brand.name}`,
    description: 'Aradığınız sayfa bulunamadı.',
    heading: { accent: 'Sayfa Bulunamadı', rest: 'ama oyunlar yerinde' },
    body: 'Bağlantı taşınmış veya yazım hatası olmuş olabilir. Ana sayfadan devam edebilirsiniz.',
  },

  legal: {
    privacy: {
      title: `Gizlilik Politikası — ${brand.name}`,
      description: `${brand.name} gizlilik politikası: uygulama çevrimdışı çalışır, hesap gerektirmez ve kişisel veri toplamaz.`,
      heading: 'Gizlilik Politikası',
      lead: `${brand.name} çocuklar için hazırlanmış bir eğitim uygulamasıdır. Bu politika, uygulamayı ve bu web sitesini kullandığınızda hangi bilgilerin işlendiğini sade bir dille açıklar.`,
      sections: [
        {
          heading: 'Kısaca',
          paragraphs: [
            'Uygulama çevrimdışı çalışır, hesap açmanızı istemez ve reklam göstermez.',
            'Uygulama üzerinden sizden veya çocuğunuzdan kişisel veri toplamıyoruz. Bize yalnızca kendi isteğinizle e-posta gönderdiğinizde bilgi iletirsiniz.',
          ],
        },
        {
          heading: 'Veri sorumlusu ve iletişim',
          paragraphs: [
            `Bu politikadan sorumlu taraf ${brand.name}’dur.`,
            `Adres: ${address}`,
            `E-posta: ${contact.email} · Telefon: ${contact.phone}`,
          ],
        },
        {
          heading: 'Toplamadığımız veriler',
          paragraphs: [
            'Uygulama; ad, soyad, e-posta, telefon numarası, adres, fotoğraf, rehber, konum ve reklam kimliği gibi kişisel verileri toplamaz.',
            'Uygulamayı kullanmak için hesap oluşturmanız veya giriş yapmanız gerekmez. Uygulama içi davranışsal reklam gösterilmez, profil çıkarılmaz ve veri satışı yapılmaz.',
          ],
        },
        {
          heading: 'Cihazda kalan bilgiler',
          paragraphs: [
            'Oyun ilerlemesi ve ses/dil gibi tercihler yalnızca cihazın kendi belleğinde saklanır. Bu bilgiler bize iletilmez.',
            'Uygulamayı kaldırdığınızda bu veriler cihazdan silinir.',
          ],
        },
        {
          heading: 'İnternet bağlantısı ve izinler',
          paragraphs: [
            'Uygulama, oynanmak için internet bağlantısına ihtiyaç duymaz.',
            'Uygulamanın talep ettiği izinlerin ve Google’a yapılan veri beyanının güncel listesini Google Play sayfasındaki “Veri güvenliği” bölümünden görebilirsiniz.',
          ],
        },
        {
          heading: 'Çocukların gizliliği',
          paragraphs: [
            'Uygulama okul öncesi çocuklara yöneliktir ve bu doğrultuda tasarlanmıştır: davranışsal reklam yoktur, çocuklardan kişisel veri istenmez ve üçüncü taraflarla veri paylaşımı yapılmaz.',
            'Çocuğunuzun cihaz kullanımını gözetmenizi ve yaşına uygun ekran süresi sınırları belirlemenizi öneririz.',
          ],
        },
        {
          heading: 'Google Play üzerinden dağıtım',
          paragraphs: [
            'Uygulama Google Play üzerinden dağıtılır. İndirme ve mağaza işlemleri sırasında Google, kendi gizlilik politikası kapsamında veri işleyebilir. Bu işleme bizim kontrolümüzde değildir.',
            'Mağaza tarafındaki veri uygulamaları için Google’ın gizlilik politikasını incelemenizi öneririz.',
          ],
        },
        {
          heading: 'Bize kendi isteğinizle ilettiğiniz bilgiler',
          paragraphs: [
            `${contact.email} adresine yazdığınızda; e-posta adresiniz, adınız (belirtirseniz) ve mesajınızın içeriği bize ulaşır.`,
            'Bu bilgileri yalnızca talebinizi yanıtlamak için kullanırız. Yanıtlama süreci tamamlandıktan sonra makul bir süre içinde silinir veya arşivlenir.',
          ],
        },
        {
          heading: 'Saklama ve güvenlik',
          paragraphs: [
            'İletişim yazışmalarını yalnızca gerekli olduğu süre boyunca saklarız.',
            'Elimizdeki bilgileri yetkisiz erişime karşı korumak için makul teknik ve idari önlemler alırız. Ancak hiçbir iletim yönteminin %100 güvenli olmadığını hatırlatmak isteriz.',
          ],
        },
        {
          heading: 'Haklarınız',
          paragraphs: [
            'Bulunduğunuz ülkenin mevzuatına göre; işlenen verilerinize erişme, düzeltilmesini veya silinmesini isteme, işlemeye itiraz etme ve veri taşınabilirliği haklarına sahip olabilirsiniz.',
            `Bu haklarınızı kullanmak için ${contact.email} adresine yazabilirsiniz. Talebinizi en geç 30 gün içinde yanıtlarız.`,
            'Türkiye’de ikamet ediyorsanız 6698 sayılı KVKK kapsamındaki haklarınız için KVKK Aydınlatma Metni sayfasını da inceleyebilirsiniz.',
          ],
        },
        {
          heading: 'Bu politikadaki değişiklikler',
          paragraphs: [
            'Politikayı zaman zaman güncelleyebiliriz. Güncelleme yapıldığında bu sayfadaki “Son güncelleme” tarihi değişir.',
            'Önemli değişikliklerde, uygulama veya mağaza sayfası üzerinden bilgilendirme yapmaya çalışırız.',
          ],
        },
      ],
    },

    terms: {
      title: `Kullanım Koşulları — ${brand.name}`,
      description: `${brand.name} uygulamasının ve web sitesinin kullanım koşulları.`,
      heading: 'Kullanım Koşulları',
      lead: `Bu koşullar, ${brand.name} uygulamasını ve bu web sitesini kullanımınızı düzenler. Uygulamayı indirerek veya kullanarak bu koşulları kabul etmiş olursunuz.`,
      sections: [
        {
          heading: 'Kapsam',
          paragraphs: [
            `Bu metin, ${brand.name} tarafından sunulan mobil uygulama ve bu web sitesi için geçerlidir.`,
            'Koşulları kabul etmiyorsanız uygulamayı kullanmamanızı ve cihazınızdan kaldırmanızı rica ederiz.',
          ],
        },
        {
          heading: 'Kullanım lisansı',
          paragraphs: [
            'Uygulamayı kişisel ve ticari olmayan amaçlarla, kendi cihazınızda kullanmanız için size sınırlı, devredilemez ve münhasır olmayan bir kullanım hakkı veriyoruz.',
            'Bu hak, uygulamanın sahipliğini devretmez.',
          ],
        },
        {
          heading: 'Yapılmaması gerekenler',
          paragraphs: [
            'Uygulamayı kopyalamak, çoğaltmak, kiralamak, satmak veya ücret karşılığı üçüncü kişilere sunmak; kaynak koda dönüştürmek, tersine mühendislik uygulamak veya değiştirmek; koruma önlemlerini aşmaya çalışmak yasaktır.',
            'Uygulamayı hukuka aykırı bir amaçla ya da başkalarının haklarını ihlal edecek şekilde kullanmayınız.',
          ],
        },
        {
          heading: 'Ebeveyn ve vasi sorumluluğu',
          paragraphs: [
            'Uygulama okul öncesi çocuklara yöneliktir. 18 yaşın altındaki bir kullanıcı adına uygulamayı indiren ebeveyn veya vasi, bu koşulları kendisi kabul etmiş sayılır.',
            'Çocuğun uygulamayı kullanımını gözetmek ve uygun ekran süresini belirlemek ebeveynin sorumluluğundadır.',
          ],
        },
        {
          heading: 'Eğitim amacı ve sınırları',
          paragraphs: [
            'Uygulama eğlenceli bir öğrenme aracıdır; okul öncesi eğitim programının, uzman görüşünün veya herhangi bir tanı ya da terapi hizmetinin yerine geçmez.',
            'Çocuğunuzun gelişimiyle ilgili endişeleriniz varsa bir uzmana danışmanızı öneririz.',
          ],
        },
        {
          heading: 'Fikri mülkiyet',
          paragraphs: [
            'Uygulamadaki tüm görseller, karakterler, sesler, metinler, yazılım kodu ve marka unsurları bize veya lisans verenlerimize aittir ve telif hakkı ile korunur.',
            'Bu unsurları izinsiz kullanmanız, çoğaltmanız veya türev çalışma üretmeniz mümkün değildir.',
          ],
        },
        {
          heading: 'Mağaza koşulları',
          paragraphs: [
            'Uygulamayı Google Play üzerinden edindiğiniz için Google Play Kullanım Şartları da geçerlidir.',
            'Bu koşullar ile mağaza koşulları arasında çelişki olması hâlinde, mağaza tarafına ilişkin konularda mağaza koşulları uygulanır.',
          ],
        },
        {
          heading: 'Garanti reddi',
          paragraphs: [
            'Uygulama “olduğu gibi” sunulur. Kesintisiz veya hatasız çalışacağına dair açık ya da zımni bir garanti vermiyoruz.',
            'Cihaz uyumluluğu, işletim sistemi güncellemeleri ve donanım farklılıkları nedeniyle deneyim cihazdan cihaza değişebilir.',
          ],
        },
        {
          heading: 'Sorumluluğun sınırlandırılması',
          paragraphs: [
            'Yürürlükteki mevzuatın izin verdiği ölçüde; uygulamanın kullanımından doğan dolaylı, arızi veya sonuç niteliğindeki zararlardan sorumlu değiliz.',
            'Tüketici mevzuatının size tanıdığı ve sözleşme ile sınırlandırılamayan haklarınız saklıdır.',
          ],
        },
        {
          heading: 'Değişiklikler ve sona erme',
          paragraphs: [
            'Bu koşulları güncelleyebilir, uygulamanın özelliklerini değiştirebilir veya sunumunu durdurabiliriz. Güncellemede bu sayfadaki tarih değişir.',
            'Koşulları ihlal etmeniz hâlinde kullanım hakkınız sona erebilir.',
          ],
        },
        {
          heading: 'Uygulanacak hukuk ve iletişim',
          paragraphs: [
            'Bu koşullar İngiltere ve Wales hukukuna tabidir. Bulunduğunuz ülkenin tüketici mevzuatından doğan hakları etkilemez.',
            `Sorularınız için: ${contact.email} · ${address}`,
          ],
        },
      ],
    },

    kvkk: {
      title: `KVKK Aydınlatma Metni — ${brand.name}`,
      description: `6698 sayılı KVKK kapsamında ${brand.name} aydınlatma metni ve ilgili kişi hakları.`,
      heading: 'KVKK Aydınlatma Metni',
      lead: '6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, Türkiye’de bulunan kullanıcılarımızı kişisel verilerinin işlenmesi hakkında bilgilendirmek amacıyla hazırlanmıştır.',
      sections: [
        {
          heading: 'Veri sorumlusunun kimliği',
          paragraphs: [
            `Veri sorumlusu ${brand.name}’dur.`,
            `Adres: ${address}`,
            `E-posta: ${contact.email} · Telefon: ${contact.phone}`,
          ],
        },
        {
          heading: 'İşlenen kişisel veriler',
          paragraphs: [
            'Mobil uygulama üzerinden kişisel veri toplanmamaktadır: uygulama çevrimdışı çalışır, hesap açılmasını gerektirmez ve reklam kimliği kullanmaz.',
            'Kişisel veri işleme yalnızca siz bizimle iletişime geçtiğinizde gerçekleşir. Bu durumda kimlik bilgisi (bildirdiğiniz ad), iletişim bilgisi (e-posta adresi, varsa telefon) ve mesaj içeriği işlenir.',
          ],
        },
        {
          heading: 'İşleme amaçları',
          paragraphs: [
            'Talep, soru, öneri ve şikâyetlerinizin karşılanması; destek sağlanması; veri koruma başvurularının yanıtlanması ve hukuki yükümlülüklerimizin yerine getirilmesi.',
          ],
        },
        {
          heading: 'Hukuki sebepler',
          paragraphs: [
            'Verileriniz KVKK m. 5/2-(c) sözleşmenin kurulması veya ifasıyla doğrudan ilgili olma, m. 5/2-(ç) hukuki yükümlülüğün yerine getirilmesi ve m. 5/2-(f) meşru menfaat hukuki sebeplerine dayanılarak işlenir.',
            'Bu sebeplerin uygulanmadığı hâllerde açık rızanız alınır.',
          ],
        },
        {
          heading: 'Aktarım',
          paragraphs: [
            'Kişisel verileriniz pazarlama amacıyla üçüncü kişilere satılmaz veya kiralanmaz.',
            'E-posta yazışmaları, kullandığımız e-posta altyapısı sağlayıcısının sunucularında barındırıldığı ölçüde yurt dışına aktarılabilir. Bu aktarım, talebinizi yanıtlayabilmek için gerekli olduğu kadarıyla ve KVKK m. 9 çerçevesinde yapılır.',
          ],
        },
        {
          heading: 'Saklama süresi',
          paragraphs: [
            'İletişim kayıtları, talebinizin sonuçlanmasının ardından makul bir süre boyunca ve mevzuatın öngördüğü zamanaşımı süreleri kadar saklanır; sonrasında silinir, yok edilir veya anonim hâle getirilir.',
          ],
        },
        {
          heading: 'İlgili kişi olarak haklarınız',
          paragraphs: [
            'KVKK m. 11 uyarınca; kişisel verinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işleme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme, yurt içinde veya yurt dışında verilerin aktarıldığı üçüncü kişileri bilme haklarına sahipsiniz.',
            'Ayrıca eksik veya yanlış işlenmiş verilerin düzeltilmesini, kanuni şartlar oluştuğunda silinmesini veya yok edilmesini isteme, bu işlemlerin aktarım yapılan üçüncü kişilere bildirilmesini talep etme, otomatik sistemlerle yapılan analiz sonucu aleyhinize bir sonuç doğması hâlinde buna itiraz etme ve kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme haklarınız bulunur.',
          ],
        },
        {
          heading: 'Başvuru yöntemi',
          paragraphs: [
            `Haklarınızı kullanmak için ${contact.email} adresine e-posta gönderebilir veya yukarıdaki posta adresine yazılı başvuru yapabilirsiniz.`,
            'Başvurunuzda kimliğinizi tespit etmemize yetecek bilgileri ve talebinizi açıkça belirtmenizi rica ederiz. Talepler en geç 30 gün içinde ücretsiz olarak sonuçlandırılır; işlemin ayrıca bir maliyet gerektirmesi hâlinde Kurul tarifesindeki ücret talep edilebilir.',
          ],
        },
        {
          heading: 'Güncellemeler',
          paragraphs: [
            'Bu metin, mevzuat değişiklikleri veya süreçlerimizdeki güncellemeler nedeniyle revize edilebilir. Yürürlük tarihi sayfanın başında belirtilir.',
          ],
        },
      ],
    },
  },
};

export default tr;
