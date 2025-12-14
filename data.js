/**
 * DATA.JS - Dữ liệu đề thi
 * Sử dụng các Class đã định nghĩa trong app.js
 */

// --- KHU 1: TOÁN ---
const mathDomain = new Domain("Toán Học", "📐");

const toan6 = new Subject("Toán 6", "Toan6");
toan6.addExam(new Exam("T6_CK1_01", "Đề Cuối Kỳ 1 - Số 01", "60 phút", "T6_CK1_2526_01.html"));
// Thêm đề khác: toan6.addExam(new Exam("ID", "Tên", "TG", "file.html"));

const toan11 = new Subject("Toán 11", "Toan11");
toan11.addExam(new Exam("T11_21", "Đề kiểm tra số 21", "90 phút", "de21.html"));

mathDomain.addSubject(toan6).addSubject(toan11);

// --- KHU 2: KHOA HỌC TỰ NHIÊN ---
const scienceDomain = new Domain("Khoa Học Tự Nhiên", "🧪");
const khtn6 = new Subject("KHTN 6", "KHTN6");
// khtn6.addExam(...);
scienceDomain.addSubject(khtn6);

// --- KHU 3: KHOA HỌC XÃ HỘI ---
const socialDomain = new Domain("Khoa Học Xã Hội", "📚");
const van7 = new Subject("Ngữ Văn 7", "Van7");
socialDomain.addSubject(van7);

// --- KHU 4: MÔN KHÁC (Sửa folder thành MonPhu) ---
const otherDomain = new Domain("MÔN KHÁC", "💡");

const cn7 = new Subject("Công Nghệ 7", "MonPhu"); // Folder là MonPhu khớp với ảnh
cn7.addExam(new Exam("CN7_CK1_01", "Đề Cuối Kỳ 1 - Số 01", "60 phút", "CN7_CK1_2526_01.html"));

otherDomain.addSubject(cn7);

// --- TỔNG HỢP DỮ LIỆU ---
// Biến này sẽ được index.html sử dụng
const database = [mathDomain, scienceDomain, socialDomain, otherDomain];
