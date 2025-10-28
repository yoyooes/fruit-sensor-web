// ดึงปุ่มและพื้นที่แสดงผล
const button = document.getElementById("myButton");
const result = document.getElementById("result");

// ตั้งค่าการคลิก
button.addEventListener("click", () => {
  result.textContent = "🎉 ปุ่มทำงานแล้ว!";
  console.log("Button clicked!");
});
