// 1️⃣ Logical & Condition Based Problems
// ✅ প্রবলেম 1:
//         একটি সংখ্যা ইনপুট নাও এবং চেক করো সংখ্যাটি ৩ এবং ৫ উভয় দিয়ে বিভাজ্য কিনা।

//         .যদি হয়, তাহলে "Divisible by both 3 and 5" প্রিন্ট করো।
//         .যদি শুধু ৩ দিয়ে বিভাজ্য হয়, তাহলে "Divisible by 3"।
//         .যদি শুধু ৫ দিয়ে বিভাজ্য হয়, তাহলে "Divisible by 5"।
//         .না হলে "Not divisible by 3 or 5"।

const number = 1;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else if (number % 3 === 0) {
  console.log("Divisible by 3");
} else if (number % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 3 or 5");
}
