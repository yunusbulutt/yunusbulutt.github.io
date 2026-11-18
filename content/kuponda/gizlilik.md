---
title: Gizlilik Politikası
params:
  htmlLang: tr
eyebrow: Kuponda
description: "Son güncelleme: 18 Kasım 2026"
footerLinks:
  - name: Kuponda Destek
    url: /kuponda/
  - name: Yunus Bulut
    url: /
---

Bu politika, Yunus Bulut tarafından geliştirilen Kuponda iOS ve Android uygulamalarının ("uygulama") hangi bilgileri nasıl işlediğini açıklar. Kısaca: Kuponda'nın bir sunucusu yoktur, hesap açmanı istemez ve kupon bilgilerin geliştiriciye hiçbir zaman ulaşmaz. İki platform arasındaki farklar ilgili bölümlerde belirtilmiştir.

## Cihazında saklanan bilgiler

Uygulamaya girdiğin aşağıdaki bilgiler **yalnızca telefonunda** saklanır ve geliştiriciye hiçbir zaman gönderilmez:

- Kupon firması, kupon kodu, PIN, kupon tutarı ve son kullanma tarihi
- Kalan bakiye, harcamalar ve bakiye geçmişi
- Uygulama ayarların (tema, sıralama, kilit tercihi)

**iOS:** Kupon veritabanı iOS dosya korumasıyla şifrelenir. Bu bilgiler, iPhone'unun iCloud ya da bilgisayar yedeğini açtıysan iOS tarafından o yedeğe dahil edilebilir; yedekler Apple'ın ve senin kontrolündedir, geliştirici bunlara erişemez.

**Android:** Kupon veritabanı uygulamanın kendi korumalı alanında, Android'in cihaz şifrelemesiyle saklanır. Kupon bilgileri Google bulut yedeğine dahil edilmez; yalnızca yeni bir telefona doğrudan aktarım yaptığında kuponların taşınır (A101 oturumu taşınmaz).

## Otomatik bakiye (A101)

Bu özellik isteğe bağlıdır ve yalnızca sen bağlanmayı seçersen çalışır. Bağlandığında uygulama, araya başka bir sunucu koymadan doğrudan A101 ile iletişim kurar:

- **Telefon numaran**, SMS doğrulama kodu gönderilmesi için A101'e iletilir. Uygulama numaranı saklamaz.
- **SMS doğrulama kodu**, oturum açmak için A101'e iletilir.
- A101'in verdiği **oturum anahtarları**, iOS'ta Keychain'de, Android'de Android Keystore anahtarıyla şifrelenmiş olarak, yalnızca bu cihaza bağlı saklanır.
- Bakiye sorgusu için **A101 kuponlarının kodu ve PIN'i** A101'e gönderilir. PIN, A101'in kendi sitesinde olduğu gibi şifrelenmiş (karma) olarak iletilir.

A101'e iletilen bilgiler A101'in kendi gizlilik politikasına tabidir. Ayarlar'dan "Bağlantıyı Kes" dediğinde cihazdaki oturum anahtarları silinir. Bunun dışında uygulama kupon bilgilerini başka hiçbir firmaya ya da sunucuya göndermez.

## Ekran görüntüleri, fişler ve kamera

Kupon eklemek için seçtiğin ekran görüntüleri ve harcama için çektiğin ya da seçtiğin fiş fotoğrafları **cihazında** okunur: iOS'ta Apple'ın Vision özelliğiyle, Android'de Google ML Kit metin tanıma ile. Metin tanıma modeli uygulamanın içinde gelir, görsel okumak için internete ihtiyaç duymaz. Görseller hiçbir yere gönderilmez ve uygulama içinde saklanmaz; yalnızca okunan metin ilgili alanlara doldurulur. Uygulama fotoğraf arşivinin tamamına erişmez, yalnızca senin seçtiğin görseli görür.

## Face ID / Touch ID / parmak izi

Kilit açıkken kimlik doğrulama tamamen işletim sistemi (iOS ya da Android) tarafından yapılır. Uygulama yüz ya da parmak izi verilerine erişmez, yalnızca doğrulamanın başarılı olup olmadığını öğrenir.

## Android: Google ML Kit tanılama verileri

Android uygulamasında metin tanıma için kullanılan Google ML Kit kütüphanesi, özelliğin çalışmasını izlemek ve iyileştirmek amacıyla Google'a anonim tanılama verileri gönderir: cihaz modeli ve Android sürümü, uygulamanın paket adı ve sürümü, kurulum başına rastgele bir kimlik ve performans/hata ölçümleri. Bu veriler HTTPS ile şifreli gönderilir; kupon bilgilerini, okunan metni ya da görselleri içermez ve seni tanımlamak için kullanılmaz. Ayrıntılar: [ML Kit veri açıklaması](https://developers.google.com/ml-kit/android-data-disclosure). iOS uygulamasında böyle bir veri gönderimi yoktur.

## Toplanmayan bilgiler

Yukarıdaki ML Kit tanılama verileri dışında Kuponda analitik, reklam, çökme raporu ya da izleme aracı içermez. Kimliğini, konumunu, kişilerini ya da kullanım alışkanlıklarını toplamaz; uygulamalar ve web siteleri arasında seni izlemez ve hiçbir bilgiyi üçüncü taraflarla paylaşmaz ya da satmaz.

## Verilerini silme

Kuponları uygulama içinden tek tek silebilirsin. Uygulamayı telefonundan sildiğinde tüm kupon bilgileri cihazdan silinir. Geliştiricide senin hakkında saklanan bir veri bulunmadığından silinmesi gereken başka bir kayıt yoktur.

## Çocuklar

Uygulama çocuklara yönelik değildir ve çocuklardan bilerek bilgi toplamaz.

## Değişiklikler

Bu politika değişirse güncel hâli bu sayfada, yeni tarihle yayınlanır.

## İletişim

Sorularını [yunusbulut.tr@gmail.com](mailto:yunusbulut.tr@gmail.com) adresine iletebilirsin.

---

## English summary

This policy covers the iOS and Android apps. Kuponda has no servers, requires no account and never sends your coupon data to the developer. Coupon codes, PINs, balances and spending history are stored only on your device. If you choose to connect the optional A101 automatic balance feature, your phone number and the SMS code are sent directly to A101 to sign in, session tokens are stored encrypted on the device (iOS Keychain / Android Keystore), and the code and PIN of your A101 coupons are sent directly to A101 to check their balance; the app does not store your phone number. Screenshots and receipt photos are processed on the device and never uploaded. On Android, the on-device text recognition library (Google ML Kit) sends anonymous diagnostics to Google (device model, OS and app version, a per-installation ID, performance and error metrics); it does not include coupon data, recognized text or images. Apart from that, the app contains no analytics, advertising or tracking. Contact: [yunusbulut.tr@gmail.com](mailto:yunusbulut.tr@gmail.com).
