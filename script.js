/* ===== i18n Data ===== */
const i18n = {
  vi: {
    nav_home: "Trang Chủ", nav_corp: "Thuê Xe Doanh Nghiệp", nav_short: "Thuê Xe Ngắn Hạn", nav_contact: "Liên Hệ",
    hero_badge: "Dịch vụ thuê xe hàng đầu Việt Nam",
    hero_title: "Hoang Car", hero_title_sub: "Premium Car Rental",
    hero_subtitle: "Đối tác vận hành đáng tin cậy cho doanh nghiệp và cá nhân",
    tag1: "Xe mới dưới 3 năm", tag2: "Tài xế chuyên nghiệp", tag3: "Bảo hiểm toàn diện", tag4: "Hỗ trợ đa ngôn ngữ",
    hero_cta: "Tư Vấn Ngay", hero_hotline: "24/7 Hotline",
    stat1v: "500+", stat1l: "Xe trong đội", stat2v: "50+", stat2l: "Doanh nghiệp đối tác", stat3v: "4", stat3l: "Chi nhánh toàn quốc", stat4v: "24/7", stat4l: "Hỗ trợ khách hàng",
    corp_badge: "Corporate", corp_title: "Thuê Xe Doanh Nghiệp Dài Hạn", corp_subtitle: "Giải pháp vận hành tối ưu với chi phí hợp lý cho doanh nghiệp của bạn",
    type1: "Thuê Xe Tự Lái", type1d: "Tự do lái xe với đội xe đa dạng, từ sedan đến SUV 7 chỗ.",
    type2: "Thuê Xe Có Tài Xế", type2d: "Tài xế chuyên nghiệp, đào tạo bài bản, am hiểu địa hình.",
    type3: "Full Package", type3d: "Xe + Tài xế + Nhiên liệu — Trọn gói tiết kiệm.",
    benefits_title: "Lợi ích khi chọn Hoang Car",
    b1: "Tư vấn đa ngôn ngữ", b2: "Tối ưu chi phí vận hành", b3: "Bảo hiểm toàn diện", b4: "Số lượng lớn xe mới",
    b5: "Thanh toán minh bạch GPS", b6: "Xuất hóa đơn VAT", b7: "Xe thay thế khi bảo trì quá 24h", b8: "Hỗ trợ 24/7",
    short_badge: "Short-term", short_title: "Thuê Xe Ngắn Hạn", short_subtitle: "Đưa đón chuyên nghiệp với giá cả minh bạch",
    s1: "Đưa Đón Sân Bay", s1d: "Đưa đón tận nơi tại sân bay Nội Bài, Đà Nẵng, Tân Sơn Nhất, Cam Ranh. Tài xế chờ sẵn, xe sạch sẽ, giá niêm yết.",
    s2: "Thuê Xe Theo Ngày/Tháng", s2d: "Thuê xe linh hoạt theo ngày hoặc tháng. Phù hợp công tác, du lịch, sự kiện. Đa dạng dòng xe từ 4 đến 16 chỗ.",
    img_badge1: "Giá cố định", img_badge2: "Không phí ẩn",
    areas: "Khu Vực Hoạt Động", a1: "Hà Nội", a2: "Đà Nẵng", a3: "Nha Trang", a4: "TP. Hồ Chí Minh",
    cmp_badge: "Comparison", cmp_title: "So Sánh Dịch Vụ", cmp_subtitle: "Tại sao chọn Hoang Car thay vì taxi thông thường?",
    feat: "Tiêu chí", lotte: "Hoang Car", taxi: "Taxi thông thường",
    f1: "Tài xế đào tạo chuyên nghiệp", f2: "Xe mới dưới 3 năm", f3: "Hỗ trợ tiếng Hàn", f4: "Dùng giờ tuyệt đối", f5: "Giá cước định, không phí ẩn", f6: "Bảo hiểm toàn diện", f7: "Xuất hóa đơn VAT",
    test_badge: "Testimonials", test_title: "Khách Hàng Nói Gì Về Chúng Tôi", test_subtitle: "Phản hồi từ các đối tác và khách hàng thực tế",
    t1q: "Hoang Car has been our trusted partner for 3 years. Their multilingual support and transparent billing make fleet management effortless.",
    t1n: "Mr. Park Sung-ho", t1t: "CEO, KTech Vietnam",
    t2q: "Chúng tôi sử dụng dịch vụ thuê xe dài hạn cho đội ngũ 50 nhân sự. Xe luôn mới, tài xế chuyên nghiệp và hỗ trợ tiếng Hàn rất tốt.",
    t2n: "Ms. Nguyễn Thị Mai", t2t: "GM Operations, VinaCorp",
    t3q: "풀 패키지 서비스를 이용하고 있습니다. 연료, 기사, 차량이 모두 포함되어 있어 운영비 절감에 큰 도움이 됩니다.",
    t3n: "Mr. Kim Jun-hyeok", t3t: "Director, Hanseo Construction",
    t4q: "Dịch vụ đưa đón sân bay rất chuyên nghiệp. Tài xế đúng giờ, xe sạch sẽ và giá cả hợp lý.",
    t4n: "Ms. Trần Thu Hà", t4t: "Admin Manager, FDI Solutions",
    form_badge: "Contact", form_title: "Đặt Lịch Tư Vấn Miễn Phí", form_subtitle: "Điền thông tin bên dưới, chuyên viên sẽ liên hệ trong 30 phút",
    fl_name: "Họ và tên", fl_phone: "Số điện thoại", fl_email: "Email", fl_region: "Khu vực", fl_model: "Mô hình thuê",
    fl_car: "Dòng xe quan tâm", fl_time: "Thời gian thuê dự kiến", fl_note: "Yêu cầu khác",
    ph_name: "Nguyễn Văn A", ph_phone: "09xx xxx xxx", ph_email: "email@example.com",
    ph_region: "Chọn khu vực", ph_model: "Chọn mô hình", ph_car: "Chọn dòng xe", ph_time: "VD: 3 tháng, 1 năm...", ph_note: "Nhập yêu cầu đặc biệt...",
    opt_north: "Miền Bắc (Hà Nội)", opt_central: "Miền Trung (Đà Nẵng, Nha Trang)", opt_south: "Miền Nam (TP.HCM)",
    opt_long: "Dài hạn (Doanh nghiệp)", opt_short: "Ngắn hạn (Cá nhân)",
    opt_sedan: "Sedan", opt_suv: "SUV", opt_mpv: "MPV (7 chỗ)", opt_van: "Van (16 chỗ)", opt_luxury: "Xe sang",
    agree: "Tôi đồng ý với Chính sách bảo vệ dữ liệu cá nhân", submit: "Gửi Yêu Cầu Tư Vấn",
    sending: "Đang gửi...",
    err_fields: "Vui lòng điền đầy đủ thông tin bắt buộc.", err_phone: "Số điện thoại không hợp lệ.", err_model: "Vui lòng chọn mô hình thuê xe.", err_agree: "Vui lòng đồng ý với chính sách bảo vệ dữ liệu.",
    ok: "Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.",
    priv_title: "Chính Sách Bảo Vệ Dữ Liệu Cá Nhân", priv_updated: "Cập nhật: Tháng 4/2026",
    priv_collected: "Dữ Liệu Thu Thập", priv_purpose: "Mục Đích Sử Dụng", priv_rights: "Quyền Của Khách Hàng",
    pd1: "Thông tin cá nhân (Tên, SĐT, Email)", pd2: "Thông tin doanh nghiệp", pd3: "Nhu cầu dịch vụ",
    pp1: "Tư vấn và cung cấp dịch vụ", pp2: "Hỗ trợ khách hàng", pp3: "Thực hiện nghĩa vụ pháp lý", pp4: "Nâng cao chất lượng dịch vụ",
    pr1: "Quyền truy cập và chỉnh sửa dữ liệu", pr2: "Quyền xóa dữ liệu", pr3: "Quyền phản đối xử lý dữ liệu",
    fb_desc: "Hoang Car - Đối tác vận hành đáng tin cậy với đội ngũ xe mới, tài xế chuyên nghiệp và dịch vụ 24/7.",
    fb_branches: "Chi Nhánh", fb_services: "Dịch Vụ", fb_legal: "Pháp Lý",
    fb_corp: "Thuê xe doanh nghiệp", fb_short: "Thuê xe ngắn hạn", fb_airport: "Đưa đón sân bay",
    fb_privacy: "Chính sách bảo mật", fb_terms: "Điều khoản sử dụng",
    fb_copy: "© 2026 Hoang Car Vietnam. Tất cả quyền được bảo lưu.",
    fb_email_label: "Email", fb_email: "cskh@hoangcar.vn",
    back_top: "Về đầu trang",
  },
  en: {
    nav_home: "Home", nav_corp: "Corporate Rental", nav_short: "Short-term Rental", nav_contact: "Contact",
    hero_badge: "Vietnam's Leading Car Rental Service",
    hero_title: "Hoang Car", hero_title_sub: "Premium Car Rental",
    hero_subtitle: "Your trusted mobility partner for business and personal needs",
    tag1: "Cars under 3 years", tag2: "Professional drivers", tag3: "Comprehensive insurance", tag4: "Multi-language support",
    hero_cta: "Get Free Consultation", hero_hotline: "24/7 Hotline",
    stat1v: "500+", stat1l: "Fleet Vehicles", stat2v: "50+", stat2l: "Corporate Partners", stat3v: "4", stat3l: "Branches Nationwide", stat4v: "24/7", stat4l: "Customer Support",
    corp_badge: "Corporate", corp_title: "Long-term Corporate Rental", corp_subtitle: "Optimize your fleet operations with cost-effective solutions",
    type1: "Self-drive Rental", type1d: "Drive freely with our diverse fleet, from sedans to 7-seat SUVs.",
    type2: "Chauffeur-driven Rental", type2d: "Professional, well-trained drivers with local expertise.",
    type3: "Full Package", type3d: "Vehicle + Driver + Fuel — All-inclusive savings.",
    benefits_title: "Why choose Hoang Car",
    b1: "Multi-language consultation", b2: "Cost optimization", b3: "Comprehensive insurance", b4: "Large fleet of new vehicles",
    b5: "Transparent GPS billing", b6: "VAT invoice available", b7: "Replacement vehicle for maintenance > 24h", b8: "24/7 Support",
    short_badge: "Short-term", short_title: "Short-term Rental", short_subtitle: "Professional service with transparent pricing",
    s1: "Airport Transfer", s1d: "Door-to-door pickup at Noi Bai, Da Nang, Tan Son Nhat, Cam Ranh airports. Professional drivers, clean vehicles, fixed prices.",
    s2: "Daily / Monthly Rental", s2d: "Flexible daily or monthly rental. Ideal for business trips, travel, and events. Fleet from 4 to 16 seats.",
    img_badge1: "Fixed Price", img_badge2: "No hidden fees",
    areas: "Service Areas", a1: "Hanoi", a2: "Da Nang", a3: "Nha Trang", a4: "Ho Chi Minh City",
    cmp_badge: "Comparison", cmp_title: "Service Comparison", cmp_subtitle: "Why choose Hoang Car over regular taxis?",
    feat: "Criteria", lotte: "Hoang Car", taxi: "Regular Taxi",
    f1: "Professionally trained drivers", f2: "Vehicles under 3 years old", f3: "Korean language support", f4: "Guaranteed hourly usage", f5: "Fixed rates, no hidden fees", f6: "Comprehensive insurance", f7: "VAT invoice available",
    test_badge: "Testimonials", test_title: "What Our Customers Say", test_subtitle: "Feedback from our partners and customers",
    t1q: "Hoang Car has been our trusted partner for 3 years. Their multilingual support and transparent billing make fleet management effortless.",
    t1n: "Mr. Park Sung-ho", t1t: "CEO, KTech Vietnam",
    t2q: "We use long-term rental for our team of 50. Vehicles are always new, drivers professional, and Korean support is excellent.",
    t2n: "Ms. Nguyen Thi Mai", t2t: "GM Operations, VinaCorp",
    t3q: "We use the full package service. Fuel, driver, and vehicle are all included, greatly reducing our operating costs. Highly recommended!",
    t3n: "Mr. Kim Jun-hyeok", t3t: "Director, Hanseo Construction",
    t4q: "Very professional airport transfer service. Driver was on time, car was clean, and pricing was reasonable.",
    t4n: "Ms. Tran Thu Ha", t4t: "Admin Manager, FDI Solutions",
    form_badge: "Contact", form_title: "Book a Free Consultation", form_subtitle: "Fill in the form below and our team will contact you within 30 minutes",
    fl_name: "Full Name", fl_phone: "Phone Number", fl_email: "Email", fl_region: "Region", fl_model: "Rental Model",
    fl_car: "Vehicle of Interest", fl_time: "Rental Duration", fl_note: "Special Requirements",
    ph_name: "John Doe", ph_phone: "09xx xxx xxx", ph_email: "email@example.com",
    ph_region: "Select region", ph_model: "Select model", ph_car: "Select vehicle", ph_time: "e.g., 3 months, 1 year...", ph_note: "Enter your special requirements...",
    opt_north: "North (Hanoi)", opt_central: "Central (Da Nang, Nha Trang)", opt_south: "South (HCMC)",
    opt_long: "Long-term (Corporate)", opt_short: "Short-term (Personal)",
    opt_sedan: "Sedan", opt_suv: "SUV", opt_mpv: "MPV (7 seats)", opt_van: "Van (16 seats)", opt_luxury: "Luxury",
    agree: "I agree to the Personal Data Protection Policy", submit: "Submit Request",
    sending: "Sending...",
    err_fields: "Please fill in all required fields.", err_phone: "Invalid phone number.", err_model: "Please select a rental model.", err_agree: "Please agree to the data protection policy.",
    ok: "Request submitted successfully! We will contact you shortly.",
    priv_title: "Personal Data Protection Policy", priv_updated: "Updated: January 2025",
    priv_collected: "Data Collected", priv_purpose: "Purpose of Use", priv_rights: "Customer Rights",
    pd1: "Personal information (Name, Phone, Email)", pd2: "Business information", pd3: "Service requirements",
    pp1: "Consulting and service provision", pp2: "Customer support", pp3: "Legal obligations", pp4: "Service quality improvement",
    pr1: "Right to access and edit data", pr2: "Right to delete data", pr3: "Right to object to data processing",
    fb_desc: "Hoang Car - Your trusted mobility partner with a new fleet, professional drivers, and 24/7 service.",
    fb_branches: "Branches", fb_services: "Services", fb_legal: "Legal",
    fb_corp: "Corporate rental", fb_short: "Short-term rental", fb_airport: "Airport transfer",
    fb_privacy: "Privacy Policy", fb_terms: "Terms of Service",
    fb_copy: "© 2026 Hoang Car Vietnam. All rights reserved.",
    fb_email_label: "Email", fb_email: "cskh@hoangcar.vn",
    back_top: "Back to top",
  },
  kr: {
    nav_home: "홈", nav_corp: "기업 장기 렌탈", nav_short: "단기 렌탈", nav_contact: "연락처",
    hero_badge: "베트남 1위 렌터카 서비스",
    hero_title: "롯데 렌탈", hero_title_sub: "Premium Car Rental",
    hero_subtitle: "기업 및 개인을 위한 신뢰할 수 있는 이동 파트너",
    tag1: "3년 이하 신차", tag2: "전문 기사", tag3: "종합 보험", tag4: "다국어 지원",
    hero_cta: "무료 상담 신청", hero_hotline: "24시간 핫라인",
    stat1v: "500+", stat1l: "차량", stat2v: "50+", stat2l: "기업 파트너", stat3v: "4", stat3l: "전국 지점", stat4v: "24/7", stat4l: "고객 지원",
    corp_badge: "Corporate", corp_title: "기업 장기 렌터카", corp_subtitle: "비용 최적화 솔루션으로 운영 효율을 높이세요",
    type1: "셀프 드라이브", type1d: "세단부터 7인승 SUV까지 다양한 차량을 직접 운전하세요.",
    type2: "전문 기사 포함", type2d: "지역 전문 지식을 갖춘 전문 교육 기사.",
    type3: "풀 패키지", type3d: "차량 + 기사 + 연료 — 올인원 절약.",
    benefits_title: "롯데 렌탈을 선택하는 이유",
    b1: "다국어 상담", b2: "운영비 최적화", b3: "종합 보험", b4: "다수의 신차 보유",
    b5: "GPS 투명 결제", b6: "부가세 영수증 발행", b7: "24시간 이상 정비 시 대체 차량 제공", b8: "24/7 지원",
    short_badge: "Short-term", short_title: "단기 렌터카", short_subtitle: "투명한 가격의 전문 서비스",
    s1: "공항 픽업/샌딩", s1d: "노이바이, 다낭, 떤선녓, 깜랑 공항 도어투도어 픽업. 전문 기사, 깨끗한 차량, 고정 가격.",
    s2: "일/월 단위 렌탈", s2d: "일/월 단위 유연한 렌탈. 출장, 여행, 행사에 적합. 4~16인승 차량.",
    img_badge1: "정액제", img_badge2: "숨은 비용 없음",
    areas: "서비스 지역", a1: "하노이", a2: "다낭", a3: "나트랑", a4: "호치민시",
    cmp_badge: "Comparison", cmp_title: "서비스 비교", cmp_subtitle: "왜 일반 택시 대신 롯데 렌탈을 선택해야 할까요?",
    feat: "기준", lotte: "롯데 렌탈", taxi: "일반 택시",
    f1: "전문 교육 기사", f2: "3년 이하 신차", f3: "한국어 지원", f4: "시간 보장", f5: "정액제, 숨은 비용 없음", f6: "종합 보험", f7: "부가세 영수증",
    test_badge: "Testimonials", test_title: "고객 후기", test_subtitle: "파트너 및 고객의 실제 피드백",
    t1q: "롯데 렌탈은 3년간 저희의 신뢰할 수 있는 파트너였습니다. 다국어 지원과 투명한 결제로 차량 관리가 쉬워졌습니다.",
    t1n: "Mr. Park Sung-ho", t1t: "CEO, KTech Vietnam",
    t2q: "50명 팀을 위해 장기 렌탈을 이용 중입니다. 차량은 항상 새것, 기사는 전문적이며 한국어 지원이 훌륭합니다.",
    t2n: "Ms. Nguyen Thi Mai", t2t: "GM Operations, VinaCorp",
    t3q: "풀 패키지 서비스를 이용하고 있습니다. 연료, 기사, 차량이 모두 포함되어 있어 운영비 절감에 큰 도움이 됩니다. 강력 추천합니다!",
    t3n: "Mr. Kim Jun-hyeok", t3t: "Director, Hanseo Construction",
    t4q: "공항 픽업 서비스가 매우 전문적입니다. 기사가 정시에 도착하고, 차량이 깨끗하며, 가격이 합리적입니다.",
    t4n: "Ms. Tran Thu Ha", t4t: "Admin Manager, FDI Solutions",
    form_badge: "Contact", form_title: "무료 상담 예약", form_subtitle: "아래 양식을 작성하시면 30분 내에 연락드립니다",
    fl_name: "이름", fl_phone: "전화번호", fl_email: "이메일", fl_region: "지역", fl_model: "렌탈 모델",
    fl_car: "관심 차량", fl_time: "렌탈 기간", fl_note: "특별 요구사항",
    ph_name: "김철수", ph_phone: "09xx xxx xxx", ph_email: "email@example.com",
    ph_region: "지역 선택", ph_model: "모델 선택", ph_car: "차량 선택", ph_time: "예: 3개월, 1년...", ph_note: "특별 요구사항을 입력하세요...",
    opt_north: "북부 (하노이)", opt_central: "중부 (다낭, 나트랑)", opt_south: "남부 (호치민)",
    opt_long: "장기 (기업)", opt_short: "단기 (개인)",
    opt_sedan: "Sedan", opt_suv: "SUV", opt_mpv: "MPV (7인승)", opt_van: "Van (16인승)", opt_luxury: "럭셔리",
    agree: "개인정보 보호정책에 동의합니다", submit: "상담 신청",
    sending: "전송 중...",
    err_fields: "필수 항목을 모두 입력해 주세요.", err_phone: "전화번호가 유효하지 않습니다.", err_model: "렌탈 모델을 선택해 주세요.", err_agree: "개인정보 보호정책에 동의해 주세요.",
    ok: "신청이 완료되었습니다! 빠른 시일 내에 연락드리겠습니다.",
    priv_title: "개인정보 보호정책", priv_updated: "업데이트: 2025년 1월",
    priv_collected: "수집 데이터", priv_purpose: "이용 목적", priv_rights: "고객 권리",
    pd1: "개인 정보 (이름, 전화, 이메일)", pd2: "기업 정보", pd3: "서비스 요구사항",
    pp1: "상담 및 서비스 제공", pp2: "고객 지원", pp3: "법적 의무 이행", pp4: "서비스 품질 향상",
    pr1: "데이터 열람 및 수정 권리", pr2: "데이터 삭제 권리", pr3: "데이터 처리에 대한 이의 제기 권리",
    fb_desc: "롯데 렌탈 - 신차, 전문 기사, 24/7 서비스로 신뢰할 수 있는 이동 파트너.",
    fb_branches: "지점", fb_services: "서비스", fb_legal: "법적 고지",
    fb_corp: "기업 렌탈", fb_short: "단기 렌탈", fb_airport: "공항 픽업",
    fb_privacy: "개인정보 보호정책", fb_terms: "이용약관",
    fb_copy: "© 2026 Hoang Car Vietnam. 모든 권리 보유.",
    fb_email_label: "이메일", fb_email: "cskh@hoangcar.vn",
    back_top: "맨 위로",
  }
};

let currentLang = 'vi';

function t(key) { return i18n[currentLang][key] || key; }

/* ===== DOM Ready ===== */
document.addEventListener('DOMContentLoaded', () => {
  initLang();
  initScroll();
  initNav();
  initForm();
  initAnimations();
  initPrivacyModal();
  renderPage();
});

/* ===== Language ===== */
function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPage();
    });
  });
}

/* ===== Render ===== */
function renderPage() {
  const d = i18n[currentLang];

  // Nav
  setText('#nav-home', d.nav_home);
  setText('#nav-corp', d.nav_corp);
  setText('#nav-short', d.nav_short);
  setText('#nav-contact', d.nav_contact);

  // Hero
  setText('#hero-badge', d.hero_badge);
  setText('#hero-title', d.hero_title);
  setText('#hero-title-sub', d.hero_title_sub);
  setText('#hero-subtitle', d.hero_subtitle);
  setText('.hero-tag-1', d.tag1);
  setText('.hero-tag-2', d.tag2);
  setText('.hero-tag-3', d.tag3);
  setText('.hero-tag-4', d.tag4);
  setText('#hero-cta', d.hero_cta);
  setText('#hero-hotline-label', d.hero_hotline);
  setText('.stat-1-val', d.stat1v);
  setText('.stat-1-label', d.stat1l);
  setText('.stat-2-val', d.stat2v);
  setText('.stat-2-label', d.stat2l);
  setText('.stat-3-val', d.stat3v);
  setText('.stat-3-label', d.stat3l);
  setText('.stat-4-val', d.stat4v);
  setText('.stat-4-label', d.stat4l);

  // Corporate
  setText('#corp-badge', d.corp_badge);
  setText('#corp-title', d.corp_title);
  setText('#corp-subtitle', d.corp_subtitle);
  setText('#type1-title', d.type1);
  setText('#type1-desc', d.type1d);
  setText('#type2-title', d.type2);
  setText('#type2-desc', d.type2d);
  setText('#type3-title', d.type3);
  setText('#type3-desc', d.type3d);
  setText('#benefits-title', d.benefits_title);
  const benefitTexts = [d.b1,d.b2,d.b3,d.b4,d.b5,d.b6,d.b7,d.b8];
  document.querySelectorAll('.benefit-text').forEach((el, i) => { if (benefitTexts[i]) el.textContent = benefitTexts[i]; });

  // Short-term
  setText('#short-badge', d.short_badge);
  setText('#short-title', d.short_title);
  setText('#short-subtitle', d.short_subtitle);
  setText('#s1-title', d.s1);
  setText('#s1-desc', d.s1d);
  setText('#s2-title', d.s2);
  setText('#s2-desc', d.s2d);
  setText('.img-badge-strong', d.img_badge1);
  setText('.img-badge-small', d.img_badge2);
  setText('#areas-title', d.areas);
  setText('#area-1', d.a1);
  setText('#area-2', d.a2);
  setText('#area-3', d.a3);
  setText('#area-4', d.a4);

  // Comparison
  setText('#cmp-badge', d.cmp_badge);
  setText('#cmp-title', d.cmp_title);
  setText('#cmp-subtitle', d.cmp_subtitle);
  setText('#th-feat', d.feat);
  setText('#th-lotte', d.lotte);
  setText('#th-taxi', d.taxi);
  const features = [d.f1,d.f2,d.f3,d.f4,d.f5,d.f6,d.f7];
  document.querySelectorAll('.feat-text').forEach((el, i) => { if (features[i]) el.textContent = features[i]; });

  // Testimonials
  setText('#test-badge', d.test_badge);
  setText('#test-title', d.test_title);
  setText('#test-subtitle', d.test_subtitle);
  const quotes = [d.t1q,d.t2q,d.t3q,d.t4q];
  const names = [d.t1n,d.t2n,d.t3n,d.t4n];
  const titles = [d.t1t,d.t2t,d.t3t,d.t4t];
  document.querySelectorAll('.test-quote').forEach((el, i) => { if (quotes[i]) el.textContent = quotes[i]; });
  document.querySelectorAll('.test-name').forEach((el, i) => { if (names[i]) el.textContent = names[i]; });
  document.querySelectorAll('.test-title-text').forEach((el, i) => { if (titles[i]) el.textContent = titles[i]; });

  // Form
  setText('#form-badge', d.form_badge);
  setText('#form-title', d.form_title);
  setText('#form-subtitle', d.form_subtitle);
  setText('#fl-name', d.fl_name + ' <span class="required">*</span>');
  setText('#fl-phone', d.fl_phone + ' <span class="required">*</span>');
  setText('#fl-email', d.fl_email);
  setText('#fl-region', d.fl_region);
  setText('#fl-model', d.fl_model + ' <span class="required">*</span>');
  setText('#fl-car', d.fl_car);
  setText('#fl-time', d.fl_time);
  setText('#fl-note', d.fl_note);
  setPlaceholder('#inp-name', d.ph_name);
  setPlaceholder('#inp-phone', d.ph_phone);
  setPlaceholder('#inp-email', d.ph_email);
  setPlaceholder('#inp-time', d.ph_time);
  setPlaceholder('#inp-note', d.ph_note);
  document.querySelector('#sel-region option[disabled]').textContent = d.ph_region;
  document.querySelector('#sel-model option[disabled]').textContent = d.ph_model;
  document.querySelector('#sel-car option[disabled]').textContent = d.ph_car;
  setText('#opt-north', d.opt_north);
  setText('#opt-central', d.opt_central);
  setText('#opt-south', d.opt_south);
  setText('#opt-long', d.opt_long);
  setText('#opt-short', d.opt_short);
  setText('#opt-sedan', d.opt_sedan);
  setText('#opt-suv', d.opt_suv);
  setText('#opt-mpv', d.opt_mpv);
  setText('#opt-van', d.opt_van);
  setText('#opt-luxury', d.opt_luxury);
  setText('#agree-text', d.agree);
  setText('#submit-text', d.submit);

  // Footer
  setText('#fb-desc', d.fb_desc);
  setText('#fb-branches', d.fb_branches);
  setText('#fb-services', d.fb_services);
  setText('#fb-legal', d.fb_legal);
  setText('#fb-corp', d.fb_corp);
  setText('#fb-short', d.fb_short);
  setText('#fb-airport', d.fb_airport);
  setText('#fb-privacy', d.fb_privacy);
  setText('#fb-terms', d.fb_terms);
  setText('#fb-copy', d.fb_copy);
  setText('#fb-email-label', d.fb_email_label);
  setText('#fb-email', d.fb_email);

  // Privacy modal
  setText('#priv-title', d.priv_title);
  setText('#priv-updated', d.priv_updated);
  setText('#priv-collected', d.priv_collected);
  setText('#priv-purpose', d.priv_purpose);
  setText('#priv-rights', d.priv_rights);
  setText('#pd-1', d.pd1);
  setText('#pd-2', d.pd2);
  setText('#pd-3', d.pd3);
  setText('#pp-1', d.pp1);
  setText('#pp-2', d.pp2);
  setText('#pp-3', d.pp3);
  setText('#pp-4', d.pp4);
  setText('#pr-1', d.pr1);
  setText('#pr-2', d.pr2);
  setText('#pr-3', d.pr3);

  // Back to top
  document.querySelector('.back-to-top').setAttribute('aria-label', d.back_top);
}

function setText(sel, val) {
  const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
  if (!el) return;
  if (el.id === 'hero-title') {
    const sub = el.querySelector('#hero-title-sub');
    el.textContent = val;
    if (sub) el.appendChild(sub);
    return;
  }
  el.innerHTML = val;
}
function setPlaceholder(sel, val) {
  const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
  if (el) el.placeholder = val;
}

/* ===== Scroll Effects ===== */
function initScroll() {
  const header = document.querySelector('.header');
  const backTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const sy = window.scrollY;
    if (header) header.classList.toggle('scrolled', sy > 20);
    if (backTop) backTop.classList.toggle('visible', sy > 400);
  });

  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ===== Nav ===== */
function initNav() {
  document.querySelectorAll('.nav a, .mobile-menu a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href').replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      document.querySelector('.mobile-menu').classList.remove('open');
    });
  });

  const toggle = document.querySelector('.mobile-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
}

/* ===== Form ===== */
function initForm() {
  const form = document.getElementById('consultation-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const d = i18n[currentLang];
    const name = document.getElementById('inp-name').value.trim();
    const phone = document.getElementById('inp-phone').value.trim();
    const model = document.getElementById('sel-model').value;
    const agree = document.getElementById('inp-agree').checked;

    if (!name || !phone) return showToast(d.err_fields, 'error');
    if (!/^[\d\s\-+()]{8,15}$/.test(phone)) return showToast(d.err_phone, 'error');
    if (!model) return showToast(d.err_model, 'error');
    if (!agree) return showToast(d.err_agree, 'error');

    const btn = form.querySelector('.form-submit');
    const origHTML = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<div class="spinner"></div>' + d.sending;

    setTimeout(() => {
      showToast(d.ok, 'success');
      form.reset();
      btn.disabled = false;
      btn.innerHTML = origHTML;
      renderPage(); // re-render button text
    }, 500);
  });
}

/* ===== Toast ===== */
function showToast(msg, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast ' + type;
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ===== Scroll Animations ===== */
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-60px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ===== Privacy Modal ===== */
function initPrivacyModal() {
  const overlay = document.querySelector('.modal-overlay');
  const openBtns = document.querySelectorAll('[data-privacy], [data-terms]');
  const closeBtn = document.querySelector('.modal-close');
  const privacySection = document.querySelector('.modal-privacy');
  const termsSection = document.querySelector('.modal-terms');

  if (openBtns.length && overlay) {
    openBtns.forEach(btn => btn.addEventListener('click', () => {
      const isTerms = btn.hasAttribute('data-terms');
      if (privacySection) privacySection.style.display = isTerms ? 'none' : 'block';
      if (termsSection) termsSection.style.display = isTerms ? 'block' : 'none';
      overlay.classList.add('open');
    }));
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
  }
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.classList.remove('open');
    });
  }
}
