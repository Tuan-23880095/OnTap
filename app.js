/**
 * LỚP ĐỐI TƯỢNG (OOP)
 */

// Class đại diện cho một Đề thi
class Exam {
    constructor(id, title, time, folder, filename) {
        this.id = id;
        this.title = title;
        this.time = time;
        this.path = `${folder}/${filename}`; // Tự động tạo đường dẫn: Toan11/de22.html
    }
}

// Class đại diện cho một Môn học/Lĩnh vực
class Subject {
    constructor(name, code) {
        this.name = name;
        this.code = code; // Ví dụ: 'toan', 'van'
        this.exams = [];
    }

    addExam(exam) {
        this.exams.push(exam);
    }
}

// Class quản lý hệ thống thi (Xử lý nộp bài)
class ExamSystem {
    constructor(googleScriptUrl) {
        this.scriptUrl = googleScriptUrl;
    }

    // Hàm chấm điểm và gửi dữ liệu
    submit(studentName, studentClass, answersData) {
        if (!studentName) {
            alert("Vui lòng nhập họ tên!");
            return;
        }

        // Tính điểm (Logic đơn giản demo, thực tế lấy từ data từng đề)
        let score = 0;
        let details = [];
        let totalQuestions = 0;

        // Giả lập chấm điểm dựa trên data truyền vào (cần cấu trúc data câu hỏi ở từng file html)
        // Ở đây ta chỉ gom dữ liệu để gửi đi
        
        const payload = {
            timestamp: new Date().toLocaleString(),
            name: studentName,
            class: studentClass,
            score: "Chờ chấm", // Hoặc biến score tính được
            details: JSON.stringify(answersData) // Chi tiết từng câu
        };

        this.sendToSheet(payload);
    }

    sendToSheet(data) {
        const btn = document.getElementById('btnSubmit');
        const originalText = btn.innerText;
        btn.innerText = "Đang gửi...";
        btn.disabled = true;

        fetch(this.scriptUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(() => {
            alert("✅ Đã nộp bài thành công!");
            btn.innerText = "Đã nộp";
        })
        .catch(err => {
            alert("❌ Lỗi kết nối: " + err);
            btn.innerText = originalText;
            btn.disabled = false;
        });
    }
}

// Khởi tạo hệ thống với URL Google Script của bạn
// BẠN CẦN THAY URL NÀY
const MyExamSystem = new ExamSystem("https://script.google.com/macros/s/AKfycbz_URL_CUA_BAN_O_DAY/exec");
