export type Language = 'en' | 'ko';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      mission: 'Our Mission',
      programs: 'Programs',
      donate: 'Get Involved',
      contact: 'Contact',
      donateButton: 'Donate',
      logo: 'Evergreen Silver',
    },
    hero: {
      titleLine1: 'Honor the Past.',
      titleLine2: 'Cherish the Present.',
      subtitle: 'Evergreen Silver Missionary Organization is dedicated to bringing joy, dignity, and spiritual comfort to our golden generation. Join us in bridging the gap between generations.',
      missionButton: 'Our Mission',
      supportButton: 'Support Us',
    },
    mission: {
      badge: 'Who We Are',
      titleLine1: 'Rooted in Love,',
      titleLine2: 'Growing in Grace.',
      p1: 'Founded in 2005, Evergreen Silver Missionary Organization (ESMO) emerged from a simple belief: no one should face their golden years alone. What started as a small group of volunteers visiting local nursing homes has blossomed into a community-wide movement.',
      p2: 'We provide holistic support—addressing the physical, emotional, and spiritual needs of the elderly. Our volunteers become family, our programs build bridges, and our faith guides our hands.',
      stats: {
        served: 'Seniors Served',
        volunteers: 'Volunteers',
        care: 'Care & Prayer',
      },
      inspiration: {
        title: 'Daily Inspiration',
        loading: 'Finding inspiration...',
        reflection: 'Reflection:',
      },
    },
    missionPage: {
      heroTitle: 'Serving with Purpose',
      historyTitle: 'Our Journey',
      historyText: 'It began with a single visit. In the winter of 2005, Pastor Lee and a small group of youth volunteers visited a local nursing home to sing carols. The overwhelming response—tears of joy and hands reaching out for connection—sparked a realization: our seniors are often forgotten. Since then, ESMO has grown from a seasonal choir into a fully operational community organization providing year-round support.',
      valuesTitle: 'Core Values',
      values: [
        { title: 'Dignity', desc: 'We believe every senior deserves to be treated with the utmost respect and honor.' },
        { title: 'Compassion', desc: 'We serve with hearts wide open, feeling the joys and sorrows of those we help.' },
        { title: 'Faith', desc: 'Our actions are grounded in Christian love, though we serve seniors of all backgrounds.' },
        { title: 'Community', desc: 'We build bridges between generations, knowing we need each other.' }
      ],
      teamTitle: 'Our Leadership',
      team: [
        { name: 'Rev. David Kim', role: 'Executive Director', bio: '20 years of pastoral care experience.' },
        { name: 'Sarah Jenkins', role: 'Program Director', bio: 'Certified Geriatric Care Specialist.' },
        { name: 'Michael Park', role: 'Volunteer Coordinator', bio: 'Former youth pastor and community organizer.' }
      ]
    },
    programs: {
      title: 'Our Programs',
      subtitle: 'Every program we offer is designed with one goal in mind: to enhance the quality of life for our seniors.',
      learnMore: 'Learn More',
      items: [
        {
          title: "Blessed Dying Seminar",
          description: "A seminar on preparing for a beautiful and dignified conclusion to life's journey through faith."
        },
        {
          title: "Pilgrimage",
          description: "Spiritual journeys to the Holy Land to deepen faith and experience the Bible's setting firsthand."
        },
        {
          title: "Bible Study School",
          description: "Systematic study of the Scriptures to grow in spiritual wisdom and understanding."
        }
      ]
    },
    programsPage: {
      scheduleTitle: 'Weekly Schedule',
      scheduleSubtitle: 'Join us for our regular activities. All seniors are welcome.',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      events: [
        { time: '10:00 AM', event: 'Morning Exercise (Tai Chi)' },
        { time: '12:00 PM', event: 'Community Lunch' },
        { time: '02:00 PM', event: 'Art Therapy / Bingo' }
      ],
      testimonialTitle: 'Voices of Our Community',
      testimonials: [
        { quote: "The Tuesday visits are the highlight of my week. I feel young again.", author: "Margaret, 82" },
        { quote: "ESMO helped my father find friends after my mother passed. It was a lifesaver.", author: "John, Son of Resident" }
      ]
    },
    donate: {
      title: 'Plant a Seed of Hope',
      subtitle: 'Your generosity fuels our mission. Whether through time, resources, or prayer, you make a difference.',
      cards: [
        {
          title: 'Donate Funds',
          description: 'Financial contributions allow us to purchase supplies, organize events, and maintain our daily operations.',
          button: 'Give Once / Monthly'
        },
        {
          title: 'Volunteer',
          description: 'Join our team of "Silver Angels". We need drivers, event coordinators, and friendly visitors.',
          button: 'Become a Volunteer'
        },
        {
          title: 'Host an Event',
          description: 'Have a skill to share? Host a workshop or organize a fundraiser in your local community.',
          button: 'Get Started'
        }
      ]
    },
    donatePage: {
      impactTitle: 'Where Your Donation Goes',
      impactItems: [
        { amount: '$50', impact: 'Provides a "Warmth Kit" (Blanket + Socks) for one senior.' },
        { amount: '$100', impact: 'Funds one week of hot lunches for a homebound elder.' },
        { amount: '$500', impact: 'Supports a "Music & Memory" therapy session for 20 people.' }
      ],
      needsTitle: 'Material Needs',
      needsSubtitle: 'We gratefully accept new or gently used items:',
      needsList: ['Large print bibles/books', 'Knitting supplies', 'Unexpired canned goods', 'Wheelchairs/Walkers', 'Winter coats'],
      bankTitle: 'Ways to Give',
      bankInfo: 'Checks payable to: Evergreen Silver Missionary Org\nMail to: 123 Serenity Lane, Silver Springs, CA 90210'
    },
    contact: {
      title: 'Let\'s Connect',
      description: 'We\'d love to hear from you. Whether you have a question about our services, want to volunteer, or just want to say hello, our door is always open.',
      visit: 'Visit Us',
      call: 'Call Us',
      email: 'Email Us',
      form: {
        title: 'Send a Message',
        name: 'Your Name',
        email: 'Email Address',
        message: 'Message',
        placeholderName: 'John Doe',
        placeholderEmail: 'john@example.com',
        placeholderMessage: 'How can we help you?',
        submit: 'Send Message',
        success: 'Thank you! We\'ll be in touch shortly.'
      },
      footer: {
        rights: 'Evergreen Silver Missionary Organization. All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        legalNotice: 'ESMO is currently in the process of applying for 501(c)(3) non-profit status. Contributions may not yet be tax-deductible.'
      }
    },
    contactPage: {
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        { q: 'How do I refer a senior for help?', a: 'Please call our main office or fill out the contact form with the subject line "Referral".' },
        { q: 'Is this organization religiously affiliated?', a: 'Yes, we are a Christian organization, but we serve everyone regardless of their faith background.' },
        { q: 'Are donations tax-deductible?', a: 'We are currently in the process of applying for 501(c)(3) non-profit status. Please contact us for the latest information on tax deductibility.' }
      ]
    },
    chat: {
      triggerLabel: 'Open Chat',
      headerName: 'Grace',
      headerRole: 'Evergreen Assistant',
      inputPlaceholder: 'Ask about our mission...',
      typing: 'Grace is typing...',
      initialMessage: 'Hello! I\'m Grace, a volunteer assistant for Evergreen Silver. How can I help you today?',
      error: 'I\'m having a little trouble thinking right now. Could you ask me again?'
    }
  },
  ko: {
    nav: {
      home: '홈',
      mission: '선교회 소개',
      programs: '사역 프로그램',
      donate: '참여하기',
      contact: '문의하기',
      donateButton: '후원하기',
      logo: '에버그린 실버',
    },
    hero: {
      titleLine1: '과거를 공경하고,',
      titleLine2: '현재를 사랑합니다.',
      subtitle: '에버그린 실버 선교회(Evergreen Silver Missionary Organization)는 우리 어르신들에게 기쁨과 존엄, 영적 위안을 전하기 위해 헌신합니다. 세대와 세대를 잇는 이 아름다운 동행에 함께해 주세요.',
      missionButton: '선교회 소개',
      supportButton: '후원하기',
    },
    mission: {
      badge: '우리는 누구인가',
      titleLine1: '사랑에 뿌리내려,',
      titleLine2: '은혜로 자라납니다.',
      p1: '2005년에 설립된 에버그린 실버 선교회(ESMO)는 "아무도 외로운 노년을 보내서는 안 된다"는 단순한 믿음에서 시작되었습니다. 지역 요양원을 방문하던 작은 봉사 모임이 이제는 지역 사회 전체를 아우르는 운동으로 성장했습니다.',
      p2: '우리는 어르신들의 신체적, 정서적, 영적 필요를 채워드리는 전인적인 지원을 제공합니다. 우리의 봉사자들은 가족이 되어드리고, 프로그램은 소통의 다리가 되며, 신앙은 우리의 손길을 이끕니다.',
      stats: {
        served: '섬기신 어르신',
        volunteers: '봉사자',
        care: '돌봄과 기도',
      },
      inspiration: {
        title: '오늘의 영감',
        loading: '영감을 찾는 중...',
        reflection: '묵상:',
      },
    },
    missionPage: {
      heroTitle: '목적 있는 섬김',
      historyTitle: '우리의 여정',
      historyText: '모든 것은 한 번의 방문으로 시작되었습니다. 2005년 겨울, 이 목사님과 청년 봉사자들이 캐럴을 부르기 위해 요양원을 찾았습니다. 눈물을 흘리며 손을 맞잡아오던 어르신들의 모습에서 우리는 깨달았습니다. 우리 어르신들이 잊혀져 가고 있다는 것을요. 그 후 ESMO는 계절 봉사대에서 연중무휴로 지원을 제공하는 봉사 단체로 성장했습니다.',
      valuesTitle: '핵심 가치',
      values: [
        { title: '존엄', desc: '모든 어르신은 최고의 존중과 명예로 대우받아야 합니다.' },
        { title: '긍휼', desc: '우리는 열린 마음으로 기쁨과 슬픔을 함께 나누며 섬깁니다.' },
        { title: '신앙', desc: '우리는 기독교적 사랑에 바탕을 두되, 종교와 관계없이 모든 분을 섬깁니다.' },
        { title: '공동체', desc: '우리는 서로가 필요함을 알기에 세대 간의 다리를 놓습니다.' }
      ],
      teamTitle: '섬기는 사람들',
      team: [
        { name: '김대이 목사', role: '대표', bio: '20년의 목회 및 노인 사역 경력.' },
        { name: '사라 정', role: '프로그램 디렉터', bio: '노인 요양 전문 자격 보유.' },
        { name: '박마이클', role: '자원봉사 코디네이터', bio: '전 청년부 목사 및 커뮤니티 기획자.' }
      ]
    },
    programs: {
      title: '주요 사역',
      subtitle: '우리가 제공하는 모든 프로그램은 어르신들의 삶의 질을 높이기 위한 하나의 목표로 설계되었습니다.',
      learnMore: '더 알아보기',
      items: [
        {
          title: "복된 죽음의 삶 세미나",
          description: "신앙 안에서 삶의 아름다운 마무리를 준비하며 천국 소망을 품는 존엄한 세미나입니다."
        },
        {
          title: "성지 순례",
          description: "성경의 역사적 현장을 직접 방문하여 말씀을 깊이 체험하고 영성을 회복하는 여정입니다."
        },
        {
          title: "성경 공부 학교",
          description: "체계적인 말씀 공부를 통해 하나님을 아는 지식과 신앙의 깊이를 더해가는 배움의 장입니다."
        }
      ]
    },
    programsPage: {
      scheduleTitle: '주간 일정',
      scheduleSubtitle: '정기 활동에 참여하세요. 모든 어르신을 환영합니다.',
      days: ['월', '화', '수', '목', '금'],
      events: [
        { time: '10:00 AM', event: '아침 건강 체조' },
        { time: '12:00 PM', event: '사랑의 점심 식사' },
        { time: '02:00 PM', event: '미술 치료 / 빙고 게임' }
      ],
      testimonialTitle: '우리들의 이야기',
      testimonials: [
        { quote: "화요일 방문 시간이 일주일 중 가장 기다려지는 시간입니다. 다시 젊어진 기분이에요.", author: "김말순 할머니 (82세)" },
        { quote: "어머니가 돌아가신 후 아버지가 친구를 사귀도록 도와주셔서 정말 감사합니다.", author: "입소자 가족" }
      ]
    },
    donate: {
      title: '희망의 씨앗을 심으세요',
      subtitle: '여러분의 따뜻한 마음이 우리의 사역을 움직입니다. 시간, 물질, 기도로 함께 변화를 만들어 주세요.',
      cards: [
        {
          title: '후원금 기부',
          description: '재정적 후원은 물품 구입, 행사 조직, 그리고 선교회의 매일의 운영을 가능하게 합니다.',
          button: '일시 / 정기 후원'
        },
        {
          title: '자원봉사',
          description: '"실버 천사" 팀에 합류하세요. 운전 봉사, 행사 진행, 그리고 친절한 방문자가 필요합니다.',
          button: '자원봉사 신청'
        },
        {
          title: '행사 주최',
          description: '나눌 수 있는 재능이 있으신가요? 지역 사회에서 워크숍을 열거나 모금 행사를 주최해 주세요.',
          button: '시작하기'
        }
      ]
    },
    donatePage: {
      impactTitle: '후원금 사용처',
      impactItems: [
        { amount: '$50', impact: '어르신 한 분께 "사랑의 온기 키트" (담요 + 양말) 전달' },
        { amount: '$100', impact: '거동이 불편한 어르신께 일주일간 따뜻한 점심 제공' },
        { amount: '$500', impact: '20명의 어르신을 위한 "음악과 추억" 치료 세션 지원' }
      ],
      needsTitle: '물품 후원',
      needsSubtitle: '새것 또는 깨끗하게 사용한 물품을 기증받습니다:',
      needsList: ['큰 글자 성경책/도서', '뜨개질 용품', '통조림 식품', '휠체어/보행 보조기', '겨울 외투'],
      bankTitle: '후원 방법',
      bankInfo: '수표 수취인: Evergreen Silver Missionary Org\n주소: 123 Serenity Lane, Silver Springs, CA 90210'
    },
    contact: {
      title: '연락하기',
      description: '여러분의 이야기를 듣고 싶습니다. 서비스에 대한 문의, 자원봉사 신청, 혹은 가벼운 인사라도 언제든 환영합니다.',
      visit: '방문 안내',
      call: '전화 문의',
      email: '이메일 문의',
      form: {
        title: '메시지 보내기',
        name: '이름',
        email: '이메일 주소',
        message: '메시지',
        placeholderName: '홍길동',
        placeholderEmail: 'hong@example.com',
        placeholderMessage: '어떤 도움이 필요하신가요?',
        submit: '메시지 보내기',
        success: '감사합니다! 곧 연락드리겠습니다.'
      },
      footer: {
        rights: '에버그린 실버 선교회. All rights reserved.',
        privacy: '개인정보 처리방침',
        terms: '이용 약관',
        legalNotice: 'ESMO는 현재 비영리 단체(501(c)(3)) 승인 절차 진행 중입니다. 기부금에 대한 세금 공제는 아직 적용되지 않을 수 있습니다.'
      }
    },
    contactPage: {
      faqTitle: '자주 묻는 질문',
      faqs: [
        { q: '도움이 필요한 어르신은 어떻게 추천하나요?', a: '사무실로 전화 주시거나, 문의 양식에 "추천"이라고 적어서 보내주세요.' },
        { q: '특정 종교인만 이용할 수 있나요?', a: '아니요, 저희는 기독교 단체이지만 종교와 관계없이 모든 분을 섬깁니다.' },
        { q: '기부금은 세금 공제가 되나요?', a: '현재 비영리 단체(501(c)(3)) 승인 절차를 진행 중입니다. 세금 공제 여부에 대한 최신 정보는 문의해 주시기 바랍니다.' }
      ]
    },
    chat: {
      triggerLabel: '채팅 열기',
      headerName: '그레이스',
      headerRole: '에버그린 도우미',
      inputPlaceholder: '사역에 대해 물어보세요...',
      typing: '그레이스가 입력 중...',
      initialMessage: '안녕하세요! 저는 에버그린 실버의 봉사 도우미 그레이스입니다. 무엇을 도와드릴까요?',
      error: '잠시 생각이 잘 나지 않네요. 다시 한번 말씀해 주시겠어요?'
    }
  }
};