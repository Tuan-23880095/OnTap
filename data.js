/**
 * DATA.JS - Dữ liệu đề thi
 * Yêu cầu: Phải load app.js trước file này
 */

// --- KHU 1: TOÁN ---
const mathDomain = new Domain("Toán Học", "📐");

const toan6 = new Subject("Toán 6", "Toan6");
// Đảm bảo tên file HTML chính xác với file bạn đã upload trong thư mục Toan6
toan6.addExam(new Exam("T6_CK1_01", "Đề Cuối Kỳ 1 - Số 01", "90 phút", "T6_CK1_2526_01.html"));

const toan11 = new Subject("Toán 11", "Toan11");
// Ví dụ đề mẫu
// toan11.addExam(new Exam("T11_21", "Đề kiểm tra số 21", "90 phút", "de21.html"));

mathDomain.addSubject(toan6).addSubject(toan11);

// --- KHU 2: KHOA HỌC TỰ NHIÊN ---
const scienceDomain = new Domain("Khoa Học Tự Nhiên", "🧪");
const khtn6 = new Subject("KHTN 6", "KHTN6");
scienceDomain.addSubject(khtn6);

// --- KHU 3: KHOA HỌC XÃ HỘI ---
const socialDomain = new Domain("Khoa Học Xã Hội", "📚");
const van7 = new Subject("Ngữ Văn 7", "Van7");
socialDomain.addSubject(van7);

// --- KHU 4: MÔN KHÁC ---
const otherDomain = new Domain("MÔN KHÁC", "💡");

// Lưu ý: Folder là MonPhu để khớp với ảnh cấu trúc thư mục
const cn7 = new Subject("Công Nghệ 7", "MonPhu"); 
cn7.addExam(new Exam("CN7_CK1_01", "Đề Cuối Kỳ 1 - Số 01", "45 phút", "CN7_CK1_2526_01.html"));

otherDomain.addSubject(cn7);

// --- TỔNG HỢP DỮ LIỆU ---
// Biến database này sẽ được index.html sử dụng
const database = [mathDomain, scienceDomain, socialDomain, otherDomain];
