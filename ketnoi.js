/* ==========================================================================
   Tệp: ketnoi.js (hoặc PGV_KetNoi.html)
   Mục đích: Cầu nối giao tiếp (API Client) gọi các hàm từ Server 
   Hệ thống: Quản lý Nhiệm vụ - TH Hợp Thành
   ========================================================================== */

const ServerAPI = {

    /* ==========================================================================
       PHẦN 1: CÁC HÀM LIÊN KẾT VỚI "PGV_Code.gs" (CORE & USER REPORT)
       ========================================================================== */

    // 1. Lấy dữ liệu cá nhân của người dùng
    getUserData: function(requestSheetName, onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getUserData(requestSheetName);
    },

    // 2. Lưu tạm dữ liệu báo cáo
    saveTempData: function(formData, onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_saveTempData(formData);
    },

    // 3. Nộp báo cáo chính thức (Ghi nhật ký & Cập nhật DATAGV)
    submitReport: function(data, onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_submitReport(data);
    },

    // 4. Lấy dữ liệu tổng hợp kết quả
    getSummaryData: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getSummaryData();
    },

    // 5. Lấy dữ liệu tổng hợp ngày nghỉ
    getLeaveSummaryData: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getLeaveSummaryData();
    },

    // 6. Lấy dữ liệu tổng hợp ý kiến
    getOpinionSummaryData: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getOpinionSummaryData();
    },

    // 7. Lấy dữ liệu tổng hợp báo cáo tóm tắt
    getReportData: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getReportData();
    },

    // 8. Lấy danh sách Sheet (Nhân sự khai báo)
    getListSheets: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_getListSheets();
    },

    // 9. Kiểm tra quyền Giáo viên
    checkTeacherPermission: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_checkTeacherPermission();
    },

    // 10. Kiểm tra quyền truy cập Tab Giao Việc
    checkGiaoViecTabPermission: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_checkGiaoViecTabPermission();
    },


    /* ==========================================================================
       PHẦN 2: CÁC HÀM LIÊN KẾT VỚI "PGV_Code_GiaoViec.gs" (MÔ ĐUN GIAO VIỆC)
       ========================================================================== */

    // 11. Lấy danh sách nhân sự để giao việc
    getStaffList: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_GV_getStaffList();
    },

    // 12. Xử lý logic Giao việc & Xóa (Reset tháng)
    processTaskAssignment: function(payload, onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_GV_processTaskAssignment(payload);
    },

    // 13. Tải dữ liệu giao việc ban đầu
    getInitialGiaoViecData: function(onSuccess, onError) {
        google.script.run
            .withSuccessHandler(onSuccess)
            .withFailureHandler(onError)
            .PGV_GV_getInitialData();
    }
};