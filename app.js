/**
 * APP.JS - File xử lý chung cho toàn bộ hệ thống
 * Chứa logic gửi điểm về Google Sheet và các Class định nghĩa
 */

// --- CẤU HÌNH ĐƯỜNG DẪN GOOGLE SCRIPT ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5zUgAsa7Q_f9QIEjYGZx0PTydTk7Pz3A-_XKNmRKp3KIm9LrIEHWfT6gePHWPRnvX/exec";

// --- ĐỊNH NGHĨA CÁC LỚP ĐỐI TƯỢNG (CLASSES) ---

class Exam {
    constructor(id, title, time, filename) {
        this.id = id;
        this.title = title;
        this.time = time;
        this.filename = filename;
    }
    // Tạo đường dẫn dựa trên thư mục của môn học
    getUrl(folder) {
        return `${folder}/${this.filename}`;
    }
}

class Subject {
    constructor(name, folder) {
        this.name = name;
        this.folder = folder; 
        this.exams = [];
    }
    
    addExam(exam) {
        this.exams.push(exam);
        return this; 
    }
}

class Domain {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
        this.subjects = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
        return this;
    }
}

// --- CÁC HÀM TIỆN ÍCH ---

function sendToGoogleSheet() {
    const btn = document.getElementById('btn-send-sheet') || document.getElementById('btnSave');
    const status = document.getElementById('submit-status') || document.getElementById('saveStatus');
    const loading = document.getElementById('loading-overlay');

    if (!window.examData) {
        alert("Lỗi: Không tìm thấy dữ liệu bài thi!");
        return;
    }

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
        alert("Lỗi: Chưa cấu hình đường dẫn Google Script trong file app.js!");
        return;
    }

    if(loading) loading.style.display = 'block';
    if(btn) {
        btn.disabled = true;
        btn.textContent = "Đang gửi...";
    }
    if(status) status.textContent = "";

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(window.examData)
    })
    .then(() => {
        if(loading) loading.style.display = 'none';
        if(status) {
            status.style.display = 'block';
            status.textContent = "✅ Đã gửi kết quả thành công!";
            status.style.color = "green";
        }
        if(btn) {
            btn.textContent = "Đã gửi";
            btn.style.display = 'none';
        }
    })
    .catch(err => {
        if(loading) loading.style.display = 'none';
        if(status) {
            status.textContent = "❌ Có lỗi xảy ra: " + err;
            status.style.color = "red";
        }
        if(btn) {
            btn.disabled = false;
            btn.textContent = "Gửi lại";
        }
    });
}
