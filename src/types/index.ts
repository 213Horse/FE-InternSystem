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

// Intern info
type IndividualType = {
  mssv: string;
  startDate: string | null;
  endDate: string | null;
  hoTen: string;
  ngaySinh: string;
  sdt: string;
  viTri: any[]; // You might want to replace 'any[]' with a more specific type
  diaChi: string;
  emailCaNhan: string;
  emailTruong: string;
  linkCV: string;
  gioiTinh: string;
  trinhDoTiengAnh: string;
  duAn: any[]; // You might want to replace 'any[]' with a more specific type
  nhomZalo: any[]; // You might want to replace 'any[]' with a more specific type
  truongHoc: string | null;
  status: string;
  createdTime: string;
  createdBy: string | null;
  deletedBy: string | null;
  deletedTime: string | null;
  lastUpdateBy: string | null;
  lastUpdatedTime: string;
};

// group zalo
type Group = {
  "tenNhom": string,
  "linkNhom": string,
  "idMentor": string,
  "mentor": string,
  "userNhomZalos": any[],
  "id": string,
  "createdBy": string,
  "lastUpdatedBy": string,
  "deletedBy": string,
  "createdTime": string,
  "lastUpdatedTime": string,
  "deletedTime": string
}
