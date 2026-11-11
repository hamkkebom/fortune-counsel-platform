// ── 목업 데이터 ──
// 전화운세 상담 서비스의 일반적인 패턴(sitemap, API 응답, HTML 구조) 기반

export const CONSULTANTS = [
  // ── 타로 (5) ──
  {
    it_code: "IT-20230309145205-159",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "아리아",
    it_060_code: "501",
    it_connect_number: "010-1234-1001",
    it_style_key: "정확해요",
    it_counsel_key: "연애",
    it_coin_price: 1300,
    it_new: "N",
    it_profile_text: "안녕하세요, 아리아입니다. 15년간 5천 건 이상의 타로 상담을 진행해왔습니다. 연애, 재회, 진로 등 다양한 분야의 상담이 가능합니다.",
    ed_cnt_no: 1,
    ce_level: 4,
    view_win_comment: 501,
    view_win_point: 498,
    profile_images: [],
    consult_count: 5234,
    rating_avg: 4.9,
    status: "standby",
    tags: ["정확해요", "애정", "용해요", "고민"],
    career: "15년",
    is_partner: true,
  },
  {
    it_code: "IT-20201130103819-067",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "티아라",
    it_060_code: "502",
    it_connect_number: "010-1234-1002",
    it_style_key: "소름돋아요",
    it_counsel_key: "재회",
    it_coin_price: 1500,
    it_new: "N",
    it_profile_text: "타로마스터 티아라입니다. 상대방의 마음을 정확히 읽어내는 능력이 있습니다. 재회, 연애, 결혼 상담 전문.",
    ed_cnt_no: 0,
    ce_level: 5,
    view_win_comment: 832,
    view_win_point: 825,
    profile_images: [],
    consult_count: 8901,
    rating_avg: 5.0,
    status: "on",
    tags: ["소름돋아요", "재회", "정확해요", "연애"],
    career: "12년",
    is_partner: true,
  },
  {
    it_code: "IT-20210615093210-123",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "헤이즐넛",
    it_060_code: "503",
    it_connect_number: "010-1234-1003",
    it_style_key: "친절해요",
    it_counsel_key: "직장",
    it_coin_price: 1000,
    it_new: "Y",
    it_profile_text: "부드러운 카리스마의 타로리더 헤이즐넛입니다. 직장, 진로, 금전 상담에 특히 강합니다.",
    ed_cnt_no: 1,
    ce_level: 3,
    view_win_comment: 156,
    view_win_point: 152,
    profile_images: [],
    consult_count: 2100,
    rating_avg: 4.8,
    status: "standby",
    tags: ["친절해요", "직장", "속마음", "진로"],
    career: "8년",
    is_partner: false,
  },
  {
    it_code: "IT-20220308123456-456",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "루나",
    it_060_code: "504",
    it_connect_number: "010-1234-1004",
    it_style_key: "직진추진",
    it_counsel_key: "결혼",
    it_coin_price: 1800,
    it_new: "N",
    it_profile_text: "국제 타로 마스터 자격증 보유. 결혼운, 인연운, 궁합 상담 전문. 정확한 타로 해석으로 유명합니다.",
    ed_cnt_no: 0,
    ce_level: 5,
    view_win_comment: 672,
    view_win_point: 665,
    profile_images: [],
    consult_count: 7200,
    rating_avg: 4.9,
    status: "away",
    tags: ["직진추진", "결혼", "정확해요", "인연"],
    career: "20년",
    is_partner: true,
  },
  {
    it_code: "IT-20230101010101-111",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "마리",
    it_060_code: "505",
    it_connect_number: "010-1234-1005",
    it_style_key: "속시원해요",
    it_counsel_key: "고민",
    it_coin_price: 1200,
    it_new: "N",
    it_profile_text: "따뜻한 타로리더 마리입니다. 누구에게도 말 못한 고민을 편하게 털어놓을 수 있는 공간을 만들어드립니다.",
    ed_cnt_no: 0,
    ce_level: 2,
    view_win_comment: 334,
    view_win_point: 330,
    profile_images: [],
    consult_count: 3800,
    rating_avg: 4.7,
    status: "standby",
    tags: ["속시원해요", "고민", "친절해요", "연애"],
    career: "6년",
    is_partner: false,
  },

  // ── 사주 (5) ──
  {
    it_code: "IT-20191215123456-222",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "도원",
    it_060_code: "601",
    it_connect_number: "010-1234-2001",
    it_style_key: "용해요",
    it_counsel_key: "신년운세",
    it_coin_price: 2000,
    it_new: "N",
    it_profile_text: "사주명리학 25년 경력 도원입니다. 타고난 사주팔자를 정확히 풀이해드립니다. 신년운세, 궁합, 재물운 전문.",
    ed_cnt_no: 1,
    ce_level: 6,
    view_win_comment: 1203,
    view_win_point: 1195,
    profile_images: [],
    consult_count: 15000,
    rating_avg: 5.0,
    status: "standby",
    tags: ["용해요", "신년운세", "정확해요", "재물운"],
    career: "25년",
    is_partner: true,
  },
  {
    it_code: "IT-20180420123456-333",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "청운",
    it_060_code: "602",
    it_connect_number: "010-1234-2002",
    it_style_key: "맞춤상담",
    it_counsel_key: "궁합",
    it_coin_price: 2500,
    it_new: "N",
    it_profile_text: "동양철학 박사 청운입니다. 사주와 궁합 분야에서 최고의 전문가로 인정받고 있습니다. 연애궁합, 결혼궁합 상담.",
    ed_cnt_no: 0,
    ce_level: 6,
    view_win_comment: 945,
    view_win_point: 940,
    profile_images: [],
    consult_count: 11200,
    rating_avg: 4.9,
    status: "on",
    tags: ["맞춤상담", "궁합", "용해요", "인연"],
    career: "20년",
    is_partner: true,
  },
  {
    it_code: "IT-20210815123456-444",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "서담",
    it_060_code: "603",
    it_connect_number: "010-1234-2003",
    it_style_key: "자세해요",
    it_counsel_key: "취업운",
    it_coin_price: 1500,
    it_new: "N",
    it_profile_text: "명리학 10년차 서담입니다. 취업운, 직장운, 사업운 상담을 세세하게 풀어드립니다. 멘토링식 상담 진행.",
    ed_cnt_no: 1,
    ce_level: 3,
    view_win_comment: 412,
    view_win_point: 408,
    profile_images: [],
    consult_count: 5100,
    rating_avg: 4.8,
    status: "standby",
    tags: ["자세해요", "취업운", "친절해요", "직장"],
    career: "10년",
    is_partner: true,
  },
  {
    it_code: "IT-20220115123456-555",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "해민",
    it_060_code: "604",
    it_connect_number: "010-1234-2004",
    it_style_key: "따뜻해요",
    it_counsel_key: "건강운",
    it_coin_price: 1800,
    it_new: "N",
    it_profile_text: "사주명리와 한의학을 접목한 상담으로 건강운, 재물운까지 종합적으로 봐드립니다.",
    ed_cnt_no: 0,
    ce_level: 4,
    view_win_comment: 289,
    view_win_point: 285,
    profile_images: [],
    consult_count: 3400,
    rating_avg: 4.7,
    status: "reserv",
    tags: ["따뜻해요", "건강운", "용해요", "재물운"],
    career: "12년",
    is_partner: false,
  },
  {
    it_code: "IT-20230415123456-666",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "다온",
    it_060_code: "605",
    it_connect_number: "010-1234-2005",
    it_style_key: "시원시원",
    it_counsel_key: "진로",
    it_coin_price: 1200,
    it_new: "Y",
    it_profile_text: "젊은 감각의 사주명리학자 다온입니다. 사주를 현대적으로 풀어내는 것이 특기입니다. 진로, 적성 상담 전문.",
    ed_cnt_no: 0,
    ce_level: 2,
    view_win_comment: 98,
    view_win_point: 95,
    profile_images: [],
    consult_count: 1200,
    rating_avg: 4.6,
    status: "standby",
    tags: ["시원시원", "진로", "친절해요", "적성"],
    career: "5년",
    is_partner: false,
  },

  // ── 신점 (5) ──
  {
    it_code: "IT-20240206154010-350",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "천신암",
    it_060_code: "788",
    it_connect_number: "010-1234-3001",
    it_style_key: "용해요",
    it_counsel_key: "속마음",
    it_coin_price: 3000,
    it_new: "N",
    it_profile_text: "신내림 30년 천신암입니다. 이름만으로도 보는 신점, 사진으로 보는 신점이 가능합니다. 영적 상담 전문.",
    ed_cnt_no: 0,
    ce_level: 6,
    view_win_comment: 788,
    view_win_point: 780,
    profile_images: [],
    consult_count: 25000,
    rating_avg: 5.0,
    status: "standby",
    tags: ["용해요", "속마음", "소름돋아요", "재회"],
    career: "30년",
    is_partner: true,
  },
  {
    it_code: "IT-20181217093619-607",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "보리",
    it_060_code: "467",
    it_connect_number: "010-1234-3002",
    it_style_key: "소름돋아요",
    it_counsel_key: "재회",
    it_coin_price: 2500,
    it_new: "N",
    it_profile_text: "신점 명인 보리입니다. 용하다는 소문이 자자한 실력파. 특히 재회와 연애 상담에서 90% 이상의 적중률을 자랑합니다.",
    ed_cnt_no: 1,
    ce_level: 5,
    view_win_comment: 1567,
    view_win_point: 1550,
    profile_images: [],
    consult_count: 18000,
    rating_avg: 4.9,
    status: "on",
    tags: ["소름돋아요", "재회", "용해요", "애정"],
    career: "18년",
    is_partner: true,
  },
  {
    it_code: "IT-20201015123456-777",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "태양신",
    it_060_code: "468",
    it_connect_number: "010-1234-3003",
    it_style_key: "무속상담",
    it_counsel_key: "액운",
    it_coin_price: 2000,
    it_new: "N",
    it_profile_text: "대대로 내려온 무속인입니다. 액운 제거, 삼재풀이, 사업운, 시험운까지 모든 분야 상담 가능. 굿도 진행합니다.",
    ed_cnt_no: 0,
    ce_level: 6,
    view_win_comment: 1890,
    view_win_point: 1875,
    profile_images: [],
    consult_count: 22000,
    rating_avg: 4.8,
    status: "standby",
    tags: ["무속상담", "액운", "용해요", "사업운"],
    career: "25년",
    is_partner: true,
  },
  {
    it_code: "IT-20220315123456-888",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "은하수",
    it_060_code: "469",
    it_connect_number: "010-1234-3004",
    it_style_key: "영적상담",
    it_counsel_key: "인연",
    it_coin_price: 2200,
    it_new: "N",
    it_profile_text: "영적 능력을 타고난 은하수입니다. 사진 한 장으로 모든 것을 꿰뚫어 봅니다. 인연운, 전생, 수호신 상담.",
    ed_cnt_no: 0,
    ce_level: 5,
    view_win_comment: 567,
    view_win_point: 560,
    profile_images: [],
    consult_count: 8900,
    rating_avg: 4.9,
    status: "away",
    tags: ["영적상담", "인연", "소름돋아요", "전생"],
    career: "15년",
    is_partner: true,
  },
  {
    it_code: "IT-20230515123456-999",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "혜안",
    it_060_code: "470",
    it_connect_number: "010-1234-3005",
    it_style_key: "직진해결",
    it_counsel_key: "고민",
    it_coin_price: 1500,
    it_new: "Y",
    it_profile_text: "젊은 영매사 혜안입니다. 직관적인 신점 상담으로 고민을 시원하게 해결해드립니다.",
    ed_cnt_no: 0,
    ce_level: 2,
    view_win_comment: 123,
    view_win_point: 120,
    profile_images: [],
    consult_count: 1500,
    rating_avg: 4.7,
    status: "standby",
    tags: ["직진해결", "고민", "친절해요", "연애"],
    career: "4년",
    is_partner: false,
  },

  // ── 채팅 (3) ──
  {
    it_code: "CH-20211214105039-080",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "미소",
    it_060_code: "701",
    it_connect_number: "010-1234-4001",
    it_style_key: "친절해요",
    it_counsel_key: "연애",
    it_coin_price: 800,
    it_new: "N",
    it_profile_text: "채팅타로 전문가 미소입니다. 글로도 충분히 전해지는 타로의 힘을 경험해보세요.",
    ed_cnt_no: 0,
    ce_level: 2,
    view_win_comment: 445,
    view_win_point: 440,
    profile_images: [],
    consult_count: 5600,
    rating_avg: 4.8,
    status: "standby",
    tags: ["친절해요", "연애", "정확해요", "고민"],
    career: "7년",
    is_partner: true,
  },
  {
    it_code: "CH-20220908103107-954",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "예담",
    it_060_code: "702",
    it_connect_number: "010-1234-4002",
    it_style_key: "자세해요",
    it_counsel_key: "진로",
    it_coin_price: 1000,
    it_new: "N",
    it_profile_text: "채팅사주 전문. 긴 상담도 부담 없이 채팅으로! 천천히 읽고 답변드립니다.",
    ed_cnt_no: 0,
    ce_level: 3,
    view_win_comment: 312,
    view_win_point: 308,
    profile_images: [],
    consult_count: 4200,
    rating_avg: 4.7,
    status: "standby",
    tags: ["자세해요", "진로", "따뜻해요", "직장"],
    career: "9년",
    is_partner: false,
  },
  {
    it_code: "CH-20230607090018-927",
    it_main_pic: "",
    it_category_name: "신점",
    it_category_code: "fortune",
    it_nick: "담희",
    it_060_code: "703",
    it_connect_number: "010-1234-4003",
    it_style_key: "속시원해요",
    it_counsel_key: "재회",
    it_coin_price: 1200,
    it_new: "N",
    it_profile_text: "채팅신점 전문. 채팅으로도 신점의 정확도를 그대로 느낄 수 있습니다. 재회, 연애 상담 환영.",
    ed_cnt_no: 0,
    ce_level: 3,
    view_win_comment: 267,
    view_win_point: 263,
    profile_images: [],
    consult_count: 3100,
    rating_avg: 4.8,
    status: "on",
    tags: ["속시원해요", "재회", "용해요", "연애"],
    career: "8년",
    is_partner: true,
  },
  // ── 클래스 (2) ──
  {
    it_code: "CL-20230101123456-001",
    it_main_pic: "",
    it_category_name: "타로",
    it_category_code: "tarot",
    it_nick: "가온",
    it_060_code: "801",
    it_connect_number: "010-1234-5001",
    it_style_key: "전문강의",
    it_counsel_key: "타로배우기",
    it_coin_price: 50000,
    it_new: "Y",
    it_profile_text: "타로 마스터 가온의 타로 클래스. 초보자도 쉽게 배울 수 있는 체계적인 커리큘럼을 제공합니다.",
    ed_cnt_no: 0,
    ce_level: 5,
    view_win_comment: 89,
    view_win_point: 87,
    profile_images: [],
    consult_count: 980,
    rating_avg: 4.9,
    status: "standby",
    tags: ["전문강의", "타로배우기", "친절해요", "기초"],
    career: "15년",
    is_partner: true,
  },
  {
    it_code: "CL-20230102123456-002",
    it_main_pic: "",
    it_category_name: "사주",
    it_category_code: "saju",
    it_nick: "한울",
    it_060_code: "802",
    it_connect_number: "010-1234-5002",
    it_style_key: "심화강의",
    it_counsel_key: "명리학",
    it_coin_price: 80000,
    it_new: "N",
    it_profile_text: "사주명리학 심화 클래스. 명리학 이론부터 실전 해석까지 완벽하게 마스터할 수 있습니다.",
    ed_cnt_no: 0,
    ce_level: 6,
    view_win_comment: 156,
    view_win_point: 153,
    profile_images: [],
    consult_count: 2100,
    rating_avg: 5.0,
    status: "standby",
    tags: ["심화강의", "명리학", "전문가", "사주"],
    career: "22년",
    is_partner: true,
  },
];

export const REVIEWS = [
  { id: "RV-001", consultant_code: "IT-20201130103819-067", user_nickname: "민트초코", rating: 5, content: "여기서 상담받고 재회 성공했어요! 진짜 소름돋게 맞추더라고요. 처음에는 반신반의했는데 이제는 정말 믿음이 갑니다. 티아라 선생님 최고예요!", tags: ["소름돋아요", "재회", "용해요"], created_at: "2026-06-01", is_verified: true, is_best: true, is_pick: false, helpful: 45 },
  { id: "RV-002", consultant_code: "IT-20201130103819-067", user_nickname: "봄날", rating: 5, content: "연애상담 받았는데 완전 정확했어요. 상대방 마음을 그대로 읽는 것 같았어요.", tags: ["정확해요", "연애"], created_at: "2026-05-28", is_verified: true, is_best: false, is_pick: true, helpful: 32 },
  { id: "RV-003", consultant_code: "IT-20201130103819-067", user_nickname: "별빛", rating: 4, content: "두 번째 상담인데 매번 놀랍니다. 가격이 좀 있지만 그만한 가치를 해요.", tags: ["정확해요", "만족"], created_at: "2026-05-20", is_verified: true, is_best: false, is_pick: false, helpful: 12 },
  { id: "RV-004", consultant_code: "IT-20230309145205-159", user_nickname: "도토리", rating: 5, content: "아리아 선생님 완전 친절하시고 속 시원하게 말씀해주세요. 다음에도 또 상담 받고 싶어요!", tags: ["친절해요", "속시원해요"], created_at: "2026-06-02", is_verified: true, is_best: false, is_pick: false, helpful: 28 },
  { id: "RV-005", consultant_code: "IT-20230309145205-159", user_nickname: "하늘", rating: 5, content: "세 번 연속 상담 받았는데 매번 적중했어요. 앞으로도 쭉 아리아 선생님께 받을 예정입니다.", tags: ["정확해요", "용해요"], created_at: "2026-05-25", is_verified: true, is_best: true, is_pick: false, helpful: 67 },
  { id: "RV-006", consultant_code: "IT-20191215123456-222", user_nickname: "소나무", rating: 5, content: "도원 선생님 신년운세 완전 정확하셨어요. 1월에 말씀해주신 게 지금 현실로 하나둘 일어나고 있어요. 대박!", tags: ["신년운세", "정확해요", "용해요"], created_at: "2026-05-30", is_verified: true, is_best: true, is_pick: false, helpful: 89 },
  { id: "RV-007", consultant_code: "IT-20191215123456-222", user_nickname: "모래", rating: 5, content: "재물운 상담 받았는데 사업이 잘 풀리기 시작했어요. 정말 감사합니다.", tags: ["재물운", "용해요"], created_at: "2026-05-15", is_verified: true, is_best: false, is_pick: false, helpful: 34 },
  { id: "RV-008", consultant_code: "IT-20180420123456-333", user_nickname: "진달래", rating: 5, content: "궁합 상담 받았는데 두 분 다 만족하셨어요. 결혼도 잘 진행되고 있습니다. 청운 선생님 최고!", tags: ["궁합", "맞춤상담"], created_at: "2026-05-10", is_verified: true, is_best: false, is_pick: true, helpful: 41 },
  { id: "RV-009", consultant_code: "IT-20240206154010-350", user_nickname: "은행", rating: 5, content: "천신암 선생님... 말이 필요 없어요. 진짜 용하십니다. 이름만 알려드렸는데 다 맞추셨어요.", tags: ["용해요", "소름돋아요"], created_at: "2026-06-03", is_verified: true, is_best: true, is_pick: false, helpful: 112 },
  { id: "RV-010", consultant_code: "IT-20240206154010-350", user_nickname: "구름", rating: 5, content: "재회 상담 후 실제로 전남친에게서 연락이 왔어요. 정말 신기합니다.", tags: ["재회", "소름돋아요"], created_at: "2026-05-22", is_verified: true, is_best: false, is_pick: false, helpful: 78 },
  { id: "RV-011", consultant_code: "IT-20181217093619-607", user_nickname: "노을", rating: 5, content: "보리 선생님 짱이에요! 재회 성공했어요 ㅠㅠ 너무 감사합니다. 덕분에 다시 행복하게 잘 만나고 있어요.", tags: ["재회", "용해요"], created_at: "2026-06-04", is_verified: true, is_best: true, is_pick: false, helpful: 156 },
  { id: "RV-012", consultant_code: "IT-20181217093619-607", user_nickname: "바람", rating: 5, content: "5번째 상담인데 항상 정확해요. 앞으로도 계속 받을 거예요.", tags: ["정확해요", "재회"], created_at: "2026-05-18", is_verified: true, is_best: false, is_pick: false, helpful: 45 },
  { id: "RV-013", consultant_code: "IT-20210615093210-123", user_nickname: "꽃잎", rating: 5, content: "첫 상담이었는데 너무 친절하게 봐주셨어요. 다음에 또 받으러 올게요!", tags: ["친절해요", "직장"], created_at: "2026-05-08", is_verified: true, is_best: false, is_pick: false, helpful: 8 },
  { id: "RV-014", consultant_code: "IT-20210815123456-444", user_nickname: "초원", rating: 4, content: "취업운 상담 받았는데 조언이 실제로 도움됐어요. 취업 성공 후기 남깁니다!", tags: ["자세해요", "취업운"], created_at: "2026-04-30", is_verified: true, is_best: false, is_pick: false, helpful: 23 },
  { id: "RV-015", consultant_code: "IT-20220308123456-456", user_nickname: "달빛", rating: 5, content: "결혼운 상담 후 3개월 만에 프로포즈 받았어요. 루나 선생님 감사합니다!", tags: ["결혼", "정확해요"], created_at: "2026-04-15", is_verified: true, is_best: true, is_pick: false, helpful: 92 },
  { id: "RV-016", consultant_code: "CH-20211214105039-080", user_nickname: "별이", rating: 5, content: "채팅으로도 이렇게 정확할 수 있다니 놀랐어요. 미소 선생님 감사합니다!", tags: ["친절해요", "정확해요"], created_at: "2026-05-12", is_verified: true, is_best: false, is_pick: false, helpful: 15 },
  { id: "RV-017", consultant_code: "CH-20230607090018-927", user_nickname: "햇살", rating: 5, content: "담희 선생님이 채팅으로 봐주셨는데 전화보다 더 좋은 것 같아요. 천천히 생각하면서 볼 수 있어서.", tags: ["속시원해요", "재회"], created_at: "2026-05-05", is_verified: true, is_best: false, is_pick: false, helpful: 11 },
  { id: "RV-018", consultant_code: "IT-20201015123456-777", user_nickname: "산", rating: 5, content: "삼재풀이 받고 액운이 풀렸어요. 진짜 용하다는 게 이런 건가 봐요.", tags: ["액운", "무속상담"], created_at: "2026-04-20", is_verified: true, is_best: true, is_pick: false, helpful: 67 },
  { id: "RV-019", consultant_code: "IT-20220315123456-888", user_nickname: "파도", rating: 5, content: "은하수 선생님 전생 상담이 정말 신기했어요. 제가 몰랐던 부분을 정확히 짚어주셨어요.", tags: ["영적상담", "소름돋아요"], created_at: "2026-03-28", is_verified: true, is_best: false, is_pick: true, helpful: 34 },
  { id: "RV-020", consultant_code: "IT-20230515123456-999", user_nickname: "연두", rating: 4, content: "첫 신점 상담이었는데 부담 없이 잘 봐주셨어요. 혜안 선생님 감사합니다.", tags: ["친절해요", "고민"], created_at: "2026-03-15", is_verified: true, is_best: false, is_pick: false, helpful: 5 },
  // 추가 리뷰 (다른 상담사들)
  { id: "RV-021", consultant_code: "IT-20230101010101-111", user_nickname: "민들레", rating: 5, content: "마리 선생님 정말 공감을 잘해주세요. 속 얘기 다 털어놓고 왔어요.", tags: ["속시원해요", "고민"], created_at: "2026-03-10", is_verified: true, is_best: false, is_pick: false, helpful: 18 },
  { id: "RV-022", consultant_code: "IT-20230415123456-666", user_nickname: "단비", rating: 5, content: "진로 상담 받고 방향을 잡았어요. 젊은 감각으로 상담해주셔서 좋았습니다.", tags: ["시원시원", "진로"], created_at: "2026-02-28", is_verified: true, is_best: false, is_pick: false, helpful: 9 },
  { id: "RV-023", consultant_code: "CH-20220908103107-954", user_nickname: "너울", rating: 4, content: "채팅상담이 처음이었는데 생각보다 편하고 좋았어요. 예담 선생님 감사합니다.", tags: ["자세해요", "진로"], created_at: "2026-02-15", is_verified: true, is_best: false, is_pick: false, helpful: 7 },
  { id: "RV-024", consultant_code: "CL-20230101123456-001", user_nickname: "길잡이", rating: 5, content: "타로 클래스 완전 추천! 기초부터 차근차근 알려주셔서 혼자서도 볼 수 있게 됐어요.", tags: ["전문강의", "타로배우기"], created_at: "2026-02-01", is_verified: true, is_best: true, is_pick: false, helpful: 43 },
  { id: "RV-025", consultant_code: "IT-20220115123456-555", user_nickname: "온기", rating: 5, content: "따뜻한 상담 감사합니다. 건강운 상담 받고 생활 패턴을 바꿨더니 몸이 좋아졌어요.", tags: ["따뜻해요", "건강운"], created_at: "2026-01-20", is_verified: true, is_best: false, is_pick: false, helpful: 21 },
  // ... 추가 25개 리뷰 (다양한 상담사, 평점)
];

for (let i = 26; i <= 50; i++) {
  const consultants = ["IT-20201130103819-067", "IT-20181217093619-607", "IT-20230309145205-159", "IT-20191215123456-222", "IT-20240206154010-350", "IT-20210615093210-123", "IT-20220308123456-456", "CH-20211214105039-080", "CH-20230607090018-927", "IT-20201015123456-777"];
  const nicknames = ["은하", "비타민", "코코아", "라일락", "스노우", "체리", "피치", "망고", "블루", "로즈", "제이드", "루비", "다이아", "에메랄드", "사파이어", "크리스탈", "펄", "골드", "실버", "코퍼", "플래티넘", "다이아몬드", "문스톤", "썬스톤", "스타더스트"];
  const reviews = [
    "상담 너무 좋았어요. 다음에도 또 받을게요!",
    "생각보다 정확해서 놀랐어요. 주변에도 추천할게요.",
    "선생님이 정말 친절하게 잘 알려주셨어요. 감사합니다.",
    "세 번 연속 방문 중인데 항상 만족해요.",
    "고민이 있었는데 상담 받고 나니 마음이 가벼워졌어요.",
    "선물 같은 상담이었어요. 인생의 전환점이 되었습니다.",
    "처음에는 반신반의했는데 직접 들어보니 진짜네요.",
    "시간 가는 줄 모르고 상담했어요. 다음에 또 올게요.",
    "말씀하신 대로 다 되고 있어요. 대박 예언자세요!",
    "주변에 추천하고 싶은 좋은 상담사예요.",
  ];
  const rating = i % 5 === 0 ? 4 : 5;
  REVIEWS.push({
    id: `RV-${String(i + 1).padStart(3, "0")}`,
    consultant_code: consultants[i % consultants.length],
    user_nickname: nicknames[i % nicknames.length],
    rating,
    content: reviews[i % reviews.length],
    tags: ["정확해요", "친절해요"],
    created_at: `2026-0${String(Math.floor(Math.random() * 3) + 1).padStart(2, "0")}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, "0")}`,
    is_verified: true,
    is_best: false,
    is_pick: false,
    helpful: Math.floor(Math.random() * 20) + 1,
  });
}

export const CONTENTS = [
  { id: "CT-001", title: "2026년 하반기 운세 전망 - 지금부터 준비하세요", category: "inside", type: "article", excerpt: "2026년 하반기, 별자리별 운세와 조언을 미리 확인하세요. 타로, 사주, 신점 전문가들의 인사이트를 한자리에 모았습니다.", author: "샘플카페", date: "2026-06-01", view_count: 4523, thumbnail: "" },
  { id: "CT-002", title: "연애상담 vs 재회상담, 뭐가 다를까?", category: "inside", type: "article", excerpt: "연애상담과 재회상담의 차이점과 각 상황에 맞는 상담사 선택법을 알려드립니다.", author: "상담전문가", date: "2026-05-25", view_count: 3210, thumbnail: "" },
  { id: "CT-003", title: "타로 카드 해석 초보자 가이드", category: "inside", type: "article", excerpt: "타로 카드의 기본적인 의미부터 스프레드 해석까지, 초보자를 위한 완벽 가이드.", author: "타로마스터", date: "2026-05-15", view_count: 2890, thumbnail: "" },
  { id: "CT-004", title: "사주팔자, 진짜 내 운명을 알 수 있을까?", category: "inside", type: "article", excerpt: "사주명리학의 과학적 접근과 실제 상담 사례를 통해 사주의 진실을 파헤쳐봅니다.", author: "명리학자", date: "2026-05-10", view_count: 1876, thumbnail: "" },
  { id: "CT-005", title: "신점이 용하다는 말, 진짜일까?", category: "inside", type: "article", excerpt: "실제 신점 상담 사례와 후기로 검증해보는 신점의 세계.", author: "샘플카페", date: "2026-05-01", view_count: 5678, thumbnail: "" },
  { id: "CT-006", title: "AI 운세 - 인공지능이 내 운명을 읽는다", category: "luckai", type: "ai", excerpt: "최신 AI 기술로 분석하는 2026년 나의 운세. 타로, 사주, 신점 AI가 당신의 고민을 들어드립니다.", author: "AI운세", date: "2026-06-04", view_count: 890, thumbnail: "" },
  { id: "CT-007", title: "오늘의 타로 - 6월 4일 당신의 카드는?", category: "luckai", type: "ai", excerpt: "하루 한 장, 오늘의 타로 카드를 뽑아보세요. AI가 해석해드립니다.", author: "AI타로", date: "2026-06-04", view_count: 2340, thumbnail: "" },
  { id: "CT-008", title: "AI 사주 - 내 사주팔자 분석 받기", category: "luckai", type: "ai", excerpt: "생년월일시를 입력하면 AI가 사주팔자를 분석해드립니다.", author: "AI사주", date: "2026-06-03", view_count: 1567, thumbnail: "" },
  { id: "CT-009", title: "AI 신점 - 이름만 알려주세요", category: "luckai", type: "ai", excerpt: "이름만으로 보는 AI 신점. 과거, 현재, 미래를 한눈에 확인하세요.", author: "AI신점", date: "2026-06-01", view_count: 3456, thumbnail: "" },
  { id: "CT-010", title: "AI 궁합 - 두 사람의 인연을 확인하세요", category: "luckai", type: "ai", excerpt: "두 사람의 생년월일로 궁합을 분석합니다. 연애, 결혼 전 꼭 확인하세요.", author: "AI궁합", date: "2026-05-28", view_count: 4321, thumbnail: "" },
  { id: "CT-011", title: "3개월 만에 재회 성공한 실제 사례", category: "success", type: "story", excerpt: "헤어진 지 6개월, 모든 게 끝났다고 생각했는데... 보리 선생님과의 상담 후 기적이 일어났습니다.", author: "후기이벤트참여자", date: "2026-05-30", view_count: 7890, thumbnail: "" },
  { id: "CT-012", title: "결혼 3년 만에 찾아온 위기, 극복한 방법", category: "success", type: "story", excerpt: "결혼 생활의 위기를 루나 선생님의 상담으로 극복한 사례를 공유합니다.", author: "행복한가정", date: "2026-05-20", view_count: 4567, thumbnail: "" },
  { id: "CT-013", title: "취업 성공! 서담 선생님 덕분입니다", category: "success", type: "story", excerpt: "취업운 상담 후 2주 만에 원하는 회사에 합격했어요. 취업 준비생들께 강력 추천합니다.", author: "신입사원", date: "2026-05-10", view_count: 3456, thumbnail: "" },
  { id: "CT-014", title: "사업이 어려웠는데, 삼재풀이 후 매출 3배 증가", category: "success", type: "story", excerpt: "자영업자로서 힘든 시기를 태양신 선생님의 조언으로 극복한 이야기입니다.", author: "사장님", date: "2026-04-25", view_count: 2345, thumbnail: "" },
  { id: "CT-015", title: "인생의 전환점, 운세 상담이 만들어준 변화", category: "success", type: "story", excerpt: "여러 상담사의 도움으로 인생의 방향을 찾은 한 이용자의 감동 스토리.", author: "새로운시작", date: "2026-04-15", view_count: 6789, thumbnail: "" },
];

export const EVENTS = [
  { id: "EV-001", title: "신규가입 10,000코인 즉시 증정!", status: "ongoing", period: "상시", description: "신규 회원 가입 시 10,000코인을 무료로 지급합니다. 가입 후 바로 상담을 시작해보세요.", banner: "" },
  { id: "EV-002", title: "친구 초대하고 5,000코인 받기", status: "ongoing", period: "~2026.12.31", description: "친구에게 초대 링크를 보내고 가입 시 5,000코인을 추가로 지급합니다.", banner: "" },
  { id: "EV-003", title: "후기 작성하고 코인 받자!", status: "ongoing", period: "상시", description: "상담 후 후기를 작성하면 일반 500코인, 베스트 후기 5,000코인을 드립니다.", banner: "" },
  { id: "EV-004", title: "코인 충전 이벤트 - 최대 30% 보너스", status: "ended", period: "~2026.05.31", description: "코인 충전 시 충전 금액의 최대 30%를 보너스 코인으로 추가 지급합니다.", banner: "" },
  { id: "EV-005", title: "재회 성공 후기 이벤트 - 10,000코인", status: "ongoing", period: "~2026.08.31", description: "재회 성공 후기를 남겨주시면 추첨을 통해 10,000코인을 드립니다.", banner: "" },
];

export const CLASSES = [
  { id: "CL-001", title: "타로 카드 마스터 클래스 (기초)", instructor: "가온", category: "tarot", type: "online", price: 50000, sessions: "4주 · 총 4회 · 회당 2시간", description: "타로를 처음 배우는 분들을 위한 기초 클래스입니다.", thumbnail: "" },
  { id: "CL-002", title: "타로 카드 마스터 클래스 (심화)", instructor: "가온", category: "tarot", type: "online", price: 100000, sessions: "8주 · 총 8회 · 회당 2시간", description: "타로 심화 과정. 다양한 스프레드와 해석 테크닉을 배웁니다.", thumbnail: "" },
  { id: "CL-003", title: "사주명리학 입문", instructor: "서담", category: "saju", type: "online", price: 80000, sessions: "6주 · 총 6회 · 회당 1.5시간", description: "사주명리학의 기초 이론을 체계적으로 배우는 입문 과정.", thumbnail: "" },
  { id: "CL-004", title: "사주명리학 실전 해석", instructor: "청운", category: "saju", type: "online", price: 200000, sessions: "12주 · 총 12회 · 회당 2시간", description: "실제 사주를 해석하는 실전 위주의 심화 과정입니다.", thumbnail: "" },
  { id: "CL-005", title: "오프라인 타로 워크샵", instructor: "가온", category: "tarot", type: "offline", price: 150000, sessions: "1회 · 4시간", description: "홍대점에서 진행하는 오프라인 타로 워크샵. 직접 카드를 만져보며 배웁니다.", thumbnail: "" },
  { id: "CL-006", title: "자기 계발 타로", instructor: "헤이즐넛", category: "tarot", type: "online", price: 30000, sessions: "1회 · 1시간", description: "자기 이해와 성장을 위한 타로 수업.", thumbnail: "" },
  { id: "CL-007", title: "작명/개명 클래스", instructor: "한울", category: "naming", type: "online", price: 150000, sessions: "2회 · 총 2회 · 회당 1.5시간", description: "좋은 이름을 짓는 방법과 개명의 효과를 배웁니다.", thumbnail: "" },
  { id: "CL-008", title: "풍수지리 인테리어 가이드", instructor: "한울", category: "topography", type: "online", price: 100000, sessions: "3회 · 총 3회 · 회당 1시간", description: "집과 사무실의 풍수를 개선하는 실용적인 인테리어 가이드.", thumbnail: "" },
];

export const SERVICES = [
  { id: "SV-001", name: "삼재풀이 부적", category: "amulet-pray", price: 50000, description: "삼재 액운을 막아주는 부적입니다. 직접 기도하고 축원한 부적을 보내드립니다.", thumbnail: "" },
  { id: "SV-002", name: "소원성취 기도초", category: "pray-candle", price: 30000, description: "소원을 담아 기도하는 초. 7일, 21일, 49일 중 선택 가능합니다.", thumbnail: "" },
  { id: "SV-003", name: "액운 제거 기도", category: "pray-source", price: 100000, description: "강력한 액운 제거 기도. 이름, 생년월일을 알려주시면 진행해드립니다.", thumbnail: "" },
  { id: "SV-004", name: "재회 기원 연등", category: "lantern", price: 30000, description: "재회를 기원하는 연등. 사찰에 49일간 점등됩니다.", thumbnail: "" },
  { id: "SV-005", name: "타로카드 풀리딩", category: "tarot-saju", price: 50000, description: "10장 이상의 카드로 진행하는 상세 풀리딩. PDF 보고서 제공.", thumbnail: "" },
  { id: "SV-006", name: "신생아 작명", category: "naming", price: 200000, description: "사주에 맞는 좋은 이름을 전문 작명가가 지어드립니다.", thumbnail: "" },
  { id: "SV-007", name: "성인 개명", category: "renaming", price: 200000, description: "새 삶을 위한 개명. 사주 분석 후 최적의 이름을 추천해드립니다.", thumbnail: "" },
  { id: "SV-008", name: "결혼 택일", category: "choosedate", price: 80000, description: "두 사람의 사주에 가장 좋은 결혼 날짜를 선정해드립니다.", thumbnail: "" },
  { id: "SV-009", name: "상호 작명", category: "naming", price: 150000, description: "사업 번창을 위한 상호(가게 이름) 작명 서비스.", thumbnail: "" },
  { id: "SV-010", name: "풍수지리 상담", category: "topography", price: 300000, description: "주택, 사무실 풍수 상담. 방문 상담 가능 (서울/경기 지역).", thumbnail: "" },
];

export const COIN_HISTORY = [
  { id: "CH-001", type: "charge", amount: 10000, balance_after: 10000, description: "코인 충전", date: "2026-06-01 14:30", payment_method: "카카오페이" },
  { id: "CH-002", type: "use", amount: -2600, balance_after: 7400, description: "상담 사용 (티아라 · 2분)", date: "2026-06-01 15:00" },
  { id: "CH-003", type: "use", amount: -1500, balance_after: 5900, description: "상담 사용 (헤이즐넛 · 1분 30초)", date: "2026-06-02 10:15" },
  { id: "CH-004", type: "charge", amount: 50000, balance_after: 55900, description: "코인 충전", date: "2026-06-03 09:00", payment_method: "신용카드" },
  { id: "CH-005", type: "use", amount: -5000, balance_after: 50900, description: "상담 사용 (보리 · 2분)", date: "2026-06-03 20:30" },
  { id: "CH-006", type: "bonus", amount: 500, balance_after: 51400, description: "후기 작성 보너스", date: "2026-06-04 08:00" },
  { id: "CH-007", type: "use", amount: -3900, balance_after: 47500, description: "상담 사용 (도원 · 3분)", date: "2026-06-04 12:00" },
  { id: "CH-008", type: "use", amount: -1000, balance_after: 46500, description: "채팅상담 사용 (미소)", date: "2026-06-04 14:00" },
  { id: "CH-009", type: "charge", amount: 30000, balance_after: 76500, description: "코인 충전", date: "2026-05-28 11:00", payment_method: "네이버페이" },
  { id: "CH-010", type: "use", amount: -3000, balance_after: 73500, description: "상담 사용 (천신암 · 1분)", date: "2026-05-28 14:00" },
  { id: "CH-011", type: "use", amount: -7500, balance_after: 66000, description: "상담 사용 (청운 · 3분)", date: "2026-05-25 16:00" },
  { id: "CH-012", type: "bonus", amount: 5000, balance_after: 71000, description: "베스트 후기 선정 보너스", date: "2026-05-24 10:00" },
  { id: "CH-013", type: "use", amount: -2000, balance_after: 66000, description: "상담 사용 (태양신 · 1분)", date: "2026-05-20 19:00" },
  { id: "CH-014", type: "charge", amount: 20000, balance_after: 68000, description: "코인 충전", date: "2026-05-15 15:00", payment_method: "토스" },
  { id: "CH-015", type: "refund", amount: 10000, balance_after: 48000, description: "상담 취소 환불", date: "2026-05-10 13:00" },
];

export const CONSULT_HISTORY = [
  { id: "CS-001", consultant_code: "IT-20201130103819-067", consultant_name: "티아라", category: "tarot", type: "call", duration: 120, cost: 2600, date: "2026-06-01 15:00", status: "completed", has_review: true },
  { id: "CS-002", consultant_code: "IT-20210615093210-123", consultant_name: "헤이즐넛", category: "tarot", type: "call", duration: 90, cost: 1500, date: "2026-06-02 10:15", status: "completed", has_review: false },
  { id: "CS-003", consultant_code: "IT-20181217093619-607", consultant_name: "보리", category: "fortune", type: "call", duration: 120, cost: 5000, date: "2026-06-03 20:30", status: "completed", has_review: true },
  { id: "CS-004", consultant_code: "IT-20191215123456-222", consultant_name: "도원", category: "saju", type: "call", duration: 180, cost: 3900, date: "2026-06-04 12:00", status: "completed", has_review: false },
  { id: "CS-005", consultant_code: "CH-20211214105039-080", consultant_name: "미소", category: "tarot", type: "chat", duration: 0, cost: 1000, date: "2026-06-04 14:00", status: "completed", has_review: true },
  { id: "CS-006", consultant_code: "IT-20240206154010-350", consultant_name: "천신암", category: "fortune", type: "call", duration: 60, cost: 3000, date: "2026-05-28 14:00", status: "completed", has_review: true },
  { id: "CS-007", consultant_code: "IT-20180420123456-333", consultant_name: "청운", category: "saju", type: "call", duration: 180, cost: 7500, date: "2026-05-25 16:00", status: "completed", has_review: false },
  { id: "CS-008", consultant_code: "IT-20201015123456-777", consultant_name: "태양신", category: "fortune", type: "call", duration: 60, cost: 2000, date: "2026-05-20 19:00", status: "completed", has_review: true },
  { id: "CS-009", consultant_code: "IT-20230309145205-159", consultant_name: "아리아", category: "tarot", type: "call", duration: 300, cost: 6500, date: "2026-05-18 11:00", status: "completed", has_review: true },
  { id: "CS-010", consultant_code: "CH-20230607090018-927", consultant_name: "담희", category: "fortune", type: "chat", duration: 0, cost: 2400, date: "2026-05-15 18:00", status: "completed", has_review: true },
];

export const FAQ = [
  { id: "FQ-001", question: "코인은 어떻게 충전하나요?", answer: "마이페이지 > 코인 충전에서 원하는 금액을 선택하고 결제하시면 즉시 충전됩니다. 카드, 카카오페이, 네이버페이, 토스를 지원합니다." },
  { id: "FQ-002", question: "상담은 어떻게 시작하나요?", answer: "원하시는 상담사를 선택한 후 '전화상담' 또는 '채팅상담' 버튼을 클릭하세요. 전화상담은 상담사의 전화번호가 표시되고, 채팅상담은 즉시 채팅방이 열립니다." },
  { id: "FQ-003", question: "상담 비용은 어떻게 계산되나요?", answer: "전화상담은 30초 단위로 과금됩니다. 상담사별로 30초당 가격이 다르며, 상담 시작 전에 확인할 수 있습니다. 채팅상담은 메시지 단위 또는 시간 단위로 과금됩니다." },
  { id: "FQ-004", question: "상담 중 환불이 가능한가요?", answer: "상담 시작 후 30초 이내 취소 시 전액 환불됩니다. 그 이후에는 상담사 귀책 사유가 있을 경우에만 환불이 가능합니다." },
  { id: "FQ-005", question: "상담사는 어떻게 선택하나요?", answer: "카테고리(타로/사주/신점), 가격대, 평점, 후기 수를 기준으로 상담사를 필터링할 수 있습니다. 상담사 프로필에서 상세 정보와 후기를 확인 후 선택하세요." },
  { id: "FQ-006", question: "후기는 어떻게 작성하나요?", answer: "상담 종료 후 마이페이지 > 상담 내역에서 해당 상담의 '후기 작성' 버튼을 클릭하세요. 평점과 내용을 입력하면 후기가 등록됩니다." },
  { id: "FQ-007", question: "비회원도 상담이 가능한가요?", answer: "상담을 이용하시려면 회원가입이 필요합니다. 가입 시 10,000코인을 무료로 지급해드리니 부담 없이 시작해보세요." },
  { id: "FQ-008", question: "퍼플과 그린의 차이는 무엇인가요?", answer: "퍼플은 30초당 1,000원~, 그린은 30초당 500원~1,200원으로 가격대가 다릅니다. 같은 상담사가 두 티어에 모두 등록될 수 있습니다." },
  { id: "FQ-009", question: "채팅상담과 전화상담 중 어떤 게 나은가요?", answer: "빠르고 직접적인 상담을 원하시면 전화상담, 기록을 남기면서 천천히 상담하고 싶으시면 채팅상담을 추천합니다." },
  { id: "FQ-010", question: "개인정보는 안전하게 보호되나요?", answer: "모든 개인정보는 암호화되어 저장되며, 상담 내용은 철저히 비밀이 보장됩니다. 자세한 내용은 개인정보처리방침을 확인해주세요." },
];

export function getConsultantByCode(code) {
  return CONSULTANTS.find(c => c.it_code === code) || null;
}

export function getConsultantsByCategory(category, { limit = 10, offset = 0, order = "cematch", isGreen = false } = {}) {
  let filtered = category === "call" ? CONSULTANTS.filter(c => !c.it_code.startsWith("CH-") && !c.it_code.startsWith("CL-")) : CONSULTANTS;
  if (isGreen) filtered = filtered.filter(c => c.it_coin_price <= 1200);
  switch (order) {
    case "itemNew": filtered.sort((a, b) => (a.it_new === "Y" ? -1 : 1)); break;
    case "recent": filtered.sort((a, b) => b.consult_count - a.consult_count); break;
    case "calling": filtered.sort((a, b) => (a.status === "on" ? -1 : 1)); break;
    default: filtered.sort((a, b) => b.rating_avg - a.rating_avg); break;
  }
  return { items: filtered.slice(offset, offset + limit), total: filtered.length };
}

export function getReviewsByConsultant(code, { limit = 10, offset = 0 } = {}) {
  const filtered = REVIEWS.filter(r => r.consultant_code === code);
  return { reviews: filtered.slice(offset, offset + limit), total: filtered.length };
}

export const POLICIES = {
  terms: `제1조 (목적)

본 약관은 샘플카페(이하 "회사")가 제공하는 모든 서비스의 이용조건 및 절차, 회사와 회원 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.

제2조 (용어의 정의)
1. "서비스"란 회사가 제공하는 전화상담, 채팅상담, 클래스, 콘텐츠 등의 온라인 플랫폼 서비스를 말합니다.
2. "회원"이란 본 약관에 동의하고 회사에 개인정보를 제공하여 회원등록을 한 자로서 회사가 제공하는 서비스를 이용하는 자를 말합니다.
3. "코인"이란 서비스 내에서 상담 및 상품 구매에 사용되는 전자적 지불수단을 말합니다.

제3조 (약관의 효력 및 변경)
본 약관은 서비스를 이용하고자 하는 모든 회원에게 효력이 발생합니다.

제4조 (회원가입)
회원가입은 회원이 되고자 하는 자가 본 약관에 동의하고 회사가 정한 가입 양식에 따라 회원정보를 기입하여 회원가입을 신청함으로써 성립됩니다.

제5조 (개인정보보호)
회사는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다.

제6조 (서비스 이용)
회원은 서비스 내에서 전화상담, 채팅상담, 클래스 수강, 콘텐츠 이용, 상품 구매 등의 서비스를 이용할 수 있습니다.

제7조 (코인)
코인은 현금으로 환불되지 않으며, 회원 탈퇴 시 소멸됩니다. 단, 상담사 귀책 사유로 인한 상담 불가 시 환불이 가능합니다.

제8조 (이용제한)
회사는 다음 각 호에 해당하는 경우 회원의 서비스 이용을 제한할 수 있습니다.
1. 타인의 개인정보를 도용한 경우
2. 서비스 운영을 고의로 방해한 경우
3. 법령 또는 공공질서에 위반되는 행위를 한 경우

제9조 (면책)
회사는 상담 내용의 정확성에 대해 보증하지 않으며, 상담 결과에 대한 책임을 지지 않습니다.

제10조 (분쟁해결)
본 약관과 관련하여 분쟁이 발생할 경우 회사와 회원 간의 원활한 합의를 통해 해결합니다.`,
  privacy: `1. 수집하는 개인정보의 항목
- 필수항목: 이메일, 비밀번호, 닉네임
- 선택항목: 생년월일, 성별, 전화번호
- 자동수집항목: IP 주소, 쿠키, 접속 기록, 이용 기록

2. 개인정보의 수집 및 이용 목적
- 서비스 제공 및 계약 이행
- 회원 관리
- 서비스 개선 및 개발
- 법령상 의무 이행

3. 개인정보의 보유 및 이용 기간
회원 탈퇴 시까지 또는 법령에 따른 보존 기간 동안 개인정보를 보유합니다.

4. 개인정보의 제3자 제공
회사는 원칙적으로 회원의 개인정보를 제3자에게 제공하지 않습니다.

5. 개인정보의 파기
회원 탈퇴 시 또는 보유 기간 경과 시 지체 없이 파기합니다.

6. 이용자의 권리
이용자는 언제든지 자신의 개인정보를 조회, 수정, 삭제할 수 있습니다.

7. 쿠키의 운영
회사는 서비스 운영에 필요한 최소한의 쿠키를 사용합니다.

8. 개인정보 보호책임자
- 이름: 샘플카페 개인정보보호책임자
- 이메일: privacy@example.com`,
};

export const CAFE_INFO = {
  name: "샘플카페 홍대점",
  address: "서울특별시 마포구 와우산로 29길 34 2층",
  hours: "매일 10:00 - 22:00 (연중무휴)",
  phone: "02-322-3344",
  description: "샘플카페 홍대점에서는 전화상담 뿐만 아니라 대면상담도 가능합니다. 타로, 사주, 신점 상담사들이 상시 대기 중이며, 다양한 클래스와 이벤트도 진행하고 있습니다.",
  services: ["타로 대면상담", "사주 대면상담", "신점 대면상담", "타로 카드 클래스", "이벤트 및 워크샵"],
  images: [],
};
