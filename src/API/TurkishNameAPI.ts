const TurkishNameAPI = [
    { id: 1, turkishName: "Fatiha Sûresi" },
    { id: 2, turkishName: "Bakara Sûresi" },
    { id: 3, turkishName: "Âl-i İmrân Sûresi" },
    { id: 4, turkishName: "Nisa Sûresi" },
    { id: 5, turkishName: "Mâide Sûresi" },
    { id: 6, turkishName: "En'âm Sûresi" },
    { id: 7, turkishName: "A'râf Sûresi" },
    { id: 8, turkishName: "Enfâl Sûresi" },
    { id: 9, turkishName: "Tevbe Sûresi" },
    { id: 10, turkishName: "Yûnus Sûresi" },
    { id: 11, turkishName: "Hûd Sûresi" },
    { id: 12, turkishName: "Yusuf Sûresi" },
    { id: 13, turkishName: "İbrâhîm Sûresi" },
    { id: 14, turkishName: "Hicr Sûresi" },
    { id: 15, turkishName: "Nahl Sûresi" },
    { id: 16, turkishName: "İsrâ Sûresi" },
    { id: 17, turkishName: "Kehf Sûresi" },
    { id: 18, turkishName: "Meryem Sûresi" },
    { id: 19, turkishName: "Tâhâ Sûresi" },
    { id: 20, turkishName: "Enbiya Sûresi" },
    { id: 21, turkishName: "Hac Sûresi" },
    { id: 22, turkishName: "Mü'minûn Sûresi" },
    { id: 23, turkishName: "Furkan Sûresi" },
    { id: 24, turkishName: "Nûr Sûresi" },
    { id: 25, turkishName: "Furkan Sûresi" },
    { id: 26, turkishName: "Şuarâ Sûresi" },
    { id: 27, turkishName: "Neml Sûresi" },
    { id: 28, turkishName: "Kasas Sûresi" },
    { id: 29, turkishName: "Ankebût Sûresi" },
    { id: 30, turkishName: "Rum Sûresi" },
    { id: 31, turkishName: "Lokman Sûresi" },
    { id: 32, turkishName: "Secde Sûresi" },
    { id: 33, turkishName: "Ahzâb Sûresi" },
    { id: 34, turkishName: "Sebe Sûresi" },
    { id: 35, turkishName: "Fâtır Sûresi" },
    { id: 36, turkishName: "Yâsin Sûresi" },
    { id: 37, turkishName: "Saffât Sûresi" },
    { id: 38, turkishName: "Sad Sûresi" },
    { id: 39, turkishName: "Zümer Sûresi" },
    { id: 40, turkishName: "Fussilet Sûresi" },
    { id: 41, turkishName: "Câsiyye Sûresi" },
    { id: 42, turkishName: "Ahkâf Sûresi" },
    { id: 43, turkishName: "Muhammed Sûresi" },
    { id: 44, turkishName: "Fetih Sûresi" },
    { id: 45, turkishName: "Hucurât Sûresi" },
    { id: 46, turkishName: "Kâf Sûresi" },
    { id: 47, turkishName: "Zariyat Sûresi" },
    { id: 48, turkishName: "Cemaat Sûresi" },
    { id: 49, turkishName: "Mücâdele Sûresi" },
    { id: 50, turkishName: "Kaf Sûresi" },
    { id: 51, turkishName: "Zâriyât Sûresi" },
    { id: 52, turkishName: "Tûr Sûresi" },
    { id: 53, turkishName: "Necm Sûresi" },
    { id: 54, turkishName: "Kamer Sûresi" },
    { id: 55, turkishName: "Rahmân Sûresi" },
    { id: 56, turkishName: "Vâkıa Sûresi" },
    { id: 57, turkishName: "Hadîd Sûresi" },
    { id: 58, turkishName: "Mücâdele Sûresi" },
    { id: 59, turkishName: "Haşr Sûresi" },
    { id: 60, turkishName: "Mümtehine Sûresi" },
    { id: 61, turkishName: "Saff Sûresi" },
    { id: 62, turkishName: "Cuma Sûresi" },
    { id: 63, turkishName: "Münâfikûn Sûresi" },
    { id: 64, turkishName: "Teğâbun Sûresi" },
    { id: 65, turkishName: "Talâk Sûresi" },
    { id: 66, turkishName: "Tahrim Sûresi" },
    { id: 67, turkishName: "Mûlk Sûresi" },
    { id: 68, turkishName: "Kalem Sûresi" },
    { id: 69, turkishName: "Hakka Sûresi" },
    { id: 70, turkishName: "Me'aric Sûresi" },
    { id: 71, turkishName: "Nuh Sûresi" },
    { id: 72, turkishName: "Cinn Sûresi" },
    { id: 73, turkishName: "Müzzemmil Sûresi" },
    { id: 74, turkishName: "Müdessir Sûresi" },
    { id: 75, turkishName: "Kıyâme Sûresi" },
    { id: 76, turkishName: "İnsan Sûresi" },
    { id: 77, turkishName: "Murselât Sûresi" },
    { id: 78, turkishName: "Naba Sûresi" },
    { id: 79, turkishName: "Nâzi'at Sûresi" },
    { id: 80, turkishName: "Abese Sûresi" },
    { id: 81, turkishName: "Tekvir Sûresi" },
    { id: 82, turkishName: "İnfitar Sûresi" },
    { id: 83, turkishName: "Mutaffifin Sûresi" },
    { id: 84, turkishName: "İnşikâk Sûresi" },
    { id: 85, turkishName: "Burûc Sûresi" },
    { id: 86, turkishName: "Târik Sûresi" },
    { id: 87, turkishName: "A'lâ Sûresi" },
    { id: 88, turkishName: "Gâşiye Sûresi" },
    { id: 89, turkishName: "Fecr Sûresi" },
    { id: 90, turkishName: "Bünyan Sûresi" },
    { id: 91, turkishName: "Şems Sûresi" },
    { id: 92, turkishName: "Leyl Sûresi" },
    { id: 93, turkishName: "Duhâ Sûresi" },
    { id: 94, turkishName: "İnşirah Sûresi" },
    { id: 95, turkishName: "Tîn Sûresi" },
    { id: 96, turkishName: "Alâk Sûresi" },
    { id: 97, turkishName: "Kadir Sûresi" },
    { id: 98, turkishName: "Bekara Sûresi" },
    { id: 99, turkishName: "Zilzal Sûresi" },
    { id: 100, turkishName: "Adiyat Sûresi" },
    { id: 101, turkishName: "Kâria Sûresi" },
    { id: 102, turkishName: "Tekasür Sûresi" },
    { id: 103, turkishName: "Asr Sûresi" },
    { id: 104, turkishName: "Humaze Sûresi" },
    { id: 105, turkishName: "Fîl Sûresi" },
    { id: 106, turkishName: "Kureyş Sûresi" },
    { id: 107, turkishName: "Ma'un Sûresi" },
    { id: 108, turkishName: "Kevser Sûresi" },
    { id: 109, turkishName: "Kâfirûn Sûresi" },
    { id: 110, turkishName: "Nasr Sûresi" },
    { id: 111, turkishName: "Müvekkiât Sûresi" },
    { id: 112, turkishName: "İhlâs Sûresi" },
    { id: 113, turkishName: "Felâk Sûresi" },
    { id: 114, turkishName: "Nâs Sûresi" }
  ];
  
  export default TurkishNameAPI;
  