// Viết chương trình có tên là timesince, đầu vào là thời gian và tính thời gian đầu vào so với thời gian hiện tại. Ví dụ: bạn đang chat với 1 bạn A, sau đó bạn A off và chương trình hiển thị bạn A onl `3 phút trước` `30 phút trước` `3 giờ trước`

function timeSince(date) {
  //current time - date
  const now = new Date();
  const yourDate = new Date(date);
  const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
  let timer = Math.floor(seconds / 31536000);
  if (timer > 1) {
    console.log(`${timer} năm trước`);
    return;
  }
  timer = Math.floor(seconds / 2678400);
  if (timer > 1) {
    console.log(`${timer} tháng trước`);
    return;
  }
  timer = Math.floor(seconds / 604800);
  if (timer > 1) {
    console.log(`${timer} tuần trước`);
    return;
  }
  timer = Math.floor(seconds / 86400);
  if (timer > 1) {
    console.log(`${timer} ngày trước`);
    return;
  }
  timer = Math.floor(seconds / 3600);
  if (timer > 1) {
    console.log(`${timer} giờ trước`);
    return;
  }
  timer = Math.floor(seconds / 60);
  if (timer > 1) {
    console.log(`${timer} phút trước`);
    return;
  }
  return;
}
timeSince("Thu Jun 16 2022 22:47:00 GMT+0700 (Giờ Đông Dương)");
