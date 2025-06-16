// Props cho session đơn hàng
export type OrderSessionProps = {
  bodyHeight: number; // Chiều cao phần thân hiển thị
};

// Tập hợp các action (hành động) có thể thực hiện trong hệ thống
export type actions =
  | "ALL"   // Tất cả hành động
  | "VIE"   // View - Xem
  | "INS"   // Insert - Thêm mới
  | "UPD"   // Update - Cập nhật
  | "DEL"   // Delete - Xóa
  | "UND"   // Undo - Hoàn tác
  | "IMP"   // Import - Nhập dữ liệu
  | "UNV"   // Unverify - Bỏ xác minh
  | "VER"   // Verify - Xác minh
  | "WAI"   // Wait - Chờ xử lý
  | "CAN"   // Cancel - Hủy
  | "DEN"   // Deny - Từ chối
  | "PDF"   // Xuất PDF
  | "APP"   // Approve - Duyệt
  | "EXC"   // Export - Xuất dữ liệu (Excel)
  | "MSP"   // Medical Support (Hỗ trợ y tế?)
  | "MBP"   // Medical Blood Pressure (Huyết áp?)
  | "MWA"   // Medical Waiting Approve (Chờ duyệt?)
  | "MSV"   // Medical Save
  | "MDC"   // Medical Document Check
  | "MRB"   // Medical Result Basic
  | "MRS"   // Medical Result Submit
  | "MCO"   // Medical Confirm
  | "ISY"   // In System (Hoặc: Initial System)
  | "MPN"   // Medical Prescription New
  | "MGT"   // Medical Get
  | "MCT"   // Medical Contact
  | "MPT"   // Medical Patient Transfer
  | "MSU"   // Medical Summary Update
  | "MWE"   // Medical Write Examination
  | "MST"   // Medical Start
  | "MSW"   // Medical Switch
  | "VCP"   // View Certificate PDF
  | "MCP"   // Medical Create PDF
  | "MFP"   // Medical File Process
  | "MEW"   // Medical Edit Work
  | "MEH"   // Medical Edit History
  | "MEN"   // Medical Entry New
  | "MTA"   // Medical Take Action
  | "MPI"   // Medical Patient Info
  | "VQT"   // View Quotation
  | "VVL"   // View Visit List
  | "MDA"   // Medical Diagnosis Add
  | "MCU"   // Medical Checkup Update
  | "MCN"   // Medical Checkup New
  | "MOD"   // Medical Order
  | "MCI"   // Medical Checkup Info
  | "MPH"   // Medical Print History
  | "MPV"   // Medical Preview
  | "MDT"   // Medical Detail
  | "MWD"   // Medical Withdraw
  | "MAD"   // Medical Add Diagnosis
  | "MTG"   // Medical Tag
  | "MWH"   // Medical Work History
  | "MVA"   // Medical View All
  | "MNO"   // Medical Note
  | "DVE"   // Delete Verification Entry
  | "CVE"   // Create Verification Entry
  | "WLQ"   // Waiting List Queue
  | "DLQ"   // Delete List Queue
  | "LIQ"   // List In Queue
  | "CLQ"   // Clear List Queue
  | "DRE"   // Draft Entry
  | "RED"   // Reject Entry Draft
  | "CRE"   // Create Entry
  | "MDL"   // Medical Delete
  | "MDR"   // Medical Draft Result
  | "VTA"   // View Test Analysis
  | "MTD"   // Medical Test Data
  | "MDD"   // Medical Diagnosis Detail
  | "VBR"   // View Billing Report
  | "VSR"   // View Service Report
  | "VPTP"  // View Patient Plan
  | "VGP"   // View General Plan
  | "VTP"   // View Treatment Plan
  | "VRP";  // View Result Plan