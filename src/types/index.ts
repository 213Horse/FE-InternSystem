interface Intern {
    mssv: string;
    startDate?: Date | null;
    endDate?: Date | null;
    hoTen: string;
    ngaySinh?: Date | null;
    sdt?: string | null;
    viTri?: string[];
    diaChi?: string | null;
    emailCaNhan?: string | null;
    emailTruong?: string | null;
    linkCV?: string | null;
    gioiTinh: string;
    trinhDoTiengAnh?: string | null;
    duAn?: string[];
    nhomZalo?: string[];
    truongHoc: string;
    status?: string | null;
    createdTime: string;
    createdBy: string;
    deletedBy?: string | null;
    deletedTime?: Date | null;
    lastUpdateBy?: string | null;
    lastUpdatedTime: string;
  }

// Project
interface Project {
    id: string;
    ten: string;
    leaderId: string;
    leaderName: string;
    thoiGianBatDau: Date;
    thoiGianKetThuc: Date;
}

  