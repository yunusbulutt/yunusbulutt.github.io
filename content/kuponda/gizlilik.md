---
title: Gizlilik Politikası
params:
  htmlLang: tr
eyebrow: Kuponda
description: "Son güncelleme: 5 Kasım 2026"
footerLinks:
  - name: Kuponda Destek
    url: /kuponda/
  - name: Yunus Bulut
    url: /
---

Bu politika, Yunus Bulut tarafından geliştirilen Kuponda iOS uygulamasının ("uygulama") hangi bilgileri nasıl işlediğini açıklar. Kısaca: Kuponda'nın bir sunucusu yoktur, hesap açmanı istemez ve senin hakkında hiçbir veri toplamaz.

## Cihazında saklanan bilgiler

Uygulamaya girdiğin aşağıdaki bilgiler **yalnızca iPhone'unda** saklanır ve geliştiriciye hiçbir zaman gönderilmez:

- Kupon firması, kupon kodu, PIN, kupon tutarı ve son kullanma tarihi
- Kalan bakiye, harcamalar ve bakiye geçmişi
- Uygulama ayarların (tema, sıralama, kilit tercihi)

Kupon veritabanı iOS dosya korumasıyla şifrelenir. Bu bilgiler, iPhone'unun iCloud ya da bilgisayar yedeğini açtıysan iOS tarafından o yedeğe dahil edilebilir; yedekler Apple'ın ve senin kontrolündedir, geliştirici bunlara erişemez.

## Otomatik bakiye (A101)

Bu özellik isteğe bağlıdır ve yalnızca sen bağlanmayı seçersen çalışır. Bağlandığında uygulama, araya başka bir sunucu koymadan doğrudan A101 ile iletişim kurar:

- **Telefon numaran**, SMS doğrulama kodu gönderilmesi için A101'e iletilir. Uygulama numaranı saklamaz.
- **SMS doğrulama kodu**, oturum açmak için A101'e iletilir.
- A101'in verdiği **oturum anahtarları**, cihazının Keychain'inde yalnızca bu cihaza bağlı olarak şifreli saklanır.
- Bakiye sorgusu için **A101 kuponlarının kodu ve PIN'i** A101'e gönderilir. PIN, A101'in kendi sitesinde olduğu gibi şifrelenmiş (karma) olarak iletilir.

A101'e iletilen bilgiler A101'in kendi gizlilik politikasına tabidir. Ayarlar'dan "Bağlantıyı Kes" dediğinde cihazdaki oturum anahtarları silinir. Bunun dışında uygulama başka hiçbir firmaya ya da sunucuya bağlanmaz.

## Ekran görüntüleri, fişler ve kamera

Kupon eklemek için seçtiğin ekran görüntüleri ve harcama için çektiğin ya da seçtiğin fiş fotoğrafları, Apple'ın Vision özelliğiyle **cihazında** okunur. Görseller hiçbir yere gönderilmez ve uygulama içinde saklanmaz; yalnızca okunan metin ilgili alanlara doldurulur. Uygulama fotoğraf arşivinin tamamına erişmez, yalnızca senin seçtiğin görseli görür.

## Face ID / Touch ID

Kilit açıkken kimlik doğrulama tamamen iOS tarafından yapılır. Uygulama yüz ya da parmak izi verilerine erişmez, yalnızca doğrulamanın başarılı olup olmadığını öğrenir.

## Toplanmayan bilgiler

Kuponda analitik, reklam, çökme raporu ya da izleme aracı içermez. Kimliğini, konumunu, kişilerini ya da kullanım alışkanlıklarını toplamaz; uygulamalar ve web siteleri arasında seni izlemez ve hiçbir bilgiyi üçüncü taraflarla paylaşmaz ya da satmaz.

## Verilerini silme

Kuponları uygulama içinden tek tek silebilirsin. Uygulamayı iPhone'undan sildiğinde tüm kupon bilgileri cihazdan silinir. Geliştiricide senin hakkında saklanan bir veri bulunmadığından silinmesi gereken başka bir kayıt yoktur.

## Çocuklar

Uygulama çocuklara yönelik değildir ve çocuklardan bilerek bilgi toplamaz.

## Değişiklikler

Bu politika değişirse güncel hâli bu sayfada, yeni tarihle yayınlanır.

## İletişim

Sorularını [yunusbulut.tr@gmail.com](mailto:yunusbulut.tr@gmail.com) adresine iletebilirsin.

---

## English summary

Kuponda has no servers, requires no account and collects no personal data. Coupon codes, PINs, balances and spending history are stored only on your device. If you choose to connect the optional A101 automatic balance feature, your phone number and the SMS code are sent directly to A101 to sign in, session tokens are stored in the device Keychain, and the code and PIN of your A101 coupons are sent directly to A101 to check their balance; the app does not store your phone number. Screenshots and receipt photos are processed on the device and never uploaded. The app contains no analytics, advertising or tracking. Contact: [yunusbulut.tr@gmail.com](mailto:yunusbulut.tr@gmail.com).
