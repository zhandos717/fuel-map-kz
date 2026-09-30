// Вердикт по сети. Ключ — точное имя бренда как в stations.js:
// подстрока здесь не годится, «У ойл» и «Ойл» — разные сети с разной репутацией.
window.VERDICT = {
  "Ойл": ["warn", {
    ru: "Самый частый совет; автор большого треда: «жалоб на зелёный Ойл ещё не видел». Есть одна: «движок троить начал». 27 августа: «зелёный Ойл на Тәуелсіздік, залила полный бак 95 евро — полёт нормальный». 28 августа: «сегодня привезли новый бензин, заправился 95 — нормально; сами говорят, что проблем у них не было». Но 30 августа с той же Тәуелсіздік: «залилась вчера — сегодня загорелся ЧЕК». Хвалят чаще всех, и всё же жалобы пошли",
    kk: "Ең жиі айтылатын кеңес; үлкен тред авторы: «жасыл Ойлға шағым әлі көрген жоқпын». Біреуі бар: «қозғалтқыш іркілдеп кетті». 27 тамыз: «Тәуелсіздіктегі жасыл Ойлға толық бак 95 евро құйдым — бәрі жақсы». 28 тамыз: «бүгін жаңа бензин әкелді, 95 құйдым — жақсы; өздері бізде мәселе болған жоқ дейді». Бірақ 30 тамызда сол Тәуелсіздіктен: «кеше құйдым — бүгін ЧЕК жанып тұр». Ең жиі мақталады, дегенмен шағым да түсе бастады",
    en: "The most common recommendation; the author of the big thread: “haven't seen a single complaint about green Oil yet”. One exists: “the engine started misfiring”. 27 August: “green Oil on Tauelsizdik, filled the tank with 95 Euro — all fine”. 28 August: “they got a new delivery today, filled up with the 95 — fine; they say themselves they've had no problems”. But on 30 August, from that same Tauelsizdik site: “filled up yesterday — the check engine light came on today”. It draws the most praise, and complaints have started anyway"
  }],
  "Аскар": ["ok", {
    ru: "Топ-1 в личных рейтингах, «меньше всего упоминаний в жалобах». Но пара человек внесли его в свой чёрный список. В свежих тредах его называют чаще всех: «вчера заправилась 98, всё ок», а 31 августа — «Аскар топ-1» в личном списке самых безопасных по 95 и 98. Ни одной жалобы за август и начало сентября",
    kk: "Жеке рейтингтерде бірінші орында, «шағымдарда ең аз аталады». Дегенмен бірер адам оны қара тізімге қосқан. Жаңа тредтерде оны ең жиі атайды: «кеше 98 құйдым, бәрі жақсы», ал 31 тамызда — 95 бен 98 бойынша ең қауіпсіздер тізімінде «Асқар топ-1». Тамыз бен қыркүйектің басында бірде-бір шағым жоқ",
    en: "Number one in people's personal rankings, “mentioned least often in complaints”. Still, a couple of drivers put it on their blacklist. In the recent threads it is named more often than any other: “filled up with the 98 yesterday, all fine”, and on 31 August it tops one driver's personal list of the safest for 95 and 98. Not a single complaint through August and early September"
  }],
  "Аурика": ["warn", {
    ru: "«Залила бензин — чек, машина не заводится» (165 отметок). Раньше жалоб не было; в свежем треде 95-й здесь всё же советуют",
    kk: "«Бензин құйдым — чек жанды, көлік от алмайды» (165 белгі). Бұрын шағым болмаған; жаңа тредте мұндағы 95-ті бәрібір ұсынады",
    en: "“Filled up and got a check engine light, the car won't start” (165 likes). There were no complaints before; a fresh thread still recommends the 95 here"
  }],
  "Compass": {
    "Астана": ["ok", {
      ru: "Хвалят 95 и 98, новых жалоб нет. 92-й на Кошыгулулы советуют и в свежем треде",
      kk: "95 бен 98-ді мақтайды, жаңа шағым жоқ. Қошығұлұлыдағы 92-ні жаңа тредте де ұсынады",
      en: "People praise the 95 and 98, no new complaints. A fresh thread also recommends the 92 on Koshygululy"
    }],
    "Алматы": ["bad", {
      ru: "«Ужасное топливо»: пропуски на 80–100 км/ч, дизель тоже ругают. «Компас — это вообще ужас, даже 98 побоялся бы там заправлять». Но есть и те, кто спокойно на нём ездит",
      kk: "«Отыны сұмдық»: 80–100 км/сағ жылдамдықта іркіліс, дизелін де сөгеді. «Компас деген сұмдық, тіпті 98-ін құюға қорқам». Дегенмен оған тыныш құйып жүргендер де бар",
      en: "“Terrible fuel”: misfires at 80–100 km/h, the diesel gets criticised too. “Compass is an absolute disaster, I'd be scared to put even their 98 in”. Others fill up there without trouble"
    }]
  },
  "Sinooil": {
    "Астана": ["warn", {
      ru: "Советуют Астраханскую трассу и Күйші Дина, но по сети пошли жалобы. 28 августа сеть снова рекомендуют, причём именно 92: «вроде норм ездил»",
      kk: "Астрахан тасжолы мен Күйші Дина бойындағыларды ұсынады, бірақ желі бойынша шағым көбейді. 28 тамызда желіні қайта ұсынып жатыр, әсіресе 92-ні: «вроде норм жүрдім»",
      en: "People recommend the Astrakhan highway and Küishi Dina locations, but complaints about the chain have started. On 28 August it is being recommended again, specifically the 92: “seemed to run fine”"
    }],
    "Алматы": ["warn", {
      ru: "Долго был лучшим советом: «фильтры меняют вовремя». Теперь 98 на Аль-Фараби/Розыбакиева — чек. Зато 26 августа про Абая/Манаса: «заправляюсь обычно там, проблем не было», и следом чужое «синоил супер»",
      kk: "Ұзақ уақыт ең жақсы кеңес болды: «сүзгілерін уақтылы ауыстырады». Енді Әл-Фараби/Розыбакиевтегі 98 — чек. Ал 26 тамызда Абай/Манас туралы: «әдетте сонда құямын, мәселе болған жоқ», артынша бөтен біреу «синоил супер» дейді",
      en: "Long the top recommendation: “they change the filters on time”. Now the 98 at Al-Farabi/Rozybakiev triggers a check engine light. On the other hand, of Abai/Manas on 26 August: “I usually fill up there, never had trouble”, followed by someone else's “Sinooil is great”"
    }]
  },
  "Helios": {
    "Астана": ["bad", {
      ru: "Сеть автосервисов: в тройке главных жалоб. Чек даже после 92. При этом защитников много: «советую лишь Гелиос или Компасс», «владельцы S63 советуют Helios и Аскар», «обычно заправлял в Газпром и Гелиос — проблем не было»",
      kk: "Автосервистер желісінің дерегі: негізгі шағымдардың үштігінде. 92-ден кейін де чек жанады. Дегенмен қорғаушылары да көп: «тек Гелиос пен Компасты ұсынамын», «S63 иелері Helios пен Асқарды кеңес етеді», «әдетте Газпром мен Гелиосқа құятынмын, мәселе болған емес»",
      en: "According to a repair shop chain: among the top three sources of complaints. Check engine light even after 92. Yet it has plenty of defenders: “I only recommend Helios or Compass”, “S63 owners recommend Helios and Askar”, “I normally fill up at Gazprom and Helios and never had trouble”"
    }],
    "Алматы": ["bad", {
      ru: "Разделяйте марки: 95 Prime многие хвалят, есть и прямая рекомендация «только Гелиос или Компасс». Жалобы идут на 98-й: «попался на Гелиос 98», «после АЗС Гелиос машина сейчас в сервисе». На Аскарова 2/1 отдельно жалуются на тяжёлый пуск. Присадки сети сейчас проверяет Минторг. Свежее (27–28 августа): «Гелиос по Тимирязева, 95 Prime — полёт нормальный», «95 обычный, не прайм — тоже нормально». Ещё одна история — недолив: оплачено 20 л, бак остался пустым (это касса, а не топливо)",
      kk: "Маркаларды ажыратыңыз: 95 Prime-ды көбі мақтайды, «тек Гелиос не Компасс» деген тікелей ұсыныс та бар. Шағым 98-ге түсіп жатыр: «Гелиос 98-ге тап болдым», «Гелиос АЗС-нен кейін көлік қазір сервисте». Асқаров 2/1-де от алудың қиындығына бөлек шағымданады. Желінің присадкаларын қазір Саудамині тексеруде. Жаңасы (27–28 тамыз): «Тимирязевтегі Гелиос, 95 Prime — бәрі жақсы», «кәдімгі 95, прайм емес — ол да жақсы». Тағы бір оқиға — кем құю: 20 л төленген, багы бос қалған (бұл касса, отын емес)",
      en: "Separate the grades: many praise the 95 Prime, and one driver recommends “only Helios or Compass”. The complaints are about the 98: “I got caught out by the Helios 98”, “after a Helios station my car is now in the shop”. The site at Askarov 2/1 draws separate complaints about hard starting. The chain's additives are currently being tested by the Ministry of Trade. Fresh (27–28 August): “Helios on Timiryazev, 95 Prime — all fine”, “the plain 95, not the Prime — also fine”. One more story is a short pour: 20 litres paid for, the tank stayed empty (that's the till, not the fuel)"
    }]
  },
  "Qazaq Oil": {
    "Астана": ["bad", {
      ru: "Сеть автосервисов: в тройке главных жалоб. Свечи после 98, недолив, ремонт 100 000 ₸",
      kk: "Автосервистер желісінің дерегі: негізгі шағымдардың үштігінде. 98-ден кейін шамдар, кем құю, жөндеу 100 000 ₸",
      en: "According to a repair shop chain: among the top three sources of complaints. Spark plugs after the 98, short pours, a 100,000 ₸ repair"
    }],
    "Алматы": ["bad", {
      ru: "Частая претензия — «обманывают»; замена свечей после 98",
      kk: "Жиі айтылатын кінә — «алдайды»; 98-ден кейін шам ауыстыру",
      en: "The recurring complaint is “they cheat you”; spark plug replacement after the 98"
    }]
  },
  "GasEnergy": {
    "Астана": ["bad", {
      ru: "Жалобы по сети, и не только в городе: на выезде из Караганды после 98-го «утром машина просто не завелась, забиты форсунки». На Айтматова 50 залили солярку вместо АИ-95 — 180 комментариев. Отдельно ругают точку у Family Town. Но на Кабанбай батыра 27 августа: «заправился, всё отлично»",
      kk: "Желі бойынша шағым бар, тек қалада емес: Қарағандыдан шыға берісте 98-ден кейін «таңертең көлік мүлде от алмады, форсункалар бітелген». Айтматов 50-де АИ-95-тің орнына дизель құйып жіберген — 180 пікір. Family Town жанындағы нүктені бөлек сөгеді. Бірақ Қабанбай батырда 27 тамызда: «құйдым, бәрі жақсы»",
      en: "Complaints across the chain, and not only in the city: leaving Karaganda, after the 98, “the car simply wouldn't start in the morning — clogged injectors”. At Aitmatov 50 they pumped diesel instead of AI-95 — 180 comments. The site near Family Town draws separate criticism. But on Kabanbay Batyr, 27 August: “filled up, all fine”"
    }],
    "Алматы": ["bad", {
      ru: "После 98 — свечи, форсунки, промывка топливной системы",
      kk: "98-ден кейін — шамдар, форсункалар, отын жүйесін жуу",
      en: "After the 98: spark plugs, injectors, a full fuel system flush"
    }]
  },
  "Газпромнефть": {
    "Астана": ["bad", {
      ru: "На Богенбай батыра 24: забились форсунки, сгорели свечи. Ремонт 330 000 ₸. При этом на Богенбая/Сарыарка 27 августа: «заправилась 95-м, всё норм». И ещё 31 августа: «Газпромнефть на Богенбая, 95 — всё ок». Смотрите на конкретную точку",
      kk: "Бөгенбай батыр 24-те: форсункалар бітеліп, шамдар күйіп кеткен. Жөндеу 330 000 ₸. Ал Бөгенбай/Сарыарқада 27 тамызда: «95 құйдым, бәрі жақсы». Әрі 31 тамызда: «Бөгенбайдағы Газпромнефть, 95 — бәрі жақсы». Нақты нүктеге қараңыз",
      en: "At Bogenbay Batyr 24: clogged injectors, burnt spark plugs. Repair cost 330,000 ₸. Yet at Bogenbay/Saryarka on 27 August: “filled up with the 95, all fine”. And on 31 August: “Gazpromneft on Bogenbay, the 95 — all fine”. Judge the individual site"
    }],
    "Алматы": ["none", {
      ru: "По Алматы отзывов в треде не нашёл",
      kk: "Алматы бойынша тредтен пікір таппадым",
      en: "I found no Almaty reviews in the threads"
    }]
  },
  "NomadOil": ["warn", {
    ru: "Сеть автосервисов: в тройке главных жалоб, и есть случай с Кобальтом на 92-м. Но 27 августа 95 Flame советуют сразу несколько человек: «95 Flame на Күйші Дина, залил 30 л — еду, вроде всё ок». Но точка на Керей, которую в августе ставили в пример, в сентябре дала тяжёлый случай. Но 28 августа на совет «Номад 92» отвечают: «наоборот, не надо его заливать, после него у многих проблемы». А по точке на Туран пришла жалоба на 400 000 ₸. Мнения разошлись",
    kk: "Автосервистер желісінің дерегі: негізгі шағымдардың үштігінде, 92-ден кейін Кобальтпен болған оқиға бар. Бірақ 27 тамызда 95 Flame-ді бірнеше адам ұсынады: «Күйші Динадағы 95 Flame, 30 л құйдым — жүріп жүрмін, бәрі жақсы». Бірақ тамызда үлгі ретінде аталған Керейдегі нүкте қыркүйекте ауыр жағдай берді. Бірақ 28 тамызда «Номад 92» деген кеңеске: «керісінше, оны құюдың қажеті жоқ, одан кейін көпшілікте мәселе болды» деп жауап беріп жатыр. Ал Тұран бойындағы нүктеге 400 000 ₸-лік шағым түсті. Пікір екіге жарылған",
    en: "According to a repair shop chain: among the top three sources of complaints, and there is a case involving a Cobalt on the 92. But on 27 August several people recommend the 95 Flame: “the 95 Flame on Kuishi Dina, put in 30 litres — driving, seems fine”. But the Kerey site, held up as an example in August, produced a serious case in September. But on 28 August, a recommendation of “Nomad 92” drew the reply: “on the contrary, don't put it in, a lot of people had trouble after it”. And the site on Turan drew a 400,000 ₸ complaint. Opinions are split"
  }],
  "LUKOIL": {
    "Алматы": ["bad", {
    ru: "Жалобы на качество и на обвес по литрам",
    kk: "Сапасына және литрін кем құюына шағымданады",
    en: "Complaints about quality and about being short-changed on litres"
  }],
    "Астана": ["none", {
      ru: "По астанинским точкам отзывов в тредах нет",
      kk: "Астанадағы нүктелер бойынша тредте пікір жоқ",
      en: "No thread reviews for the Astana sites"
    }]
  },
  "EliteFuel": ["warn", {
    ru: "В тредах её называют ELF. Самая поляризованная сеть Алматы. «Лучший бензин в городе», «92 там как наш 95, Euro 5» — против «машина встала» и чистки форсунок за 110 000 ₸. На Шашкина после полного бака «движок колбасило, машина скакала как конь». Ещё один: «попался на Гелиос 98, поехал по отзывам на Elf за хорошим 98-м — стало только хуже, да ещё и чек прилетел». Жалобы стягиваются к одной точке — Шашкина; 92-й пока никто не ругает",
    kk: "Тредтерде оны ELF дейді. Алматыдағы ең қарама-қайшы желі. «Қаладағы ең жақсы бензин», «92-сі біздің 95 сияқты, Euro 5» — дегенге қарсы «көлік тұрып қалды» және 110 000 ₸-ге форсунка тазалау. Шашкинадағыдан толық бак құйған соң «қозғалтқыш дірілдеп, көлік атша ыршыды». Тағы бірі: «Гелиос 98-ден кейін пікірге сеніп Elf-ке бардым — одан сайын нашарлады, чек те жанды». Шағымның бәрі бір нүктеге — Шашкинаға жиналған; 92-сін әзірге ешкім сөккен жоқ",
    en: "The threads call it ELF. The most polarising chain in Almaty. “Best petrol in town”, “their 92 is like our 95, Euro 5” — against “the car died” and a 110,000 ₸ injector clean. After a full tank at the Shashkin station: “the engine was shaking, the car bucked like a horse”. Another: “got burned by Helios 98, went to Elf for the ‘good’ 98 on people's advice — it only got worse, and the check engine light came on”. The complaints converge on one site — Shashkin street; nobody criticises the 92 so far"
  }],
  "Royal Petrol": ["bad", {
    ru: "Жалобы пошли валом. Mercedes 2023 после 95: форсунки, одна вообще не работала, топливный насос — ремонт на миллион ₸. Дилер Toyota велел сменить заправку: забились форсунки и дроссель. В дизеле нашли воду, «1,5–2 литра на 50 литров» — сеть назвала это конденсатом и разбираться отказалась. Отдельная волна про кассу: «залили воздух» и лишние товары в чеке. 28 августа — ещё один: «на прошлой неделе залили в РП, сейчас меняю форсунки и топливный насос, ущерб — миллион тенге». Есть и обратное: на Достык 27 августа «заправилась 95-м, всё нормально», и водитель специально снял видео до и после заправки там же — «никаких звуков, машина спокойно поднялась до Медеу»",
    kk: "Шағым қаптап кетті. 2023 жылғы Mercedes 95-тен кейін: форсункалар, біреуі мүлде істемеген, отын сорғысы — жөндеу миллион ₸. Toyota дилері бекет ауыстыруды айтқан: форсунка мен дроссель бітелген. Дизелінен су табылған, «50 литрге 1,5–2 литр» — желі оны конденсат деп, қараудан бас тартқан. Кассаға қатысты бөлек толқын: «ауа құйып жіберген» және чекте артық тауар. 28 тамызда тағы біреу: «өткен аптада РП-ға құйдым, қазір форсунка мен отын сорғысын ауыстырып жатырмын, зиян — миллион теңге». Кері жағдай да бар: Достықта 27 тамызда «95 құйдым, бәрі жақсы», әрі жүргізуші сол жерде құяр алдында және кейін видео түсірген — «еш дыбыс жоқ, көлік Медеуге тыныш көтерілді»",
    en: "Complaints have piled up. A 2023 Mercedes after the 95: injectors, one dead entirely, fuel pump — a million-tenge repair. A Toyota dealer told the owner to change stations: clogged injectors and throttle body. Water was found in the diesel, “1.5–2 litres per 50” — the chain called it condensation and refused to look into it. A separate wave concerns the till: “they pumped air” and extra items on the receipt. On 28 August, another: “filled up at RP last week, now I'm replacing injectors and the fuel pump — a million tenge in damage”. There are counter-cases too: on Dostyk, 27 August, “filled up with the 95, all fine”, and one driver filmed before and after filling up at that same site — “no odd noises, the car climbed up to Medeu just fine”"
  }],
  "Сокол": ["warn", {
    ru: "Сеть, которую в свежих алматинских тредах называют без единой жалобы: «Сокол — проблем нет», «заправилась на Соколе, машина ехать нормально начала», «заправляю на Сейфуллина и на капчагайской трассе — пока нормально», «на Райымбека 95, сказали атырауский — заправил и катался норм» (30 августа). Но 31 августа пришла первая жалоба, и сразу тяжёлая: «залил 98 — обратно чек вылез», следом «ехать форсунки чистить». Похоже, к 95-му претензий нет, а 98-й под вопросом",
    kk: "Алматының жаңа тредтерінде бірде-бір шағымсыз аталатын желі: «Сокол — мәселе жоқ», «Соколға құйдым, көлік қалыпты жүре бастады», «Сейфуллин мен Қапшағай трассасындағыға құямын — әзірге жақсы», «Райымбектегіге 95 құйдым, атыраулық деді — жүріп жүрмін» (30 тамыз). Бірақ 31 тамызда алғашқы шағым түсті, әрі ауыр: «98 құйдым — чек жанып кетті», содан соң «форсунка тазалауға бару керек». 95-ке талап жоқ сияқты, ал 98 күмән тудырады",
    en: "A chain named in the fresh Almaty threads without a single complaint: “Sokol — no problems”, “filled up at Sokol and the car started driving normally again”, “I use the ones on Seyfullin and the Kapchagai highway — fine so far”, “the 95 on Raiymbek, they said it's from Atyrau — filled up and drove fine” (30 August). But on 31 August the first complaint arrived, and a serious one: “filled up with the 98 and the check engine light came straight on”, then “off to get the injectors cleaned”. The 95 seems to draw no criticism; the 98 is now in question"
  }],
  "Liqui Moly": ["ok", {
    ru: "Упоминают редко, но только хорошо: «залила 95 по Кульджинке, ехала норм, ничего не троило», «муж перешёл на Liqui Moly, очень хвалит сам бензин». Точки в основном на трассах",
    kk: "Сирек аталады, бірақ тек жақсы жағынан: «Құлжа жолындағыдан 95 құйдым, жақсы жүрдім, еш іркілген жоқ», «күйеуім Liqui Moly-ге көшті, бензинін өте мақтайды». Нүктелері көбіне тас жолда",
    en: "Rarely mentioned, and only well: “filled up with the 95 on the Kuldzha road, drove fine, no misfiring”, “my husband switched to Liqui Moly and really rates the fuel”. Its sites are mostly on highways"
  }],
  "М36": ["warn", {
    ru: "Местная сеть Астаны, 8 точек, рейтинги 2ГИС высокие. 31 августа и 1 сентября хвалят: «М36 отличный бензин», «М36 норм бензин». Но 2 сентября: «заправился в М36 АИ-95, Астана — чек не горит, но машина троит и тяга пропала»",
    kk: "Астананың жергілікті желісі, 8 нүкте, 2ГИС рейтингі жоғары. 31 тамыз бен 1 қыркүйекте мақтайды: «М36 бензині тамаша», «М36 бензині жақсы». Бірақ 2 қыркүйекте: «Астанада М36-ға АИ-95 құйдым — чек жанбайды, бірақ көлік іркілдеп, тартымы жоғалды»",
    en: "A local Astana chain, 8 sites, with high 2GIS ratings. On 31 August and 1 September it draws praise: “M36 has excellent petrol”, “M36 fuel is fine”. But on 2 September: “filled up with AI-95 at M36 in Astana — no check engine light, but the car misfires and has lost power”"
  }],
  "У ойл": ["none", {
    ru: "В треде не упоминали. Рейтинг в 2ГИС низкий — часть точек 1.9–2.5. Не путать с зелёным «Ойл»",
    kk: "Тредте аталмаған. 2ГИС рейтингі төмен — кей нүктелері 1.9–2.5. Жасыл «Ойл»-мен шатастырмаңыз",
    en: "Not mentioned in the threads. Low 2GIS rating — some locations sit at 1.9–2.5. Not to be confused with the green “Oil”"
  }]
};

// Отдельные АЗС, названные в треде поимённо — перебивают вердикт сети.
window.SPOT = {
  "Улица Егинсу, 33/1": ["bad", {
    ru: "Худший рейтинг сети в Алматы — 3.8. В отзывах 2ГИС: «салярка с водой», «дизель 💩», оператор вместо АИ-95 наливает 92",
    kk: "Алматыдағы желінің ең төмен рейтингі — 3.8. 2ГИС пікірлерінде: «дизелінде су бар», «дизелі нашар», оператор АИ-95-тің орнына 92 құяды",
    en: "The chain's worst rating in Almaty — 3.8. From the 2GIS reviews: “diesel with water in it”, “the diesel is rubbish”, the operator pumps 92 instead of AI-95"
  }],
  "Северное Кольцо шоссе, 85": ["warn", {
    ru: "Рейтинг 3.4 — самый низкий среди АЗС Алматы в карте. Жалобы на недолив: «заправил на 5000 ₸, а бензина нет», и на спор при возврате денег",
    kk: "Рейтингі 3.4 — картадағы Алматы бекеттерінің ішіндегі ең төмені. Кем құюға шағым: «5000 ₸-ге құйдым, бензин жоқ», ақша қайтару кезінде дау шыққан",
    en: "Rated 3.4 — the lowest of any Almaty station on the map. Complaints of short pours: “paid 5,000 ₸ and there's no fuel in the tank”, plus a dispute over the refund"
  }],
  "Улица Аскарова, 2/1": ["warn", {
    ru: "Названа поимённо: после заправки «туго заводиться начала и тягу немного потеряла». Через пару дней — то же самое. Но 27–28 августа эту же точку хвалят двое за 95 Prime: «стараюсь только там заправляться, вроде всё хорошо»",
    kk: "Атап айтылған: құйғаннан кейін «қиын от алатын болды, тартымы азайды». Бірер күннен соң — тағы сол. Бірақ 27–28 тамызда осы нүктені екі адам 95 Prime үшін мақтайды: «тек сонда құюға тырысамын, бәрі жақсы сияқты»",
    en: "Named specifically: after filling up “it became hard to start and lost some pulling power”. A couple of days later, the same again. Yet on 27–28 August two drivers praise this very site for its 95 Prime: “I try to fill up only there, seems fine”"
  }],
  "Улица Толе би, 279а": ["bad", {
    ru: "Названа поимённо: «всегда заправлялась на других Royal Petrol без проблем, но именно тут машина начала троить, потом заглохла на мосту и не заводилась, обороты не выше 1000». 272 отметки",
    kk: "Атап айтылған: «басқа Royal Petrol-дерге еш мәселесіз құйып жүрдім, ал дәл мұнда көлік іркілдеп, көпірде сөніп қалды, от алмады, айналымы 1000-нан аспады». 272 белгі",
    en: "Named specifically: “I always filled up at other Royal Petrol stations with no trouble, but at this one the car started misfiring, then stalled on the bridge and wouldn't restart, revs stuck under 1000”. 272 likes"
  }],
  "Улица Чингиза Айтматова, 50": ["bad", {
    ru: "Залили солярку вместо АИ-95 — машины заглохли. 180 комментариев",
    kk: "АИ-95-тің орнына дизель құйған — көліктер сөніп қалған. 180 пікір",
    en: "They pumped diesel instead of AI-95 — cars stalled. 180 comments"
  }],
  "Проспект Богенбай батыра, 24": ["bad", {
    ru: "Форсунки и свечи после 95-го, ремонт 330 000 ₸",
    kk: "95-тен кейін форсунка мен шамдар, жөндеу 330 000 ₸",
    en: "Injectors and spark plugs after the 95, repair cost 330,000 ₸"
  }],
  "Проспект Мангилик Ел, 90а": ["warn", {
    ru: "Отзывы разошлись: «хороший бенз» против «после 92 странно переключает коробку»",
    kk: "Пікір әртүрлі: «бензині жақсы» дегенге қарсы «92-ден кейін қорап оғаш ауысады»",
    en: "Reviews diverge: “good petrol” versus “after the 92 the gearbox shifts strangely”"
  }],
  "Улица Жумабека Ташенова, 24": ["ok", {
    ru: "Названа в треде поимённо: 95 и 98, проблем нет",
    kk: "Тредте атап айтылған: 95 бен 98, мәселе жоқ",
    en: "Named specifically in the thread: 95 and 98, no problems"
  }],
  "Проспект Туран, 59/1": ["bad", {
    ru: "Самая громкая точечная жалоба Астаны: «попал на 400 000 ₸ из-за 95-го, полностью забилась топливная система, машине 40 000 пробега» — Changan, 390 отметок. Бензин слили из бака: «говорят, не должен быть жёлтый». Двигатель перебирали неделю",
    kk: "Астанадағы ең қатты айтылған нақты шағым: «95-тің кесірінен 400 000 ₸-ге түстім, отын жүйесі толық бітеліп қалды, көліктің жүрісі 40 000» — Changan, 390 белгі. Бактан бензинді ағызып алған: «сары болмауы керек дейді». Қозғалтқышты бір апта бойы бөлшектеп жөндеген",
    en: "The loudest site-specific complaint in Astana: “it cost me 400,000 ₸ because of the 95 — the whole fuel system clogged up, on a car with 40,000 km” — a Changan, 390 likes. They drained the tank: “apparently it shouldn't be yellow”. The engine was stripped down over a week"
  }],
  "Улица Керей Жанибек хандар, 12": ["bad", {
    ru: "Точка, которую в августе хвалили, а в сентябре перестали. 2 сентября: «заправляюсь 95-м у них около года, всегда был хороший бензин. Но качество сильно испортилось: всю неделю машина троила, сегодня загорелся чек и просто заглохло». В колл-центре ответили, что качество не менялось",
    kk: "Тамызда мақталған, ал қыркүйекте мақталмай қалған нүкте. 2 қыркүйек: «бір жылдай 95-ін құямын, әрқашан жақсы бензин еді. Бірақ сапасы күрт нашарлады: апта бойы көлік іркілді, бүгін чек жанып, мүлде сөніп қалды». Колл-орталық сапа өзгерген жоқ деп жауап берген",
    en: "A site praised in August and no longer praised in September. 2 September: “I've used their 95 for about a year, the fuel was always good. But the quality has got much worse: the car misfired all week, today the check engine light came on and it just died”. The call centre said the quality hadn't changed"
  }],
  "Улица Зеина Шашкина, 29/1": ["bad", {
    ru: "Главный очаг жалоб на 98-й в Алматы. «После заправки Эльф АИ-98 машина перестала заводиться, заменили форсунку — 416 000 ₸» (486 отметок). Другой: «залил 98 двадцать второго августа, чек показал бедную смесь». Из той же ветки: «вне подозрения пока только 92-й, белорусский». При этом часть водителей заправляется тут без последствий и считает, что «люди нагнетают»",
    kk: "Алматыда 98-ге шағымның басты ошағы. «Эльф АИ-98 құйғаннан кейін көлік от алмай қалды, форсунка ауыстырдық — 416 000 ₸» (486 белгі). Тағы бірі: «22 тамызда 98 құйдым, чек кедей қоспа көрсетті». Сол тармақтан: «әзірге тек 92-сі, белорус бензині ғана күмәнсіз». Сонымен бірге кейбір жүргізушілер мұнда еш зардапсыз құйып жүр және «жұрт әсірелеп жіберген» дейді",
    en: "The main hotspot for 98-octane complaints in Almaty. “After filling up with Elf AI-98 the car wouldn't start; we replaced an injector — 416,000 ₸” (486 likes). Another: “filled up with the 98 on 22 August, the diagnostic showed a lean mixture”. From the same thread: “only the 92, the Belarusian one, is above suspicion so far”. Meanwhile other drivers fill up here with no consequences and think “people are blowing it out of proportion”"
  }]
};
