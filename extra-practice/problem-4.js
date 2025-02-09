// ✅ প্রবলেম 4:
// একটি অ্যারে ["Laptop", "Mouse", "Keyboard", "Monitor"] তৈরি করো।

// "Keyboard" এর ইনডেক্স বের করো।
// যদি ইনডেক্স -1 না হয়, তাহলে সেটি "Keyboard found at index X" হিসেবে প্রিন্ট করো।
// না হলে "Keyboard not found" দেখাও।

const array = ["Laptop", "Mouse", "Keyboard", "Monitor"];
if (array.indexOf("Keyboard") !== -1) {
  console.log("Keyboard found at index X");
}else{
    console.log("Keyboard not found");
}
