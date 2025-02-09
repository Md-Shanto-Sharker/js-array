// প্রবলেম 2:
// একটি marks ইনপুট নাও এবং ternary operator ব্যবহার করে চেক করো:

// .marks 90+ হলে "Excellent"
// .marks 70-89 হলে "Good"
// .marks 50-69 হলে "Average"
// .marks 50-এর নিচে হলে "Fail"

const marks = 85;
const grade =(marks>90)?"excellent":
            (marks<89 && marks>=70)?"Good":
            (marks<69 && marks>=50)?"Average":"Fail"
console.log(grade);