/**
 * APP.JS - File xử lý chung cho toàn bộ hệ thống
 * Chứa logic gửi điểm về Google Sheet
 */

// --- CẤU HÌNH ĐƯỜNG DẪN GOOGLE SCRIPT (Sửa link duy nhất tại đây) ---
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx5zUgAsa7Q_f9QIEjYGZx0PTydTk7Pz3A-_XKNmRKp3KIm9LrIEHWfT6gePHWPRnvX/exec";

/**
 * Hàm gửi dữ liệu đi
 * Hàm này sẽ lấy dữ liệu từ biến toàn cục window.examData
 */
function sendToGoogleSheet() {
    const btn = document.getElementById('btn-send-sheet');
    const status = document.getElementById('submit-status');
    const loading = document.getElementById('loading-overlay');

    // Kiểm tra dữ liệu
    if (!window.examData) {
        alert("Lỗi: Không tìm thấy dữ liệu bài thi!");
        return;
    }

    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes("PASTE_YOUR")) {
        alert("Lỗi: Chưa cấu hình đường dẫn Google Script trong file app.js!");
        return;
    }

    // Hiển thị trạng thái đang gửi
    if(loading) loading.style.display = 'block';
    if(btn) {
        btn.disabled = true;
        btn.textContent = "Đang gửi...";
    }

    // Gửi dữ liệu
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Quan trọng để tránh lỗi CORS
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(window.examData)
    })
    .then(() => {
        // Xử lý khi thành công
        if(loading) loading.style.display = 'none';
        if(status) status.style.display = 'block';
        if(btn) btn.style.display = 'none';
        // alert("Đã gửi kết quả thành công!"); // Có thể bật nếu muốn thông báo pop-up
    })
    .catch(err => {
        // Xử lý khi lỗi
        if(loading) loading.style.display = 'none';
        alert("Có lỗi xảy ra khi kết nối: " + err);
        if(btn) {
            btn.disabled = false;
            btn.textContent = "Gửi lại";
        }
    });
}
