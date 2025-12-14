// Khởi tạo các môn học
const subjects = {
    toan6: new Subject("Toán 6", "toan6"),
    toan11: new Subject("Toán 11", "toan11"),
    khtn6: new Subject("KHTN 6", "khtn6"),
    van10: new Subject("Ngữ Văn 10", "van10"),
    cn7: new Subject("Công Nghệ 7", "cn7")
};

// --- THÊM ĐỀ THI VÀO ĐÂY ---

// Toán 11
subjects.toan11.addExam(new Exam("t11_21", "Đề kiểm tra số 21", "90 phút", "Toan11", "de21.html"));
subjects.toan11.addExam(new Exam("t11_22", "Đề kiểm tra số 22", "90 phút", "Toan11", "de22.html"));

// Toán 6
subjects.toan6.addExam(new Exam("t6_01", "Đề giữa kỳ 1", "60 phút", "Toan6", "de1.html"));

// KHTN 6
subjects.khtn6.addExam(new Exam("kh6_01", "Bài kiểm tra chất lượng", "45 phút", "KHTN6", "de1.html"));

// Hàm render trang chủ (được gọi ở index.html)
function renderHomePage() {
    const container = document.getElementById('main-content');
    
    // Duyệt qua từng môn
    for (const key in subjects) {
        const sub = subjects[key];
        if (sub.exams.length === 0) continue; // Bỏ qua môn chưa có đề

        const section = document.createElement('div');
        section.className = 'subject-section';
        
        const title = document.createElement('h2');
        title.className = 'subject-title';
        title.innerText = sub.name;
        section.appendChild(title);

        const grid = document.createElement('div');
        grid.className = 'exam-grid';

        // Duyệt qua từng đề trong môn
        sub.exams.forEach(exam => {
            const card = document.createElement('a');
            card.href = exam.path;
            card.className = 'exam-card';
            card.innerHTML = `
                <h3>${exam.title}</h3>
                <div class="exam-info">⏱️ ${exam.time}</div>
                <div class="exam-info">🆔 ${exam.id}</div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    }
}
