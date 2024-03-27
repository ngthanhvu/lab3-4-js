// bài 1
function tinhToan() {
     let so1 = prompt('Xin nhập số thực thứ nhất: ');
     let so2 = prompt('Xin nhập số thực thứ hai: ');
     let toanTu = prompt('Xin nhập toán tử(+,-,*,/)');

     // chuyển đổi từ string sang number
     so1 = Number(so1);
     so2 = Number(so2);

     let ketqua;

     switch (toanTu) {
          case '+':
               ketqua = so1 + so2;
               break;
          case '-':
               ketqua = so1 - so2;
               break;
          case '*':
               ketqua = so1 * so2;
               break;
          case '/':
               if (so2 != 0) {
                    ketqua = so1 / so2;
               } else {

               }
               break;
          default:
               ketqua = 'Toán tử không hợp lệ';
               break;
     }
     alert('Đáp án là: ' + ketqua);
}


// bài 2
let a = '', b = '', o = null;
function thuc_hien() {
     if (a !== '' && b !== '' && o !== null) {
          let ketqua = 0;
          let soA = parseFloat(a);
          let soB = parseFloat(b);

          switch (o) {
               case '+':
                    ketqua = soA + soB;
                    break;
               case '-':
                    ketqua = soA - soB;
                    break;
               case '*':
                    ketqua = soA * soB;
                    break;
               case '/':
                    ketqua = soA / soB;
                    break;
          }
          document.getElementById('hienthi').innerText = ketqua.toString();
          a = ketqua.toString();
          b = '';
          o = null;
     }
}

function toan_hang(x) {
     if (o == null) {
          a += x;
          document.getElementById('hienthi').innerText = a;
     } else {
          b += x;
          document.getElementById('hienthi').innerText = b;
     }
}

function toan_tu(x) {
     if (a !== '') {
          o = x;
          document.getElementById('hienthi').innerText = x;
     }
}

function lam_lai() {
     a = '';
     b = '';
     o = null;
     document.getElementById('hienthi').innerText = '0';
}



// bài 3

function getValue(chon) {

     let luaChon = ['Bao', 'Búa', 'Kéo'];

     let ngauNhien = Math.floor(Math.random() * 3);

     let mayTinh = luaChon[ngauNhien];

     switch (chon) {
          case 0:
               if (mayTinh === 'Búa') {
                    alert('Người dùng chọn Bao. Máy tính chọn Bua. Người dùng thắng!');
               } else if (mayTinh === 'Kéo') {
                    alert('Người dùng chọn Bao. Máy tính chọn Kéo. Máy tính thắng!');
               } else {
                    alert('Người dùng chọn Bao. Máy tính cũng chọn Bao. Hoà!');
               }
               break;
          case 1:
               if (mayTinh === 'Kéo') {
                    alert('Người dùng chọn Búa. Máy tính chọn Kéo. Người dùng thắng!');
               } else if (mayTinh === 'Bao') {
                    alert('Người dùng chọn Búa. Máy tính chọn Bao. Máy tính thắng!');
               } else {
                    alert('Người dùng chọn Búa. Máy tính cũng chọn Búa. Hoà!');
               }
               break;
          case 2:
               if (mayTinh === 'Bao') {
                    alert('Người dùng chọn Kéo. Máy tính chọn Bao. Người dùng thắng!');
               } else if (mayTinh === 'Búa') {
                    alert('Người dùng chọn Kéo. Máy tính chọn Búa. Máy tính thắng!');
               } else {
                    alert('Người dùng chọn Kéo. Máy tính cũng chọn Kéo. Hoà!');
               }
               break;
          default:
               alert('Lựa chọn không hợp lệ!');
               break;
     }



}


// bài 4
let soluongSP = [];

class sanPham {
     constructor(id, tensp, giaban, soluong) {
          this.id = id,
               this.tensp = tensp,
               this.giaban = giaban,
               this.soluong = soluong
     }
}

function themSp() {
     let id = prompt('Nhập id sản phẩm');
     let tensp = prompt('Nhập tên sản phẩm');
     let giaban = prompt('Nhập giá sản phẩm');
     let soluong = prompt('Nhập số lượng');

     let themsanpham = new sanPham(id, tensp, giaban, soluong);
     soluongSP.push(themsanpham)
}

function openWindow() {
     newTab = window.open("", "myWindow", "width=500, height=500");
}

function xemSp() {
     if (soluongSP.length == 0) {
          alert('Chưa có sản phẩm nào!')
     } else {
          openWindow();
          newTab.document.write('<h2>Danh sách sản phẩm</h2>');
          for (let demsanpham of soluongSP) {
               newTab.document.write('<p>ID: ' + demsanpham.id + '<p>');
               newTab.document.write('<p>Tên: ' + demsanpham.tensp + '<p>');
               newTab.document.write('<p>Giá bán: ' + demsanpham.giaban + '<p>');
               newTab.document.write('<p>Số lượng: ' + demsanpham.soluong + '<p>');
               newTab.document.write('<p>===================<p>');
          }
     }
}


function timKiemSp() {
     if (soluongSP.length == 0) {
          alert('Chưa có sản phẩm nào!')
     } else {
          let timkiem = prompt('Nhập id sẩn phẩm cần tìm');

          let sanphamtimthay = "";

          // vòng lặp tìm kiếm sản phẩm
          for (let tksp of soluongSP) {
               if (tksp.id.toLowerCase() == timkiem) {
                    sanphamtimthay = tksp;
                    break;
               }
          }
          if (sanphamtimthay !== "") {
               openWindow();
               newTab.document.write('<h2>Sản phẩm tìm kiếm </p>');
               newTab.document.write('<p>Tên: ' + sanphamtimthay.tensp + '</p>');
          } else {
               alert('Không thấy tên sản phẩm cần tìm');
          }
     }
}

function xoaSp() {
     if (soluongSP.length == 0) {
          alert('Chưa có sản phẩm nào!')
     } else {
          let xoasanpham = prompt('Nhập id sản phẩm cần xóa').toLocaleLowerCase();

          let sanphamxoa = -1;

          for (let i = 0; i < soluongSP.length; i++) {
               if (soluongSP[i].id.toLocaleLowerCase() == xoasanpham) {
                    sanphamxoa = i;
                    break;
               }
          }

          if (sanphamxoa !== -1) {
               soluongSP.splice(sanphamxoa, 1);
               alert('Sản phẩm ' + xoasanpham + ' đã được xóa');
          } else {
               alert('Không thể xóa sản phẩm ' + xoasanpham);
          }

     }
}


function banSp() {
     if (soluongSP.length == 0) {
          alert('Chưa có sản phẩm nào!')
     } else {

          let idSanPham = prompt('Nhập ID sản phẩm cần bán:').toLowerCase();
          let soluongBan = parseInt(prompt('Nhập số lượng sản phẩm cần bán:'), 10);
          let sanPham = null;

          // Kiểm tra số lượng nhập vào có hợp lệ không
          if (isNaN(soluongBan) || soluongBan <= 0) {
               alert('Số lượng bán không hợp lệ!');
               return;
          }

          for (let sp of soluongSP) {
               if (sp.id.toLocaleLowerCase() == idSanPham) {
                    sanPham = sp;
                    break;
               }
          }

          if (!sanPham) {
               alert('Không tìm thấy sản phẩm với ID: ' + idSanPham);
          } else {
               if (sanPham.soluong < soluongBan) {
                    alert('Không đủ số lượng sản phẩm để bán. Số lượng hiện có: ' + sanPham.soluong);
               } else {
                    sanPham.soluong -= soluongBan;
                    alert('Đã bán ' + soluongBan + ' sản phẩm ' + sanPham.tensp + '. Số lượng còn lại: ' + sanPham.soluong);
               }
          }


     }
}


function nhapThemSp() {
     if (soluongSP.length === 0) {
          alert('Chưa có sản phẩm nào!');
     } else {
          let idSanPham = prompt('Nhập ID sản phẩm cần nhập thêm:').toLowerCase();
          let themsp = prompt('Nhập số lượng sản phẩm cần nhập thêm:');
          let soluongNhap = parseInt(themsp);

          if (isNaN(soluongNhap) || soluongNhap <= 0) {
               alert('Số lượng nhập không hợp lệ!');
               return;
          }

          let sanPham = null;

          for (let sp of soluongSP) {
               if (sp.id.toLowerCase() === idSanPham) {
                    sanPham = sp;
                    break;
               }
          }

          if (!sanPham) {
               if (confirm('Không tìm thấy sản phẩm với ID: ' + idSanPham + '. Bạn có muốn thêm sản phẩm mới không?')) {
                    let tensp = prompt('Nhập tên sản phẩm mới:');
                    soluongSP.push(
                         {
                              id: idSanPham,
                              tensp: tensp,
                              soluong: soluongNhap
                         });
                    alert('Sản phẩm mới đã được thêm vào kho.');
               }
          } else {
               sanPham.soluong += soluongNhap;
               alert('Đã nhập thêm ' + soluongNhap + ' sản phẩm ' + sanPham.tensp + '. Số lượng hiện tại: ' + sanPham.soluong);
          }
     }
}

function kiemTraTonKho() {
     if (soluongSP.length === 0) {
          alert('Chưa có sản phẩm nào!');
     } else {
          let idSanPham = prompt('Nhập ID sản phẩm cần kiểm tra tồn kho:').toLowerCase();
          let sanPham = null;

          for (let sp of soluongSP) {
               if (sp.id == idSanPham) {
                    sanPham = sp;
                    break;
               }
          }

          if (!sanPham) {
               alert('Không tìm thấy sản phẩm với ID: ' + idSanPham);
          } else {
               if (sanPham.soluong > 0) {
                    alert('Sản phẩm ' + sanPham.tensp + ' còn tồn kho. Số lượng hiện có: ' + sanPham.soluong);
               } else {
                    alert('Sản phẩm ' + sanPham.tensp + ' đã hết hàng');
               }
          }




     }
}

// bài 5

let sosinhvien = [];

class quanlysv {
     constructor(mssv, ten, diem) {
          this.mssv = mssv;
          this.ten = ten;
          this.diem = diem;
          this.bangKhen = this.xeploaihocluc();
     }
     xeploaihocluc() {
          if (this.diem >= 8) {
               return "Vàng";
          } else if (this.diem >= 6) {
               return "Bạc";
          } else {
               return null;
          }
     }
}

function themSv() {
     let mssv = prompt('Nhập mã số sinh viên');
     let ten = prompt('Nhập tên sinh viên');
     let diem = prompt('Nhập điểm của sinh viên');

     let themsv = new quanlysv(mssv, ten, diem);
     sosinhvien.push(themsv);
}

function xemdsSv() {
     if (sosinhvien.length == 0) {
          alert('Chưa có sinh viên nào!');
     } else {
          openWindow();
          newTab.document.write('<h2>Danh sách sinh viên</h2>');
          for (let sinhvien of sosinhvien) {
               newTab.document.write('<p>Mssv: ' + sinhvien.mssv + '<p>');
               newTab.document.write('<p>Tên: ' + sinhvien.ten + '<p><hr>');
          }
     }
}


function timKiemSv() {
     if (sosinhvien.length == 0) {
          alert('Chưa có sinh viên nào!');
     } else {
          let timkiem = prompt('Nhập mssv cần tìm');

          let sinhvientimthay = "";

          // vòng lặp tìm kiếm
          for (let tksv of sosinhvien) {
               if (tksv.mssv.toLowerCase() == timkiem) {
                    sinhvientimthay = tksv;
                    break;
               }
          }
          if (sinhvientimthay !== "") {
               openWindow();
               newTab.document.write('<h2>Sinh viên tìm kiếm </p>');
               newTab.document.write('<p>Mssv: ' + sinhvientimthay.mssv + '<p>');
               newTab.document.write('<p>Tên: ' + sinhvientimthay.ten + '<p>');
               newTab.document.write('<p>Điểm: ' + sinhvientimthay.diem + '<p><hr>');
          } else {
               alert('Không thấy tên sản phẩm cần tìm');
          }
     }
}

function xoaSv() {
     if (sosinhvien.length == 0) {
          alert('Chưa có sinh viên nào!');
     } else {
          let xoasinhvien = prompt('Nhập mssv cần xóa').toLocaleLowerCase();

          let sinhvienxoa = -1;

          for (let i = 0; i < sosinhvien.length; i++) {
               if (sosinhvien[i].mssv.toLocaleLowerCase() == xoasinhvien) {
                    sinhvienxoa = i;
                    break;
               }
          }

          if (sinhvienxoa !== -1) {
               sosinhvien.splice(sinhvienxoa, 1);
               alert('Sinh viên ' + xoasinhvien + ' đã được xóa');
          } else {
               alert('Không thể xóa sinh viên ' + xoasinhvien);
          }

     }
}

function suaDiem() {
     if (sosinhvien.length == 0) {
          alert('Chưa có sinh viên nào!');
     } else {
          let suadiemsv = prompt('Nhập mssv cần sửa điểm');
          let diemMoi = "";

          for (let i = 0; i < sosinhvien.length; i++) {
               if (sosinhvien[i].mssv.toLocaleLowerCase() == suadiemsv) {
                    diemMoi = sosinhvien[i];
               }
          }

          if (diemMoi) {
               let diemsuamoi = prompt('Nhập điểm mới cho sinh viên ' + suadiemsv);
               diemMoi.diem = diemsuamoi;
               alert('Điểm của sinh viên ' + suadiemsv + ' đã được cập nhật thành ' + diemsuamoi)
          } else {
               alert('Không tìm thấy sinh viên có mssv ' + suadiemsv);
          }
     }
}

function xeploaihocluc() {
     if (diem >= 8) {
          return "Giỏi";
     } else if (diem >= 6) {
          return "Khá";
     } else if (diem >= 5) {
          return "Trung bình";
     } else {
          return "Yếu";
     }
}


function xuatdanhsach() {
     if (sosinhvien.length == 0) {
          alert('Chưa có sinh viên nào!');
     } else {
          openWindow();
          newTab.document.write('<h3>Danh sách sinh viên có bằng khen<h3>');
          for (let sinhvien of sosinhvien) {
               if (sinhvien.bangKhen) {
                    newTab.document.write('<p>Mssv: ' + sinhvien.mssv + '</p>');
                    newTab.document.write('<p>Tên: ' + sinhvien.ten + '</p>');
                    newTab.document.write('<p>Điểm: ' + sinhvien.diem + '</p>');
                    newTab.document.write('<p>Bằng Khen: ' + sinhvien.bangKhen + '</p><hr>');
               }
          }
     }
}